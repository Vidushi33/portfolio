"use client";

import React from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { Contact, ContactMe } from "@Image/index";

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {};

  return (
    <div className="grid grid-cols-2" id="contact"> 
      <div className="flex ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-opacity-50  backdrop-blur-md rounded-lg p-8 w-8/12 space-y-6"
        >
          <h2 className="text-3xl text-primaryColor font-semibold mb-6">Contact Me</h2>

          <div>
            <label className="block text-white font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="w-full p-3 bg-opacity-20 bg-white text-white placeholder-white  rounded-lg outline-none"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full p-3 bg-opacity-20 bg-white text-white placeholder-white  rounded-lg outline-none"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Enter subject"
              {...register("subject", { required: true })}
              className="w-full p-3 bg-opacity-20 bg-white text-white placeholder-white  rounded-lg outline-none"
            />
            {errors.subject && (
              <span className="text-red-500">Subject is required</span>
            )}
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows={5}
              {...register("message", { required: true })}
              className="w-full p-3 bg-opacity-20 bg-white text-white placeholder-white  rounded-lg outline-none"
            ></textarea>
            {errors.message && (
              <span className="text-red-500">Message is required</span>
            )}
          </div>

          <button
            type="submit"
            className="hire  w-full py-3  font-bold text-lg px-6 rounded-xl cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center">
        <Image alt="contact image" src={Contact} width={500} height={500}  />
      </div>
    </div>
  );
}
