import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Infinity, 
  ShoppingBag, 
  Cpu, 
  Smartphone, 
  Tv, 
  Music, 
  Home,
  Star
} from 'lucide-react';

const COMPANIES = [
  { name: 'Google', icon: Search, color: 'from-blue-500 to-blue-600' },
  { name: 'Meta', icon: Infinity, color: 'from-indigo-500 to-indigo-600' },
  { name: 'Amazon', icon: ShoppingBag, color: 'from-orange-400 to-orange-500' },
  { name: 'Microsoft', icon: Cpu, color: 'from-cyan-500 to-blue-500' },
  { name: 'Apple', icon: Smartphone, color: 'from-zinc-800 to-black' },
  { name: 'Netflix', icon: Tv, color: 'from-red-600 to-red-700' },
  { name: 'Spotify', icon: Music, color: 'from-emerald-500 to-emerald-600' },
  { name: 'Airbnb', icon: Home, color: 'from-rose-500 to-rose-600' },
];

const GraduateSuccess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = COMPANIES.length - visibleItems;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
            <Star size={12} className="text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">Career Outcomes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-6">
            Where Our Graduates <span className="text-emerald-600">Thrive</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-600 font-medium">
            Our alumni have successfully launched careers at the world's most innovative tech giants and rapid-growth startups.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden px-2 py-8">
            <div 
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {COMPANIES.map((company, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <div className="group/card relative bg-white border border-zinc-100 rounded-3xl p-8 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-2 h-full">
                    <div className={`w-20 h-20 bg-gradient-to-br ${company.color} rounded-2xl flex items-center justify-center shadow-lg group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-500 mb-6`}>
                      <company.icon className="text-white" size={36} strokeWidth={1.5} />
                    </div>
                    <span className="text-lg font-bold text-zinc-900 tracking-tight">{company.name}</span>
                    <div className="mt-2 h-1 w-0 bg-emerald-500 group-hover/card:w-12 transition-all duration-500 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-8 w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center border border-zinc-100 hover:bg-zinc-900 hover:text-white transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-8 w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center border border-zinc-100 hover:bg-zinc-900 hover:text-white transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === i ? 'w-10 bg-emerald-600' : 'w-2 bg-zinc-200 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>

        {/* Success Stats Grid */}
        <div className="mt-24 p-1 rounded-[3rem] bg-gradient-to-b from-zinc-100 to-white">
          <div className="bg-white rounded-[2.8rem] px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border border-white">
            {[
              { label: 'Graduates Placed', val: '250+', sub: 'Top-tier firms' },
              { label: 'Starting Salary', val: '$85K', sub: 'Median average' },
              { label: 'Placement Rate', val: '94%', sub: 'Within 6 months' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <p className="text-5xl font-black text-zinc-900 tracking-tighter">
                  {stat.val}
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  {stat.label}
                </p>
                <p className="text-sm text-zinc-400 font-medium">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GraduateSuccess;