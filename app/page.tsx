"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />

      {/* Featured Teaser */}
      <section className="py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight leading-tight">
                <span className="text-white">CRAFTING </span>
                <span className="text-[#A67B5B]">SYSTEMS</span>
                <span className="text-white"> THAT </span>
                <span className="text-[#A67B5B]">SCALE</span>
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed">
                From autonomous AI agents to enterprise-grade full-stack platforms, I focus on building robust,
                secure, and high-performance digital solutions.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="rounded-full h-14 px-8 border-white/10 hover:bg-white/5 font-bold group">
              <Link href="/projects">
                All Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project A */}
            <div className="group relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700" />
                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent z-0" />
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-primary font-bold text-xs tracking-widest uppercase mb-3">Project Highlight A</p>
                  <h3 className="text-3xl font-black text-white mb-2 uppercase">AI Face Powered System</h3>
                  <p className="text-muted-foreground text-lg mb-6 line-clamp-2">Next-gen biometric authentication with deep learning and real-time liveness detection.</p>
                  <Link href="/projects" className="inline-flex items-center text-white font-bold hover:text-primary transition-colors">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project B */}
            <div className="group relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black/40 flex flex-col justify-end p-10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-217359f48f4c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700" />
                <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent z-0" />
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-emerald-500 font-bold text-xs tracking-widest uppercase">Project Highlight B</p>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-bold uppercase animate-pulse">In Development</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 uppercase">Doctor Assistant AI</h3>
                  <p className="text-muted-foreground text-lg mb-6 line-clamp-2">Intelligent medical diagnosis support system powered by large language models and clinical data.</p>
                  <Link href="/projects" className="inline-flex items-center text-white font-bold hover:text-primary transition-colors">
                    Track Progress <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-black mb-8 tracking-tighter uppercase relative isolate">
              TECHNICAL <span className="text-[#A67B5B]">DNA</span>.
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-primary/10 blur-3xl -z-10 animate-pulse" />
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
        <div className="relative flex overflow-hidden group">
          <motion.div
            className="flex gap-6 py-4 animate-marquee"
            animate={{
              x: [0, -1032], // Adjust based on total width of one set
            }}
            transition={{
              duration: 25,
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
              <div key={idx} className="flex-shrink-0 w-64 h-80 relative rounded-3xl overflow-hidden group/card border border-white/10 shadow-3xl transform group-hover:scale-[0.98] transition-all">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700"
                  style={{ backgroundImage: `url('${skill.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
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
