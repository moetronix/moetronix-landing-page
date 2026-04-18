import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Zap, 
  LineChart, 
  ShieldCheck, 
  Rocket, 
  TerminalSquare,
  Users,
  Menu,
  X,
  ChevronDown,
  MonitorSmartphone,
  Server,
  CloudCog,
  Figma,
  Star,
  ExternalLink,
  Laptop
} from "lucide-react";
import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricingMode, setPricingMode] = useState<"monthly" | "quarterly">("monthly");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all">
        <div className="container mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">
              N
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Nextteam</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 px-2 py-1 shadow-sm">
            <a href="#" className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors">Services</a>
            <a href="#work" className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors">Portfolio</a>
          </nav>
          
          <div className="hidden md:flex items-center gap-5">
            <Button className="bg-slate-950 hover:bg-blue-700 text-white rounded-full px-7 font-semibold shadow-md hover:shadow-lg transition-all active:scale-95">
              Book a Call
            </Button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl z-40 md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              <a href="#" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#work" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
              <div className="h-px bg-slate-200/50" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 text-lg font-semibold">
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-[#071124] text-white pt-24 pb-28 md:pt-28 md:pb-32 overflow-hidden">
          {/* High-end abstract background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(76,191,255,0.55),transparent_28%),linear-gradient(128deg,#061326_0%,#062a62_48%,#68d6ff_100%)]" />
            <div className="absolute right-[-10%] top-[-18%] h-[560px] w-[780px] rounded-[45%] bg-cyan-300/30 blur-3xl" />
            <div className="absolute bottom-[-30%] left-[-12%] w-[620px] h-[620px] rounded-full bg-blue-950/75 blur-[80px]" />
            <div className="absolute right-[-8%] bottom-[-12%] h-[520px] w-[820px] rotate-[-26deg] rounded-[100%_0_0_0] bg-sky-300/30" />
            
            {/* Very subtle grid and noise */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[length:18px_18px] opacity-[0.16] mix-blend-overlay" />
            <div className="absolute inset-0" 
                 style={{ 
                   backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                   backgroundSize: '4rem 4rem',
                   maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)',
                   WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)'
                 }} 
            />

            {/* Decorative tech lines */}
            <svg className="absolute left-0 top-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-blue-500" />
              <path d="M0,60 Q30,80 60,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.05" className="text-indigo-400" />
            </svg>
          </div>

          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/7 border border-white/15 backdrop-blur-md mb-10 text-xs md:text-sm font-semibold text-blue-100 shadow-xl"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              AI-accelerated product delivery
            </motion.div>
            
            <motion.h1 
              className="max-w-3xl text-5xl md:text-7xl font-extrabold tracking-tight mb-7 leading-[1.04]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Ship Your MVP in 30 Days Not 6 Months
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg text-blue-50/80 mb-10 max-w-2xl leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Battle-tested code. Enterprise-grade quality. AI-accelerated delivery. Stop losing momentum to slow teams and ship a product users can trust.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Button size="lg" className="w-full sm:w-auto h-13 px-8 text-sm font-bold bg-white text-slate-950 hover:bg-blue-50 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.65)] transition-all hover:-translate-y-1">
                Schedule Strategy Call
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-13 px-8 text-sm font-bold bg-white/8 border-white/15 text-white hover:bg-white/12 hover:border-white/25 rounded-full transition-all hover:-translate-y-1">
                View Our Process <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section id="about" className="py-20 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <div>
                <p className="text-xs font-bold text-blue-700 uppercase tracking-[0.22em] mb-4">
                  Companies growing with us
                </p>
                <h2 className="max-w-xl text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-5">
                  A Growth Partner to 50+ Companies
                </h2>
                <p className="max-w-lg text-slate-600 font-medium leading-relaxed">
                  Trusted by teams at Built Vista, DOT Innovate, and government institutions building products where speed, quality, and reliability all matter.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: "Users enabled with smooth adoption", val: "1000+" },
                  { label: "Cost reduction average for clients", val: "50%" },
                  { label: "Average MVP delivery window", val: "30d" }
                ].map((stat, i) => (
                  <div key={i} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                    <div className="text-3xl font-extrabold text-blue-950 mb-3">{stat.val}</div>
                    <div className="text-sm font-semibold leading-relaxed text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-14 h-px bg-slate-100" />
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Abstract premium logos */}
              {['Acme Corp', 'Nexus', 'Stark', 'Globex', 'Soylent'].map((name, i) => (
                <div key={i} className="flex items-center gap-3 font-extrabold text-2xl text-slate-800 tracking-tight">
                  <div className={`w-8 h-8 rounded-lg ${i % 2 === 0 ? 'bg-slate-800' : 'border-4 border-slate-800'}`} />
                  {name}
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <motion.div 
              className="text-center mb-20"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                Most MVPs Fail Before They Start
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                Building an internal product team takes months. Freelancers are unreliable. Traditional agencies move too slow and cost too much.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { title: "Endless Development", desc: "Months spent writing code without shipping to real users, missing critical market windows.", icon: <TerminalSquare className="w-8 h-8 text-rose-500" /> },
                { title: "Technical Debt Trap", desc: "Rushed architecture choices from cheap freelancers that require complete rewrites once you find product-market fit.", icon: <Code2 className="w-8 h-8 text-amber-500" /> },
                { title: "Budget Drain", desc: "Burning through valuable runway on senior engineering salaries before validating your core assumptions.", icon: <LineChart className="w-8 h-8 text-blue-500" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="services" className="py-32 bg-white">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <motion.div 
              className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide uppercase mb-6">
                  <Zap className="w-4 h-4" /> The Nextteam Advantage
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                  A Different Approach
                </h2>
                <p className="text-xl text-slate-600 font-medium">
                  We use opinionated stacks, AI-accelerated workflows, and battle-tested components to build your product faster than humanly possible.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { title: "AI-Accelerated Development", desc: "We compress research, scaffolding, testing, and iteration cycles with AI-assisted workflows guided by senior builders.", icon: <Zap className="w-6 h-6 text-blue-600" /> },
                { title: "Full-Stack Ownership", desc: "Product strategy, interface design, backend architecture, integrations, and launch support handled by one accountable team.", icon: <Users className="w-6 h-6 text-blue-600" /> },
                { title: "30-Day Delivery", desc: "Tight scope, proven foundations, and weekly decision loops keep your first usable release measured in days, not quarters.", icon: <Rocket className="w-6 h-6 text-blue-600" /> },
                { title: "Battle-Tested Foundation", desc: "Modern stacks, secure patterns, analytics, deployment, and clean architecture baked in from the first commit.", icon: <ShieldCheck className="w-6 h-6 text-blue-600" /> },
                { title: "Flexible Payment", desc: "Sprint-based engagement options keep runway protected while giving you senior-level product execution on demand.", icon: <LineChart className="w-6 h-6 text-blue-600" /> },
                { title: "100% Transparency", desc: "Clear scope, visible progress, direct communication, and no surprise invoices or hidden handoffs.", icon: <CheckCircle2 className="w-6 h-6 text-blue-600" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="p-8 rounded-3xl bg-slate-50/50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-24 bg-[#0A0F1C] border-y border-slate-800">
          <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
            <h3 className="text-2xl font-bold text-white mb-12">Built With Proven Tools</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                { name: "React", icon: <Code2 className="w-10 h-10 text-cyan-400" /> },
                { name: "Laravel", icon: <Laptop className="w-10 h-10 text-white" /> },
                { name: "TypeScript", icon: <TerminalSquare className="w-10 h-10 text-blue-400" /> },
                { name: "Tailwind", icon: <CloudCog className="w-10 h-10 text-sky-400" /> },
                { name: "Node.js", icon: <Server className="w-10 h-10 text-green-300" /> },
                { name: "PostgreSQL", icon: <Server className="w-10 h-10 text-blue-300" /> },
                { name: "Flutter", icon: <MonitorSmartphone className="w-10 h-10 text-cyan-300" /> },
                { name: "AWS", icon: <CloudCog className="w-10 h-10 text-orange-300" /> },
                { name: "Docker", icon: <Figma className="w-10 h-10 text-blue-300" /> }
              ].map((tool, i) => (
                <div key={i} className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity cursor-default group">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    {tool.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-300 tracking-wide">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio / Recent Work */}
        <section id="work" className="py-32 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <motion.div 
              className="text-center mb-20"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                Recent Work
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                We don't just build toy apps. We build complex, data-heavy B2B SaaS, marketplaces, and fintech platforms.
              </p>
            </motion.div>

            <div className="space-y-24">
              {[
                {
                  title: "Government Dashboard",
                  desc: "A secure reporting command center that replaced spreadsheet workflows with realtime approvals, audit trails, and executive-ready analytics.",
                  tags: ["Challenge: fragmented reporting", "Result: 64% faster review", "Timeline: 30 days"],
                  color: "bg-blue-600"
                },
                {
                  title: "KOL Platform",
                  desc: "A creator campaign platform connecting brands with verified key opinion leaders, automating outreach, pricing, contracts, and campaign performance.",
                  tags: ["Challenge: manual matching", "Result: 3.2x campaign speed", "Timeline: 28 days"],
                  color: "bg-indigo-600",
                  reverse: true
                },
                {
                  title: "Healthcare System",
                  desc: "A HIPAA-conscious patient operations portal for scheduling, intake, internal handoffs, and care-team visibility across multiple locations.",
                  tags: ["Challenge: scattered ops", "Result: 41% less admin work", "Timeline: 35 days"],
                  color: "bg-purple-600"
                }
              ].map((work, i) => (
                <motion.div 
                  key={i}
                  className={`flex flex-col ${work.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="flex-1 w-full">
                    <div className={`w-full aspect-[4/3] rounded-3xl ${work.color} p-8 flex items-center justify-center relative overflow-hidden shadow-2xl`}>
                      <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                      <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col p-6 shadow-xl transform hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
                        {/* Mock UI Header */}
                        <div className="flex items-center gap-2 mb-6 border-b border-white/20 pb-4">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          <div className="ml-4 h-4 w-32 bg-white/20 rounded-full"></div>
                        </div>
                        {/* Mock UI Body */}
                        <div className="flex-1 flex gap-4">
                          <div className="w-1/4 h-full bg-white/10 rounded-xl hidden sm:block"></div>
                          <div className="flex-1 flex flex-col gap-4">
                            <div className="h-8 w-1/2 bg-white/20 rounded-xl"></div>
                            <div className="flex-1 bg-white/10 rounded-xl flex items-end p-4 gap-2">
                              <div className="w-full h-[30%] bg-white/20 rounded-t-sm"></div>
                              <div className="w-full h-[60%] bg-white/20 rounded-t-sm"></div>
                              <div className="w-full h-[40%] bg-white/30 rounded-t-sm"></div>
                              <div className="w-full h-[80%] bg-white/40 rounded-t-sm"></div>
                              <div className="w-full h-[50%] bg-white/20 rounded-t-sm"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div className="flex gap-2">
                      {work.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold tracking-wider uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900">{work.title}</h3>
                    <p className="text-xl text-slate-600 leading-relaxed">{work.desc}</p>
                    <Button variant="link" className="px-0 text-blue-600 font-bold text-lg hover:text-blue-700">
                      View Case Study <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Estimator */}
        <section id="pricing" className="py-32 bg-white relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-6 md:px-8 max-w-5xl relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                Fair And Transparent Pricing
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                Estimate the right delivery model for your MVP before a sales call. Clear roles, clear scope, and no hidden fees.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 flex flex-col md:flex-row overflow-hidden"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex-1 p-10 md:p-16 space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-extrabold text-slate-900">Dedicated Sprint</h3>
                    <p className="text-lg text-slate-500 mt-2 font-medium">Perfect for 0-1 MVPs and continuous iteration.</p>
                  </div>
                  
                  {/* Pricing Toggle */}
                  <div className="bg-slate-100 p-1 rounded-xl hidden sm:flex">
                    <button 
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${pricingMode === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                      onClick={() => setPricingMode('monthly')}
                    >
                      Monthly
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${pricingMode === 'quarterly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                      onClick={() => setPricingMode('quarterly')}
                    >
                      Quarterly (-10%)
                    </button>
                  </div>
                </div>
                
                <div className="h-px bg-slate-100 w-full" />
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Dedicated Senior Full-Stack Dev', 
                    'Product Designer (Part-time)', 
                    'Weekly sprint planning calls', 
                    'Unlimited design/dev requests', 
                    'Pause or cancel anytime',
                    'Direct Slack channel access'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-[380px] bg-slate-900 p-10 md:p-16 text-white flex flex-col justify-center">
                <div className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Investment</div>
                <div className="flex items-end gap-2 mb-2">
                  <div className="text-6xl font-extrabold tracking-tight">
                    {pricingMode === 'monthly' ? '$8.5k' : '$7.6k'}
                  </div>
                </div>
                <div className="text-slate-400 font-medium mb-8">per month{pricingMode === 'quarterly' ? ', billed quarterly' : ''}</div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl h-14 text-lg font-bold shadow-lg mb-6 transition-transform hover:-translate-y-1">
                  Book Strategy Call
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-400 font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  1 spot available for next month
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-8 max-w-3xl">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                Common Questions
              </h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "Why shouldn't I just hire a full-time developer?", a: "Hiring a senior developer takes 1-3 months, costs $150k+ per year (plus benefits), and requires equity. With Nextteam, you get instant access to a senior team, no equity required, and you can pause your subscription when development slows down." },
                  { q: "What tech stack do you use?", a: "We build primarily with React, Next.js, Node.js, TypeScript, Tailwind, and Postgres. We've found this stack offers the best balance of development speed, ecosystem support, and enterprise-grade scalability." },
                  { q: "How fast will I see results?", a: "You'll see progress within the first week. We push updates every 2-3 days so you can test features as they're built. Most MVPs are ready for their first users within 3-4 weeks depending on complexity." },
                  { q: "What does 'Unlimited requests' mean?", a: "You can add as many tasks to your backlog as you want. We'll work through them one by one (or two at a time for larger plans). Once a task is approved, we immediately start on the next one." },
                  { q: "Who owns the code?", a: "You do. 100%. Everything we build for you is your intellectual property from day one. You have full admin access to the GitHub repository." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-none rounded-2xl bg-white px-6 shadow-sm overflow-hidden">
                    <AccordionTrigger className="text-left font-bold text-lg text-slate-900 hover:no-underline py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-lg pb-6 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[length:20px_20px] opacity-[0.22] mix-blend-overlay" />
          <div className="absolute -top-[50%] -right-[10%] w-[1000px] h-[1000px] rounded-full bg-blue-500/50 blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-6 md:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Ready To Start?
            </h2>
            <p className="text-blue-100 text-2xl mb-12 font-medium max-w-2xl mx-auto">
              Join ambitious founders who have accelerated their product development with Nextteam.
            </p>
            <Button size="lg" className="h-16 px-12 text-xl font-bold bg-white text-blue-600 hover:bg-slate-50 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1">
              Book Your Strategy Call
            </Button>
            <p className="mt-8 text-blue-200 text-sm font-medium">No commitment. Just a conversation about your product goals.</p>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="bg-[#0A0F1C] text-slate-400 py-20 border-t border-slate-800/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            <div className="md:col-span-5 pr-0 md:pr-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  N
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">Nextteam</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                The premium product studio building battle-tested software for ambitious founders. Ship faster. Scale infinitely.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#process" className="hover:text-white transition-colors font-medium">Our Process</a></li>
                <li><a href="#services" className="hover:text-white transition-colors font-medium">Services</a></li>
                <li><a href="#work" className="hover:text-white transition-colors font-medium">Recent Work</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors font-medium">Pricing</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors font-medium">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Contact</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors font-medium">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
            <p>© {new Date().getFullYear()} Nextteam Studio. All rights reserved.</p>
            <p className="mt-4 md:mt-0 flex items-center gap-2">
              Designed with <span className="text-blue-500">♥</span> in San Francisco
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
