import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="pt-40 w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-5xl font-bold inline border-b-4">Contact</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-semibold">
            <p>Let's connect. Feel free to reach out to me!</p>
          </div>
          <div>
            <form method="POST" action="https://getform.io/f/your-form-endpoint" className="flex flex-col max-w-[600px] w-full">
              <input
                className="bg-[#ccd6f6] p-2 rounded-md focus:outline-none text-black"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="my-4 p-2 bg-[#ccd6f6] rounded-md focus:outline-none text-black"
                type="email"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="bg-[#ccd6f6] p-2 rounded-md focus:outline-none text-black"
                name="message"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="text-black bg-gradient-to-r from-gray-300 to-white hover:scale-110 duration-300 px-4 py-3 my-8 mx-auto flex items-center rounded-2xl font-semibold">
                Let's Collaborate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;