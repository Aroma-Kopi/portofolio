"use client"
import { act, useState } from 'react'
import { Linkedin, Mail, FolderGit2, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Database, Code2, GraduationCap, Briefcase, Award, Laptop } from 'lucide-react';
import { div } from 'framer-motion/client';
import { SiNextdotjs, SiTailwindcss, SiPhp, SiBootstrap, SiGo, SiLaravel } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";


export default function PortfolioHome() {
  const [activeTab, setActiveTab] = useState('default'); 

  const handleTabChange = (tab: any) => {
    if (activeTab === tab) {
      setActiveTab('default');
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between">
        
        <div className="md:w-3/5 text-center md:text-left order-2 md:order-1">
          
          {activeTab !== 'default' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex justify-left w-full -mt-10 mb-8 relative z-10"
          >
            <button
              onClick={() => handleTabChange('default')}
              className="group px-4 py-2 border border-slate-200 hover:bg-blue-400 text-black rounded-full font-medium shadow-lg hover:text-white hover:shadow-blue-200 transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Halaman Utama
            </button>
          </motion.div>
      )}
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            {activeTab === 'projectsatu' && (
              <span>Cat<span className="text-blue-600">Nime</span></span>
            )}
            {activeTab === 'contact' && (
              <span>Hubungi <span className="text-blue-600">Saya</span></span>
            )}
            {activeTab === 'default' && (
              <span>Porto<span className="text-blue-600">folio</span></span>
            )}
            {activeTab === 'magang' && (
              <span>Mag<span className="text-blue-600">ang</span></span>
            )}
            {activeTab === 'sertifikasi' && (
              <span>MS<span className="text-blue-600">IB</span></span>
            )}
            {activeTab === 'frontend' && (
              <span>Front<span className="text-blue-600">end</span></span>
            )}
            {activeTab === 'backend' && (
              <span>Back<span className="text-blue-600">end</span></span>
            )}
            {activeTab === 'pendidikan' && (
              <span>Sistem <span className="text-blue-600">Informasi</span></span>
            )}
          </h1>

          <div className="min-h-[120px]"> 
            {activeTab === 'contact' && (
               <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                 Saya terbuka untuk peluang kerja sama profesional atau diskusi mengenai proyek pengembangan web. Mari bangun solusi digital yang berdampak bersama-sama!
               </p>
            )}
            
            {activeTab === 'projectsatu' && (
               <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                 Catnime adalah website untuk streaming anime favorit. Website ini saya kembangkan secara pribadi menggunakan Next.js dengan tujuan untuk memaksimalkan performa Server-Side Rendering (SSR) dan kecepatan muat halaman. 
                 Website ini terintegrasi dengan Public API untuk penyajian data real-time dan menggunakan GitHub dan Vercel untuk deploy website. Website bisa dikunjungi <a target='_blank' className='text-blue-600 hover:text-blue-400' href="https://catnime-stream-96.vercel.app/">
                 disini</a>. dan untuk source code bisa dilihat <a target='_blank' className='text-blue-600 hover:text-blue-400' href="https://github.com/fahran123/catnime">disini</a>.
               </p>
            )}

            {activeTab === 'default' && (
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                Halo nama saya Muchamad Fahransyah, saya seorang Fresh Graduate S1 Sistem Informasi dengan spesialisasi di bidang pengembangan web. Saya handal dalam 
                menangani manajemen database (MySQL), integrasi API, dan membuat antarmuka web yang presisi.
              </p>
            )}

            {activeTab === 'magang' && (
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                Selama menjalani magang di Seven Inc, saya ditempatkan sebagai Backend Developer yang menangani tiga projek website perusahaan. Tugas utama saya adalah membuat fitur baru yang 
                mendukung kebutuhan bisnis dan operasional, Merancang struktur database MySQL, melakukan pemeliharaan sistem seperti troubleshooting 
                dan perbaikan bug untuk memastikan performa website tetap optimal tanpa kendala, serta menerapkan clean code untuk menjaga stabilitas dan efisiensi sistem.
              </p>
            )}

            {activeTab === 'sertifikasi' && (
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                Selama Menyelesaikan pelatihan intensif Fullstack Web Development, saya mempelajari penguasaan teknologi Frontend seperti HTML, CSS, JavaScript, dan Bootstrap. 
                Lalu teknologi Backend seperti PHP, MySQL, Laravel. Setelah mempelajari Frontend dan Backend, saya berkolaborasi dengan tim dalam membangun Capstone projek dengan judul 
                'Sistem Informasi Manajemen Restoran'. Tugas saya dalam capstone projek tersebut adalah melakukan slicing desain UI/UX menjadi antarmuka web yang responsif dan interaktif.
              </p>
            )}
            {activeTab === 'frontend' && (
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                Saya dapat membangun desain antarmuka menjadi pengalaman pengguna yang interaktif dan responsif. Selain itu saya juga dapat
                membangun aplikasi web modern menggunakan ekosistem Next.js dan Tailwind CSS dengan fokus pada performa dan estetika.
              </p>
            )}
            {activeTab === 'backend' && (
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                Berpengalaman dalam membangun sisi server yang handal dan skalabel melalui pengelolaan infrastruktur backend untuk berbagai proyek website perusahaan. 
                Saya ahli dalam merancang database MySQL yang efisien serta mengimplementasikan fitur kompleks menggunakan Laravel. Selain memiliki antusiasme tinggi pada eksplorasi 
                bahasa Go untuk solusi performa tinggi, saya selalu mengutamakan prinsip clean code dan praktik terbaik demi menjaga stabilitas sistem jangka panjang.
              </p>
            )}
            {activeTab === 'pendidikan' && (
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                Lulusan Sarjana Sistem Informasi dari Universitas Negeri Semarang (UNNES) yang berfokus pada pengembangan website. 
                Selama masa studi, saya mendalami fondasi pemrograman, dan struktur database SQL yang menjadi landasan utama saya dalam 
                membangun website yang efisien dan terstruktur.
              </p>
            )}
          </div>

          {/* {(activeTab === 'projectsatu' || activeTab === 'projectdua') && (
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => handleTabChange('projectsatu')}
                  className={`px-8 py-3 rounded-full font-medium transition-all shadow-lg ${
                    activeTab === 'projectsatu' 
                    ? "bg-blue-600 text-white shadow-blue-200" 
                    : "bg-slate-200 text-slate-800 hover:bg-blue-400 hover:text-white"
                  }`}>
                  Projek Pertama
                </button>
                
                <button 
                  onClick={() => handleTabChange('projectdua')}
                  className={`px-8 py-3 rounded-full font-medium transition-all shadow-lg ${
                    activeTab === 'projectdua' 
                    ? "bg-blue-600 text-white shadow-blue-200" 
                    : "bg-slate-200 text-slate-800 hover:bg-blue-400 hover:text-white"
                  }`}>
                  Projek Kedua
                </button>
          </div>
          )} */}

          {(activeTab === 'magang') && (
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="/sertifmagang.pdf"
                  target='_blank'
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-medium transition-all shadow-lg bg-slate-200 border border-slate-400 text-black shadow-blue-200 bg-slate-200 text-slate-800 hover:bg-blue-400 hover:text-white">
                  Sertifikat Magang
                </a>
          </div>
          )}

          {(activeTab === 'sertifikasi') && (
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="/sertifmsib.pdf"
                  target='_blank'
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-medium transition-all shadow-lg bg-slate-200 border border-slate-400 text-black shadow-blue-200 bg-slate-200 text-slate-800 hover:bg-blue-400 hover:text-white">
                  Sertifikat MSIB
                </a>
          </div>
          )}

          {(activeTab === 'frontend' || activeTab === 'backend') && (
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => handleTabChange('frontend')}
                  className={`px-8 py-3 rounded-full font-medium transition-all shadow-lg ${
                    activeTab === 'frontend' 
                    ? "bg-blue-600 text-white shadow-blue-200" 
                    : "bg-slate-200 text-slate-800 hover:bg-blue-400 hover:text-white border border-slate-400"
                  }`}>
                  Frontend
                </button>
                
                <button 
                  onClick={() => handleTabChange('backend')}
                  className={`px-8 py-3 rounded-full font-medium transition-all shadow-lg ${
                    activeTab === 'backend' 
                    ? "bg-blue-600 text-white shadow-blue-200" 
                    : "bg-slate-200 text-slate-800 hover:bg-blue-400 hover:text-white border border-slate-400"
                  }`}>
                  Backend
                </button>
          </div>
          )}
        </div>

        <div className="md:w-1/3 mb-12 md:mb-0 order-1 md:order-2">
          <div 
          className={`relative mx-auto transition-all duration-500 ease-in-out
          ${activeTab === 'projectsatu' || activeTab === 'projectdua' || activeTab === 'magang' || activeTab === 'sertifikasi' ? 'w-64 h-64 md:w-150 md:h-80' 
          : activeTab === 'pendidikan' ? 'w-64 h-64 md:w-80 md:h-100' 
          : 'w-64 h-64 md:w-80 md:h-80'}`}>
            
            <div className={`absolute inset-0 rounded-3xl rotate-6 transform transition-all duration-500 hover:rotate-12 
              ${activeTab === 'contact' ? 'bg-red-100' : activeTab === 'projects' ? 'bg-indigo-100' : 'bg-blue-100'}`}>
            </div>

            <div className="absolute inset-0 bg-slate-50 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <AnimatePresence mode='wait'>
                
                {activeTab === 'contact' && (
                  <motion.div 
                    key="contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col items-center justify-center p-13 bg-slate-50">
                    <div className="space-y-5 w-full">
                      <h3 className="text-xl font-bold text-slate-800 text-center">Kontak</h3>
                      <a 
                        className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors"
                        href="https://wa.me/6281281865761"
                        target="_blank" 
                        rel="noopener noreferrer">
                        <svg 
                          viewBox="0 0 24 24" 
                          width="24" 
                          height="24" 
                          fill="currentColor" 
                          className="w-6 h-6">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span>081281865761</span>
                      </a>
                      <a className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors" href="#">
                        <Linkedin size={24}/> <span>linkedin.com/fahransyah</span>
                      </a>
                      <p className="flex items-center gap-2 text-slate-600">
                        <Mail size={24} /> <span>email@gmail.com</span>
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'frontend' && (
                  <motion.div 
                    key="frontend"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col items-center justify-center p-13 bg-slate-50">
                    <div className="space-y-5 w-full">
                      <h3 className="text-xl font-bold text-slate-800 text-center">Tech Stack</h3>
                      <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                        <IoLogoHtml5 size={24}/> <span>HTML</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                        <IoLogoCss3 size={24}/> <span>CSS</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <IoLogoJavascript size={24} /> <span>JavaScript</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <SiNextdotjs size={24} /> <span>Next.js</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'backend' && (
                  <motion.div 
                    key="backend"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col items-center justify-center p-13 bg-slate-50">
                    <div className="space-y-5 w-full">
                      <h3 className="text-xl font-bold text-slate-800 text-center">Tech Stack</h3>
                      <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                        <SiPhp size={24}/> <span>PHP</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                        <SiGo size={24}/> <span>Golang</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <SiLaravel size={24} /> <span>Laravel</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'projectsatu' && (
                  <motion.img
                    key="photo"
                    src="/catnime.png" 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover object-center"
                  />
                )}

                {activeTab === 'magang' && (
                  <motion.img
                    key="photo"
                    src="/magang.png" 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover object-center"
                  />
                )}

                {activeTab === 'sertifikasi' && (
                  <motion.img
                    key="photo"
                    src="/msib.png" 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover object-center"
                  />
                )}

                {activeTab === 'default' && (
                  <motion.img
                    key="photo"
                    src="/foto.png" 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover object-center"
                  />
                )}

                {activeTab === 'pendidikan' && (
                  <motion.img
                    key="photo"
                    src="/UNNES.png" 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-fit object-center"
                  />
                )}

              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

          <button 
            onClick={() => handleTabChange('projectsatu')}
            className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${
              activeTab === 'projectsatu' || activeTab === 'projectdua'
              ? "bg-white border-cyan-500 shadow-xl shadow-cyan-50" 
              : "bg-slate-50 border-slate-200 hover:border-cyan-500 hover:bg-white"
            }`}>
              <div className={`p-3 bg-cyan-100 rounded-xl text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors ${
                activeTab === 'projectsatu' || activeTab === 'projectdua' 
                ? 'bg-cyan-600 text-white' : ''
              }`}>
                <Laptop size={24} />
              </div>
              <p className="text-xl font-bold text-slate-900 text-center">Projek</p>
          </button>
          
          <button 
            onClick={() => handleTabChange('magang')}
            className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${
              activeTab === 'magang'
              ? "bg-white border-blue-500 shadow-xl shadow-blue-50" 
              : "bg-slate-50 border-slate-200 hover:border-indigo-500 hover:bg-white"
            }`}>
              <div className={`p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors ${
                activeTab === 'magang' 
                ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
              }`}>
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">Pengalaman Magang</p>
              </div>
          </button>

          <button 
            onClick={() => handleTabChange('sertifikasi')}
            className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${
              activeTab === 'sertifikasi'
              ? "bg-white border-emerald-500 shadow-xl shadow-emerald-50" 
              : "bg-slate-50 border-slate-200 hover:border-emerald-500 hover:bg-white"
            }`}>
              <div className={`p-3 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors ${
                activeTab === 'sertifikasi'
                ? "bg-emerald-600 text-white"
                : "bg-emerald-100 text-emerald-600"
              }`}>
                <Award size={24} />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">Sertifikasi</p>
              </div>
          </button>

          <button 
              onClick={() => handleTabChange('frontend')}
              className={`group p-6 bg-slate-50 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${
                activeTab === 'frontend' 
                ? "border-yellow-500 bg-white shadow-xl shadow-yellow-50" 
                : "border-slate-200 hover:border-yellow-500 hover:bg-white hover:shadow-xl"
              }`}>
            <div className={`p-3 rounded-xl transition-colors ${
              activeTab === 'frontend'
              ? "bg-yellow-600 text-white"
              : "bg-yellow-100 group-hover:bg-yellow-600 group-hover:text-white text-yellow-600"
            }`}>
              <Code2 size={24} />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">Keahlian</p>
            </div>
          </button>

          <button 
              onClick={() => handleTabChange('pendidikan')}
              className={`group p-6  rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${
                activeTab === 'pendidikan'
                ? "bg-white border-purple-500 shadow-xl shadow-purple-50" 
                : "border-slate-200 hover:border-purple-500 hover:bg-white hover:shadow-xl"
              }`}>
            <div className={`p-3 rounded-xl transition-colors ${
              activeTab === 'pendidikan'
              ? "bg-purple-600 text-white"
              : "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
            }`}>
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">Pendidikan</p>
            </div>
          </button>

          <button 
            onClick={() => handleTabChange('contact')}
            className={`group p-6    rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${
              activeTab === 'contact'
              ? "bg-white border-pink-500 shadow-xl shadow-pink-50" 
              : "border-slate-200 hover:border-pink-500 hover:bg-white hover:shadow-xl"
            }`}>
              <div className={`p-3 rounded-xl transition-colors ${
                activeTab === 'contact' 
                ? 'bg-pink-600 text-white' 
                : 'bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white'
              }`}>
                <MessageCircle size={24} />
              </div>
              <p className="text-xl font-bold text-slate-900 text-center">Kontak</p>
          </button>
        </div>
      </section>
    </main>
  )
}