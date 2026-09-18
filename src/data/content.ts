import {
  Heart,
  Users,
  HandHeart,
  Sparkles,
  BookOpen,
  Megaphone,
  Compass,
  GraduationCap,
} from 'lucide-react';

export const org = {
  name: 'Virtuous Women of Destiny',
  shortName: 'VWD',
  tagline: 'Women of Faith, Purpose & Service',
  description:
    'Virtuous Women of Destiny is a women\u2019s ministry in East Legon, Accra. We bring women together to grow in faith, discover their purpose, and serve their community with love. We meet every Tuesday from 9:00 AM to 12:00 Noon.',
  type: 'Women\u2019s ministry (not a church)',
  leader: {
    name: 'Rev. Dr. Gifty Ezekiel',
    title: 'Founder & Leader',
    bio: 'Rev. Dr. Gifty Ezekiel founded Virtuous Women of Destiny to bring women together in faith and purpose. She leads the ministry with a heart to see every woman grow spiritually, live out her God-given calling, and serve others with love.',
  },
  contact: {
    venueName: 'Christian Service Church',
    address: 'Jungle Avenue Road, East Legon, Accra, Ghana',
    fullAddress: 'Christian Service Church, Jungle Avenue Road, East Legon, Accra, Ghana',
    phone: '+233 54 687 8015',
    phoneHref: 'tel:+233546878015',
    email: null as string | null,
    meetingDay: 'Tuesday',
    meetingTime: '9:00 AM \u2013 12:00 Noon',
    meetingInfo: 'Every Tuesday, 9:00 AM \u2013 12:00 Noon',
    mapUrl: 'https://maps.app.goo.gl/z1w5Gh8bt6yHNZiZA',
    mapEmbedUrl: 'https://www.google.com/maps?q=5.636903,-0.1499134&z=16&output=embed',
    whatsapp: 'https://wa.me/233546878015',
    geo: {
      lat: 5.636903,
      lng: -0.1499134,
    },
  },
  // Add real links here as soon as they're ready — icons are already styled and will appear automatically.
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    x: null as string | null,
    tiktok: 'https://tiktok.com',
    youtube: null as string | null,
    whatsapp: 'https://wa.me/233546878015',
  },
};

export const heroImage =
  'https://images.pexels.com/photos/21782617/pexels-photo-21782617.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop';

export const whoWeAreImage =
  'https://images.pexels.com/photos/5875481/pexels-photo-5875481.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop';

export const impactImage =
  'https://images.pexels.com/photos/6646770/pexels-photo-6646770.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop';

export const missionVisionImage =
  'https://images.pexels.com/photos/8582732/pexels-photo-8582732.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop';

export type WhatWeDoItem = {
  icon: typeof Heart;
  title: string;
  description: string;
};

export const whatWeDo: WhatWeDoItem[] = [
  {
    icon: Heart,
    title: 'Prayer & Spiritual Growth',
    description:
      'We pray together and help every woman grow closer to God and stronger in faith.',
  },
  {
    icon: Sparkles,
    title: 'Women Empowerment',
    description:
      'We help women build confidence, grow as leaders, and discover the purpose God has for their lives.',
  },
  {
    icon: Users,
    title: 'Fellowship & Community',
    description:
      'We create a warm space for women to meet, share, encourage one another, and build real friendships.',
  },
  {
    icon: HandHeart,
    title: 'Community Outreach',
    description:
      'We reach out to people in need around us with practical help and genuine care.',
  },
  {
    icon: Compass,
    title: 'Charity & Support',
    description:
      'We give practical support to individuals and families going through hard times.',
  },
  {
    icon: BookOpen,
    title: 'Bible Study & Teaching',
    description:
      'We study the Word of God together and grow in our understanding of Christian living.',
  },
  {
    icon: Megaphone,
    title: 'Evangelism & Service',
    description:
      'We share the gospel through acts of service and by showing love to those around us.',
  },
  {
    icon: GraduationCap,
    title: 'Leadership Development',
    description:
      'We train women to lead with wisdom, character, and integrity in every area of life.',
  },
];

export type Activity = {
  title: string;
  description: string;
  image: string;
  category: string;
};

