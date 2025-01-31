import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, MessageCircle, MapPin, PhoneCall } from 'lucide-react';
import { toast } from 'sonner';
import contSvg from '../assets/contact4.svg';

function ContactUs() {
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
          toast.success('Message sent successfully');
          form.current.reset();
        },
        (error) => {
          toast.error('Something went wrong');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="mt-10 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-12">
        {/* Contact Info Section */}
        <div className="md:w-1/2 flex flex-col items-center text-center md:text-left">
          <img src={contSvg} alt="Contact" className="w-3/4 max-w-xs" />
          <div className="mt-6 space-y-5 w-full max-w-md">
            <div className="flex items-center gap-4">
              <MapPin className="w-10 h-10 text-yellow-500 p-2 rounded-full border-2 border-yellow-500" />
              <h2 className="text-gray-800 text-lg font-medium">Abeka, near Ghana Telecom</h2>
            </div>
            <div className="flex items-center gap-4">
              <PhoneCall className="w-10 h-10 text-yellow-500 p-2 rounded-full border-2 border-yellow-500" />
              <h2 className="text-gray-800 text-lg font-medium">+233 553010003</h2>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-10 h-10 text-yellow-500 p-2 rounded-full border-2 border-yellow-500" />
              <h2 className="text-gray-800 text-lg font-medium">tettehkephas@mail.com</h2>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 max-w-lg w-full bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h1 className="text-yellow-500 text-2xl font-bold">Get In Touch With Us</h1>
          <p className="text-gray-600 text-md mt-2">We are here for you! How can we help?</p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 mt-6">
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <User className="w-6 h-6 text-gray-400" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full p-2 text-gray-800 border-none focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <Mail className="w-6 h-6 text-gray-400" />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-2 text-gray-800 border-none focus:outline-none"
                required
              />
            </div>
            <div className="flex items-start border border-gray-300 rounded-md p-2">
              <MessageCircle className="w-6 h-6 text-gray-400 mt-2" />
              <textarea
                name="message"
                placeholder="Go ahead, we are listening..."
                className="w-full p-2 text-gray-800 border-none focus:outline-none resize-none h-32"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="p-3 bg-yellow-500 text-black font-semibold rounded-md shadow-md hover:bg-yellow-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
