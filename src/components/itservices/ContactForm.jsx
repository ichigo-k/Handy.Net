import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

function ContactForm() {
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
        <div className="lg:w-2/3 bg-slate-50 border border-slate-200 p-8 md:p-10 shadow-sm">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Name</label>
                        <div className="flex items-center border border-slate-300 bg-white focus-within:border-slate-500 transition-colors">
                            <div className="pl-4">
                                <User className="w-5 h-5 text-slate-400" />
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
                                <Mail className="w-5 h-5 text-slate-400" />
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
                            <MessageSquare className="w-5 h-5 text-slate-400" />
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
                    className="w-full py-4 bg-primary-500 text-white font-bold tracking-[0.2em] uppercase shadow-lg hover:bg-primary-600 transition-all duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
