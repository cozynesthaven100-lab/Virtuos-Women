import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import Home from '@/pages/Home';
import About from '@/pages/About';
import WhatWeDo from '@/pages/WhatWeDo';
import Activities from '@/pages/Activities';
import Leadership from '@/pages/Leadership';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import { useRoute } from '@/router';
import { org } from '@/data/content';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Virtuous Women of Destiny | Women\u2019s Ministry, East Legon, Accra \u2014 Tuesdays 9AM\u201312PM',
    description:
      'A women\u2019s ministry led by Rev. Dr. Gifty Ezekiel. We meet every Tuesday, 9:00 AM\u201312:00 Noon, at Christian Service Church, Jungle Avenue Road, East Legon, Accra. Call +233 54 687 8015.',
  },
  '/about': {
    title: 'About Us | Virtuous Women of Destiny',
    description:
      'Learn who we are \u2014 a women\u2019s ministry in East Legon, Accra, founded by Rev. Dr. Gifty Ezekiel, helping women grow in faith and purpose.',
  },
  '/what-we-do': {
    title: 'What We Do | Virtuous Women of Destiny',
    description:
      'Our areas of work: prayer, women empowerment, fellowship, community outreach, charity, evangelism, and leadership development.',
  },
  '/activities': {
    title: 'Activities & Programs | Virtuous Women of Destiny',
    description:
      'Our weekly gathering, prayer meetings, seminars, and outreach programs \u2014 every Tuesday, 9:00 AM\u201312:00 Noon, East Legon, Accra.',
  },
  '/leadership': {
    title: 'Our Leadership | Virtuous Women of Destiny',
    description:
      'Meet Rev. Dr. Gifty Ezekiel, Founder and Leader of Virtuous Women of Destiny.',
  },
  '/gallery': {
    title: 'Gallery | Virtuous Women of Destiny',
    description:
      'Photos from our gatherings, outreach, and fellowship activities in East Legon, Accra.',
  },
  '/contact': {
    title: 'Contact Us | Virtuous Women of Destiny',
    description:
      'Reach Virtuous Women of Destiny on +233 54 687 8015 or visit us at Christian Service Church, Jungle Avenue Road, East Legon, Accra, every Tuesday, 9:00 AM\u201312:00 Noon.',
  },
};

function App() {
  const [path] = useRoute();

  useEffect(() => {
    const meta = pageMeta[path] || pageMeta['/'];
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.description);
  }, [path]);

  const renderPage = () => {
    switch (path) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/what-we-do':
        return <WhatWeDo />;
      case '/activities':
        return <Activities />;
      case '/leadership':
        return <Leadership />;
      case '/gallery':
        return <Gallery />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 pb-16 md:pb-0">
      <Header currentPath={path} />
      <main>{renderPage()}</main>
      <BottomNav currentPath={path} />
      <Footer />
    </div>
  );
}

export default App;
