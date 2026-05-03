import { Instagram, X, Facebook } from "lucide-react"

export const navLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/#services" },
    { name: "About Us", link: "/#about" },
    { name: "Contact Us", link: "/#contact" },
]

export const socialMedia = [
    { icon: <Instagram />, link: "#" },
    { icon: <Facebook />, link: "#" },
    { icon: <X />, link: "#" }
]

export const services = [
    // IT Services
    {
        category: "IT Services",
        name: "Device Repair & Maintenance",
        description: "Expert repair services for damaged laptops, along with a wide range of IT devices including computers, phones, and accessories.",
        image: "https://cdn.pixabay.com/photo/2023/02/08/00/49/computer-7775457_1280.jpg"
    },
    {
        category: "IT Services",
        name: "Network & Device Setup",
        description: "Professional installation and setup of IT equipment such as office PCs, printers, local networks, and other essential devices.",
        image: "https://cdn.pixabay.com/photo/2020/11/13/08/37/pc-5737958_1280.jpg"
    },
    {
        category: "IT Services",
        name: "Web Development",
        description: "Custom website development services tailored to your business needs, including responsive design, user-friendly interfaces, and ongoing maintenance.",
        image: "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_960_720.jpg"
    },
    // Electrical Services
    {
        category: "Electrical Services",
        name: "Electrical Installation & Wiring",
        description: "Safe and certified electrical installations for homes and businesses — from full wiring setups to panel upgrades and fault diagnosis.",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg"
    },
    {
        category: "Electrical Services",
        name: "Electrical Maintenance & Repairs",
        description: "Routine maintenance, fault finding, and emergency electrical repairs carried out by qualified technicians to keep your systems safe.",
        image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    },
    // Smart Home Automation
    {
        category: "Smart Home",
        name: "Home Security & CCTV",
        description: "Integrated smart security systems including IP cameras, motion sensors, smart locks, and remote monitoring for complete peace of mind.",
        image: "https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg"
    },
    {
        category: "Smart Home",
        name: "Smart Climate & Entertainment",
        description: "Automate your air conditioning, fans, and home entertainment systems to create a seamlessly connected and comfortable living space.",
        image: "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg"
    }
];

export const questions = [
    {
        "question": "What services does Handy.Net offer?",
        "answer": "Handy.Net provides comprehensive IT services (repair, network setup, web dev), certified electrical installations, and smart home automation."
    },
    {
        "question": "Where is Handy.Net located?",
        "answer": "Our office is located in Tesano, Accra. Feel free to visit us for any inquiries or services you may need."
    },
    {
        "question": "Do you provide on-site installation services?",
        "answer": "Yes, we offer on-site installation for office networks, electrical wiring, and smart home devices. Our technicians ensure a smooth setup process."
    },
    {
        "question": "What kind of electrical work do you do?",
        "answer": "We handle full electrical installations, residential and commercial wiring, panel upgrades, fault diagnosis, and routine electrical repairs."
    },
    {
        "question": "What is included in your smart home services?",
        "answer": "We integrate home security systems, CCTV, smart locks, and climate/entertainment automation so you can control your home effortlessly."
    },
    {
        "question": "Do you offer ongoing support for businesses?",
        "answer": "Absolutely! We offer ongoing maintenance and IT support contracts to keep your business running without technical interruptions."
    },
]
