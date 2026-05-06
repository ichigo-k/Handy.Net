import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <section id="contact" className="w-full py-24 bg-white border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-6">
                <header className="mb-16 flex flex-col items-center text-center">
                    <h2 className="text-xs font-bold tracking-[0.2em] hollow uppercase mb-3">Get In Touch</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
                        Let's Start a Conversation
                    </h3>
                </header>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;
