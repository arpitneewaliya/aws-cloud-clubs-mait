import React from "react";
import * as motion from "framer-motion/client";

export interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  type: "upcoming" | "past";
  link?: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  image,
  type,
  link,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-surface-container-high rounded-3xl overflow-hidden border-2 border-outline-variant/30 flex flex-col h-full pixel-hard-shadow transition-shadow"
    >
      {image ? (
        <div className="relative h-48 w-full overflow-hidden border-b-2 border-outline-variant/30">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold font-label uppercase text-on-surface border border-outline-variant">
            {type}
          </div>
        </div>
      ) : (
        <div className="h-6 w-full bg-primary-container/20 border-b-2 border-outline-variant/30 relative">
           <div className="absolute top-2 right-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold font-label uppercase text-on-surface border border-outline-variant z-10">
            {type}
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col grow">
        <h3 className="text-2xl font-headline font-bold text-on-surface mb-3 line-clamp-2">
          {title}
        </h3>

        <div className="space-y-2 mb-4 text-sm text-on-surface-variant font-medium">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">
              calendar_month
            </span>
            <span>
              {date} • {time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">
              location_on
            </span>
            <span>{location}</span>
          </div>
        </div>

        <p className="text-on-surface-variant line-clamp-3 mb-6 grow">
          {description}
        </p>

        <div className="mt-auto">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 px-4 bg-primary text-on-primary text-center rounded-xl font-headline font-bold hover:bg-primary/90 transition-colors border border-on-primary-fixed"
            >
              {type === "upcoming" ? "Register Now" : "View Recap"}
            </a>
          ) : (
             <button
              disabled
              className="inline-block w-full py-3 px-4 bg-surface-variant text-on-surface-variant text-center rounded-xl font-headline font-bold cursor-not-allowed border border-outline-variant/50"
             >
               {type === "upcoming" ? "Registration Pending" : "Event Concluded"}
             </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
