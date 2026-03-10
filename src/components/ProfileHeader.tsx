import React from "react";
import Image from "next/image";
import { ProfileConfig } from "@/config/profile";

interface ProfileHeaderProps {
  config: ProfileConfig;
}

export function ProfileHeader({ config }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center px-6 pt-8 pb-6">
      <div className="relative w-48 h-48 mb-6 animate-fade-in-up">
        <div className="absolute inset-0 bg-white rounded-3xl shadow-xl" />
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <Image
            src={config.image}
            alt={config.name}
            fill
            className="object-cover object-center"
            sizes="192px"
            priority
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight animate-fade-in-up animation-delay-100">
        {config.name}
      </h1>
      
      <p className="text-base text-gray-800 mb-2 max-w-lg leading-relaxed animate-fade-in-up animation-delay-200">
        {config.title}
      </p>
      
      <p className="text-sm text-gray-700 max-w-lg leading-relaxed animate-fade-in-up animation-delay-300">
        {config.subtitle}
      </p>
    </div>
  );
}