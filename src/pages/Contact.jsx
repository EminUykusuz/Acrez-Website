import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const { t } = useLanguage();
  const contact = t('contactSection');

  const sendEmail = (e) => {
    e.preventDefault();
    // EmailJS entegrasyonu (Service ID, Template ID, Public Key)
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then(() => alert(contact.alert.success))
        .catch(() => alert(contact.alert.error));
  };

  return (
    <div className="bg-[#040f09] text-white min-h-screen pt-40 px-6 md:px-20 pb-20 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Sol Taraf - İletişim Bilgileri */}
        <div>
          <span className="text-acrez-accent font-bold tracking-[0.3em] uppercase text-sm">{contact.label}</span>
          <h2 className="text-5xl md:text-7xl font-black mt-6 mb-8">
            {contact.title} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-acrez-accent to-white">.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            {contact.subtitle}
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">{contact.emailLabel}</p>
              <a href="mailto:iletisim@acrez.com" className="text-2xl font-bold hover:text-acrez-accent transition-colors">{contact.emailValue}</a>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">{contact.locationLabel}</p>
              <p className="text-xl text-gray-300">{contact.locationValue}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">{contact.hoursLabel}</p>
              <p className="text-xl text-gray-300">{contact.hoursValue}</p>
            </div>
          </div>
        </div>

        {/* Sağ Taraf - Form */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] backdrop-blur-sm">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2">{contact.form.nameLabel}</label>
                <input type="text" name="user_name" required className="w-full bg-black/40 border border-white/10 px-5 py-4 rounded-xl focus:border-acrez-accent outline-none text-white transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2">{contact.form.companyLabel}</label>
                <input type="text" name="company" className="w-full bg-black/40 border border-white/10 px-5 py-4 rounded-xl focus:border-acrez-accent outline-none text-white transition-colors" placeholder="Bedrijf B.V." />
              </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2">{contact.form.emailLabel}</label>
              <input type="email" name="user_email" required className="w-full bg-black/40 border border-white/10 px-5 py-4 rounded-xl focus:border-acrez-accent outline-none text-white transition-colors" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2">{contact.form.messageLabel}</label>
              <textarea name="message" required rows="4" className="w-full bg-black/40 border border-white/10 px-5 py-4 rounded-xl focus:border-acrez-accent outline-none text-white transition-colors resize-none" placeholder="Vertel ons iets over uw idee..."></textarea>
            </div>
            
            <button type="submit" className="w-full bg-transparent border border-acrez-accent/50 text-acrez-accent font-bold uppercase tracking-widest px-8 py-5 rounded-xl hover:bg-acrez-accent hover:text-[#040f09] hover:shadow-[0_0_20px_rgba(67,196,110,0.4)] transition-all duration-300 mt-4">
                {contact.form.submit}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}