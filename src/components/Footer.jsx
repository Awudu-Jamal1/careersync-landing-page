import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLinkedin, FiTwitter, FiGithub, FiMail, FiMapPin, FiArrowUpRight } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-black tracking-tighter">
                CareerSync<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm font-medium">
              Empowering the next generation of software engineers through immersive, industry-led technical training.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FiLinkedin, href: "#" },
                { icon: FiTwitter, href: "#" },
                { icon: FiGithub, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 border border-zinc-800"
                >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Programs</h4>
              <ul className="space-y-4">
                {['Web Development', 'React Specialization', 'Backend Systems', 'Career Services'].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-zinc-400 hover:text-white transition-colors font-medium text-sm flex items-center group">
                      {item}
                      <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Success Stories', 'Partner with Us', 'Privacy'].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-zinc-400 hover:text-white transition-colors font-medium text-sm flex items-center group">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-zinc-400 text-sm font-medium">14 Claypole Road, London, UK</span>
                </li>
                <li className="flex items-center gap-3">
                  <SafeIcon icon={FiMail} className="w-5 h-5 text-blue-500" />
                  <span className="text-zinc-400 text-sm font-medium">admissions@careersync.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase">
            &copy; {currentYear} CAREERSYNC TECH ACADEMY.
          </p>
          <div className="flex gap-8">
            <Link to="/" className="text-zinc-500 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Terms</Link>
            <Link to="/" className="text-zinc-500 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Privacy</Link>
            <Link to="/" className="text-zinc-500 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;