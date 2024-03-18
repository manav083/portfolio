import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      className="py-[100px] flex items-center justify-center flex-col font-semibold dark:bg-[#111]"
      id="contact"
    >
      <div className="text-[30px] mb-[20px]">
        <span className="border-b-[4px] pb-[10px] border-[royalblue]">Contact</span>
      </div>
      <span className="font-[300] text-[17px]">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </span>
      <form className="flex flex-col w-6/12 pt-[40px] p-[40px_65px] mt-[40px] shadow-xl dark:bg-gray-900 rounded-lg">
        <label for="name" name="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter Your Name"
          className="border border-[lightgray] p-[10px_12px] mb-10 bg-[lightgray] text-gray placeholder:text-gray rounded-md text-gray"
        />
        <label id="email" name="email">
          Email
        </label>
        <input
          for="email"
          type="email"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[lightgray] p-[10px_12px] mb-10  bg-[lightgray] text-gray placeholder:text-gray rounded-md text-gray"
        />
        <label for="message" name="message">
          Messsage
        </label>
        <textarea
          id="message"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-[lightgray] p-[10px_12px] h-[200px] mb-10  bg-[lightgray] text-gray placeholder:text-gray rounded-md text-gray"
        ></textarea>
        <button className="bg-[royalblue] shadow-lg p-[10px_15px] text-white font-bold rounded-md cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
