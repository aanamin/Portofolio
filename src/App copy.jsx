import DataImage from "./data";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      
      {/* --- HERO SECTION --- */}
      <section className="grid md:grid-cols-2 items-center pt-16 xl:gap-12 gap-8 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-8 bg-zinc-800/50 border border-white/10 w-fit py-2 px-4 rounded-full shadow-sm">
            <img src={DataImage.HeroImage} alt="Mini Avatar" className="w-6 h-6 rounded-full object-cover" />
            <q className="text-xs italic text-gray-400 font-mono text-balance">
              Make it work, make it right, make it fast
            </q>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Hi, I am <span className="text-violet-500 text-nowrap">Al-Amin</span>
          </h1>

          <p className="text-lg leading-relaxed mb-8 opacity-80 text-gray-300">
            An <span className="text-white font-semibold text-nowrap">Information Systems</span> graduate from{" "}
            <span className="text-white font-semibold">Andalas University</span> with{" "}
            <span className="text-violet-400 font-bold underline underline-offset-4 decoration-violet-500/30">4 years</span> of 
            dedicated experience in programming. I build scalable, efficient solutions to solve real-world challenges.
          </p>

          <div className="flex items-center sm:gap-4 gap-3">
            <a href="#" className="flex items-center gap-2 bg-violet-700 px-6 py-4 rounded-2xl hover:bg-violet-600 transition-all hover:-translate-y-1 shadow-lg shadow-violet-900/20 text-white font-medium">
              Download CV <i className="ri-download-line text-xl"></i>
            </a>
            <a href="#projects" className="flex items-center gap-2 bg-zinc-800 border border-white/5 px-6 py-4 rounded-2xl hover:bg-zinc-700 transition-all text-white font-medium">
              View Projects <i className="ri-arrow-down-line text-xl animate-bounce"></i>
            </a>
          </div>
        </div>

        <div className="relative md:ml-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
                src={DataImage.HeroImage} 
                alt="Al-Amin Graduation" 
                className="relative w-full max-w-[500px] rounded-2xl shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500 object-cover aspect-[4/5]" 
            />
        </div>
      </section>

      {/* --- TRANSITION SECTION --- */}
      <div className="w-full flex flex-col items-center justify-center mt-32 py-10 gap-4">
        <div className="relative group cursor-default">
          <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative px-8 py-3 rounded-full border border-emerald-500/30 bg-zinc-900/50 backdrop-blur-md">
            <p className="text-xl md:text-3xl font-light tracking-widest uppercase">
              <span className="typing-effect font-mono text-emerald-400">
                &lt; Website &amp; Mobile Developer /&gt;
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* --- ABOUT ME SECTION --- */}
      <section id="about" className="py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Achievements */}
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
              <span className="text-violet-500 font-mono">01.</span> About Me
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am an <span className="text-white font-semibold">Information Systems</span> graduate from <span className="text-white">Andalas University</span> with a GPA of <span className="text-emerald-400 font-bold">3.86/4.00</span>. As a results-driven professional, I combine business system knowledge with technical web development expertise.
              </p>
              
              <p>
                [cite_start]Through <span className="text-white">three professional internships</span> [cite: 15, 19, 26] [cite_start]and over <span className="text-white">10 successfully completed software projects</span> [cite: 88-101], I have honed my skills in building efficient applications that deliver seamless user experiences.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
                <div className="border-l-2 border-violet-500 pl-4">
                  <h4 className="text-white font-bold text-2xl">10+</h4>
                  <p className="text-sm">Projects Finished</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4">
                  <h4 className="text-white font-bold text-2xl">3</h4>
                  <p className="text-sm">Internships</p>
                </div>
                <div className="border-l-2 border-violet-500 pl-4 sm:col-span-1 col-span-2">
                  <h4 className="text-white font-bold text-2xl text-nowrap">BNSP</h4>
                  <p className="text-sm text-nowrap">National Certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Certifications */}
          <div className="md:col-span-5 space-y-6">
            {/* Card: Tech Stack */}
            <div className="bg-zinc-800/30 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-bold">Primary Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "ReactJS", "Express.js", "SQL", "Bootstrap", "React Native", "Tailwind", "Laravel", "Kotlin"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-xl text-sm text-gray-300 hover:border-violet-500 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card: BNSP Certifications */}
            <div className="bg-gradient-to-br from-violet-900/20 to-zinc-900 border border-violet-500/20 p-6 rounded-3xl relative overflow-hidden group shadow-xl shadow-violet-900/10">
              <h3 className="text-sm uppercase tracking-widest text-violet-400 mb-5 font-bold">Professional Certifications</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-500/20 p-1 rounded-full text-emerald-400">
                    <i className="ri-award-fill"></i>
                  </div>
                  <div>
                    <p className="text-white font-medium leading-tight text-sm">ICT Project Manager</p>
                    <p className="text-[10px] text-gray-500 uppercase mt-1 tracking-tighter">Certified by BNSP</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-500/20 p-1 rounded-full text-emerald-400">
                    <i className="ri-award-fill"></i>
                  </div>
                  <div>
                    <p className="text-white font-medium leading-tight text-sm">Junior Web Developer</p>
                    <p className="text-[10px] text-gray-500 uppercase mt-1 tracking-tighter">Certified by BNSP</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- EXPERIENCE SECTION (MODERN DESIGN) --- */}
      <section id="experience" className="py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl font-bold flex items-center gap-4 text-white">
            <span className="text-violet-500 font-mono text-2xl">02.</span> Work Experience
          </h2>
          <div className="h-[1px] flex-grow bg-zinc-800 mx-8 hidden md:block"></div>
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">3 Internships</span>
        </div>

        <div className="space-y-8">
          {/* 1. UPZ PT Semen Padang */}
          <div className="group relative bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:border-violet-500/50 transition-all duration-500 shadow-xl hover:shadow-violet-900/10">
            <div className="absolute top-0 right-0 p-8 text-xs font-mono text-zinc-600 group-hover:text-violet-400 transition-colors">
              FEB 2025 — AUG 2025
            </div>
            
            <div className="flex flex-col gap-1 mb-6">
              <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">Website Developer Intern</h3>
              <p className="text-zinc-400 flex items-center gap-2">
                <i className="ri-building-line"></i> UPZ PT Semen Padang [cite: 26]
              </p>
            </div>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Developed a customized web application tailored to specific business processes to ensure seamless organizational operations[cite: 30].
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-white/5">Custom Web App</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-white/5">Business Process Automation</span>
            </div>
          </div>

          {/* 2. PT Metro Indonesian Software */}
          <div className="group relative bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-500 shadow-xl hover:shadow-emerald-900/10">
            <div className="absolute top-0 right-0 p-8 text-xs font-mono text-zinc-600 group-hover:text-emerald-400 transition-colors">
              MAR 2024 — APR 2024
            </div>
            
            <div className="flex flex-col gap-1 mb-6">
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Website Developer Intern</h3>
              <p className="text-zinc-400 flex items-center gap-2">
                <i className="ri-building-line"></i> PT Metro Indonesian Software [cite: 19]
              </p>
            </div>

            <div className="space-y-4 text-zinc-400 leading-relaxed mb-6">
              <p>Built a comprehensive company profile including a modern landing page and an intuitive admin dashboard[cite: 23].</p>
              <p>Focused on responsive design and smooth user interactions using modern UI/UX principles[cite: 24].</p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {["Express.js", "SQL", "JavaScript", "Bootstrap", "EJS"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Biro Organisasi Setda Sumatera Barat */}
          <div className="group relative bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:border-violet-500/50 transition-all duration-500 shadow-xl hover:shadow-violet-900/10">
            <div className="absolute top-0 right-0 p-8 text-xs font-mono text-zinc-600 group-hover:text-violet-400 transition-colors">
              JAN 2024 — MAR 2024
            </div>
            
            <div className="flex flex-col gap-1 mb-6">
              <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">Website Developer Intern</h3>
              <p className="text-zinc-400 flex items-center gap-2">
                <i className="ri-building-line"></i> Biro Organisasi Setda Sumatera Barat [cite: 11]
              </p>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-400 leading-relaxed mb-6">
              <li>Developed an Employee Evaluation System for peer performance assessments[cite: 16].</li>
              <li>Built a Public Reporting System for citizen evaluation and accountability[cite: 17].</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-white/5">Evaluation System</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-white/5">Public Reporting</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;