import { createContext, useState, useContext, useEffect } from 'react';

const translations = {
  nl: {
    meta: {
      title: "Acrez | Premium Digitale Studio & Webdesign",
      description: "Wij transformeren uw merk in een digitaal kunstwerk. Acrez biedt high-performance webdesign, B2B e-commerce oplossingen en op maat gemaakte UI/UX architectuur."
    },
    nav: {
      services: "Diensten",
      projects: "Projecten",
      references: "Aanbevelingen",
      about: "Over ons",
      contact: "Contact"
    },
    hero: {
      pre: "Creëer de beste",
      highlight: "etalage voor uw merk.",
      subtitle: "Acrez brengt uw e-commerce sites en zakelijke identiteit tot leven met hoge prestaties, alsof er een groot team van ontwerpers en developers achter u staat.",
      tags: [
        "B2B E-commerce",
        "Bedrijfsidentiteit",
        "Shopify Platform",
        "Op maat gemaakte UI/UX",
        "Snelle levering",
        "SEO optimalisatie"
      ],
      cta: "Start project",
      email: "Begin nu",
      note1: "*Geen creditcard nodig.",
      note2: "Gratis advies,",
      note3: "neem contact op."
    },
    services: {
      title: "Acrez expertise",
      subtitle: "We integreren de technologie van morgen vandaag in uw merk.",
      items: [
        { title: "Websiteontwikkeling", desc: "Moderne weboplossingen met hoge prestaties volgens Acrez-standaarden." },
        { title: "Applicatieontwikkeling", desc: "Schaalbare, snelle en veilige mobiele en desktopapplicaties." },
        { title: "UI/UX ontwerp", desc: "Gebruikersgerichte, memorabele en opvallende digitale ervaringen." }
      ]
    },
    footer: {
      description: "Een boutique softwarestudio die uw digitale visie omzet in code.",
      ctaHeadline: "Zullen we een",
      ctaButton: "nieuw succesverhaal schrijven?",
      quickLinks: "Snelkoppelingen",
      serviceLink: "Onze diensten",
      portfolioLink: "Portfolio",
      social: "Sociaal",
      copyright: "© 2026 Acrez Digital Studio. Alle rechten voorbehouden."
    },
    contactPage: {
      title: "Neem contact op",
      subtitle: "Benader ons voor uw volgende digitale ervaring.",
      button: "Start gesprek"
    },
    contactSection: {
      label: "Contact",
      title: "Laten we iets bouwen",
      subtitle: "Heeft u een nieuw projectidee? Of wilt u uw huidige systeem naar een hoger niveau tillen? Neem contact met ons op.",
      emailLabel: "E-mail",
      emailValue: "iletisim@acrez.com",
      locationLabel: "Locatie",
      locationValue: "Kocaeli, Turkije",
      hoursLabel: "Openingstijden",
      hoursValue: "Ma - Vr, 09:00 - 18:00",
      form: {
        nameLabel: "Uw naam",
        namePlaceholder: "John Doe",
        companyLabel: "Uw bedrijf",
        companyPlaceholder: "Bedrijf B.V.",
        emailLabel: "Uw e-mailadres",
        emailPlaceholder: "john@example.com",
        messageLabel: "Projectdetails",
        submit: "Verstuur aanvraag"
      },
      alert: {
        success: "Uw bericht is succesvol verzonden, we nemen snel contact met u op!",
        error: "Er is een fout opgetreden. Stuur ons alstublieft rechtstreeks een e-mail."
      }
    },
    about: {
      vision: {
        label: "Onze visie",
        title: "Analytisch denken,",
        highlight: "perfecte vormgeving.",
        subtitle: "We combineren aandacht voor detail en probleemoplossend vermogen met moderne webarchitectuur. We zorgen dat uw code niet alleen werkt, maar uw merk transformeert in een digitaal kunstwerk."
      },
      team: {
        title: "Ons team",
        founderRole: "Oprichter & Softwarearchitect",
        founderDesc: "Mijn passie voor het analyseren en optimaliseren van complexe systemen breng ik naar de digitale wereld. Met C2-niveau Engels schrijf ik code volgens wereldwijde standaarden en combineer ik analytisch denken met webarchitectuur.",
        cofounderRole: "Medeoprichter",
        cofounderDesc: "Een van de architecten die Acrez' visie tot leven brengt. Van strategische planning tot uitvoering speelt hij een sleutelrol in het maximaliseren van de digitale potentie van merken."
      },
      ecosystem: {
        title: "Het ecosysteem dat we bouwen",
        highlight: "ecosysteem",
        items: [
          { name: "Sehir Official", desc: "Zakelijke identiteit en een premium webbeleving." },
          { name: "Elite Travel", desc: "Een perfecte boekings- en reisplatform." },
          { name: "RSN Parts", desc: "B2B-oplossingen voor laadstations voor elektrische voertuigen." },
          { name: "Uykusuz Pen", desc: "Een moderne en schaalbare e-commerce infrastructuur." }
        ]
      }
    },
    portfolio: {
      viewProject: "Bekijk project",
      projects: [
        {
          title: "Elite Travel",
          category: "Toerismeplatform",
          desc: "Een premium toerismeplatform dat reisstandaarden herdefinieert met op maat gemaakte routes en VIP-diensten.",
          imageAlt: "Elite Travel Desktop",
          mobileImageAlt: "Elite Travel Mobile"
        },
        {
          title: "RSN Parts",
          category: "B2B E-commerce",
          desc: "Een high-performance, betrouwbare verkoopoplossing voor laadstations voor elektrische voertuigen.",
          imageAlt: "RSN Parts Desktop",
          mobileImageAlt: "RSN Parts Mobile"
        },
        {
          title: "Sehir Official",
          category: "Zakelijke identiteit",
          desc: "Een moderne etalage die de digitale visie van een merk in de autoverzorgingssector weerspiegelt.",
          imageAlt: "Sehir Official Desktop",
          mobileImageAlt: "Sehir Official Mobile"
        },
        {
          title: "Liviton",
          category: "Cosmetica & Beauty",
          desc: "Een frisse, schone en gebruikersgerichte e-commerce-ervaring die cosmetische producten in de schijnwerpers zet.",
          imageAlt: "Liviton Desktop",
          mobileImageAlt: "Liviton Mobile"
        }
      ]
    },
    process: {
      label: "Hoe werken we?",
      titlePrimary: "Een soepel",
      titleHighlight: "proces.",
      steps: [
        { id: "01", title: "Ontdekking & Strategie", desc: "We analyseren uw merkvisie en technische behoeften om een digitale roadmap uit te stippelen." },
        { id: "02", title: "Ontwerp (UI/UX)", desc: "We ontwerpen gebruiksvriendelijke, conversiegerichte en esthetisch perfecte interfaces." },
        { id: "03", title: "Ontwikkeling", desc: "We bouwen snelle, veilige en SEO-vriendelijke infrastructuur met moderne technologieën (React, Tailwind)." },
        { id: "04", title: "Oplevering", desc: "We lanceren uw platform na alle tests, klaar om storingsvrij te draaien." }
      ]
    },
    testimonials: {
      label: "Aanbevelingen",
      titlePrimary: "Wat zeggen onze klanten",
      titleHighlight: "?",
      cards: [
        {
          quote: "Het Acrez-team heeft onze visie volledig digitaal weerspiegeld. Zowel de ontwerpdetails als de snelheid van de infrastructuur overtroffen onze verwachtingen. Echte professionaliteit.",
          name: "Hasan Çifçi",
          title: "Oprichter, Sehir Official"
        },
        {
          quote: "Voor ons B2B-netwerk voor laadstations voor elektrische voertuigen hebben ze een perfecte e-commerce-ervaring gerealiseerd. Hun technische ondersteuning en oplossingen waren geweldig.",
          name: "Managementteam",
          title: "RSN Parts"
        },
        {
          quote: "De zorg waarmee ze onze premium reisbeleving naar een digitaal platform brachten was indrukwekkend. Acrez heeft onze digitale merkidentiteit volledig opnieuw opgebouwd.",
          name: "Elite Travel-team",
          title: "Directeur, Elite Travel"
        }
      ]
    }
  },
 en: {
    meta: {
      title: "Acrez | High-End Digital Agency & Architecture",
      description: "We transform your brand into a digital masterpiece. Acrez provides high-performance web design, B2B e-commerce solutions, and custom UI/UX architecture."
    },
    nav: {
      services: "Services",
      projects: "Projects",
      references: "References",
      about: "About",
      contact: "Contact"
    },
    hero: {
      pre: "Create the best",
      highlight: "showcase for your brand.",
      subtitle: "Acrez brings your e-commerce sites and corporate identity to life with high performance, as if a full team of designers and developers stood behind you.",
      tags: [
        "B2B E-commerce",
        "Brand Identity",
        "Shopify Platform",
        "Custom UI/UX",
        "Fast Delivery",
        "SEO Optimization"
      ],
      cta: "Start Project",
      email: "Begin now",
      note1: "*No credit card needed.",
      note2: "Free consultation,",
      note3: "contact us."
    },
    services: {
      title: "Acrez Expertise",
      subtitle: "We integrate tomorrow's technology into your brand today.",
      items: [
        { title: "Website Development", desc: "Modern web solutions with high performance according to Acrez standards." },
        { title: "App Development", desc: "Scalable, fast and secure mobile and desktop applications." },
        { title: "UI/UX Design", desc: "User-focused, memorable and striking digital experiences." }
      ]
    },
    footer: {
      description: "A boutique software studio that turns your digital vision into code.",
      ctaHeadline: "Shall we write",
      ctaButton: "a new success story?",
      quickLinks: "Quick links",
      serviceLink: "Our services",
      portfolioLink: "Portfolio",
      social: "Social",
      copyright: "© 2026 Acrez Digital Studio. All rights reserved."
    },
    contactPage: {
      title: "Get in touch",
      subtitle: "Reach out for your next digital experience.",
      button: "Start conversation"
    },
    contactSection: {
      label: "Contact",
      title: "Let’s build something",
      subtitle: "Do you have a new project idea? Or want to take your current platform to the next level? Get in touch with us.",
      emailLabel: "Email",
      emailValue: "iletisim@acrez.com",
      locationLabel: "Location",
      locationValue: "Kocaeli, Turkey",
      hoursLabel: "Hours",
      hoursValue: "Mon - Fri, 09:00 - 18:00",
      form: {
        nameLabel: "Your name",
        namePlaceholder: "John Doe",
        companyLabel: "Your company",
        companyPlaceholder: "Acme Inc.",
        emailLabel: "Your email",
        emailPlaceholder: "john@example.com",
        messageLabel: "Project details",
        submit: "Send request"
      },
      alert: {
        success: "Your message has been sent successfully, we will contact you soon!",
        error: "Something went wrong. Please send us an email directly."
      }
    },
    about: {
      vision: {
        label: "Our vision",
        title: "Analytical thinking,",
        highlight: "perfect design.",
        subtitle: "We combine attention to detail and problem-solving with modern web architecture. We make sure your code not only works, but transforms your brand into a digital work of art."
      },
      team: {
        title: "Our team",
        founderRole: "Founder & Software Architect",
        founderDesc: "My passion for analyzing and optimizing complex systems brings itself to the digital world. With C2-level English I write code to global standards and combine analytical thinking with web architecture.",
        cofounderRole: "Co-founder",
        cofounderDesc: "One of the architects bringing Acrez's vision to life. From strategy to execution, he plays a key role in maximizing brands’ digital potential."
      },
      ecosystem: {
        title: "The ecosystem we build",
        highlight: "ecosystem",
        items: [
          { name: "Sehir Official", desc: "Business identity and a premium web experience." },
          { name: "Elite Travel", desc: "A seamless booking and travel platform." },
          { name: "RSN Parts", desc: "B2B charging station solutions for electric vehicles." },
          { name: "Uykusuz Pen", desc: "A modern, scalable e-commerce infrastructure." }
        ]
      }
    },
    portfolio: {
      viewProject: "View project",
      projects: [
        {
          title: "Elite Travel",
          category: "Travel platform",
          desc: "A premium travel platform redefining booking standards with custom routes and VIP services.",
          imageAlt: "Elite Travel Desktop",
          mobileImageAlt: "Elite Travel Mobile"
        },
        {
          title: "RSN Parts",
          category: "B2B E-commerce",
          desc: "A high-performance, reliable sales solution for electric vehicle charging stations.",
          imageAlt: "RSN Parts Desktop",
          mobileImageAlt: "RSN Parts Mobile"
        },
        {
          title: "Sehir Official",
          category: "Brand identity",
          desc: "A modern showcase reflecting a car care brand’s digital vision.",
          imageAlt: "Sehir Official Desktop",
          mobileImageAlt: "Sehir Official Mobile"
        },
        {
          title: "Liviton",
          category: "Cosmetics & Beauty",
          desc: "A fresh, clean and user-first e-commerce experience that highlights cosmetic products.",
          imageAlt: "Liviton Desktop",
          mobileImageAlt: "Liviton Mobile"
        }
      ]
    },
    process: {
      label: "How do we work?",
      titlePrimary: "A smooth",
      titleHighlight: "process.",
      steps: [
        { id: "01", title: "Discovery & Strategy", desc: "We analyze your brand vision and technical needs to map a digital roadmap." },
        { id: "02", title: "Design (UI/UX)", desc: "We design user-friendly, conversion-driven and visually polished interfaces." },
        { id: "03", title: "Development", desc: "We build fast, secure, SEO-friendly infrastructure with modern technologies (React, Tailwind)." },
        { id: "04", title: "Delivery", desc: "We launch your platform after all tests, ready to run without disruption." }
      ]
    },
    testimonials: {
      label: "Testimonials",
      titlePrimary: "What do our clients say",
      titleHighlight: "?",
      cards: [
        {
          quote: "The Acrez team perfectly reflected our vision digitally. Both the design details and infrastructure speed exceeded our expectations. True professionalism.",
          name: "Hasan Çifçi",
          title: "Founder, Sehir Official"
        },
        {
          quote: "For our B2B network for electric vehicle charging stations, they delivered a perfect e-commerce experience. Their technical support and solutions were excellent.",
          name: "Management Team",
          title: "RSN Parts"
        },
        {
          quote: "The care they put into bringing our premium travel experience to a digital platform was impressive. Acrez rebuilt our digital brand identity completely.",
          name: "Elite Travel Team",
          title: "Director, Elite Travel"
        }
      ]
    }
  },
  de: {
    meta: {
      title: "Acrez | Premium Digitalagentur & Webdesign",
      description: "Wir verwandeln Ihre Marke in ein digitales Meisterwerk. Acrez bietet hochleistungsfähiges Webdesign, B2B E-Commerce-Lösungen und maßgeschneiderte UI/UX."
    },
    nav: {
      services: "Dienstleistungen",
      projects: "Projekte",
      references: "Referenzen",
      about: "Über uns",
      contact: "Kontakt"
    },
    hero: {
      pre: "Erstelle die beste",
      highlight: "Schaufenster für Ihre Marke.",
      subtitle: "Acrez bringt Ihre E-Commerce-Seiten und Unternehmensidentität mit hoher Leistung zum Leben, als stünde ein ganzes Team von Designern und Entwicklern hinter Ihnen.",
      tags: [
        "B2B E-Commerce",
        "Markenidentität",
        "Shopify Plattform",
        "Maßgeschneiderte UI/UX",
        "Schnelle Lieferung",
        "SEO Optimierung"
      ],
      cta: "Projekt starten",
      email: "Jetzt starten",
      note1: "*Keine Kreditkarte erforderlich.",
      note2: "Kostenlose Beratung,",
      note3: "kontaktieren Sie uns."
    },
    services: {
      title: "Acrez Expertise",
      subtitle: "Wir integrieren die Technologie von morgen schon heute in Ihre Marke.",
      items: [
        { title: "Website-Entwicklung", desc: "Moderne Weblösungen mit hoher Leistung nach Acrez-Standards." },
        { title: "App-Entwicklung", desc: "Skalierbare, schnelle und sichere mobile und Desktop-Anwendungen." },
        { title: "UI/UX Design", desc: "Benutzerzentrierte, einprägsame und auffällige digitale Erlebnisse." }
      ]
    },
    footer: {
      description: "Ein Boutique-Softwarestudio, das Ihre digitale Vision in Code verwandelt.",
      ctaHeadline: "Sollen wir eine",
      ctaButton: "neue Erfolgsgeschichte schreiben?",
      quickLinks: "Schnellzugriffe",
      serviceLink: "Unsere Dienstleistungen",
      portfolioLink: "Portfolio",
      social: "Social",
      copyright: "© 2026 Acrez Digital Studio. Alle Rechte vorbehalten."
    },
    contactPage: {
      title: "Kontakt aufnehmen",
      subtitle: "Kontaktieren Sie uns für Ihre nächste digitale Erfahrung.",
      button: "Gespräch starten"
    },
    contactSection: {
      label: "Kontakt",
      title: "Lassen Sie uns etwas bauen",
      subtitle: "Haben Sie eine neue Projektidee? Oder möchten Sie Ihre aktuelle Plattform auf die nächste Stufe heben? Kontaktieren Sie uns.",
      emailLabel: "E-Mail",
      emailValue: "iletisim@acrez.com",
      locationLabel: "Standort",
      locationValue: "Kocaeli, Türkei",
      hoursLabel: "Öffnungszeiten",
      hoursValue: "Mo - Fr, 09:00 - 18:00",
      form: {
        nameLabel: "Ihr Name",
        namePlaceholder: "John Doe",
        companyLabel: "Ihr Unternehmen",
        companyPlaceholder: "Firma GmbH",
        emailLabel: "Ihre E-Mail",
        emailPlaceholder: "john@example.com",
        messageLabel: "Projektdetails",
        submit: "Anfrage senden"
      },
      alert: {
        success: "Ihre Nachricht wurde erfolgreich versendet, wir melden uns bald bei Ihnen!",
        error: "Es ist ein Fehler aufgetreten. Bitte senden Sie uns direkt eine E-Mail."
      }
    },
    about: {
      vision: {
        label: "Unsere Vision",
        title: "Analytisches Denken,",
        highlight: "perfektes Design.",
        subtitle: "Wir kombinieren Liebe zum Detail und Problemlösungskompetenz mit moderner Webarchitektur. Wir stellen sicher, dass Ihr Code nicht nur funktioniert, sondern Ihre Marke in ein digitales Kunstwerk verwandelt."
      },
      team: {
        title: "Unser Team",
        founderRole: "Gründer & Softwarearchitekt",
        founderDesc: "Meine Leidenschaft für die Analyse und Optimierung komplexer Systeme bringe ich in die digitale Welt. Mit C2-Englisch schreibe ich Code nach globalen Standards und vereine analytisches Denken mit Webarchitektur.",
        cofounderRole: "Mitgründer",
        cofounderDesc: "Einer der Architekten, die die Vision von Acrez zum Leben erwecken. Von der Strategie bis zur Umsetzung spielt er eine Schlüsselrolle bei der Maximierung des digitalen Potenzials von Marken."
      },
      ecosystem: {
        title: "Das Ökosystem, das wir bauen",
        highlight: "Ökosystem",
        items: [
          { name: "Sehir Official", desc: "Markenidentität und ein Premium-Web-Erlebnis." },
          { name: "Elite Travel", desc: "Eine nahtlose Buchungs- und Reiseplattform." },
          { name: "RSN Parts", desc: "B2B-Ladeinfrastruktur-Lösungen für Elektrofahrzeuge." },
          { name: "Uykusuz Pen", desc: "Eine moderne, skalierbare E-Commerce-Infrastruktur." }
        ]
      }
    },
    portfolio: {
      viewProject: "Projekt ansehen",
      projects: [
        {
          title: "Elite Travel",
          category: "Reiseplattform",
          desc: "Eine Premium-Reiseplattform, die Buchungsstandards mit kundenspezifischen Routen und VIP-Services neu definiert.",
          imageAlt: "Elite Travel Desktop",
          mobileImageAlt: "Elite Travel Mobile"
        },
        {
          title: "RSN Parts",
          category: "B2B E-commerce",
          desc: "Eine leistungsstarke, zuverlässige Verkaufsplattform für Ladestationen für Elektrofahrzeuge.",
          imageAlt: "RSN Parts Desktop",
          mobileImageAlt: "RSN Parts Mobile"
        },
        {
          title: "Sehir Official",
          category: "Markenidentität",
          desc: "Ein modernes Schaufenster, das die digitale Vision einer Autopflegemarke widerspiegelt.",
          imageAlt: "Sehir Official Desktop",
          mobileImageAlt: "Sehir Official Mobile"
        },
        {
          title: "Liviton",
          category: "Kosmetik & Schönheit",
          desc: "Eine frische, saubere und benutzerzentrierte E-Commerce-Erfahrung, die Kosmetikprodukte in Szene setzt.",
          imageAlt: "Liviton Desktop",
          mobileImageAlt: "Liviton Mobile"
        }
      ]
    },
    process: {
      label: "Wie arbeiten wir?",
      titlePrimary: "Ein reibungsloser",
      titleHighlight: "Prozess.",
      steps: [
        { id: "01", title: "Entdeckung & Strategie", desc: "Wir analysieren Ihre Markenvision und technischen Anforderungen, um einen digitalen Fahrplan zu erstellen." },
        { id: "02", title: "Design (UI/UX)", desc: "Wir gestalten benutzerfreundliche, konversionsorientierte und visuell makellose Interfaces." },
        { id: "03", title: "Entwicklung", desc: "Wir bauen schnelle, sichere und SEO-freundliche Infrastruktur mit modernen Technologien (React, Tailwind)." },
        { id: "04", title: "Übergabe", desc: "Wir bringen Ihre Plattform nach allen Tests live, bereit für einen störungsfreien Betrieb." }
      ]
    },
    testimonials: {
      label: "Empfehlungen",
      titlePrimary: "Was unsere Kunden sagen",
      titleHighlight: "?",
      cards: [
        {
          quote: "Das Acrez-Team hat unsere Vision digital perfekt widergespiegelt. Sowohl die Designdetails als auch die Geschwindigkeit der Infrastruktur übertrafen unsere Erwartungen. Echte Professionalität.",
          name: "Hasan Çifçi",
          title: "Gründer, Sehir Official"
        },
        {
          quote: "Für unser B2B-Netzwerk für Ladestationen für Elektrofahrzeuge haben sie eine perfekte E-Commerce-Erfahrung geliefert. Ihre technische Unterstützung und Lösungen waren exzellent.",
          name: "Management-Team",
          title: "RSN Parts"
        },
        {
          quote: "Die Sorgfalt, mit der sie unser Premium-Reiseerlebnis digital umgesetzt haben, war beeindruckend. Acrez hat unsere digitale Markenidentität komplett neu aufgebaut.",
          name: "Elite Travel Team",
          title: "Direktor, Elite Travel"
        }
      ]
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('acrez_lang') || 'nl';
    } catch (e) {
      return 'nl';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('acrez_lang', lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  useEffect(() => {
    try {
      const meta = translations[lang]?.meta || {};

      if (meta.title) document.title = meta.title;

      const updateMeta = (attr, attrValue, content) => {
        if (!content) return;
        let el = document.head.querySelector(`meta[${attr}="${attrValue}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute(attr, attrValue);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      updateMeta('name', 'description', meta.description || '');
      updateMeta('property', 'og:title', meta.title || '');
      updateMeta('property', 'og:description', meta.description || '');
      updateMeta('name', 'twitter:title', meta.title || '');
      updateMeta('name', 'twitter:description', meta.description || '');
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const t = (key) => {
    const parts = key.split('.');
    let value = translations[lang];

    for (const part of parts) {
      if (value == null) return key;
      value = value[part];
    }

    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);