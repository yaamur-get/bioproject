import React, { useState } from "react";
import { Share2, Check } from "lucide-react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="fixed top-6 left-6 z-50 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in group"
      aria-label="مشاركة الصفحة"
    >
      <div className="relative">
        {copied ? (
          <Check size={24} className="text-green-600 animate-scale-in" />
        ) : (
          <Share2 size={24} className="text-gray-800 transition-transform duration-300 group-hover:rotate-12" />
        )}
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </button>
  );
}