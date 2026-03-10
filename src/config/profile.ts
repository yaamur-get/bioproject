export interface ProfileConfig {
  name: string;
  title: string;
  subtitle: string;
  image: string;
  backgroundGradient: {
    from: string;
    via?: string;
    to: string;
  };
  links: Array<{
    id: string;
    label: string;
    url: string;
    icon: "whatsapp" | "twitter" | "email" | "linkedin" | "instagram" | "facebook" | "youtube" | "tiktok" | "snapchat" | "telegram" | "phone" | "website" | "certificate";
    bgColor?: string;
    textColor?: string;
  }>;
  footer?: {
    links?: Array<{
      label: string;
      url: string;
    }>;
  };
}

export const profileConfig: ProfileConfig = {
  name: "سليمان بن فهد البيشي",
  title: "مهتم ببناء الشراكات وتطوير الأعمال والمشاركة المجتمعية | مؤمن بالتكامل مع أدوات الذكاء الاصطناعي كأداةٍ تحسين",
  subtitle: "PMP© | PMD Pro© | KPI© | LMI©",
  image: "/slaman.jpeg",
  backgroundGradient: {
    from: "#2B5F7D",
    via: "#5B8FA3",
    to: "#7AACBE"
  },
  links: [
    {
      id: "whatsapp",
      label: "الواتساب",
      url: "https://wa.me/966561298787",
      icon: "whatsapp",
      bgColor: "white",
      textColor: "black"
    },
    {
      id: "twitter",
      label: "اكس X",
      url: "https://x.com/sulimanAlbishi",
      icon: "twitter",
      bgColor: "white",
      textColor: "black"
    },
    {
      id: "email",
      label: "البريد الإلكتروني",
      url: "mailto:slamalbishi@gmail.com",
      icon: "email",
      bgColor: "white",
      textColor: "black"
    },
    {
      id: "linkedin",
      label: "لينكد إن",
      url: "https://www.linkedin.com/in/%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86-%D8%A8%D9%86-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D8%A8%D9%8A%D8%B4%D9%8A-050088307/",
      icon: "linkedin",
      bgColor: "white",
      textColor: "black"
    },
    {
      id: "fal-certificate",
      label: "رخصة فال",
      url: "#",
      icon: "certificate",
      bgColor: "white",
      textColor: "black"
    }
  ],
  footer: {
    links: [
      { label: "Cookie Preferences", url: "#" },
      { label: "Report", url: "#" },
      { label: "Privacy", url: "#" }
    ]
  }
};