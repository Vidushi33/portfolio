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
    <div
      className="grid grid-cols-[55%_45%] xl:grid-cols-2 gap-4 lg:gap-10 xl:gap-10 my-20 2xl:my-40 relative"
      data-aos="fade-up"
      id="contact"
    >
      <div className="w-60 h-60 about-gradient rounded-full absolute filter blur-[10rem]  left-10 top-[9%]"></div>
      <div className="w-60 h-60 about-gradient rounded-full absolute filter  blur-[10rem] left-[30%] bottom-[10%]"></div>
      <div className="flex w-full p-6 lg:p-8 xl:p-12 2xl:p-16 glass-card ">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full space-y-6">
          <h2 className="text-4xl text-primaryColor font-semibold mb-6">
            Contact Me
          </h2>

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
            className="hire  w-fit py-3  font-bold text-lg px-16 rounded-xl cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      <div className=" flex justify-center items-center  w-full">
        <div className="flex flex-col gap-10">
          <div className="mx-auto w-10/12 xl:w-full">
            <Image
              alt="contact image"
              src={Contact}
              width={500}
              height={500}
              draggable={false}
              className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-4 mx-auto  text-center">
            <p className="text-base lg:text-lg font-semibold">
              Email Id -{" "}
              <a
                href="mailto:vidushimalik135@gmail.com"
                className="text-secondaryColor font-semibold hover:text-pink-500 hover:underline hover:scale-110 transition-transform duration-200 cursor-pointer"
              >
                vidushimalik135@gmail.com
              </a>
            </p>
            <p className="text-base lg:text-lg font-semibold">
              Phone Number -{" "}
              <a
                href="tel:+919582576231"
                className="text-secondaryColor font-semibold hover:text-pink-500 hover:underline hover:scale-110 transition-transform duration-200 cursor-pointer"
              >
                9582576231
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
