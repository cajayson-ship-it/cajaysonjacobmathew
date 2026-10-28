"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Scale, 
  Globe2, 
  ShieldCheck, 
  Briefcase, 
  FileCheck2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ExternalLink,
  CheckCircle2,
  Copy,
  Check
} from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeArea, setActiveArea] = useState("all");

  const copyEmail = () => {
    navigator.clipboard.writeText("jayson@sajuandco.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const experience = [
    {
      role: "Partner",
      company: "Saju & Co, Chartered Accountants",
      period: "Feb 2013 – Present",
      duration: "13+ Years",
      location: "Kochi, Kerala, India",
      summary:
        "Leading high-stakes GST and Kerala VAT cases, statutory audits in IT and commercial sectors, and representing clients in legal proceedings before the Supreme Court of India and CESTAT Bangalore. Managing project loans and appellate proceedings for Income Tax and Service Tax.",
      highlights: [
        "Represented clients before Supreme Court of India & CESTAT Bangalore",
        "Spearheaded comprehensive GST implementation and Kerala VAT litigation",
        "Led project loan structuring, financial due diligence, and risk governance"
      ]
    },
    {
      role: "Manager – Taxation",
      company: "Saju & Co",
      period: "Mar 2012 – Jan 2013",
      duration: "11 Months",
      location: "Kochi, Kerala",
      summary:
        "Specialized in direct and indirect taxation, including Service Tax advisory, Income Tax compliance, and VAT assessments.",
      highlights: [
        "Structured corporate tax filings for corporate and partnership clients",
        "Handled departmental inquiries, audits, and appeal submissions"
      ]
    },
    {
      role: "Works Manager",
      company: "Sankar and Moorthy",
      period: "Aug 2011 – Mar 2012",
      duration: "8 Months",
      location: "Kochi, Kerala",
      summary:
        "Supervised operational execution, workflow coordination, administrative controls, and internal process efficiencies.",
      highlights: [
        "Optimized operating workflows and accountability metrics"
      ]
    },
    {
      role: "Audit Executive",
      company: "Zachariah George & Co",
      period: "Jan 2010 – Jul 2011",
      duration: "1 Year 7 Months",
      location: "Kerala",
      summary:
        "Executed statutory audits, internal financial controls evaluation, and compliance verification across commercial entities.",
      highlights: [
        "Conducted statutory and management audits",
        "Identified operational control improvements for clients"
      ]
    },
    {
      role: "Audit Executive & Assistant",
      company: "M M Herbert & Associates",
      period: "Feb 2007 – Dec 2009",
      duration: "2 Years 10 Months",
      location: "Kochi, Kerala",
      summary:
        "Conducted detailed audit procedures, vouching, ledger scrutiny, and assisted senior partners in tax audit preparations.",
      highlights: [
        "Assisted in multi-sector audits and corporate documentation"
      ]
    },
    {
      role: "Article Assistant",
      company: "JVR & Associates",
      period: "2005 – 2007",
      duration: "2 Years",
      location: "Kerala",
      summary:
        "Foundational ICAI articleship covering book-keeping review, statutory filings, and audit working papers.",
      highlights: [
        "Completed rigorous hands-on practical training under ICAI framework"
      ]
    }
  ];

  const strategicRoles = [
    {
      title: "Independent Director",
      organization: "Danube Industries Limited",
      description:
        "Providing independent board oversight, strategic corporate governance, and long-term financial guidance to protect stakeholder interests.",
      tag: "Governance"
    },
    {
      title: "Director & International Business Advisor",
      organization: "Indian Economic Trade Organization (IETO)",
      description:
        "Advising on cross-border trade structuring, international economic cooperation, and institutional strategic relations.",
      tag: "Global Trade"
    },
    {
      title: "Senior Partner",
      organization: "Saju & Co, Chartered Accountants",
      description:
        "Directing the firm's advisory practice in corporate restructuring, succession planning, LLP advisory, and appellate taxation.",
      tag: "Practice Leadership"
    },
    {
      title: "Peer Reviewer",
      organization: "Institute of Chartered Accountants of India (ICAI)",
      description:
        "Assessing and verifying audit quality assurance, documentation rigor, and professional standard compliance among peer practitioners.",
      tag: "Professional Standards"
    }
  ];

  const certifications = [
    { title: "Chartered Accountant", org: "ICAI", type: "Core Designation" },
    { title: "Arbitration", org: "ICAI Certification", type: "Dispute Resolution" },
    { title: "FEMA (Foreign Exchange)", org: "ICAI Certification", type: "Cross-Border" },
    { title: "Artificial Intelligence & ML", org: "ICAI Certification", type: "Emerging Tech" },
    { title: "FAFD (Forensic Accounting)", org: "ICAI Certification", type: "Risk & Fraud" },
    { title: "BRSR (Sustainability)", org: "ICAI Certification", type: "ESG & Governance" },
    { title: "GST Certification", org: "ICAI Certification", type: "Indirect Tax" },
    { title: "Public Finance & Govt Acct", org: "ICAI Certification", type: "Public Sector" },
    { title: "Concurrent Audits", org: "ICAI Certification", type: "Banking & Audit" },
    { title: "B.Com (Commerce)", org: "KG College, Pampady", type: "Academic (2000–2003)" }
  ];

  const featuredWork = [
    {
      title: "Intergenerational Succession & Legacy Roadmaps",
      sector: "Family Businesses & Founders",
      narrative:
        "Navigating multi-generational ownership transitions through structured LLPs, family governance constitutions, and tax-efficient asset distribution strategies.",
      result: "Protects enterprise continuity and eliminates leadership ambiguity."
    },
    {
      title: "Appellate Representation before Supreme Court & CESTAT",
      sector: "Corporate Litigation & Tax Appeals",
      narrative:
        "Successfully argued and prepared complex appeals involving GST, Kerala VAT, and Service Tax questions of law before the highest appellate judicial forums.",
      result: "Resolved high-exposure tax assessments and legal ambiguities."
    },
    {
      title: "Public Company Governance Oversight",
      sector: "Danube Industries Limited",
      narrative:
        "Executing fiduciary governance duties as an Independent Director, ensuring transparent investor reporting, regulatory adherence, and prudent balance-sheet strategy.",
      result: "Strengthened board accountability and institutional governance."
    },
    {
      title: "International Business & Trade Structuring",
      sector: "Indian Economic Trade Organization (IETO)",
      narrative:
        "Advising domestic enterprises on cross-border business structuring, FEMA regulations, and bilateral trade delegation engagements.",
      result: "Facilitated structured international market entry and compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] antialiased">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-md border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-lg bg-[#0f172a] text-[#f8fafc] font-bold flex items-center justify-center text-sm tracking-wider">
              CA
            </span>
            <div>
              <span className="font-extrabold text-lg tracking-tight block text-[#0f172a]">
                CA Jayson Jacob Mathew
              </span>
              <span className="text-xs text-[#64748b] block -mt-0.5">
                Chartered Accountant & Succession Strategist
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold text-[#475569] hover:text-[#0f172a] transition-colors">
              About
            </a>
            <a href="#roles" className="text-sm font-semibold text-[#475569] hover:text-[#0f172a] transition-colors">
              Leadership
            </a>
            <a href="#work" className="text-sm font-semibold text-[#475569] hover:text-[#0f172a] transition-colors">
              Featured Work
            </a>
            <a href="#experience" className="text-sm font-semibold text-[#475569] hover:text-[#0f172a] transition-colors">
              Experience
            </a>
            <a href="#credentials" className="text-sm font-semibold text-[#475569] hover:text-[#0f172a] transition-colors">
              Certifications
            </a>
            <a
              href="#contact"
              className="bg-[#0f172a] text-[#f8fafc] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#b45309] transition-colors"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.08] mb-6">
              Preserving Legacies. Navigating Complex Financial Landscapes.
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mb-8">
              I help founders, leaders, and family businesses create, preserve, and seamlessly transfer their legacy.
              As a Chartered Accountant with deep expertise in succession consultancy, corporate structuring, and tax strategy,
              I navigate complex governance landscapes to ensure enduring leadership continuity.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="bg-[#0f172a] text-[#f8fafc] px-6 py-3.5 rounded-lg font-semibold hover:bg-[#b45309] transition-colors inline-flex items-center gap-2"
              >
                Schedule a Consultation
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#experience"
                className="border border-[#cbd5e1] text-[#0f172a] px-6 py-3.5 rounded-lg font-semibold hover:bg-white transition-colors"
              >
                View Career History
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
              <div className="w-24 h-24 rounded-full bg-[#0f172a] text-[#d97706] font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 border-4 border-slate-50">
                JJM
              </div>
              <h2 className="text-xl font-bold text-center text-[#0f172a] mb-1">
                CA Jayson Jacob Mathew
              </h2>
              <p className="text-xs text-center text-[#64748b] mb-4">
                Chartered Accountant · Independent Director · Mentor
              </p>
              
              <div className="space-y-2.5 text-xs text-[#334155] border-t border-[#f1f5f9] pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#64748b]">Location</span>
                  <span className="font-semibold">Kochi, Kerala, India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#64748b]">Firm</span>
                  <span className="font-semibold">Saju & Co, CAs (Partner)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#64748b]">Board Role</span>
                  <span className="font-semibold">Danube Industries Ltd</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#64748b]">Global Advisory</span>
                  <span className="font-semibold">IETO</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#f1f5f9] flex items-center justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/ca-jayson-jacob-mathew-4b203836/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#0f172a] font-semibold hover:text-[#b45309] inline-flex items-center gap-1"
                >
                  LinkedIn Profile <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#cbd5e1]">•</span>
                <a
                  href="https://github.com/cajayson-ship-it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#0f172a] font-semibold hover:text-[#b45309] inline-flex items-center gap-1"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Strategic Roles */}
      <section id="roles" className="py-20 bg-white border-y border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Strategic & Board Leadership
            </h2>
            <p className="text-base text-[#64748b] mt-2">
              Combining a 360° governance lens across corporate boards, international trade, and the accounting profession.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#b45309] uppercase tracking-wider block mb-2">
                    {role.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">
                    {role.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#475569] mb-3">
                    {role.organization}
                  </p>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight sticky top-28">
              Executive Profile & Approach
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-base text-[#334155] leading-relaxed">
            <p>
              I help founders, leaders, and family businesses create, preserve, and seamlessly transfer their legacy.
              As a Chartered Accountant with deep expertise in succession consultancy, corporate structuring, tax strategy,
              management consulting, and risk analysis, I specialise in navigating complex financial landscapes—particularly
              with LLPs—to optimise business outcomes and leadership continuity.
            </p>
            <p>
              Holding certifications in Arbitration, FEMA, AI & ML, FAFD, BRSR, GST, Public Finance & Government Accounting,
              and Concurrent Audits from ICAI, I bring a 360° governance and strategy lens to every engagement.
              My approach blends tax planning, governance, change management, and corporate structuring into a single roadmap
              that inspires investor confidence and intergenerational success.
            </p>
            <p>
              Beyond technical expertise, I am passionate about mentoring and coaching, guiding organisations through
              leadership transitions while preserving culture and vision. As an Independent Director at Danube Industries Limited,
              I oversee governance and strategic financial planning, and as an ICAI Peer Reviewer, I help uphold the profession’s
              highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work / Projects */}
      <section id="work" className="py-20 bg-[#090d16] text-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Featured Strategic Engagements
            </h2>
            <p className="text-base text-slate-400 mt-2">
              Tangible impact in business succession, board governance, and high-stakes dispute resolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredWork.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-xl p-8 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#f59e0b] tracking-wider uppercase block mb-2">
                    {item.sector}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.narrative}
                  </p>
                </div>
                <div className="border-t border-slate-800 pt-4 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>{item.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
            Work Experience
          </h2>
          <p className="text-base text-[#64748b] mt-2">
            A comprehensive record of audit, tax practice leadership, and financial management over 14+ years.
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-7 border border-[#e2e8f0] shadow-sm hover:border-[#cbd5e1] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-[#b45309]">
                    {item.company}
                  </p>
                </div>
                <div className="text-xs font-medium text-[#475569] bg-[#f1f5f9] px-3 py-1.5 rounded-md self-start sm:self-auto">
                  {item.period} · {item.duration}
                </div>
              </div>

              <p className="text-sm text-[#334155] leading-relaxed mb-4">
                {item.summary}
              </p>

              <div className="space-y-1.5">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-[#64748b]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="credentials" className="py-20 bg-white border-y border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight mb-4">
                Core Specializations & Skills
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-6">
                Specialized domain knowledge across corporate finance, statutory litigation, and family enterprise stewardship.
              </p>

              <div className="space-y-3">
                {[
                  "Operations Management & Operational Execution",
                  "Succession Consultancy & Intergenerational Wealth Strategy",
                  "Corporate Structuring & Limited Liability Partnerships (LLP)",
                  "Supreme Court & CESTAT Tax Appellate Representation",
                  "GST Implementation, Audit & Kerala VAT Litigation",
                  "Public Finance, Banking & Concurrent Audits",
                  "Corporate Governance, Mediation & Fiduciary Oversight"
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#b45309] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider block mb-2">
                  Languages
                </span>
                <p className="text-sm text-[#334155]">
                  <strong>English</strong> (Native/Bilingual) · <strong>Malayalam</strong> (Native/Bilingual) · <strong>Tamil</strong> (Elementary)
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                ICAI Certifications & Education
              </h3>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4"
                  >
                    <span className="text-[10px] font-bold text-[#b45309] uppercase tracking-wider block">
                      {cert.type}
                    </span>
                    <h4 className="text-sm font-bold text-[#0f172a] mt-0.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[#64748b]">{cert.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-[#0f172a] text-[#f8fafc] rounded-2xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Start a Strategic Consultation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Whether you are planning a family business succession, navigating corporate restructuring,
                or seeking independent director governance advisory, reach out directly.
              </p>

              <div className="space-y-5 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold">Office Address</span>
                    <span className="text-xs text-slate-400">
                      Saju & Co, Chartered Accountants, M.G Road, Ravipuram, Kochi, Kerala, India
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d97706] shrink-0" />
                  <div>
                    <span className="block font-semibold">Direct Phone</span>
                    <a href="tel:+919496251613" className="text-xs text-slate-300 hover:text-white">
                      +91 9496251613
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d97706] shrink-0" />
                  <div>
                    <span className="block font-semibold">Email Address</span>
                    <a href="mailto:jayson@sajuandco.com" className="text-xs text-slate-300 hover:text-white">
                      jayson@sajuandco.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe2 className="w-5 h-5 text-[#d97706] shrink-0" />
                  <div>
                    <span className="block font-semibold">Profiles & Web</span>
                    <div className="flex gap-4 text-xs text-slate-300 mt-0.5">
                      <a
                        href="https://www.linkedin.com/in/ca-jayson-jacob-mathew-4b203836/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        LinkedIn <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href="https://github.com/cajayson-ship-it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href="https://sajuandco.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        sajuandco.com <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#1e293b] rounded-xl p-6 sm:p-8 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-2">Send an Inquiry</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below to open a pre-addressed email draft.
              </p>

              <form action="mailto:jayson@sajuandco.com" method="post" encType="text/plain" className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="e.g. Anand Menon"
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d97706]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d97706]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Advisory Area</label>
                  <select
                    name="Topic"
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d97706]"
                  >
                    <option value="Succession & Legacy Planning">Succession & Legacy Planning</option>
                    <option value="LLP & Corporate Structuring">LLP & Corporate Structuring</option>
                    <option value="Tax Appeals & Supreme Court Representation">Tax Appeals & Litigation</option>
                    <option value="Independent Directorship & Board Governance">Board Governance</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Brief Context</label>
                  <textarea
                    name="Message"
                    rows={3}
                    placeholder="Please share brief context on your organization or requirements..."
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d97706]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d97706] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#b45309] transition-colors"
                >
                  Send Consultation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e2e8f0] py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <div>
            © 2026 CA Jayson Jacob Mathew. All rights reserved. Partner at Saju & Co, Chartered Accountants.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/ca-jayson-jacob-mathew-4b203836/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0f172a] font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/cajayson-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0f172a] font-medium"
            >
              GitHub
            </a>
            <a
              href="https://sajuandco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0f172a] font-medium"
            >
              sajuandco.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
