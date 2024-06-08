import WelcomeTemplate from "../../../../emails/WelcomeTemplate";
import ATMRequestTemplate from "../../../../emails/ATMRequestTemplate";
import TransactionTemplate from "../../../../emails/TransactionTemplate";
import VerifyTemplate from "../../../../emails/VerifyTemplate"; 
import RevokeTemplate from "../../../../emails/RevokeVerification";
import SuspendTemplate from "../../../../emails/SuspendTemplate";
import RevokeSuspensionTemplate from "../../../../emails/RevokeSuspension";

import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";


export async function POST(request: Request) {
    const body = await request.json();
    try {
        const { to, subject, name, otp, accountNumber, emailType, transactionAmount, transactionDate, transactionType, recipientName, recipientAccountNumber} = body;

        if (!to || !subject || !name || !emailType ) {

            throw new Error('Fill in the fields')
        }

        let emailHtml;

        switch (emailType) {
          
          case "verification":
            emailHtml = render(WelcomeTemplate({ userName: name, verificationCode: otp }));
            break;

          case "atmrequest":
            emailHtml = render(ATMRequestTemplate({ userName: name }));
            break;

          case "transaction":
            emailHtml = render(TransactionTemplate({userName: name, transactionAmount, transactionDate, transactionType, recipientName, recipientAccountNumber}));
            break;
          case "userVerification":
            emailHtml = render(VerifyTemplate({ userName: name }));
            break;
          case "revokeVerification":
            emailHtml = render(RevokeTemplate({ userName: name }));
            break;
          case "userSuspension":
            emailHtml = render(SuspendTemplate({ userName: name, accountNumber: accountNumber }));
            break;
          case "revokeSuspension":
            emailHtml = render(RevokeSuspensionTemplate({ userName: name, accountNumber: accountNumber }));
            break;
          default:
            throw new Error('Invalid emailType');
        }

      await sendEmail({
        to,
        subject,
        html: emailHtml,
      });

      return new NextResponse('Email Send Successfully', { status: 200 })

    }catch (error) {
        if (error instanceof Error) {
          return new NextResponse(error.message);
        } else {
          return new NextResponse('Internal Server Error', { status: 500 });
        }
      }
}
