import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICEID, 
        import.meta.env.VITE_TEMPLATEID, 
        form.current, 
        import.meta.env.VITE_PUBLICKEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sent successfully")
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Something went wrong")
        },
      );
  };

  return (
    <section className="w-full bg-gray-900 p-6" id='contact'>
      <div className="flex flex-col items-center mx-auto mt-4 mb-2">
        <h2 className="text-3xl font-bold text-center text-white">Contact Us</h2>
        <div className="w-[10rem] h-2 bg-yellow-400 my-4"></div>
      </div>
      <div className="mx-auto max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div className="flex items-center border border-gray-700 rounded-md">
            <User className="w-6 h-6 text-gray-400 ml-2" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-2 bg-gray-800 text-white border-none rounded-md focus:bg-gray-900 focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-700 rounded-md">
            <Mail className="w-6 h-6 text-gray-400 ml-2" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-2 bg-gray-800 text-white border-none rounded-md focus:outline-none focus:bg-gray-900"
            />
          </div>

          <div className="flex flex-col border border-gray-700 rounded-md">
            <div className="flex items-center border-b border-gray-700">
              <MessageCircle className="w-6 h-6 text-gray-400 ml-2" />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-2 bg-gray-800 text-white border-none rounded-md focus:bg-gray-900 focus:outline-none resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="p-2 bg-yellow-500 text-black font-semibold rounded-md shadow-md hover:bg-yellow-600 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
