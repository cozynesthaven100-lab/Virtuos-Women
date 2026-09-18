import { org } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-cream-950 text-cream-100 border-t border-cream-800/60">
      <div className="container-mw container-px py-8 md:py-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center gap-3 md:gap-4">
            {org.social.whatsapp && (
              <a
                href={org.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-primary-400/40 bg-gradient-to-br from-primary-500/15 to-amber-300/10 text-primary-300 shadow-[0_0_25px_rgba(212,165,116,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-500 hover:text-cream-950 hover:shadow-[0_0_30px_rgba(212,165,116,0.38)]"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M12.04 2C6.58 2 2.17 6.36 2.17 11.82c0 2.05.62 4.03 1.7 5.66L2 22l4.7-1.53a9.75 9.75 0 005.34 1.7h.01c5.46 0 9.9-4.36 9.9-9.82C21.95 6.36 17.5 2 12.04 2zm0 17.9a7.95 7.95 0 01-4.04-1.09l-.29-.17-2.79.91.94-2.72-.19-.29A7.94 7.94 0 114.1 11.82a7.94 7.94 0 017.94 8.08zm4.36-5.95c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.7 2.6 4.1 3.65.57.25 1.01.4 1.36.51.57.18 1.09.16 1.5.1.46-.07 1.42-.58 1.62-1.13.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z"/>
                </svg>
              </a>
            )}

            {org.social.facebook && (
              <a
                href={org.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream-700 bg-cream-900 text-cream-300 shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400 hover:bg-primary-600 hover:text-white hover:shadow-[0_0_30px_rgba(212,165,116,0.35)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>
                </svg>
              </a>
            )}

            {org.social.instagram && (
              <a
                href={org.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream-700 bg-cream-900 text-cream-300 shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400 hover:bg-primary-600 hover:text-white hover:shadow-[0_0_30px_rgba(212,165,116,0.35)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                </svg>
              </a>
            )}

            {org.social.tiktok && (
              <a
                href={org.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream-700 bg-cream-900 text-cream-300 shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400 hover:bg-primary-600 hover:text-white hover:shadow-[0_0_30px_rgba(212,165,116,0.35)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.16v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.61c.3 0 .6.05.89.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.2a4.85 4.85 0 01-1.84-.3z"/>
                </svg>
              </a>
            )}
          </div>

          {!org.social.facebook && !org.social.instagram && !org.social.youtube && !org.social.tiktok && !org.social.x && !org.social.whatsapp && (
            <p className="text-xs uppercase tracking-[0.25em] text-cream-500">Social links to be added</p>
          )}
        </div>
      </div>
    </footer>
  );
}
