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
    slug: 'google-my-business',
    title: 'Google My Business (GMB)',
    category: 'digital',
    shortDescription: 'Local discovery & GMB optimization to increase local visibility and store visits.',
    fullDescription: 'We optimize and manage your Google Business Profile to improve local search visibility, map placement, and conversions. Our process includes profile setup and verification, local citation and NAP consistency, GMB posts and offers, review and reputation management, and schema optimizations to align your site with local signals.',
    bullets: ['GMB setup & verification', 'Local citations & NAP consistency', 'GMB posts & offers', 'Review & reputation management', 'Local schema & maps optimization'],
    images: [
      'https://images.unsplash.com/photo-1505238680356-667803448bb6?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975912413-5e9ff9e0a2d2?w=1200&q=80&auto=format&fit=crop'
    ],
    examples: [
      {
        title: 'Neighborhood Bakery — GMB Optimization',
        description: 'Profile setup, localized posts and review response — 42% increase in map clicks.',
        image: 'https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=1200&q=80&auto=format&fit=crop',
        url: 'https://example.com/neighborhood-bakery'
      },
      {
        title: 'Chain Restaurant Local Listings',
        description: 'Citation cleanup and menu schema — improved local rankings across 10 locations.',
        image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80&auto=format&fit=crop',
        url: 'https://example.com/restaurant'
      },
      {
        title: 'Clinic Multi-location Setup',
        description: 'Verified listings and review management — increased appointment requests by 35%.',
        image: 'https://images.unsplash.com/photo-1527775819923-64e07cb7fbc9?w=1200&q=80&auto=format&fit=crop',
        url: 'https://example.com/clinic'
      }
    ],
    meta: { title: 'Google My Business (GMB) — Our Services', description: 'Optimize and manage your Google Business Profile to drive local discovery, map visibility, and store visits.' }
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    category: 'digital',
    shortDescription: 'Manage and grow your brand presence across social platforms.',
    fullDescription: 'We handle end-to-end social media management: content planning, scheduling, community engagement, creative production, and performance optimization to build audience and drive conversions.',
    bullets: ['Content strategy & calendars', 'Community & reputation management', 'Paid social management', 'Creative repurposing & distribution', 'Performance reporting & insights'],
    examples: [
      {
        title: 'VyaapaarNiti',
        description: 'Product launch content series and community activation across channels.',
        image: 'https://res.cloudinary.com/dgmovv8me/image/upload/v1769769082/1_hedcjr.jpg',
      },
      {
        title: 'SS Makeover Fairy',
        description: 'Short-form teasers optimized for reels and story formats to increase pre-orders.',
        image: 'https://res.cloudinary.com/dgmovv8me/image/upload/v1769769083/3_w7wapp.jpg',
      },
      {
        title: 'Influencer Collab Series',
        description: 'Creator-led collaborations that amplified reach and drove conversions.',
        image: 'https://res.cloudinary.com/dgmovv8me/image/upload/v1769769083/2_bohz4i.jpg',
      }
    ],
    meta: { title: 'Social Media Management — Our Services', description: 'Social media management and community growth services.' }
  },

  {
    slug: 'ad-video',
    title: 'Ad Video',
    category: 'video',
    shortDescription: 'Commercial and campaign-focused video production.',
    fullDescription: 'We create campaign-led commercial videos for brand and product launches — concepting, scriptwriting, and production tailored to your audience and KPIs.',
    bullets: ['Campaign concept & scripting', 'Director-led production', 'Broadcast & digital deliverables'],
    images: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop'],
    videos: [
      'https://www.youtube.com/embed/Plb5JKo29T0?rel=0',
      'https://www.youtube.com/embed/m_-MLVXiqKk?rel=0',
      'https://www.youtube.com/embed/5dzihu5Y_II?rel=0',
      'https://www.youtube.com/embed/Ljo30szLjtU?rel=0',
      'https://www.youtube.com/embed/cuF7VWrUmR8?rel=0',
      'https://www.youtube.com/embed/J_KFa-c4EpE?rel=0'
    ],
    caseStudies: [{ title: 'Launch Campaign', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80&auto=format&fit=crop' }],
    meta: { title: 'Ad Video — Our Services', description: 'Commercial and campaign video production that drives awareness and engagement.' }
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
      'https://www.youtube.com/embed/-UavHYaD5v4?rel=0',
      'https://www.youtube.com/embed/bHg-1asHOnc?rel=0',
      'https://www.youtube.com/embed/L7uHBT7Ti2o?rel=0',
      'https://www.youtube.com/embed/f7qGBAcjXgA?rel=0',
      'https://www.youtube.com/embed/5LuAlyntVRE?rel=0',
      'https://www.youtube.com/embed/oEdJsve52BA?rel=0',
      'https://www.youtube.com/embed/1zNS8NNtHas?rel=0',
      'https://www.youtube.com/embed/Nky2oGalqLk?rel=0',
      'https://www.youtube.com/embed/ecSAstmluS_0?rel=0',
      'https://www.youtube.com/embed/jaHGHm3Xsjc?rel=0',
      'https://www.youtube.com/embed/qsvmEZRr_M8?rel=0',
      'https://www.youtube.com/embed/Uf-6XWhLO1s?rel=0'

    ],
    caseStudies: [{ title: 'Campaign Shoot', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80&auto=format&fit=crop' }],
    meta: { title: 'Ad Video Shoot — Our Services', description: 'Professional ad video shoots that elevate your campaigns.' }
  },
  {
    slug: 'meta-ad-performance',
    title: 'Meta Ad Performance',
    category: 'video',
    shortDescription: 'Short-form ad creative tailored for Meta platforms.',
    fullDescription: 'We produce snackable, high-converting videos optimized for reach, relevance and performance on Meta platforms (Facebook & Instagram). We test formats, hooks and editing styles to maximize ad relevance and ROAS.',
    bullets: ['Creative testing & adaptation', 'Platform-optimized formats', 'Conversion-focused editing'],
    images: ['https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80&auto=format&fit=crop'],
    customPage: true,
    meta: { title: 'Meta Ad Performance — Our Services', description: 'Meta ad video production focused on performance and reach.' }
  }

];

export default services;