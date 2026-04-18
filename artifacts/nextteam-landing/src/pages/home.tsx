import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  CloudCog,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  TerminalSquare,
  Users,
  X,
  Zap,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

const services = [
  {
    title: "Software Development",
    desc: "Reliable custom software that solves real business challenges and accelerates digital transformation.",
    icon: Code2,
  },
  {
    title: "Cloud Services",
    desc: "Scalable, secure, highly available cloud infrastructure designed to evolve with your organization.",
    icon: CloudCog,
  },
  {
    title: "AI/ML Solutions",
    desc: "Practical AI and machine learning strategies that uncover insights, automate work, and move innovation faster.",
    icon: Cpu,
  },
  {
    title: "IT Consulting",
    desc: "Strategic technology guidance that aligns systems, teams, and investment with long-term business goals.",
    icon: LineChart,
  },
  {
    title: "Infrastructure",
    desc: "High-performance infrastructure planning and management for reliable, always-on enterprise operations.",
    icon: Server,
  },
  {
    title: "Mobile Development",
    desc: "Intuitive mobile experiences for iOS and Android that keep customers and teams connected everywhere.",
    icon: MonitorSmartphone,
  },
  {
    title: "IT Staffing",
    desc: "Top-tier technology professionals and agile teams that integrate quickly with your vision and workflows.",
    icon: Users,
  },
  {
    title: "IT Training",
    desc: "Corporate training programs focused on modern technology stacks to upskill and empower your workforce.",
    icon: GraduationCap,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    desc: "We begin by understanding your business needs, current systems, goals, constraints, and success metrics.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    desc: "Our experts design scalable, secure architecture tailored to your long-term operational roadmap.",
  },
  {
    step: "03",
    title: "Development & Implementation",
    desc: "We build and deploy robust solutions using modern stacks, clear milestones, and disciplined delivery.",
  },
  {
    step: "04",
    title: "Testing & QA",
    desc: "Automated and manual testing validates reliability, security, usability, and performance before launch.",
  },
];

