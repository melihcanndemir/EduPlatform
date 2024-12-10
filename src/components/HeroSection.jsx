import React from 'react';
import heroImage from '../assets/hero-illustration.svg';

const HeroSection = () => (
  <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-700 mb-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:60px_60px]" />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
    
    <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Bilincin ve Teknolojinin 
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                {" "}Kuantum Kesişimi
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Nöral ağların derinliklerinden kuantum bilincin paradokslarına, 
              veri yapılarının fraktal geometrisinden bilişsel algoritmaların 
              sonsuz döngülerine uzanan bir keşif yolculuğu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/20">
              Keşfe Başla
            </button>
            <button className="px-8 py-3 bg-transparent text-white border-2 border-white/30 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Programı İncele
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Aktif Öğrenci', value: '2.5K+' },
              { label: 'Derinlik Seviyesi', value: '∞' },
              { label: 'Bilinç Katmanı', value: 'Φ' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full filter blur-3xl" />
          <img
            src={heroImage}
            alt="Bilinç ve Teknoloji"
            className="relative z-10 w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>

    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-slow" style={{ top: '15%', left: '10%' }} />
      <div className="absolute w-3 h-3 bg-white/30 rounded-full animate-float-medium" style={{ top: '45%', right: '15%' }} />
      <div className="absolute w-4 h-4 bg-white/10 rounded-full animate-float-fast" style={{ bottom: '25%', left: '20%' }} />
    </div>
  </div>
);

export default HeroSection;