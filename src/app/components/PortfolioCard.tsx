import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioCardProps {
  title: string;
  description: string;
  link: string;
  color: string;
  index: number;
  imageUrl?: string;
}

export function PortfolioCard({ title, description, link, color, index, imageUrl }: PortfolioCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />
      
      {/* Card container */}
      <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
        {/* Background Image with overlay */}
        {imageUrl && (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <ImageWithFallback 
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
              />
            </div>
            {/* Dark gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]/60" />
          </>
        )}
        
        {/* Gradient border animation */}
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        {/* Content */}
        <div className="relative p-8 h-full flex flex-col">
          {/* Icon and external link */}
          <div className="flex items-start justify-between mb-6">
            {/* Icon container with gradient */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity`} />
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-2xl`}>
                <div className="w-7 h-7 rounded-md bg-white/20 backdrop-blur-sm" />
              </div>
            </div>
            
            {/* External link icon */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity`} />
              <ExternalLink className="relative w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="mb-3 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
            {description}
          </p>
          
          {/* Bottom accent line */}
          <div className="mt-auto pt-6">
            <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-500" />
          </div>
        </div>
        
        {/* Corner highlight */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
      </div>
    </motion.a>
  );
}