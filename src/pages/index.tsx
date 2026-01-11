import React from "react";
import { SEO } from "@/components/SEO";
import { ProfileHeader } from "@/components/ProfileHeader";
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
      
      <div className="min-h-screen relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br animate-gradient"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${profileConfig.backgroundGradient.from}, ${profileConfig.backgroundGradient.via || profileConfig.backgroundGradient.from}, ${profileConfig.backgroundGradient.to})`,
            backgroundSize: "200% 200%"
          }}
        />
        
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <ShareButton />
        
        <div className="relative z-10 max-w-2xl mx-auto pb-12">
          <ProfileHeader config={profileConfig} />
          
          <div className="flex flex-col gap-4 px-6 mt-8">
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
          
          {profileConfig.footer?.links && (
            <div className="mt-12 flex flex-wrap justify-center gap-4 px-6 text-sm animate-fade-in-up animation-delay-1000">
              {profileConfig.footer.links.map((footerLink, index) => (
                <React.Fragment key={footerLink.label}>
                  <a
                    href={footerLink.url}
                    className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 relative group"
                  >
                    {footerLink.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
                  </a>
                  {index < profileConfig.footer.links.length - 1 && (
                    <span className="text-gray-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}