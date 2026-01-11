export type Language = 'en' | 'es' | 'pt';

export interface Translations {
  hero: {
    greeting: string;
    role: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    content: string[];
  };
  projects: {
    title: string;
    featured: string;
    comingSoon: string;
    buttons: {
      website: string;
      instagram: string;
      appStore: string;
      playStore: string;
    };
    moora: {
      description: string;
    };
    upcoming: {
      project1: string;
      project1Description: string;
      project2: string;
    };
  };
  contact: {
    title: string;
  };
  footer: {
    rights: string;
    language: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      greeting: "Hi, I'm Gil Veloza",
      role: "Founder · Builder",
      description: "I build startups, apps, and digital products that help people grow and achieve their goals.",
      cta: "View My Projects",
    },
    about: {
      title: "About Me",
      content: [
        "I'm a startup founder and digital product builder passionate about creating tools that make a real difference in people's lives.",
        "With a focus on personal growth, productivity, and meaningful experiences, I design and develop apps that combine beautiful interfaces with powerful functionality.",
      ],
    },
    projects: {
      title: "Projects",
      featured: "Featured Project",
      comingSoon: "Coming Soon",
      buttons: {
        website: "Visit Website",
        instagram: "Instagram",
        appStore: "Download on App Store",
        playStore: "Get it on Google Play",
      },
      moora: {
        description: "A beautiful iOS app for journaling, goal tracking, and personal growth. Available now on the App Store.",
      },
      upcoming: {
        project1: "Hochstern",
        project1Description: "Luxury hospitality. In development.",
        project2: "In development.",
      },
    },
    contact: {
      title: "Let's Connect",
    },
    footer: {
      rights: "All rights reserved.",
      language: "Language",
    },
  },
  es: {
    hero: {
      greeting: "Hola, soy Gil Veloza",
      role: "Fundador · Constructor",
      description: "Construyo startups, apps y productos digitales que ayudan a las personas a crecer y alcanzar sus objetivos.",
      cta: "Ver Mis Proyectos",
    },
    about: {
      title: "Sobre Mí",
      content: [
        "Soy fundador de startups y constructor de productos digitales apasionado por crear herramientas que marquen una diferencia real en la vida de las personas.",
        "Con enfoque en crecimiento personal, productividad y experiencias significativas, diseño y desarrollo apps que combinan interfaces hermosas con funcionalidad poderosa.",
      ],
    },
    projects: {
      title: "Proyectos",
      featured: "Proyecto Destacado",
      comingSoon: "Próximamente",
      buttons: {
        website: "Visitar Sitio Web",
        instagram: "Instagram",
        appStore: "Descargar en App Store",
        playStore: "Disponible en Google Play",
      },
      moora: {
        description: "Una hermosa app iOS para journaling, seguimiento de metas y crecimiento personal. Disponible ahora en App Store.",
      },
      upcoming: {
        project1: "Hochstern",
        project1Description: "Hospitalidad de lujo. En desarrollo.",
        project2: "En desarrollo.",
      },
    },
    contact: {
      title: "Conectemos",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      language: "Idioma",
    },
  },
  pt: {
    hero: {
      greeting: "Olá, sou Gil Veloza",
      role: "Fundador · Construtor",
      description: "Construo startups, apps e produtos digitais que ajudam as pessoas a crescer e alcançar seus objetivos.",
      cta: "Ver Meus Projetos",
    },
    about: {
      title: "Sobre Mim",
      content: [
        "Sou fundador de startups e construtor de produtos digitais apaixonado por criar ferramentas que fazem uma diferença real na vida das pessoas.",
        "Com foco em crescimento pessoal, produtividade e experiências significativas, projeto e desenvolvo apps que combinam interfaces bonitas com funcionalidade poderosa.",
      ],
    },
    projects: {
      title: "Projetos",
      featured: "Projeto em Destaque",
      comingSoon: "Em Breve",
      buttons: {
        website: "Visitar Site",
        instagram: "Instagram",
        appStore: "Baixar na App Store",
        playStore: "Disponível no Google Play",
      },
      moora: {
        description: "Um lindo app iOS para journaling, acompanhamento de metas e crescimento pessoal. Disponível agora na App Store.",
      },
      upcoming: {
        project1: "Hochstern",
        project1Description: "Hospitalidade de luxo. Em desenvolvimento.",
        project2: "Em desenvolvimento.",
      },
    },
    contact: {
      title: "Vamos Conectar",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      language: "Idioma",
    },
  },
};
