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
        <div className="relative h-[70vh] w-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${profileConfig.image})` }}
          />
          
          {/* طبقة التدرج للاندماج */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#7AACBE]"
            style={{ 
              backgroundImage: `linear-gradient(to bottom, transparent 0%, transparent 40%, ${profileConfig.backgroundGradient.to} 100%)`
            }}
          />
        </div>
        
        {/* القسم الثاني: المحتوى يبدأ قبل انتهاء الصورة */}
        <div className="relative -mt-[30vh] z-10">
          <div className="max-w-2xl mx-auto px-6 pb-12">
            {/* معلومات الملف الشخصي */}
            <div className="text-center mb-8 animate-fade-in-up">
              <h1 className="text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                {profileConfig.name}
              </h1>
              
              <p className="text-lg text-white/95 mb-3 max-w-lg mx-auto leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-100">
                {profileConfig.title}
              </p>
              
              <p className="text-base text-white/90 max-w-lg mx-auto leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
                {profileConfig.subtitle}
              </p>
            </div>
            
            {/* الأزرار */}
            <div className="flex flex-col gap-4 mt-8">
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