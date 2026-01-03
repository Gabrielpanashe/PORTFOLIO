"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code2, Brain, Shield, User } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-full">
      <Hero />

      {/* About Section Teaser */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-widest uppercase text-primary mb-6">
              <User className="h-3 w-3" />
              About Me
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase mb-8">
              ENGINEERING <span className="gradient-text">WITH PURPOSE.</span>
            </h2>
            <div className="max-w-3xl space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                I am a <span className="text-white font-bold">Computer Engineering student</span> at Chinhoyi University of Technology,
                passionate about bridging the gap between hardware and intelligent software systems. My work focuses
                on building <span className="text-white font-bold">secure architectures</span> and AI-driven solutions that solve
                real-world problems.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed italic">
                Beyond my studies, I am actively involved in the technical community as a member of the
                Computer Society of Zimbabwe and serve in various leadership roles, fostering innovation
                and collaboration.
              </p>
            </div>
            <div className="mt-12">
              <Button size="lg" variant="outline" className="rounded-2xl px-8 h-14 font-black uppercase tracking-widest border-white/10 hover:bg-white/5 transition-all text-white" asChild>
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      </section>

      {/* Featured Teaser */}
      <section className="py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-20"
          >
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-7xl font-black mb-8 tracking-tight leading-none uppercase">
                <span className="text-white">CRAFTING </span>
                <span className="text-[#A67B5B]">SYSTEMS</span>
                <span className="text-white font-outline-2"> THAT </span>
                <span className="text-[#A67B5B]">SCALE</span>
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed mb-10">
                From autonomous AI agents to enterprise-grade full-stack platforms, I focus on building robust,
                secure, and high-performance digital solutions.
              </p>
              <Button variant="outline" size="lg" asChild className="rounded-full h-14 px-8 border-white/10 hover:bg-white/5 font-bold group">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Billboard Management System */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-8">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" />
                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Code2 className="h-5 w-5 text-primary" />
                    <p className="text-primary font-bold text-xs tracking-widest uppercase">Full-Stack System</p>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Billboard Management</h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">Addressing financial leaks in city council revenue collection through streamlined billboard management.</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Button variant="outline" size="sm" className="rounded-xl border-white/10 hover:bg-white/10" asChild>
                      <Link href="https://github.com/lordskyzw/billboardHot100" target="_blank">
                        Source <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" className="rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
                      <Link href="https://hccfrontend.up.railway.app/login" target="_blank">
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Face Powered System */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-8">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" />
                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-5 w-5 text-blue-400" />
                    <p className="text-blue-400 font-bold text-xs tracking-widest uppercase">Security AI</p>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Face Access System</h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">Next-gen biometric authentication with deep learning and real-time liveness detection.</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Button variant="outline" size="sm" className="rounded-xl border-white/10 hover:bg-white/10" asChild>
                      <Link href="https://github.com/Gabrielpanashe/face-access-system" target="_blank">
                        Source <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" className="rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
                      <Link href="#" target="_blank">
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Doctor Assistant AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-8">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-217359f48f4c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" />
                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="h-5 w-5 text-emerald-400" />
                    <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-[8px] text-emerald-400 font-bold uppercase animate-pulse">Alpha</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Doctor AI Assistant</h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">Intelligent medical diagnosis support system powered by LLMs and clinical data.</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Button variant="outline" size="sm" className="rounded-xl border-white/10 hover:bg-white/10" asChild>
                      <Link href="https://github.com/Gabrielpanashe/doctor-ai" target="_blank">
                        Source <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" className="rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
                      <Link href="#" target="_blank">
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center flex flex-col items-center">
          <div className="max-w-3xl">
            <h2 className="text-5xl sm:text-7xl font-black mb-8 tracking-tighter uppercase relative isolate">
              TECHNICAL <span className="gradient-text">DNA</span>.
              <div className="absolute left-1/2 -top-12 -translate-x-1/2 w-32 h-32 bg-primary/20 blur-3xl -z-10 animate-pulse" />
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed mb-12">
              My expertise spans the entire software engineering lifecycle, with a deep specialization in
              intelligent systems and secure infrastructure.
            </p>
            <Button variant="link" size="lg" asChild className="text-primary hover:text-white p-0 h-auto text-xl font-bold group">
              <Link href="/skills" className="flex items-center">
                Explore Full Toolkit <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Sliding Marquee */}
        <div className="relative flex overflow-hidden group py-10 bg-white/[0.01]">
          <motion.div
            className="flex gap-8 animate-marquee"
            animate={{
              x: [0, -1032], // Adjust based on total width of one set
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[
              { name: "React", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400" },
              { name: "Next.js", img: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=400" },
              { name: "Python", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" },
              { name: "TensorFlow", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400" },
              { name: "Node.js", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=400" },
              { name: "Docker", img: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=400" },
              { name: "AI/ML", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" },
              { name: "Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
            ].concat([ // Repeat for seamless loop
              { name: "React", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400" },
              { name: "Next.js", img: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=400" },
              { name: "Python", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" },
              { name: "TensorFlow", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400" },
              { name: "Node.js", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=400" },
              { name: "Docker", img: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=400" },
              { name: "AI/ML", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" },
              { name: "Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
            ]).map((skill, idx) => (
              <div key={idx} className="flex-shrink-0 w-64 h-80 relative rounded-3xl overflow-hidden group/card border border-white/10 shadow-3xl transform hover:scale-105 transition-all duration-500">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700"
                  style={{ backgroundImage: `url('${skill.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/card:opacity-100 transition-opacity z-20" />
                <div className="relative h-full flex flex-col justify-end p-8 z-30">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md mb-4 flex items-center justify-center text-white font-black border border-white/20">
                    {skill.name[0]}
                  </div>
                  <span className="text-xl font-black text-white uppercase tracking-tighter">{skill.name}</span>
                  <div className="h-1 w-0 bg-primary group-hover/card:w-full transition-all duration-500 mt-2 rounded-full" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
