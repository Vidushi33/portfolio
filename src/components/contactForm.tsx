import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
  
const ContactForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  return <div>ContactForm</div>;
};

export default ContactForm;
