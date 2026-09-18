import { CalendarDays, Home, Images, MapPin } from 'lucide-react';
import { navigateTo } from '@/router';

const items = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Programs', path: '/activities', icon: CalendarDays },
  { label: 'Visit', path: '/contact', icon: MapPin },
  { label: 'Gallery', path: '/gallery', icon: Images },
];

export default function BottomNav({ currentPath }: { currentPath: string }) {
  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="mx-auto w-full max-w-sm rounded-t-xl border border-b-0 border-cream-800 bg-cream-950 px-2 py-2 shadow-[0_-8px_24px_rgba(0,0,0,0.18)]">
        <div className="grid grid-cols-4 gap-1">
          {items.map(({ label, path, icon: Icon }) => {
            const active = isActive(path);

            return (
              <button
                key={path}
                type="button"
                onClick={() => navigateTo(path)}
                className={`flex flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 ${
                  active
                    ? 'bg-primary-500 text-cream-950 shadow-lg shadow-primary-500/30'
                    : 'text-cream-200 hover:bg-cream-800/80 hover:text-white'
                }`}
              >
                <Icon size={18} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
