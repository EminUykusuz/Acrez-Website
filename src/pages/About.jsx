import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const about = t('about');
  return (
    <div className="bg-[#040f09] text-white min-h-screen pt-40 px-6 md:px-20 pb-20 relative overflow-hidden">
      {/* Arka plan ışık efekti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-acrez-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <div className="text-center mb-32 relative z-10">
        <span className="text-acrez-accent font-bold tracking-[0.3em] uppercase text-sm border border-acrez-accent/30 bg-acrez-accent/5 px-4 py-2 rounded-full">
          {about.vision.label}
        </span>
        <h1 className="text-5xl md:text-7xl font-black mt-8 max-w-4xl mx-auto leading-[1.1]">
          {about.vision.title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{about.vision.highlight}</span>
        </h1>
        <p className="text-gray-400 mt-8 text-xl max-w-2xl mx-auto font-light leading-relaxed">
          {about.vision.subtitle}
        </p>
      </div>

      {/* Ekip Bölümü */}
      <div className="mb-32 relative z-10">
        <h3 className="text-3xl md:text-5xl font-black text-center mb-16">{about.team.title}</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* Muhammed Emin Uykusuz */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:border-acrez-accent/30 transition-all group flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-2">Muhammed Emin Uykusuz</h3>
              <p className="text-acrez-accent text-sm tracking-widest uppercase font-bold mb-6">{about.team.founderRole}</p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {about.team.founderDesc}
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">React</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">Tailwind</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">GSAP</span>
            </div>
          </div>

          {/* Usame Yilanci */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:border-acrez-accent/30 transition-all group flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-2">Usame Yılancı</h3>
              <p className="text-acrez-accent text-sm tracking-widest uppercase font-bold mb-6">{about.team.cofounderRole}</p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {about.team.cofounderDesc}
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">Strategie</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">Ontwikkeling</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">Management</span>
            </div>
          </div>

        </div>
      </div>

      {/* İnşa Ettiğimiz Ekosistem (Ortalanmış) */}
      <div className="max-w-4xl mx-auto text-center relative z-10 border-t border-white/10 pt-20">
        <h3 className="text-3xl font-bold mb-10">{about.ecosystem.title} <span className="text-acrez-accent">{about.ecosystem.highlight}</span></h3>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {about.ecosystem.items.map((project, i) => (
            <div key={i} className="bg-black/20 p-6 rounded-2xl border border-white/5 hover:border-acrez-accent transition-colors">
              <span className="block text-xl font-bold text-white mb-2">{project.name}</span>
              <span className="block text-gray-400 text-sm">{project.desc}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}