import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BioCardProps {
  name: string;
  title?: string;
  image: string;
  bio: ReactNode;
  index?: number;
}

export function BioCard({ name, title, image, bio, index = 0 }: BioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.1, ease: "easeOut" }}
      className="bg-card rounded-[16px] border border-border shadow-card p-7 flex flex-col items-center text-center"
    >
      <div className="mb-5 shrink-0">
        <Image
          src={`/bio/${image}`}
          alt={name}
          width={112}
          height={112}
          className="rounded-full object-cover w-28 h-28"
        />
      </div>
      <h3 className="text-base font-bold text-text mb-1">{name}</h3>
      {title && <p className="text-xs font-semibold text-primary mb-5">{title}</p>}
      <div className="text-sm text-text-muted leading-relaxed text-left space-y-3">
        {bio}
      </div>
    </motion.div>
  );
}
