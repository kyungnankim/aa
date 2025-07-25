import React from "react";
import { Instagram, Youtube } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/battleseoul",
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@battleseoul",
      color: "hover:text-red-500",
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full
                flex items-center justify-center
                text-gray-400 ${social.color}
                transition-all duration-300 hover:scale-110
                border border-gray-700 hover:border-gray-500
                shadow-lg hover:shadow-xl
              `}
              title={social.name}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
