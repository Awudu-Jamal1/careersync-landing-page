import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Mail, User, BookOpen } from 'lucide-react';

const SignupSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });
  
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  return (
    <section id="signup" className="relative w-full py-24 overflow-hidden scroll-mt-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 py-2 px-4 border border-blue-200 rounded-full text-[10px] tracking-[0.2em] uppercase text-blue-700 font-bold mb-6 bg-blue-50/50 backdrop-blur-sm">
            <Sparkles size={12} />
            Join the Next Cohort
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-6">
            Ready to Start Your <span className="text-blue-600">Journey</span>?
          </h2>
          <p className="max-w-xl mx-auto text-lg text-zinc-600 leading-relaxed font-medium">
            Reserve your spot today. We'll send you course details and enrollment information within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-zinc-200 rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-zinc-200/50 relative">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="space-y-3">
                <label htmlFor="name" className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">
                  <User size={14} className="text-blue-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label htmlFor="email" className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">
                  <Mail size={14} className="text-blue-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Course Interest Field */}
              <div className="md:col-span-2 space-y-3">
                <label htmlFor="course" className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">
                  <BookOpen size={14} className="text-blue-500" />
                  Course Interest
                </label>
                <div className="relative">
                  <select
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select a course</option>
                    <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                    <option value="Frontend Specialization">Frontend Specialization (React)</option>
                    <option value="Backend Specialization">Backend Specialization (Node.js)</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-zinc-400">
                    <ArrowRight size={18} className="rotate-90" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-zinc-900 text-white font-bold text-xs tracking-[0.2em] uppercase py-5 px-8 rounded-2xl shadow-xl hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>Submit Application</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-200 rotate-3">
                <Check size={40} strokeWidth={3} className="text-white" />
              </div>
              <h3 className="text-3xl font-black text-zinc-900 mb-2">Application Received!</h3>
              <p className="text-zinc-600 font-medium mb-10">We've sent a confirmation to <span className="text-zinc-900 font-bold">{submittedData.email}</span></p>
              
              <div className="max-w-md mx-auto bg-zinc-50 rounded-[2rem] p-8 text-left space-y-4 border border-zinc-100">
                <div className="flex justify-between items-center border-b border-zinc-200 pb-3">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Candidate</span>
                  <span className="font-bold text-zinc-900">{submittedData.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Program</span>
                  <span className="font-bold text-blue-600">{submittedData.course}</span>
                </div>
              </div>

              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-10 text-xs font-bold text-zinc-400 hover:text-blue-600 transition-colors tracking-widest uppercase"
              >
                ← Edit Information
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupSection;