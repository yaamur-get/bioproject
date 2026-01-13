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
    icon: "whatsapp" | "twitter" | "email" | "linkedin" | "instagram" | "facebook" | "youtube" | "tiktok" | "snapchat" | "telegram" | "phone" | "website";
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
  title: "مهتم ببناء الشراكات وتطوير الأعمال والمشاركة المجتمعية",
  subtitle: "مؤمن بالتكامل مع أدوات الذكاء الاصطناعي كقادة | PMP ©PMD Pro ©KPI ©LMI© تحسين",
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