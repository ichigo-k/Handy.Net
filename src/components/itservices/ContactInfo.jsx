import React from 'react';
import { MapPin, PhoneCall } from 'lucide-react';

function ContactInfo() {
    return (
        <div className="lg:w-1/3 flex flex-col space-y-8">
            <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Contact Information</h4>
                <p className="text-slate-600 mb-6">
                    Ready to upgrade your infrastructure? Reach out to us for a consultation or quote.
                </p>
            </div>

            <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 border border-slate-200">
                    <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                    <h5 className="font-semibold text-slate-900">Our Office</h5>
                    <p className="text-slate-600 mt-1">Aviance Ghana, Airport Bypass Rd, Accra</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 border border-slate-200">
                    <PhoneCall className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                    <h5 className="font-semibold text-slate-900">Phone</h5>
                    <p className="text-slate-600 mt-1">+233 50 333 4857</p>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
