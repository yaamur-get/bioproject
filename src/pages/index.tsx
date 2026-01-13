import React from "react";
import { SEO } from "@/components/SEO";
import { LinkButton } from "@/components/LinkButton";
import { ShareButton } from "@/components/ShareButton";
import { profileConfig } from "@/config/profile";

export default function Home() {
  return (
    <>
      <SEO
        title={profileConfig.name}
        description={profileConfig.title}
        image={profileConfig.image}
      />
      
      <div className="min-h-screen bg-[#7AACBE]">
        <ShareButton />
        
        {/* القسم الأول: صورة الخلفية مع التدرج */}
        <div className="relative h-[85vh] w-full overflow-hidden">
          {/* الصورة كخلفية */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat scale-110"
            style={{ 
              backgroundImage: `url(${profileConfig.image})`,
              backgroundPosition: 'center 30%',
              transform: 'scale(1.05)'
            }}
          />
          
          {/* طبقة التدرج للاندماج السلس */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: `linear-gradient(to bottom, 
                rgba(122, 172, 190, 0) 0%, 
                rgba(122, 172, 190, 0) 60%, 
                rgba(122, 172, 190, 0.5) 75%, 
                rgba(122, 172, 190, 0.9) 90%, 
                rgba(122, 172, 190, 1) 100%)`
            }}
          />
          
          {/* المحتوى في أسفل الصورة */}
          <div className="absolute bottom-0 left-0 right-0 z-10 pb-8">
            <div className="max-w-2xl mx-auto px-6">
              <div className="text-center animate-fade-in-up">
                <h1 className="text-4xl font-bold text-white mb-3 leading-tight drop-shadow-2xl">
                  {profileConfig.name}
                </h1>
                
                <p className="text-base text-white/95 mb-2 max-w-lg mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up animation-delay-100">
                  {profileConfig.title}
                </p>
                
                <p className="text-sm text-white/90 max-w-lg mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up animation-delay-200">
                  {profileConfig.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* القسم الثاني: الأزرار والمحتوى */}
        <div className="relative z-10 bg-[#7AACBE]">
          <div className="max-w-2xl mx-auto px-6 pt-8 pb-12">
            
            {/* الأزرار */}
            <div className="flex flex-col gap-4">
              {profileConfig.links.map((link, index) => (
                <LinkButton
                  key={link.id}
                  label={link.label}
                  url={link.url}
                  icon={link.icon}
                  bgColor={link.bgColor}
                  textColor={link.textColor}
                  index={index}
                />
              ))}
            </div>
            
            {/* روابط التذييل */}
            {profileConfig.footer?.links && (
              <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm animate-fade-in-up animation-delay-1000">
                {profileConfig.footer.links.map((footerLink, index) => (
                  <React.Fragment key={footerLink.label}>
                    <a
                      href={footerLink.url}
                      className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                    >
                      {footerLink.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                    {index < profileConfig.footer.links.length - 1 && (
                      <span className="text-white/60">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}