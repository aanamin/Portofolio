import React, { useState, useEffect } from "react";

// --- IMPORT DATA DARI DATA.JS ---
import DataImage, { PROJECTS_DATA, CONTACTS_DATA } from "./data"; 

// --- IMPORT ICONS UNTUK UI ---
import { 
  SiPhp, SiMysql, SiBootstrap, SiCodeigniter, SiKotlin 
} from "react-icons/si";
import { 
  FaReact, FaLaravel, FaNodeJs, FaGraduationCap, FaSchool, FaAndroid 
} from "react-icons/fa";
import { 
  IoLogoJavascript, IoClose, IoCamera 
} from "react-icons/io5";
import { 
  RiGithubFill, RiLinkM, RiBuilding2Fill, RiMacbookLine, 
  RiGovernmentFill, RiMapPinLine, RiCheckLine, RiMedalFill,
  RiArrowRightLine
} from "react-icons/ri";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Kunci scroll body saat modal terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay" || e.currentTarget.id === "close-btn") {
      setSelectedProject(null);
    }
  };

  return (
    <div className="font-sans antialiased overflow-x-hidden relative bg-white selection:bg-indigo-500 selection:text-white">
     
      {selectedProject && (
        <div 
          id="modal-overlay"
          onClick={closeModal}
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 transition-all duration-300 animate-fadeIn"
        >
          <div className="bg-[#111827] w-full max-w-6xl max-h-[95vh] rounded-3xl shadow-2xl relative flex flex-col overflow-hidden animate-fadeInUp border border-slate-700">
            
            {/* Header Sticky */}
            <div className="p-6 md:p-8 border-b border-slate-800 flex justify-between items-start bg-[#111827] sticky top-0 z-20">
               <div>
                  <span className={`inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-wider uppercase rounded-full border bg-${selectedProject.color}-500/10 text-${selectedProject.color}-400 border-${selectedProject.color}-500/20`}>
                    {selectedProject.type}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                    {selectedProject.title}
                  </h2>
               </div>
               
               <button 
                  id="close-btn"
                  onClick={closeModal}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-colors"
               >
                  <IoClose size={24} />
               </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                
                {/* Left Column: Overview & Features */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                     <div className={`w-1 h-6 bg-${selectedProject.color}-500 rounded-full`}></div>
                     <h3 className="text-xl font-bold text-white">Overview</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {selectedProject.desc}
                  </p>

                   {/* Key Features */}
                   <div className="mt-10">
                     <div className="flex items-center gap-3 mb-5">
                        <div className={`w-1 h-6 bg-${selectedProject.color}-500 rounded-full`}></div>
                        <h3 className="text-xl font-bold text-white">Key Features</h3>
                     </div>
                     <div className="grid md:grid-cols-2 gap-4">
                       {selectedProject.features && selectedProject.features.map((feature, idx) => (
                         <div key={idx} className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 flex items-start gap-3 hover:border-slate-600 transition-colors">
                           <RiCheckLine className={`text-${selectedProject.color}-500 text-xl shrink-0 mt-0.5`} />
                           <span className="text-slate-300 text-sm font-medium">{feature}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>

                {/* Right Column: Tech Stack & Actions */}
                <div className="lg:col-span-1">
                   <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700 h-full">
                      <div className="flex items-center gap-2 mb-6">
                         <i className="ri-code-s-slash-line text-slate-400 text-xl"></i>
                         <h3 className="text-white font-bold">Tech Stack</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                         {selectedProject.tech_stack.map((tech) => (
                           <span key={tech} className="px-3 py-2 bg-[#1F2937] border border-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:text-white hover:border-slate-500 transition-colors cursor-default">
                             {tech}
                           </span>
                         ))}
                      </div>

                      <div className="pt-6 border-t border-slate-700">
                         <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Actions</h4>
                         <div className="space-y-3">
                           <a href={selectedProject.links?.demo} className={`flex items-center justify-center gap-2 w-full py-3 bg-${selectedProject.color}-600 text-white rounded-xl font-bold hover:bg-${selectedProject.color}-500 transition-all`}>
                             <RiLinkM /> Live Demo
                           </a>
                           <a href={selectedProject.links?.repo} className="flex items-center justify-center gap-2 w-full py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-all">
                             <RiGithubFill /> Repository
                           </a>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Gallery Section */}
              <div className="pt-8 border-t border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                   <IoCamera className="text-slate-400 text-2xl" />
                   <h3 className="text-xl font-bold text-white">Project Gallery</h3>
                </div>

                {/* Grid Responsif */}
                <div className={`grid gap-6 ${selectedProject.isMobile ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {selectedProject.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`group relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 
                        ${selectedProject.isMobile ? 'aspect-[9/19]' : 'aspect-video'} 
                        hover:border-slate-500 transition-all shadow-lg flex items-center justify-center`}
                    >
                      {/* Gunakan object-contain agar gambar portrait/landscape tidak terpotong di container */}
                      <img 
                        src={img} 
                        alt={`Screenshot ${idx + 1}`} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                         <span className="bg-black/70 text-white px-4 py-2 rounded-full text-xs font-bold uppercase backdrop-blur-md border border-white/10">View Full</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <section id="home" className="w-full bg-white text-slate-900 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div className="order-2 md:order-1">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Available for Hire
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Hi, I'm <span className="text-indigo-600">Al-Amin</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Information Systems graduate from <span className="font-bold text-slate-900">Andalas University</span> (GPA <span className="bg-slate-900 text-white px-1 rounded">3.86</span>). specialized in bridging business logic with high-performance web solutions.
            </p>
            <div className="flex gap-4">
              <a 
               href="/assets/cv-alamin.pdf" 
               target="_blank"
               rel="noopener noreferrer"
               className="px-8 py-4 font-bold text-white transition-all bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:-translate-y-1"
               >
               Download CV
               </a>
              <a href="#projects" className="px-8 py-4 font-bold transition-all border-2 border-slate-200 rounded-xl hover:border-indigo-600 hover:text-indigo-600 text-slate-600">
                View Projects
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
             <div className="absolute inset-0 bg-indigo-600 rounded-[3rem] rotate-3 translate-x-2 translate-y-2 -z-10"></div>
             <img src={DataImage.HeroImage} alt="Al-Amin" className="w-full max-w-[420px] mx-auto rounded-[3rem] border-4 border-white shadow-2xl object-cover aspect-[4/5]" />
          </div>
        </div>
      </section>

      <section id="about" className="w-full bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">About Me<span className="text-indigo-500">.</span></h2>
             <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-start">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-8 bg-slate-800 rounded-3xl text-center border border-slate-700 hover:border-indigo-500 transition-colors">
                   <h3 className="text-5xl font-black text-indigo-400">3.86</h3>
                   <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mt-2">GPA Score</p>
                </div>
                <div className="p-8 bg-slate-800 rounded-3xl text-center border border-slate-700 hover:border-indigo-500 transition-colors">
                   <h3 className="text-5xl font-black text-indigo-400">{PROJECTS_DATA.length}+</h3>
                   <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mt-2">Projects</p>
                </div>
                <div className="col-span-2 p-8 bg-slate-800 rounded-3xl flex items-center justify-between border border-slate-700 hover:border-emerald-500 transition-colors group">
                   <div className="text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-black text-white">BNSP</h3>
                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase rounded border border-emerald-500/30">National Certified</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors flex items-center gap-2">
                           <i className="ri-checkbox-circle-fill text-emerald-500"></i> ICT Project Manager
                        </p>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors flex items-center gap-2">
                           <i className="ri-checkbox-circle-fill text-emerald-500"></i> Junior Web Developer
                        </p>
                      </div>
                   </div>
                   <i className="ri-medal-fill text-6xl text-slate-700 group-hover:text-emerald-500 transition-colors duration-300"></i>
                </div>
             </div>

             <div className="text-slate-300 text-lg leading-relaxed space-y-6">
                <p>
                   As a results-driven professional, I combine <strong className="text-white">business system knowledge</strong> with technical web development expertise.
                </p>
                <div className="pt-8">
                   <p className="text-sm font-bold uppercase text-slate-500 mb-6 tracking-widest">Tech Arsenal</p>
                   <div className="flex flex-wrap gap-6">
                      
                      {/* React */}
                      <div className="group flex flex-col items-center gap-2 cursor-pointer">
                         <div className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all duration-300">
                            <FaReact className="text-3xl text-slate-400 group-hover:text-indigo-400 transition-colors" />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-indigo-300 transition-colors">React</span>
                      </div>

                      {/* Laravel */}
                      <div className="group flex flex-col items-center gap-2 cursor-pointer">
                         <div className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 group-hover:border-red-600 group-hover:bg-red-600/10 transition-all duration-300">
                            <FaLaravel className="text-3xl text-slate-400 group-hover:text-red-600 transition-colors" />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-red-500 transition-colors">Laravel</span>
                      </div>

                      {/* Express */}
                      <div className="group flex flex-col items-center gap-2 cursor-pointer">
                         <div className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                            <FaNodeJs className="text-3xl text-slate-400 group-hover:text-white transition-colors" />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition-colors">Express</span>
                      </div>

                      {/* PHP */}
                      <div className="group flex flex-col items-center gap-2 cursor-pointer">
                         <div className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 group-hover:border-indigo-400 group-hover:bg-indigo-400/10 transition-all duration-300">
                            <SiPhp className="text-3xl text-slate-400 group-hover:text-indigo-300 transition-colors" />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-indigo-200 transition-colors">PHP</span>
                      </div>

                      {/* MySQL */}
                      <div className="group flex flex-col items-center gap-2 cursor-pointer">
                         <div className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300">
                            <SiMysql className="text-3xl text-slate-400 group-hover:text-blue-400 transition-colors" />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-300 transition-colors">MySQL</span>
                      </div>
                      
                      {/* JS */}
                      <div className="group flex flex-col items-center gap-2 cursor-pointer">
                         <div className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 group-hover:border-yellow-500 group-hover:bg-yellow-500/10 transition-all duration-300">
                            <IoLogoJavascript  className="text-3xl text-slate-400 group-hover:text-yellow-400 transition-colors" />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-yellow-300 transition-colors">JS</span>
                      </div>

                      {/* NEW: Kotlin */}
                      <div className="group flex flex-col items-center gap-2 cursor-pointer">
                         <div className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-all duration-300">
                            <SiKotlin className="text-3xl text-slate-400 group-hover:text-purple-400 transition-colors" />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-purple-300 transition-colors">Kotlin</span>
                      </div>

                      {/* NEW: Android */}
                      <div className="group flex flex-col items-center gap-2 cursor-pointer">
                         <div className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 group-hover:border-green-500 group-hover:bg-green-500/10 transition-all duration-300">
                            <FaAndroid className="text-3xl text-slate-400 group-hover:text-green-400 transition-colors" />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-green-300 transition-colors">Android</span>
                      </div>

                      {/* NEW: Bootstrap */}
                      <div className="group flex flex-col items-center gap-2 cursor-pointer">
                         <div className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 group-hover:border-purple-600 group-hover:bg-purple-600/10 transition-all duration-300">
                            <SiBootstrap className="text-3xl text-slate-400 group-hover:text-purple-600 transition-colors" />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-purple-500 transition-colors">Bootstrap</span>
                      </div>

                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section id="education" className="w-full bg-white text-slate-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
             <span className="text-indigo-600 font-mono font-bold uppercase tracking-[0.2em] text-sm">Academic Background</span>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             <div className="relative group bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:border-indigo-100 transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <FaGraduationCap className="text-9xl text-indigo-600" />
                </div>
                <div className="relative z-10">
                   <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                     Aug 2021 — Jan 2026
                   </span>
                   <h3 className="text-3xl font-black text-slate-900 mb-2">Universitas Andalas</h3>
                   <p className="text-lg text-slate-500 font-medium mb-6">Bachelor of Information Systems</p>
                   <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                     <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Final GPA</p>
                         <p className="text-4xl font-black text-indigo-600">3.86<span className="text-xl text-slate-300">/4.00</span></p>
                     </div>
                     <div className="h-10 w-[1px] bg-slate-200"></div>
                     <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                         <p className="text-sm font-bold text-slate-700">Padang City</p>
                     </div>
                   </div>
                </div>
             </div>
             <div className="relative group bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-lg hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <FaSchool className="text-9xl text-emerald-600" />
                </div>
                <div className="relative z-10">
                   <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                     Jun 2018 — Jul 2021
                   </span>
                   <h3 className="text-2xl font-black text-slate-900 mb-2">SMAN 10 Padang</h3>
                   <p className="text-lg text-slate-500 font-medium mb-6">Senior High School, Natural Science</p>
                </div>
                <div className="relative z-10 pt-6 border-t border-slate-100">
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Completed secondary education with a focus on Natural Sciences, building a strong foundation for analytical thinking.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      
      <section id="experience" className="w-full bg-slate-50 text-slate-900 py-24 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
             <span className="text-indigo-600 font-mono font-bold uppercase tracking-[0.2em] text-sm">Career Path</span>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">Work Experience</h2>
          </div>
          <div className="space-y-8 relative">
             <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-slate-200 hidden md:block z-0"></div>
             {/* Experience 1 */}
             <div className="relative z-10 w-full bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-slate-100 pb-8 mb-8">
                   <div className="flex gap-6 items-center">
                      <div className="w-20 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-3 shadow-sm">
                         <i className="ri-building-2-fill text-4xl text-indigo-600"></i>
                      </div>
                      <div>
                         <h3 className="text-2xl font-black text-slate-900">Website Developer</h3>
                         <p className="text-lg font-bold text-emerald-600 mt-1">UPZ PT Semen Padang</p>
                         <div className="flex items-center gap-2 text-slate-400 text-sm mt-2 font-medium">
                            <i className="ri-map-pin-line"></i> Padang City, West Sumatra
                         </div>
                      </div>
                   </div>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-xs font-bold uppercase">Feb 2025 - Aug 2025</span>
                      <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-xs font-bold uppercase">Internship</span>
                   </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                   <div>
                      <h4 className="flex items-center gap-2 text-sm font-black uppercase text-slate-900 mb-6"><span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Key Responsibilities</h4>
                      <ul className="space-y-4">
                         <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                            <i className="ri-check-line text-xl text-emerald-500 font-bold shrink-0 mt-0.5"></i>
                            <span>Developed a customized web application tailored to specific business processes.</span>
                         </li>
                         <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                            <i className="ri-check-line text-xl text-emerald-500 font-bold shrink-0 mt-0.5"></i>
                            <span>Ensured seamless organizational operations through system automation.</span>
                         </li>
                         <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                            <i className="ri-check-line text-xl text-emerald-500 font-bold shrink-0 mt-0.5"></i>
                            <span>Managed endowments database optimization.</span>
                         </li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="flex items-center gap-2 text-sm font-black uppercase text-slate-900 mb-6"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                         {["Laravel", "PHP", "MySQL", "Bootstrap"].map((tech) => (
                           <span key={tech} className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-sm font-bold hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default">{tech}</span>
                         ))}
                      </div>
                      
                   </div>
                </div>
             </div>
             {/* Experience 2 */}
             <div className="relative z-10 w-full bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-slate-100 pb-8 mb-8">
                   <div className="flex gap-6 items-center">
                      <div className="w-20 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-3 shadow-sm">
                         <i className="ri-macbook-line text-4xl text-indigo-600"></i>
                      </div>
                      <div>
                         <h3 className="text-2xl font-black text-slate-900">Website Developer</h3>
                         <p className="text-lg font-bold text-emerald-600 mt-1">PT Metro Indonesian Software</p>
                         <div className="flex items-center gap-2 text-slate-400 text-sm mt-2 font-medium"><i className="ri-map-pin-line"></i> Padang City, West Sumatra</div>
                      </div>
                   </div>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-xs font-bold uppercase">Mar 2024 - Apr 2024</span>
                      <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-xs font-bold uppercase">Internship</span>
                   </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                   <div>
                      <h4 className="flex items-center gap-2 text-sm font-black uppercase text-slate-900 mb-6"><span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Key Responsibilities</h4>
                      <ul className="space-y-4">
                         <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                            <i className="ri-check-line text-xl text-emerald-500 font-bold shrink-0 mt-0.5"></i>
                            <span>Built company profile website with responsive landing page.</span>
                         </li>
                         <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                            <i className="ri-check-line text-xl text-emerald-500 font-bold shrink-0 mt-0.5"></i>
                            <span>Designed intuitive admin dashboard for content management.</span>
                         </li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="flex items-center gap-2 text-sm font-black uppercase text-slate-900 mb-6"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                         {["Express.js", "EJS", "Bootstrap", "SQL", "JavaScript", "Sequelize"].map((tech) => (
                           <span key={tech} className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-sm font-bold hover:border-indigo-300 transition-colors">{tech}</span>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
             {/* Experience 3 */}
             <div className="relative z-10 w-full bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-slate-100 pb-8 mb-8">
                   <div className="flex gap-6 items-center">
                      <div className="w-20 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-3 shadow-sm">
                         <i className="ri-government-fill text-4xl text-indigo-600"></i>
                      </div>
                      <div>
                         <h3 className="text-2xl font-black text-slate-900">Website Developer</h3>
                         <p className="text-lg font-bold text-emerald-600 mt-1">Biro Organisasi Setda Sumbar</p>
                         <div className="flex items-center gap-2 text-slate-400 text-sm mt-2 font-medium"><i className="ri-map-pin-line"></i> Padang City, West Sumatra</div>
                      </div>
                   </div>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-xs font-bold uppercase">Jan 2024 - Mar 2024</span>
                      <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full text-xs font-bold uppercase">Internship</span>
                   </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                   <div>
                      <h4 className="flex items-center gap-2 text-sm font-black uppercase text-slate-900 mb-6"><span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Key Responsibilities</h4>
                      <ul className="space-y-4">
                         <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                            <i className="ri-check-line text-xl text-emerald-500 font-bold shrink-0 mt-0.5"></i>
                            <span>Developed Employee Evaluation System for peer assessment.</span>
                         </li>
                         <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                            <i className="ri-check-line text-xl text-emerald-500 font-bold shrink-0 mt-0.5"></i>
                            <span>Built Public Reporting System for citizen accountability.</span>
                         </li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="flex items-center gap-2 text-sm font-black uppercase text-slate-900 mb-6"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                         {["ExpressJS", "EJS", "MySQL", "HTML/CSS", "Bootstrap", "Sequelize"].map((tech) => (
                           <span key={tech} className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-sm font-bold hover:border-indigo-300 transition-colors">{tech}</span>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: PROJECTS GRID
      ========================================= */}
      <section id="projects" className="w-full bg-white text-slate-900 py-24 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
             <span className="text-indigo-600 font-mono font-bold uppercase tracking-[0.2em] text-sm">Portfolio</span>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">Featured Projects</h2>
             <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {PROJECTS_DATA.map((project, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-pointer"
                >
                   {/* Card Image */}
                   <div className="h-56 overflow-hidden relative">
                      <div className={`absolute inset-0 bg-${project.color}-500/10 group-hover:bg-transparent transition-colors z-10`}></div>
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 z-20">
                         <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase rounded-full shadow-sm">
                            {project.year}
                         </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-black/20 backdrop-blur-[2px]">
                          <span className="bg-white text-slate-900 px-6 py-3 rounded-xl text-xs font-bold uppercase shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                             View Details
                          </span>
                      </div>
                   </div>
                   {/* Card Content */}
                   <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                         {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                         {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                         {project.tech_stack.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[10px] font-bold uppercase px-2 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-200">
                               {tag}
                            </span>
                         ))}
                         {project.tech_stack.length > 3 && (
                            <span className="text-[10px] font-bold uppercase px-2 py-1 text-slate-400">+{project.tech_stack.length - 3}</span>
                         )}
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      
      <section id="contact" className="w-full bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
             <span className="text-indigo-500 font-mono font-bold uppercase tracking-[0.2em] text-sm">Get In Touch</span>
             <h2 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">Let's Connect</h2>
             <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full mt-6"></div>
             <p className="text-slate-400 mt-6 text-lg max-w-xl mx-auto">
               Have a project in mind or want to discuss business opportunities? I'm currently available for new projects and collaborations.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {CONTACTS_DATA.map((contact, index) => (
               <a 
                 key={index} 
                 href={contact.link} 
                 target="_blank" 
                 rel="noreferrer" 
                 className={`group p-8 bg-slate-800 rounded-[2rem] border border-slate-700 hover:border-${contact.color}-500 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl`}
               >
                  <div className={`w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-700 group-hover:border-${contact.color}-500/50`}>
                     <contact.icon className={`text-3xl text-${contact.color}-400 group-hover:text-${contact.color}-300`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-slate-400 mb-6 text-sm">{contact.value}</p>
                  <span className={`text-${contact.color}-400 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all`}>
                     {contact.btnText} <RiArrowRightLine />
                  </span>
               </a>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center">
         <p className="text-slate-500 font-medium">© 2026 Al-Amin. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;