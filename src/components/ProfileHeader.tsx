import React from "react";
import Image from "next/image";
import { ProfileConfig } from "@/config/profile";

interface ProfileHeaderProps {
  config: ProfileConfig;
}

export function ProfileHeader({ config }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center px-6 pt-8 pb-6">
      <div className="relative w-48 h-48 mb-6">
        <div className="absolute inset-0 bg-white rounded-full shadow-xl" />
        <Image
          src={config.image}
          alt={config.name}
          width={192}
          height={192}
          className="relative rounded-full object-cover w-full h-full"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
        {config.name}
      </h1>
      
      <p className="text-base text-gray-800 mb-2 max-w-lg leading-relaxed">
        {config.title}
      </p>
      
      <p className="text-sm text-gray-700 max-w-lg leading-relaxed">
        {config.subtitle}
      </p>
    </div>
  );
}