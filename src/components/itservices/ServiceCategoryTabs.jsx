import React from 'react';
import { Cpu, Zap, ShoppingCart } from 'lucide-react';

const categories = [
    { label: "All", icon: null },
    { label: "IT Solutions", icon: <Cpu size={16} /> },
    { label: "Electrical Services", icon: <Zap size={16} /> },
    { label: "Sales & Retail", icon: <ShoppingCart size={16} /> },
];

function ServiceCategoryTabs({ activeCategory, onCategoryChange }) {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
                <button
                    key={cat.label}
                    onClick={() => onCategoryChange(cat.label)}
                    className={`flex items-center gap-2 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] border transition-all duration-300 ${activeCategory === cat.label
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                        }`}
                >
                    {cat.icon} {cat.label}
                </button>
            ))}
        </div>
    );
}

export default ServiceCategoryTabs;
