import React from "react";
import { MessageCircle, Mail, Linkedin, Instagram, Facebook, Youtube, Phone, Globe, Send } from "lucide-react";

interface LinkButtonProps {
  label: string;
  url: string;
  icon: string;
  bgColor?: string;
  textColor?: string;
  index: number;
}

export function LinkButton({ label, url, icon, bgColor = "white", textColor = "black", index }: LinkButtonProps) {
  const getIcon = () => {
    const iconProps = { size: 24, className: "flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" };
    
    switch (icon) {
      case "whatsapp":
        return <MessageCircle {...iconProps} />;
      case "twitter":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case "email":
        return <Mail {...iconProps} />;
      case "linkedin":
        return <Linkedin {...iconProps} />;
      case "instagram":
        return <Instagram {...iconProps} />;
      case "facebook":
        return <Facebook {...iconProps} />;
      case "youtube":
        return <Youtube {...iconProps} />;
      case "phone":
        return <Phone {...iconProps} />;
      case "telegram":
        return <Send {...iconProps} />;
      case "website":
        return <Globe {...iconProps} />;
      default:
        return <Globe {...iconProps} />;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full max-w-lg mx-auto block animate-fade-in-up"
      style={{ animationDelay: `${400 + index * 100}ms` }}
    >
      <div
        className="relative flex items-center justify-between px-6 py-4 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        
        <span className="text-lg font-semibold flex-1 text-center pr-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {label}
        </span>
        <div className="flex-shrink-0 relative z-10">
          {getIcon()}
        </div>
      </div>
    </a>
  );
}