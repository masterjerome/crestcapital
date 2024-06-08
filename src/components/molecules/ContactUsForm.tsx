"use client";

import React, { useState, useEffect } from "react";
import { Spin, message } from "antd";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface formdata {
  fullName: string;
  email: string;
  message: string;
}

// const apiUrl = "";

const ContactUsForm = () => {
  const [formData, setFormData] = useState<formdata>({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //show one pop up at a time
  const [isMessageVisible, setMessageVisible] = useState(false);
  const showErrorMessage = (content: string, duration = 3) => {
    if (!isMessageVisible) {
      setMessageVisible(true);
      message.error(content, duration, () => {
        setMessageVisible(false);
      });
    }
  };

  useEffect(() => {
    // Reset isSubmitted after a brief delay
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Change back to "Send Message" after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);
  //handle fullname and email input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //handle message text area
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handle form on submit
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);

      let formValid = true;

      if (!formData.fullName.trim()) {
        formValid = false;
        throw new Error("Name is required");
      }

      if (!formData.email.trim()) {
        formValid = false;
        throw new Error("Email is required");
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        formValid = false;
        throw new Error("Invalid email format");
      }

      if (!formData.message.trim()) {
        formValid = false;
        throw new Error("Message is required");
      }
      if (formValid) {
        // const response = await axios.post<{ message: string }>(
        //   apiUrl,
        //   formData
        // );
        // console.log("Response:", response.data);
        // console.log("Form submitted:", formData);
        setIsSubmitted(true);
        message.success("Your message was sent successfully");
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
        setIsSubmitting(false);
      }
    } catch (error: any) {
      console.error("Error:", error);
      showErrorMessage(error.message)
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-6 gap-2 w-full text-sm text-white rounded-2xl md:p-7 p-2 flex flex-col"
    >
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        name="fullName"
        id="name"
        value={formData.fullName}
        required
        onChange={handleChange}
        placeholder="Full Name"
        className="bg-transparent outline-none border border-tertiary  rounded-lg text-xs p-3"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email address"
        required
        className="bg-transparent border outline-none border-tertiary rounded-lg text-xs p-3"
      />

      <label htmlFor="message">Your message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleTextAreaChange}
        placeholder="Jot us a note and we’ll get back to you as quickly as possible"
        required
        className="h-32 bg-transparent outline-none border border-tertiary rounded-lg text-xs p-3"
      ></textarea>

      <button
        type="submit"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="mt-3 flex items-center justify-center duration-300 bg-primary py-2 font-medium text-base hover:text-primary hover:bg-white border-primary border transition-all rounded-3xl"
      >
        {isSubmitting ? (
          <Spin />
        ) : isSubmitted ? (
          <AiOutlineCheckCircle size={24} style={{ color: "#00FF00" }} />
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactUsForm;
