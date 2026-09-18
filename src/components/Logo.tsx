import { useState } from 'react';

type Props = {
  compact?: boolean;
  light?: boolean;
};

export default function Logo({ compact = false, light = false }: Props) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <span className={`flex items-center gap-3 ${compact ? '' : 'group'}`}>
      {!useFallback ? (
        <img
          src="/logo-128.png"
          alt="Virtuous Women of Destiny logo"
          width={compact ? 40 : 44}
          height={compact ? 40 : 44}
          className={`${compact ? 'h-10 w-10' : 'h-11 w-11'} rounded-xl object-cover shadow-md`}
          onError={() => setUseFallback(true)}
        />
      ) : (
        <img
          src="/logo.svg"
          alt="Virtuous Women of Destiny logo"
          width={compact ? 40 : 44}
          height={compact ? 40 : 44}
          className={`${compact ? 'h-10 w-10' : 'h-11 w-11'} rounded-xl object-cover shadow-md`}
        />
      )}
      {!compact && (
        <span className="text-left leading-tight">
          <span className={`block font-serif text-lg font-semibold ${light ? 'text-white' : 'text-cream-950'}`}>
            Virtuous Women
          </span>
          <span className={`block text-[10px] uppercase tracking-[0.2em] font-medium ${light ? 'text-primary-200' : 'text-primary-600'}`}>
            of Destiny
          </span>
        </span>
      )}
    </span>
  );
}
