import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const contact = t('contactPage');

  return (
    <section id="contact" className="py-20 bg-brand-dark border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">{contact.title}</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-10">{contact.subtitle}</p>
        <button className="px-10 py-4 bg-brand-neon text-black font-bold rounded-full">{contact.button}</button>
      </div>
    </section>
  );
}
