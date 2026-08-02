import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const footer = t('footer');
  return (
    <footer className="w-full bg-[#020804] text-white py-20 border-t border-white/5">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        {/* İLETİŞİM ÇAĞRISI */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tight">
            {footer.ctaHeadline} <br className="md:hidden" />
            <span className="text-acrez-accent">{footer.ctaButton}</span> <br />
          </h2>
          <a 
            href="/contact" 
            className="group relative px-12 py-6 bg-white text-[#040f09] text-xl font-bold uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-500"
          >
            <span className="relative z-10">{t('nav.contact')}</span>
            <div className="absolute inset-0 bg-acrez-accent translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0"></div>
          </a>
        </div>

        {/* FOOTER LİNKLERİ VE SOSYAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/5">
          <div className="space-y-4">
            <h4 className="text-xl font-bold tracking-tight">ACREZ.</h4>
            <p className="text-gray-500 font-light">{footer.description}</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-acrez-accent uppercase tracking-[0.2em] mb-2">{footer.quickLinks}</h4>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">{footer.serviceLink}</a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">{footer.portfolioLink}</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-acrez-accent uppercase tracking-[0.2em] mb-2">{footer.social}</h4>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="mt-20 text-center text-gray-600 text-sm font-light">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}