export const activities: Activity[] = [
  {
    title: 'Weekly Women\u2019s Gathering',
    description:
      'Our main gathering, held every Tuesday from 9:00 AM to 12:00 Noon at Christian Service Church, Jungle Avenue Road, East Legon. All women are welcome.',
    image:
      'https://images.pexels.com/photos/8285735/pexels-photo-8285735.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Fellowship',
  },
  {
    title: 'Prayer Meetings',
    description:
      'Time set aside to pray together for healing, guidance, and breakthrough for women and their families.',
    image:
      'https://images.pexels.com/photos/24023659/pexels-photo-24023659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Prayer',
  },
  {
    title: 'Seminars & Workshops',
    description:
      'Teaching sessions on personal growth, leadership, and everyday life skills, built on Christian values.',
    image:
      'https://images.pexels.com/photos/33714910/pexels-photo-33714910.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Development',
  },
  {
    title: 'Community Outreach',
    description:
      'We go out to serve people in need with food, supplies, and the love of Christ.',
    image:
      'https://images.pexels.com/photos/6646926/pexels-photo-6646926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Outreach',
  },
  {
    title: 'Charity Initiatives',
    description:
      'Organised support for individuals and families in our community who are facing hardship.',
    image:
      'https://images.pexels.com/photos/7849437/pexels-photo-7849437.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Charity',
  },
];

export type Leader = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

export const leaders: Leader[] = [
  {
    name: 'Rev. Dr. Gifty Ezekiel',
    title: 'Founder & Leader',
    bio: 'Rev. Dr. Gifty Ezekiel founded Virtuous Women of Destiny to bring women together in faith and purpose. She leads with a heart to see every woman grow spiritually and serve others with love.',
    image:
      'https://images.pexels.com/photos/31307734/pexels-photo-31307734.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop',
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/21782617/pexels-photo-21782617.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Women with hands raised in prayer',
    category: 'Prayer',
  },
  {
    src: 'https://images.pexels.com/photos/8761551/pexels-photo-8761551.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Women at a conference session',
    category: 'Conferences',
  },
  {
    src: 'https://images.pexels.com/photos/6646770/pexels-photo-6646770.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Volunteers packing aid items',
    category: 'Outreach',
  },
  {
    src: 'https://images.pexels.com/photos/8285735/pexels-photo-8285735.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Women sharing a hug and conversation',
    category: 'Fellowship',
  },
  {
    src: 'https://images.pexels.com/photos/24023659/pexels-photo-24023659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Women praying together during a gathering',
    category: 'Prayer',
  },
  {
    src: 'https://images.pexels.com/photos/7849437/pexels-photo-7849437.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Volunteers at a community food bank',
    category: 'Outreach',
  },
  {
    src: 'https://images.pexels.com/photos/8761349/pexels-photo-8761349.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Women at a seminar',
    category: 'Development',
  },
  {
    src: 'https://images.pexels.com/photos/6646926/pexels-photo-6646926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Volunteers handing out donations',
    category: 'Charity',
  },
  {
    src: 'https://images.pexels.com/photos/3926510/pexels-photo-3926510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Three women sharing a laugh together',
    category: 'Fellowship',
  },
  {
    src: 'https://images.pexels.com/photos/24023629/pexels-photo-24023629.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Women praying and clapping',
    category: 'Prayer',
  },
  {
    src: 'https://images.pexels.com/photos/6647115/pexels-photo-6647115.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Group packing aid items outdoors',
    category: 'Outreach',
  },
  {
    src: 'https://images.pexels.com/photos/8761512/pexels-photo-8761512.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Attendees at a conference session',
    category: 'Conferences',
  },
];

export const values = [
  { title: 'Faith', description: 'We stand on God\u2019s Word and follow the Holy Spirit in all we do.' },
  { title: 'Purpose', description: 'We help every woman discover and live out her God-given calling.' },
  { title: 'Integrity', description: 'We live with honesty and truth in everything.' },
  { title: 'Compassion', description: 'We show Christ\u2019s love through real care for others.' },
  { title: 'Leadership', description: 'We build women who can lead with wisdom and courage.' },
  { title: 'Service', description: 'We give our time and resources to help others.' },
];

export const faqs = [
  {
    question: 'What time does Virtuous Women of Destiny meet?',
    answer:
      'We meet every Tuesday from 9:00 AM to 12:00 Noon.',
  },
  {
    question: 'Where is Virtuous Women of Destiny located?',
    answer:
      'We meet at Christian Service Church, Jungle Avenue Road, East Legon, Accra, Ghana.',
  },
  {
    question: 'Who leads Virtuous Women of Destiny?',
    answer:
      'The ministry was founded and is led by Rev. Dr. Gifty Ezekiel.',
  },
  {
    question: 'Is Virtuous Women of Destiny a church?',
    answer:
      'No. We are a women\u2019s ministry and fellowship, not a church. Women from any church or background are welcome to join us.',
  },
  {
    question: 'How can I contact Virtuous Women of Destiny?',
    answer:
      'You can call or WhatsApp us on +233 54 687 8015, or visit us on a Tuesday gathering day.',
  },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'What We Do', path: '/what-we-do' },
  { label: 'Activities & Programs', path: '/activities' },
  { label: 'Our Leadership', path: '/leadership' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];
