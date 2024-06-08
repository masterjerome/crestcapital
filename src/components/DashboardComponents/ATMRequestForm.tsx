"use client";
import { AddCircle } from "iconsax-react";
import { FormEvent, useState } from "react";
import { errorModalProps, successModalProps } from "@/lib/modalPropsMessages";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";

//Import Needed Components
import Toast from "../molecules/Toast";

type requestProps = {
  hasPreviouslyRequested: boolean;
  hideForm: () => void;
  email: string;
  name: string;
};

const ATMRequestForm = ({
  hideForm,
  hasPreviouslyRequested,
  email,
  name,
}: requestProps) => {
  //State for the modals
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<object>({});
  const [message, setMessage] = useState<string>("");
  const [choseCard, setChosenCard] = useState<string>("");
  //For the loading state
  const [loading, setLoading] = useState<boolean>(false);

  const handleCard = (card: string) => {
    setChosenCard(card);
  };
  const clearCard = () => {
    setChosenCard("");
  };
  //Display the correct function
  const handleSuccess = () => {
    setShowModal(true);
    setModalProps(successModalProps);
  };

  const handleError = () => {
    setShowModal(true);
    setModalProps(errorModalProps);
  };
  const handleFinal = () => {
    setShowModal(false);
  };
  //Submit Function
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
   
    const formData = { email: email };
    const emailData = {
      to: email,
      subject: "Debit Card Request",
      name: name,
      emailType: "atmrequest",
    };

    if (hasPreviouslyRequested) {
      setLoading(false);
      toast.error("You have an ongoing debit card request, kindly wait for an update.");
      if (hideForm) {
        hideForm();
      }
      return;
    }
    makeApiRequest("/requestATM", "post", formData, {
      onSuccess: () => {
        // Handle success
        setLoading(false);
        
        setMessage("Your Debit card was requested successfully");
        handleSuccess();

        makeApiRequest("/send-email", "post", emailData, {
          onSuccess: () => {
            // Handle success
            console.log("Email was sent successfully");
          },
          onError: (error: any) => {
            // Handle error
            console.log("Couldn't send email.");
          },
        });
      },
      onError: (error: any) => {
        // Handle error
        setLoading(false);

        if (error.message === "Missing Fields") {
          setMessage(
            "Unable to process your Debit card request, Please try again later."
          );
        }
        setMessage("Debit card request failed. Please try again.");
        handleError();
      },
    });
  };
  return (
    <>
      {showModal && (
        <Toast {...modalProps} message={message} hideModal={handleFinal} />
      )}
      <main className="fixed w-full h-screen bg-black bg-opacity-80 flex items-center justify-center z-[60] top-0 left-0">
        <div className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-[24rem] bg-white p-4 rounded-md">
          <AddCircle
            size="20"
            className="absolute top-4 right-4 text-wrongRed cursor-pointer rotate-45"
            onClick={hideForm}
          />
          <p className="text-sm xl:text-base text-[#06121B] font-semibold mb-4">
            Request for a debit card
          </p>
          <form onSubmit={onSubmit}>
            <label className="text-xs md:text-sm xl:text-base text-[#161618]">
              Choose your debit card
            </label>

            <div className="my-8 xl:my-4 text-xs md:text-sm xl:text-base flex flex-col gap-y-1">
              <label
                onClick={(e: any) => clearCard()}
                className="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 p-4 flex justify-between rounded-lg cursor-pointer hover:bg-[#B9BAC0] hover:bg-opacity-20"
              >
                Visa Card
                <input
                  type="radio"
                  name="card"
                  className="checked:border-indigo-500"
                />
              </label>
              <label
                onClick={(e: any) => handleCard("Mastercard")}
                className="has-[:checked]:bg-red-50 has-[:checked]:text-red-900 has-[:checked]:ring-red-200 p-4 flex justify-between rounded-lg cursor-pointer hover:bg-[#B9BAC0] hover:bg-opacity-20"
              >
                Mastercard
                <input
                  type="radio"
                  name="card"
                  className="checked:border-red-500"
                />
              </label>
              <label
                onClick={(e: any) => handleCard("Maestro Card")}
                className="has-[:checked]:bg-red-50 has-[:checked]:text-red-900 has-[:checked]:ring-red-200 p-4 flex justify-between rounded-lg cursor-pointer hover:bg-[#B9BAC0] hover:bg-opacity-20"
              >
                Maestro Card
                <input
                  type="radio"
                  name="card"
                  className="checked:border-red-500"
                />
              </label>
              {choseCard && (
                <p className="text-center">
                  {choseCard} is currently unavailable.
                </p>
              )}
            </div>

            <input
              disabled={choseCard.length > 0}
              type="submit"
              value={loading ? "Requesting..." : "Request for card"}
              className={`cursor-pointer mt-4 bg-secondary flex w-full items-center justify-center gap-x-1.5 rounded-md text-sm text-white sm:text-base py-3 lg:text-lg  hover:bg-[#B9BAC0] hover:bg-opacity-20 hover:text-secondary duration-500`}
            />
          </form>
        </div>
      </main>
    </>
  );
};

export default ATMRequestForm;
