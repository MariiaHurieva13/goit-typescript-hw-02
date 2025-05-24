import { FC } from "react";
import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}
const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <div className={css.errorMessage}>{message}</div>;
};

export default ErrorMessage;