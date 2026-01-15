import React from 'react';
import { 
  Code2, 
  Database, 
  Github, 
  Layout, 
  Briefcase, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, colorClass, isLarge }) => (
  <div className={`group relative transition-all duration-500 flex flex-col min-h-[320px] p-8 justify-between overflow-hidden
    ${isLarge ? 'md:col-span-2 bg-zinc-50/50' : 'bg-white'} 
    hover:z-20 border-zinc-100 border
    `}>
    
    {/* Hover Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${colorClass} text-white`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm md:text-base text-zinc-600 font-medium leading-relaxed max-w-[280px] md:max-w-md">
        {description}
      </p>
    </div>

    <div className="relative z-10 mt-6">
      {isLarge ? (
        <div className="flex items-center gap-2 text-zinc-400 font-bold text-[10px] tracking-[0.2em] uppercase">
          <Sparkles size={14} className="text-emerald-500" />
          Core Curriculum
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white transition-all duration-300">
          <ArrowRight size={18} strokeWidth={2} />
        </div>
      )}
    </div>

    {/* Decorative abstract shape for Large cards */}
    {isLarge && (
      <div className="absolute -right-4 -bottom-4 w-48 h-48 bg-zinc-200/20 rounded-full blur-3xl group-hover:bg-emerald-100/40 transition-colors duration-700" />
    )}
  </div>
);

const Features = () => {
  const masterList = [
    {
      icon: Code2, // Changed from Sun for better context
      title: "React & Modern JS",
      description: "Master React hooks, component architecture, and state management while building dynamic single-page applications.",
      colorClass: "bg-gradient-to-br from-blue-500 to-blue-700",
      isLarge: false
    },
    {
      icon: Database,
      title: "Backend & Systems Design",
      description: "Build scalable RESTful APIs with Node.js. Master MongoDB design, security protocols, and cloud deployment strategies.",
      colorClass: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      isLarge: true
    },
    {
      icon: Github,
      title: "Version Control",
      description: "Professional Git workflows and GitHub collaboration used by elite engineering teams worldwide.",
      colorClass: "bg-gradient-to-br from-zinc-700 to-zinc-900",
      isLarge: false
    },
    {
      icon: Layout,
      title: "Tailwind & UI/UX",
      description: "Create stunning, accessible interfaces. Learn modern design patterns and rapid prototyping techniques.",
      colorClass: "bg-gradient-to-br from-cyan-400 to-cyan-600",
      isLarge: false
    },
    {
      icon: Briefcase,
      title: "Portfolio Projects",
      description: "Build and deploy 5+ industry-grade projects including E-commerce engines and real-time dashboards.",
      colorClass: "bg-gradient-to-br from-purple-500 to-purple-700",
      isLarge: false
    },
    {
      icon: Users,
      title: "Career Accelerator",
      description: "Resume crafting, mock technical interviews, and direct networking with our global hiring partners.",
      colorClass: "bg-gradient-to-br from-pink-500 to-pink-700",
      isLarge: false
    }
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24">
      {/* Header Section */}
      <div className="mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
            Learning Path
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-6">
              Skills That Get You <span className="text-blue-600">Hired</span>.
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              We don't just teach code. We teach the entire engineering ecosystem, from architectural design to deployment pipelines.
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50">
        {masterList.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;