const clients = ["AC Smith", "Abbvie", "Catalent", "AXON", "Amazon", "Celanese"];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Software Development");

  const selectedServiceCopy = useMemo(
    () => services.find((service) => service.title === selectedService)?.desc ?? services[0].desc,
    [selectedService],
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-950 selection:bg-cyan-300/40">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-2xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Moetronix Group home">
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-blue-900/20">
              <span className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-600 to-slate-950" />
              <span className="relative">M</span>
            </div>
            <span className="text-xl font-black tracking-tight text-slate-950">Moetronix</span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/75 px-2 py-1 shadow-sm md:flex">
            <a href="#" className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700">Home</a>
            <a href="#services" className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700">Services</a>
            <a href="#about" className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700">About</a>
            <a href="#process" className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700">Process</a>
            <a href="#contact" className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700">Contact</a>
          </nav>

          <Button className="hidden rounded-full bg-slate-950 px-7 font-bold text-white shadow-lg shadow-slate-950/15 transition-all hover:-translate-y-0.5 hover:bg-blue-700 md:inline-flex">
            Get Started
          </Button>

          <button
            className="rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-20 z-40 border-b border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5 text-lg font-bold text-slate-850">
              {["Home", "Services", "About", "Process", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="mt-2 h-12 rounded-xl bg-blue-700 text-base font-bold text-white hover:bg-blue-800">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <section className="relative overflow-hidden bg-[#061021] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(80,205,255,0.68),transparent_28%),linear-gradient(128deg,#050b18_0%,#082158_48%,#66d8ff_100%)]" />
          <div className="absolute right-[-9%] top-[-18%] h-[620px] w-[820px] rounded-[48%] bg-cyan-300/25 blur-3xl" />
          <div className="absolute bottom-[-24%] left-[-16%] h-[560px] w-[560px] rounded-full bg-blue-950/80 blur-[85px]" />
          <div className="absolute bottom-[-16%] right-[-10%] h-[560px] w-[900px] rotate-[-25deg] rounded-[100%_0_0_0] bg-sky-300/25" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:64px_64px] opacity-70" />
          <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,62 C20,44 32,68 50,52 C68,36 84,54 100,38" fill="none" stroke="rgba(255,255,255,.32)" strokeWidth="0.12" />
            <path d="M0,48 C20,34 34,44 52,40 C72,36 83,22 100,28" fill="none" stroke="rgba(138,210,255,.32)" strokeWidth="0.08" />
          </svg>

          <div className="container relative z-10 mx-auto px-6 py-24 md:px-8 md:py-32">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-50 shadow-2xl backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.9)]" />
                Premium IT Solutions
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                Drive Growth with Scalable, Smart IT Solutions
              </h1>
              <p className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-blue-50/82 md:text-lg">
                From custom software to cloud integration, Moetronix Group delivers reliable IT services that evolve with your business needs.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button className="h-13 rounded-full bg-white px-8 text-sm font-black text-slate-950 shadow-[0_0_40px_-12px_rgba(255,255,255,.75)] transition-all hover:-translate-y-1 hover:bg-blue-50">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-13 rounded-full border-white/15 bg-white/8 px-8 text-sm font-black text-white transition-all hover:-translate-y-1 hover:bg-white/12">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="overflow-hidden border-b border-slate-200 bg-white py-8">
          <div className="flex min-w-max animate-[marquee_28s_linear_infinite] items-center gap-12 text-sm font-black uppercase tracking-[0.28em] text-slate-400">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={`${client}-${index}`} className="flex items-center gap-12">
                <span>{client}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-28">
          <div className="container mx-auto px-6 md:px-8">
            <motion.div className="mb-16 max-w-3xl" {...fadeInUp}>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-blue-700">Our Expertise</p>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Ignite Your Success With Our Technology Services
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-90px" }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/8"
                  >
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-blue-700 transition-all group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-black text-slate-950">{service.title}</h3>
                    <p className="min-h-[96px] text-sm font-medium leading-relaxed text-slate-600">{service.desc}</p>
                    <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-blue-700 transition-colors hover:text-slate-950">
                      Read More <ArrowRight className="h-4 w-4" />
                    </a>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-28">
          <div className="container mx-auto grid items-center gap-14 px-6 md:px-8 lg:grid-cols-[1fr_0.92fr]">
            <motion.div className="relative" {...fadeInUp}>
              <div className="rounded-[2.5rem] border border-slate-200 bg-slate-950 p-5 shadow-2xl shadow-blue-950/16">
                <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 p-5 text-white">
                  <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-3 h-3 w-32 rounded-full bg-white/16" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
                    <div className="space-y-4 rounded-2xl bg-white/8 p-4">
                      <div className="h-24 rounded-xl bg-cyan-300/25" />
                      <div className="h-3 w-3/4 rounded-full bg-white/25" />
                      <div className="h-3 w-1/2 rounded-full bg-white/18" />
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="h-16 rounded-xl bg-white/10" />
                        <div className="h-16 rounded-xl bg-white/10" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white p-5 text-slate-950">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="font-black">Cloud Readiness</span>
                          <span className="text-sm font-black text-blue-700">+240%</span>
                        </div>
                        <div className="grid h-32 grid-cols-7 items-end gap-2">
                          {[34, 56, 42, 70, 62, 88, 78].map((height, index) => (
                            <div key={index} className="rounded-t-lg bg-gradient-to-t from-blue-700 to-cyan-300" style={{ height: `${height}%` }} />
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/10 p-4">
                          <Database className="mb-5 h-6 w-6 text-cyan-200" />
                          <div className="h-2 w-full rounded-full bg-white/22" />
                        </div>
                        <div className="rounded-2xl bg-white/10 p-4">
                          <ShieldCheck className="mb-5 h-6 w-6 text-cyan-200" />
                          <div className="h-2 w-3/4 rounded-full bg-white/22" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 rounded-2xl border border-white/70 bg-white px-5 py-4 text-sm font-black text-slate-950 shadow-xl">
                App & AI Solutions
              </div>
              <div className="absolute -bottom-5 left-8 rounded-2xl border border-white/70 bg-white px-5 py-4 text-sm font-black text-slate-950 shadow-xl">
                Custom Software Dev
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-blue-700">About Us</p>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                Delivering Innovative IT Solutions For Your Business.
              </h2>
              <p className="mb-5 text-xl font-bold text-slate-800">Your trusted IT partner with extensive industry experience.</p>
              <p className="mb-8 text-lg font-medium leading-relaxed text-slate-600">
                At Moetronix Group, we provide innovative technology solutions tailored to meet your business needs. Our skilled team offers personalized services, reliable support, and advanced technology to help you achieve your goals.
              </p>
              <div className="space-y-4">
                {[
                  "End-to-end software and application development",
                  "Reliable IT staffing and customized training",
                  "Efficient cloud migration and infrastructure solutions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-base font-bold text-slate-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                    {item}
                  </div>
                ))}
              </div>
              <Button className="mt-9 rounded-full bg-blue-700 px-8 font-black text-white shadow-lg shadow-blue-700/20 hover:bg-blue-800">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="overflow-hidden bg-slate-950 py-8 text-white">
          <div className="flex min-w-max animate-[marquee_32s_linear_infinite] items-center gap-10 text-2xl font-black uppercase tracking-tight text-white/70 md:text-4xl">
            {Array.from({ length: 6 }).map((_, index) => (
              <React.Fragment key={index}>
                <span>Scalable Cloud Solutions</span>
                <span className="text-cyan-300">Digital Transformation</span>
                <span>IT Excellence</span>
                <span className="text-blue-400">Enterprise Software</span>
                <span>AI/ML Innovation</span>
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="bg-white py-28">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div {...fadeInUp}>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-blue-700">The Moetronix Advantage</p>
                <h2 className="mb-6 max-w-xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                  Built for those who demand excellence.
                </h2>
                <p className="max-w-lg text-lg font-medium leading-relaxed text-slate-600">
                  We do not just write code; we engineer scalable engines of growth. Partner with a team that treats your product with the exact same obsession you do.
                </p>
                <div className="mt-10 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-blue-950/15">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Performance</p>
                  <div className="mt-4 text-6xl font-black">+240%</div>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-white/65">Efficiency gains from modernized systems, automation, and resilient cloud-native architecture.</p>
                </div>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-2">
                {[
                  ["Built for Scale", "Every line of code is engineered for resilience, security, and raw performance at enterprise scale.", Layers],
                  ["Client-Centric DNA", "Your success is the metric that matters. We embed into your workflow to understand unique challenges.", Users],
                  ["Future-Ready Tech", "Cloud-native, AI-driven architectures designed to keep you ahead of the innovation curve.", Rocket],
                  ["Uncompromising Security", "Enterprise-grade protection woven into every solution to protect your data and infrastructure.", ShieldCheck],
                  ["End-to-End Execution", "From napkin sketches to global deployment, you get one accountable partner for the full lifecycle.", TerminalSquare],
                ].map(([title, desc, Icon], index) => {
                  const AdvantageIcon = Icon as typeof Layers;
                  return (
                    <motion.article
                      key={title as string}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className={`rounded-[2rem] border border-slate-200 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${index === 4 ? "bg-blue-700 text-white md:col-span-2" : "bg-slate-50 text-slate-950"}`}
                    >
                      <div className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl ${index === 4 ? "bg-white/12 text-cyan-100" : "bg-white text-blue-700"}`}>
                        <AdvantageIcon className="h-6 w-6" />
                      </div>
                      <p className={`mb-2 text-xs font-black uppercase tracking-[0.24em] ${index === 4 ? "text-cyan-100" : "text-blue-700"}`}>{String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mb-3 text-2xl font-black">{title as string}</h3>
                      <p className={`font-medium leading-relaxed ${index === 4 ? "text-white/72" : "text-slate-600"}`}>{desc as string}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-slate-50 py-28">
          <div className="container mx-auto px-6 md:px-8">
            <motion.div className="mb-16 text-center" {...fadeInUp}>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-blue-700">Work Process</p>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Four Steps Work Process</h2>
            </motion.div>
            <div className="grid gap-5 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="absolute -right-5 -top-5 text-8xl font-black text-slate-100">{step.step}</div>
                  <div className="relative z-10">
                    <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-sm font-black text-white">{index + 1}</div>
                    <h3 className="mb-3 text-xl font-black text-slate-950">{step.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-slate-600">{step.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-white py-28">
          <div className="absolute left-1/2 top-0 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-blue-50 blur-[95px]" />
          <div className="container relative z-10 mx-auto grid gap-10 px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div {...fadeInUp}>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-blue-700">Let's Build Something Great</p>
              <h2 className="mb-5 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Let's Connect & Collaborate</h2>
              <p className="mb-10 max-w-xl text-lg font-medium leading-relaxed text-slate-600">
                Reach out to discuss your IT needs, request a customized quote, or get expert guidance on solutions that drive your business forward.
              </p>

              <div className="rounded-[2.25rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 font-semibold outline-none transition-all focus:border-blue-400 focus:bg-white" placeholder="Your Name" />
                  <input className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 font-semibold outline-none transition-all focus:border-blue-400 focus:bg-white" placeholder="Email Address" />
                  <input className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 font-semibold outline-none transition-all focus:border-blue-400 focus:bg-white" placeholder="Phone Number" />
                  <div className="relative">
                    <select
                      value={selectedService}
                      onChange={(event) => setSelectedService(event.target.value)}
                      className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 font-semibold outline-none transition-all focus:border-blue-400 focus:bg-white"
                    >
                      {services.map((service) => (
                        <option key={service.title}>{service.title}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  </div>
                  <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-semibold outline-none transition-all focus:border-blue-400 focus:bg-white md:col-span-2" placeholder="Write Message..." />
                </div>
                <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-600">Selected service: {selectedServiceCopy}</div>
                <Button className="mt-6 h-14 w-full rounded-2xl bg-blue-700 text-base font-black text-white shadow-lg shadow-blue-700/20 hover:bg-blue-800">
                  Let's Get Started <Send className="ml-2 h-4 w-4" />
                </Button>
                <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold text-slate-500">
                  <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-700" /> Your data is secure</span>
                  <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-blue-700" /> Response within 24hrs</span>
                  <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-700" /> Free consultation</span>
                </div>
              </div>
            </motion.div>

            <motion.aside className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-blue-950/20 md:p-10" {...fadeInUp}>
              <div className="mb-10 rounded-[1.8rem] bg-gradient-to-br from-blue-700 via-slate-900 to-cyan-500 p-8">
                <p className="text-2xl font-black leading-tight">Great partnerships begin with a simple conversation.</p>
              </div>
              <div className="space-y-6">
                {[
                  [Mail, "Email", "info@moetronixgroup.com"],
                  [Phone, "Phone", "314-280-9043"],
                  [MapPin, "Visit Us", "3320 Locust St, Saint Louis, MO"],
                ].map(([Icon, label, value]) => {
                  const ContactIcon = Icon as typeof Mail;
                  return (
                    <div key={label as string} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                        <ContactIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">{label as string}</p>
                        <p className="mt-1 font-bold leading-relaxed text-white/85">{value as string}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="bg-blue-700 py-24 text-white">
          <div className="container mx-auto px-6 text-center md:px-8">
            <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Ready to build your next breakthrough project?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-blue-50/80">Moetronix Group brings custom software, cloud, AI, staffing, and training into one accountable technology partner.</p>
            <Button className="mt-10 h-14 rounded-full bg-white px-9 text-base font-black text-blue-700 shadow-xl hover:bg-blue-50">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-16 text-slate-400">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-slate-950 text-sm font-black text-white">M</div>
                <span className="text-2xl font-black tracking-tight text-white">Moetronix Group</span>
              </div>
              <p className="max-w-md text-base font-medium leading-relaxed text-slate-400">
                Premium IT solutions for companies that need reliable software, scalable cloud systems, AI-enabled workflows, and technology teams that deliver.
              </p>
            </div>
            <div className="md:col-span-2">
              <h4 className="mb-5 font-black text-white">Navigation</h4>
              <ul className="space-y-3 font-semibold">
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#process" className="hover:text-white">Process</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="mb-5 font-black text-white">Services</h4>
              <ul className="space-y-3 font-semibold">
                <li>Software Development</li>
                <li>Cloud Services</li>
                <li>AI/ML Solutions</li>
                <li>IT Staffing</li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="mb-5 font-black text-white">Contact</h4>
              <ul className="space-y-3 font-semibold">
                <li>info@moetronixgroup.com</li>
                <li>314-280-9043</li>
                <li>3320 Locust St, Saint Louis, MO</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm font-semibold md:flex-row">
            <p>© {new Date().getFullYear()} Moetronix Group. All rights reserved.</p>
            <p>Scalable cloud solutions • Digital transformation • IT excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
