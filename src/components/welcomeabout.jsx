import React from 'react';

function WelcomeAbout() {
    return (
        <section className="relative overflow-hidden bg-[#fafafa] pt-24 lg:pt-32 pb-20 lg:pb-32">
            {/* Optional: Subtle Background Pattern or Image Overlay */}
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('assets/image/background.png')] bg-cover"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Image Side with Decorative Element */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                            <img 
                                src="https://flatironschool.com/wp-content/uploads/2023/05/20190730FlatironSchoolChicago-30__1_2.jpg" 
                                className="w-full h-[300px] md:h-[450px] object-cover" 
                                alt="Students collaborating in a tech bootcamp environment" 
                            />
                        </div>
                        {/* Decorative Background Box */}
                        <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-emerald-100 rounded-2xl -z-0 hidden md:block"></div>
                    </div>

                    {/* Content Side */}
                    <div className="text-left order-1 lg:order-2">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">Est. 2023</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
                            Bootcamps Built For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">New Tech</span> Industry
                        </h2>
                        
                        <p className="mt-6 text-lg text-zinc-600 leading-relaxed font-medium">
                            Since 2023, we’ve trained over <span className="text-zinc-900 font-bold">20,000 graduates</span>. Now, we’re excited to announce new ways to help learners unlock their full potential with flexible online courses that deliver real results.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <button className="bg-zinc-900 text-white font-bold px-10 py-4 rounded-xl text-xs tracking-[0.2em] uppercase hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-zinc-200 hover:shadow-blue-200">
                                View Our Courses
                            </button>
                            <button className="bg-white text-zinc-900 border border-zinc-200 font-bold px-10 py-4 rounded-xl text-xs tracking-[0.2em] uppercase hover:bg-zinc-50 transition-all duration-300">
                                Learn More
                            </button>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-zinc-100 pt-8">
                            <div>
                                <p className="text-2xl font-bold text-zinc-900">20K+</p>
                                <p className="text-xs text-zinc-500 font-bold tracking-wider uppercase">Graduates</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-zinc-900">2+ Yrs</p>
                                <p className="text-xs text-zinc-500 font-bold tracking-wider uppercase">Experience</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default WelcomeAbout;