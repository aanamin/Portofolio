// src/data.js

// 1. IMPORT ASSETS
import HeroImage from "/assets/hero-img.jpeg"; 

import { 
  RiMailSendLine, 
  RiWhatsappLine, 
  RiLinkedinFill, 
  RiGithubFill, 
  RiInstagramLine 
} from "react-icons/ri";

// 2. EXPORT IMAGE OBJECT
const Image = {
  HeroImage,
};

export default Image;

// 3. EXPORT PROJECTS_DATA (Sorted by Year: 2025 -> 2023)
export const PROJECTS_DATA = [
  // --- TAHUN 2025 ---
  {
    id: 3,
    title: "Restaurant Management System",
    year: "2025",
    type: "Full-Stack",
    images: [
      "/assets/proyek/surya.jpg",
      "/assets/proyek/surya2.jpg",
      "/assets/proyek/surya3.jpg",
      "/assets/proyek/surya4.jpg",
      "/assets/proyek/surya5.jpg",
    ],
    desc: "A comprehensive management system built on a dual-platform architecture (Web & Mobile) to streamline restaurant operations. It features a React Native mobile application for customers and a web-based dashboard for cashiers and admin, all connected via a RESTful API for seamless real-time synchronization.",
    tech_stack: ["React Native", "Express.js", "MySQL", "Midtrans", "Sequelize"],
    color: "indigo",
    features: [
      "Secure Payment Gateway Integration (Midtrans)",
      "RESTful API with MVC Architecture",
      "Integrated Catering & Regular Order Management",
      "Kitchen Production Dashboard (KDS)"
    ],
    
  },
  {
    id: 9, // UNAND ENDOWMENT
    title: "UNAND Endowment Management",
    year: "2025",
    type: "Web App",
    images: [
      "/assets/proyek/upw.jpg",
    ],
    desc: "Web-based system specifically designed for the collection and management of endowments (Dana Abadi) at the Universitas Andalas Endowment Unit. It simplifies the donation process and ensures transparent fund allocation.",
    tech_stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    color: "green", 
    features: [
      "Automated Certificate Generation (PDF)", // FITUR BARU
      "Automatic Email Delivery to Donors",     // FITUR BARU
      "Endowment Fund Collection & Tracking",
      "Financial Reporting Transparency"
    ],
    
  },
  {
    id: 4,
    title: "UPZ Business System",
    year: "2025",
    type: "Web App",
    images: [
      "/assets/proyek/upz.jpg",
      "/assets/proyek/upz1.jpg",
      "/assets/proyek/upz2.jpg",
    ],
    desc: "A customized web application tailored to specific business processes for UPZ PT Semen Padang. This system automates the collection, management, and distribution of Zakat, Infaq, and Sadaqah.",
    tech_stack: ["Laravel", "MySQL", "Bootstrap", ],
    color: "teal",
    features: [
      "Automated Zakat Calculation Engine",
      "Real-time Financial Dashboard",
      "Employee Database Integration",
      "PDF Export for Monthly Reports"
    ],
    
  },
  {
    id: 5,
    title: "Room Booking System (SABOOK)",
    year: "2025",
    type: "Android App",
    images: [
      "/assets/proyek/sakato.png",
    ],
    desc: "Android-based application designed to streamline facility usage and scheduling for community organizations. Features a clean mobile interface for easy room reservation and conflict prevention.",
    tech_stack: ["Android", "Kotlin", "MySQL", "Material Design"],
    color: "amber",
    isMobile: true,
    features: [
      "Real-time Availability Calendar",
      "Instant Booking Confirmation",
      "Admin Approval Workflow",
      "Push Notifications"
    ],
    
  },

  // --- TAHUN 2024 ---
  {
    id: 1,
    title: "Correspondence Information System",
    year: "2024",
    type: "Web App",
    images: [
      "/assets/proyek/suratmenyurat.jpg",
      "/assets/proyek/suratmenyurat2.jpg",
      "/assets/proyek/suratmenyurat3.jpg",
      "/assets/proyek/suratmenyurat4.jpg",
    ],
    desc: "Digital correspondence platform developed for the Student Executive Body (BEM) and Student Associations (HIMA) at Andalas University. It streamlines the exchange of official letters with automated templating and secure archival.",
    tech_stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    color: "emerald",
    features: [
      "Document Generation from Templates",
      "Incoming & Outgoing Mail Management",
      "Role-Based Access Control (Admin/User)",
      "Master Data Administration"
    ],
    
  },
  {
    id: 2,
    title: "Metro Company Profile",
    year: "2024",
    type: "Full-Stack",
    images: [
      "/assets/proyek/adino.jpg",
    ],
    desc: "Full-stack company profile featuring an intuitive admin dashboard and a responsive landing page for PT Metro Indonesian Software. Designed to showcase company services, portfolios, and client testimonials.",
    tech_stack: ["Express.js", "EJS", "PostgreSQL", "Bootstrap", "Sequelize"],
    color: "blue",
    features: [
      "Dynamic Content Management System (CMS)",
      "SEO Optimized Landing Page",
      "Secure Admin Authentication",
      "Responsive Mobile Design"
    ],
    
  },
  {
    id: 6,
    title: "Public Reporting System",
    year: "2024",
    type: "Web App",
    images: [
      "/assets/proyek/skm biro organisasi 2.jpg",
      "/assets/proyek/skm biro organisasi 3.jpg",
      "/assets/proyek/skm biro organisasi.jpg",
    ],
    desc: "A transparency platform enabling citizens to report and evaluate the performance of the organization's bureau. Features automated periodical result summaries for better accountability.",
    tech_stack: ["Express.js", "Bootstrap", "MySQL", "EJS", "Sequelize"],
    color: "orange",
    features: [
      "Anonymous Reporting Capability",
      "Automated Monthly Summaries",
      "Ticket Tracking Status",
      "Data Visualization Dashboard"
    ],
    
  },

  // --- TAHUN 2023 ---
  {
    id: 7,
    title: "Emergency Complaints App",
    year: "2023",
    type: "Android App",
    images: [
      "/assets/proyek/adura.png", // Ganti dengan gambar yang sesuai
      "/assets/proyek/adura2.png", // Ganti dengan gambar yang sesuai
    ],
    desc: "Android application for public complaints regarding emergency incidents such as medical emergencies, fires, and security issues. Designed for quick response and GPS tracking.",
    tech_stack: ["Android", "Java", "Google Maps API", "Firebase"],
    color: "red",
    isMobile: true,
    features: [
      "One-Touch SOS Button",
      "Real-time GPS Location Sharing",
      "Incident Photo Upload",
      "Direct Line to Emergency Services"
    ],
    
  },
  {
    id: 8,
    title: "Employee Evaluation System",
    year: "2023",
    type: "Web App",
    images: [
      "/assets/proyek/spk pegawai.jpg",
      "/assets/proyek/spk pegawai2.jpg",
      "/assets/proyek/spk pegawai3.png",
    ],
    desc: "Performance assessment system for the West Sumatra Regional Secretariat Organization Bureau. Allows employees to assess their peers' performance monthly with transparency.",
    tech_stack: ["Express.js", "Bootstrap", "MySQL", "EJS", "Sequelize"],
    color: "violet",
    features: [
      "360-degree Peer Review",
      "Weighted Scoring Algorithm",
      "Confidential Assessment Processing",
      "Performance History Analytics"
    ],
    
  }
];

// 4. EXPORT CONTACTS_DATA
export const CONTACTS_DATA = [
  {
    id: 1,
    title: "Email",
    value: "aanalamin987@gmail.com",
    link: "mailto:aanalamin987@gmail.com",
    icon: RiMailSendLine,
    color: "indigo",
    btnText: "Send Mail"
  },
  {
    id: 2,
    title: "WhatsApp",
    value: "+62 852-7468-0420",
    link: "https://wa.me/6285274680420",
    icon: RiWhatsappLine,
    color: "emerald",
    btnText: "Chat Now"
  },
  {
    id: 3,
    title: "LinkedIn",
    value: "Al-Amin",
    link: "https://www.linkedin.com/in/alamin15/",
    icon: RiLinkedinFill,
    color: "blue",
    btnText: "Connect"
  },
  {
    id: 4,
    title: "GitHub",
    value: "aanamin",
    link: "https://github.com/aanamin",
    icon: RiGithubFill,
    color: "slate",
    btnText: "Follow"
  },
];