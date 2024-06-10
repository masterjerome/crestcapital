import correctIcon from "../../public/images/correctGreen.svg";
import wrongIcon from "../../public/images/wrongRed.svg";

export const successModalProps = {
  icon: correctIcon,
  altText: "Correct Icon",
  messageTitle: "Success",
};

export const errorModalProps = {
  icon: wrongIcon,
  altText: "Error Icon",
  messageTitle: "Error",
};
