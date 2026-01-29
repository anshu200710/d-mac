const services = [
  {
    slug: 'seo-content',
    title: 'SEO & Content',
    category: 'digital',
    shortDescription: 'Improve discoverability and organic growth.',
    fullDescription: 'We combine technical SEO, content strategy, and editorial excellence to grow organic visibility and qualified traffic. Our approach focuses on keyword research, content hubs, on-page optimization, and performance measurement to deliver sustainable results.',
    bullets: [
      'Technical SEO and site audits',
      'Content strategy and production',
      'Keyword research and content hubs'
    ],
    images: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&q=80&auto=format&fit=crop'
    ],

    examples: [
      {
        title: 'GreenMart SEO Revamp',
        description: 'Technical SEO and content overhaul — boosted organic sessions by 58% in 6 months.',
        image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=1200&q=80&auto=format&fit=crop',
        url: 'https://example.com/greenmart'
      },
      {
        title: 'Marketplace Category Optimization',
        description: 'Category page enhancements that improved rankings and conversion rate.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop',
        url: 'https://example.com/marketplace'
      },
      {
        title: 'Local SEO for Healers',
        description: 'Local citations, GMB optimization, and content — multi-location growth.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop',
        url: 'https://example.com/local-seo'
      }
    ],

    meta: { title: 'SEO & Content — Our Services', description: 'SEO and content services that increase organic traffic, authority, and conversions.' }
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    category: 'digital',
    shortDescription: 'Modern web experiences built for performance and conversion.',
    fullDescription: 'We build fast, accessible, and secure websites and web applications that convert. Our work covers responsive development, e-commerce, headless CMS integrations, and performance optimization.',
    bullets: ['Responsive & accessible sites', 'E-commerce & headless CMS', 'Performance & SEO optimization'],
    images: ['https://res.cloudinary.com/dgmovv8me/image/upload/v1769680029/Screenshot_2026-01-29_144601_pdejfz.png',
             'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680031/Screenshot_2026-01-29_145731_yjyg68.png',
             'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680029/Screenshot_2026-01-29_145533_laoy1y.png',
             'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680029/Screenshot_2026-01-29_145552_cfqsw0.png',
             'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680029/Screenshot_2026-01-29_145624_bddieb.png',
             'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680031/Screenshot_2026-01-29_145603_eakewj.png'],

    examples: [
      {
        title: 'VyaapaarNiti',
        description: 'Technical SEO and content overhaul — boosted organic sessions by 58% in 6 months.',
        image: 'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680029/Screenshot_2026-01-29_144601_pdejfz.png',
        url: 'https://vyaaparniti.com'
      },
      {
        title: 'Antara Hills',
        description: 'Category page enhancements that improved rankings and conversion rate.',
        image: 'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680031/Screenshot_2026-01-29_145731_yjyg68.png',
        url: 'https://anantahill.in/'
      },
      {
        title: 'E-Commerce',
        description: 'Local citations, GMB optimization, and content — multi-location growth.',
        image: 'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680029/Screenshot_2026-01-29_145533_laoy1y.png',
        url: 'https://example.com/local-seo'
      },
      {
        title: 'Branding',
        description: 'Local citations, GMB optimization, and content — multi-location growth.',
        image: 'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680029/Screenshot_2026-01-29_145552_cfqsw0.png',
        url: 'https://example.com/local-seo'
      },
      {
        title: 'SS Makeover Fairy',
        description: 'Local citations, GMB optimization, and content — multi-location growth.',
        image: 'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680029/Screenshot_2026-01-29_145624_bddieb.png',
        url: 'https://ssmakeoverfairy.com/'
      },
      {
        title: 'Healat India',
        description: 'Local citations, GMB optimization, and content — multi-location growth.',
        image: 'https://res.cloudinary.com/dgmovv8me/image/upload/v1769680031/Screenshot_2026-01-29_145603_eakewj.png',
        url: 'https://healatindia.com'
      }
    ],
             

    meta: { title: 'Web Development — Our Services', description: 'Web development that combines performance, UX, and scalability.' }
  },

  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    category: 'digital',
    shortDescription: 'Funnel-first content that converts.',
    fullDescription: 'We craft content that educates users, builds trust, and drives conversions across the funnel — from awareness to retention.',
    bullets: ['Content strategy', 'Blog & long-form content', 'Content distribution'],
    images: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop'],
    caseStudies: [{ title: 'Content Funnels for Lead Gen', image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1000&q=80&auto=format&fit=crop' }],
    meta: { title: 'Content Marketing — Our Services', description: 'Content marketing that educates and converts.' }
  },
  {
    slug: 'social-community',
    title: 'Social & Community',
    category: 'digital',
    shortDescription: 'Build authentic communities and conversations.',
    fullDescription: 'Our social-first approach creates brand-led communities and content strategies that foster engagement and loyalty.',
    bullets: ['Community strategy', 'Organic social content', 'Creator & influencer partnerships'],
    images: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop'],
    caseStudies: [{ title: 'Community Growth Case', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&q=80&auto=format&fit=crop' }],
    meta: { title: 'Social & Community — Our Services', description: 'Social strategies that grow communities and brand affinity.' }
  },
  {
    slug: 'analytics-cro',
    title: 'Analytics & CRO',
    category: 'digital',
    shortDescription: 'Measure, learn and optimize for conversion.',
    fullDescription: 'We implement analytics and CRO programs to turn data into growth. From experimentation to attribution, we help teams make decisions that move the needle.',
    bullets: ['Experimentation & A/B testing', 'Analytics setup & measurement', 'Full-funnel attribution'],
    images: ['https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=1200&q=80&auto=format&fit=crop'],
    caseStudies: [{ title: 'CRO for SaaS', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80&auto=format&fit=crop' }],
    meta: { title: 'Analytics & CRO — Our Services', description: 'Analytics and CRO that drives measurable improvements.' }
  },
  {
    slug: 'meta-ad-performance',
    title: 'Meta Ad Performance',
    category: 'video',
    shortDescription: 'Short-form ad creative tailored for Meta platforms.',
    fullDescription: 'We produce snackable, high-converting videos optimized for reach, relevance and performance on Meta platforms (Facebook & Instagram). We test formats, hooks and editing styles to maximize ad relevance and ROAS.',
    bullets: ['Creative testing & adaptation', 'Platform-optimized formats', 'Conversion-focused editing'],
    images: ['https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80&auto=format&fit=crop'],
    videos: [
      'https://www.youtube.com/embed/q3lX2p_Uy9I?rel=0',
      'https://www.youtube.com/embed/KGQPZN46IkQ?rel=0',
      'https://www.youtube.com/embed/aqz-KE-bpKQ',
      'https://www.youtube.com/embed/T22NVnTtaAk?rel=0',
      'https://www.youtube.com/embed/dsio_HBK_uc?rel=0',
      'https://www.youtube.com/embed/ZtKnUBLCIlE?rel=0'
    ],
    caseStudies: [{ title: 'Meta Ads Lift', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&q=80&auto=format&fit=crop' }],
    meta: { title: 'Meta Ad Video — Our Services', description: 'Meta ad video production focused on performance and reach.' }
  },
  {
    slug: 'bts',
    title: 'BTS',
    category: 'video',
    shortDescription: 'Behind-the-scenes content & candid storytelling.',
    fullDescription: 'We capture the story behind your brand and production—authentic BTS footage, short-form documentary pieces and creator-led content that builds trust and context.',
    bullets: ['BTS documentary shorts', 'Creator & set coverage', 'Repurposable social assets'],
    images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop'],
    videos: [
      'https://www.youtube.com/embed/ScMzIvxBSi4',
      'https://www.youtube.com/embed/YE7VzlLtp-4',
      'https://www.youtube.com/embed/nzdw9V2qsSk?rel=0'
    ],
    caseStudies: [{ title: 'BTS Series', image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1000&q=80&auto=format&fit=crop' }],
    meta: { title: 'BTS — Our Services', description: 'Behind-the-scenes storytelling that humanizes your brand.' }
  },
  {
    slug: 'ad-video-shoot',
    title: 'Ad Video Shoot',
    category: 'video',
    shortDescription: 'Full-service ad production and shoots.',
    fullDescription: 'From pre-production planning to full production shoots and post-production, we deliver broadcast-quality ad content tailored for campaign needs.',
    bullets: ['End-to-end production', 'Director-led shoots', 'Post-production & color grading'],
    images: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop'],
    videos: [
      'https://www.youtube.com/embed/wLN35AebXdY?rel=0',
      'https://www.youtube.com/embed/3fumBcKC6RE',
      'https://www.youtube.com/embed/-Y9V1B9f7_c?rel=0'      
    ],
    caseStudies: [{ title: 'Campaign Shoot', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80&auto=format&fit=crop' }],
    meta: { title: 'Ad Video Shoot — Our Services', description: 'Professional ad video shoots that elevate your campaigns.' }
  }
];

export default services;