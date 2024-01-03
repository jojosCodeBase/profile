import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  return (
    <main className="relative py-28 bg-gray-900">
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className={`${styles.sectionSubText} text-babyPowder`}>
            3. Contact
          </h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-300">
            I'd love to hear from you! Please fill out the form bellow.
          </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-richBlack sm:max-w-lg sm:px-8 rounded-xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact"></input>
            <div>
              <label className="font-medium text-babyPowder">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-babyPowder outline-none  shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium text-babyPowder">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-babyPowder outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium text-babyPowder" name="code[]">
                Phone number
              </label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm bg-babyPowder outline-none rounded-lg h-full">
                    <option>IND</option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="+91 123 456 7890"
                  name="phone"
                  required
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-babyPowder outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium text-babyPowder">Message</label>
              <textarea
                required
                name="message"
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-babyPowder outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2  font-medium text-babyPowder bg-indigoDye hover:bg-gradient-to-r from-lavaPink to-sage  rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </main>
  );
};

export default SectionWrapper(Contact, "contact");
