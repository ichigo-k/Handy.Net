import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, MessageSquare, MapPin, PhoneCall } from 'lucide-react';
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
 <section id="contact"className="w-full py-24 bg-white border-t border-slate-100">
 <div className="max-w-6xl mx-auto px-6">
 <header className="mb-16 flex flex-col items-center text-center">
 <h2 className="text-xs font-bold tracking-[0.2em] hollow uppercase mb-3">Get In Touch</h2>
 <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
 Let's Start a Conversation
 </h3>
 </header>

 <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
 {/* Contact Info */}
 <div className="lg:w-1/3 flex flex-col space-y-8">
 <div>
 <h4 className="text-xl font-semibold text-slate-900 mb-2">Contact Information</h4>
 <p className="text-slate-600 mb-6">
 Ready to upgrade your infrastructure? Reach out to us for a consultation or quote.
 </p>
 </div>
 
 <div className="flex items-start gap-4">
 <div className="bg-slate-50 p-3 border border-slate-200">
 <MapPin className="w-6 h-6 text-orange-500"/>
 </div>
 <div>
 <h5 className="font-semibold text-slate-900">Our Office</h5>
 <p className="text-slate-600 mt-1">Aviance Ghana, Airport Bypass Rd, Accra</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="bg-slate-50 p-3 border border-slate-200">
 <PhoneCall className="w-6 h-6 text-orange-500"/>
 </div>
 <div>
 <h5 className="font-semibold text-slate-900">Phone</h5>
 <p className="text-slate-600 mt-1">+233 50 333 4857</p>
 </div>
 </div>


 </div>

 {/* Contact Form */}
 <div className="lg:w-2/3 bg-slate-50 border border-slate-200 p-8 md:p-10 shadow-sm">
 <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="flex flex-col space-y-2">
 <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Name</label>
 <div className="flex items-center border border-slate-300 bg-white focus-within:border-slate-500 transition-colors">
 <div className="pl-4">
 <User className="w-5 h-5 text-slate-400"/>
 </div>
 <input
 type="text"
 name="user_name"
 placeholder="John Doe"
 className="w-full p-3 bg-transparent text-slate-900 border-none focus:outline-none placeholder-slate-400"
 required
 />
 </div>
 </div>
 
 <div className="flex flex-col space-y-2">
 <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Email</label>
 <div className="flex items-center border border-slate-300 bg-white focus-within:border-slate-500 transition-colors">
 <div className="pl-4">
 <Mail className="w-5 h-5 text-slate-400"/>
 </div>
 <input
 type="email"
 name="user_email"
 placeholder="john@example.com"
 className="w-full p-3 bg-transparent text-slate-900 border-none focus:outline-none placeholder-slate-400"
 required
 />
 </div>
 </div>
 </div>

 <div className="flex flex-col space-y-2">
 <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Message</label>
 <div className="flex items-start border border-slate-300 bg-white focus-within:border-slate-500 transition-colors">
 <div className="pl-4 pt-3">
 <MessageSquare className="w-5 h-5 text-slate-400"/>
 </div>
 <textarea
 name="message"
 placeholder="How can we help you?"
 className="w-full p-3 bg-transparent text-slate-900 border-none focus:outline-none resize-none h-40 placeholder-slate-400"
 required
 ></textarea>
 </div>
 </div>

 <button
 type="submit"
 className="w-full py-4 bg-slate-900 text-white font-bold tracking-widest uppercase shadow-md hover:bg-slate-800 transition-colors duration-300"
 >
 Send Message
 </button>
 </form>
 </div>
 </div>
 </div>
 </section>
 );
}

export default Contact;
