import type { LucideIcon } from 'lucide-react';

type Props = {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  icon?: LucideIcon;
  light?: boolean;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  icon: Icon,
  light = false,
}: Props) {
  return (
    <div className={`${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} mb-14`}>
      {label && (
        <div className={`flex items-center gap-2 ${centered ? 'justify-center' : ''} mb-4`}>
          {Icon && <Icon size={16} className={light ? 'text-primary-200' : 'text-primary-700'} />}
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              light ? 'text-primary-200' : 'text-primary-700'
            }`}
          >
            {label}
          </span>
        </div>
      )}
      <h2
        className={`font-serif text-heading font-semibold text-balance ${
          light ? 'text-white' : 'text-cream-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? 'text-cream-200' : 'text-cream-800'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
