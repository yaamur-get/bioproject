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
        
        {/* Hero Section - الصورة الشخصية */}
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#2B5F7D] via-[#5B8FA3] to-[#7AACBE]">
          <div className="container mx-auto px-6 pt-16 pb-8">
            <div className="flex flex-col items-center">
              {/* الصورة الشخصية - مربعة */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 mb-6 animate-fade-in-up">
                <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${profileConfig.image})`,
                      backgroundPosition: 'center 30%',
                      backgroundSize: 'cover'
                    }}
                  />
                </div>
              </div>
              
              {/* الاسم */}
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-fade-in-up animation-delay-100">
                {profileConfig.name}
              </h1>
            </div>
          </div>
        </div>
        
        {/* قسم المعلومات الشخصية */}
        <div className="relative w-full bg-[#7AACBE]">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col items-center text-center">
              <p className="text-base md:text-lg text-white/95 mb-2 max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-100">
                {profileConfig.title}
              </p>
              
              <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
                {profileConfig.subtitle}
              </p>
            </div>
          </div>
        </div>
        
        {/* القسم الثاني: الأزرار والمحتوى */}
        <div className="relative z-10 bg-[#7AACBE] -mt-1">
          <div className="max-w-2xl mx-auto px-6 pt-12 pb-12">
            
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