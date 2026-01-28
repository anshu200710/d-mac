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
    caseStudies: [
      { title: 'E-Commerce SEO Lift', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80&auto=format&fit=crop', url: '/portfolio' }
    ],
    meta: { title: 'SEO & Content — Our Services', description: 'SEO and content services that increase organic traffic, authority, and conversions.' }
  },
  {
    slug: 'paid-media',
    title: 'Paid Media',
    category: 'digital',
    shortDescription: 'Performance-driven search and social advertising.',
    fullDescription: 'We design and manage high-performing campaigns across search and social, focusing on ROAS and scalable channels. From creative testing to automated bidding, we optimize for conversions and growth.',
    bullets: ['Paid search (Google Ads)', 'Social ads (Meta, X, LinkedIn)', 'Creative & landing page testing'],
    images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop'],
    caseStudies: [{ title: 'PPC ROAS Improvement', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&q=80&auto=format&fit=crop', url: '/portfolio' }],
    meta: { title: 'Paid Media — Our Services', description: 'Paid media management for measurable results and scale.' }
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    category: 'digital',
    shortDescription: 'Funnel-first content that converts.',
    fullDescription: 'We craft content that educates users, builds trust, and drives conversions across the funnel — from awareness to retention.',
    bullets: ['Content strategy', 'Blog & long-form content', 'Content distribution'],
    images: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop'],
    caseStudies: [{ title: 'Content Funnels for Lead Gen', image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1000&q=80&auto=format&fit=crop', url: '/portfolio' }],
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
    caseStudies: [{ title: 'Community Growth Case', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&q=80&auto=format&fit=crop', url: '/portfolio' }],
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
    caseStudies: [{ title: 'CRO for SaaS', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80&auto=format&fit=crop', url: '/portfolio' }],
    meta: { title: 'Analytics & CRO — Our Services', description: 'Analytics and CRO that drives measurable improvements.' }
  },
  // Example video service as placeholder
  {
    slug: 'ad-videos',
    title: 'Ad Videos',
    category: 'video',
    shortDescription: 'High-performing ad creative for social and broadcast.',
    fullDescription: 'We produce ad creative optimized for platforms and audiences — short-form, long-form, and dynamic ads that scale.',
    bullets: ['Short-form social ads', 'Broadcast & OTT spots', 'Ad performance optimization'],
    images: ['https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80&auto=format&fit=crop'],
    caseStudies: [{ title: 'Social Ads Campaign', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&q=80&auto=format&fit=crop', url: '/portfolio' }],
    meta: { title: 'Ad Videos — Our Services', description: 'Creative ad video production that drives results.' }
  },
  {
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    category: 'video',
    shortDescription: 'Scale reach with creator partnerships.',
    fullDescription: 'We partner with creators and develop content strategies that amplify brand messages authentically across platforms.',
    bullets: ['Creator partnerships', 'Campaign strategy', 'Performance tracking'],
    images: ['https://images.unsplash.com/photo-1506619216599-9d16f87b8cf2?w=1200&q=80&auto=format&fit=crop'],
    caseStudies: [{ title: 'Creator Campaign', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&q=80&auto=format&fit=crop', url: '/portfolio' }],
    meta: { title: 'Influencer Marketing — Our Services', description: 'Creator-led video campaigns that drive awareness and engagement.' }
  },
  {
    slug: 'brand-stories',
    title: 'Brand Stories',
    category: 'video',
    shortDescription: 'Narrative-driven brand films.',
    fullDescription: 'We craft documentary-style and short-form brand films that build emotional connection and long-term loyalty.',
    bullets: ['Documentary brand films', 'Short form storytelling', 'Distribution strategy'],
    images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop'],
    caseStudies: [{ title: 'Brand Film', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80&auto=format&fit=crop', url: '/portfolio' }],
    meta: { title: 'Brand Stories — Our Services', description: 'Compelling brand films that tell your story.' }
  },
  {
    slug: 'visual-content',
    title: 'Visual Content',
    category: 'video',
    shortDescription: 'High-quality social-first visuals.',
    fullDescription: 'Short-form visual content and motion graphics optimized for platforms and trends.',
    bullets: ['Short-form visuals', 'Motion graphics', 'Platform-first editing'],
    images: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop'],
    caseStudies: [{ title: 'Visuals for Social', image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1000&q=80&auto=format&fit=crop', url: '/portfolio' }],
    meta: { title: 'Visual Content — Our Services', description: 'Eye-catching visual content for social platforms.' }
  },
  {
    slug: 'product-demos',
    title: 'Product Demos',
    category: 'video',
    shortDescription: 'Clear and persuasive product demonstrations.',
    fullDescription: 'Hands-on product demos and explainer videos that reduce friction and increase conversion.',
    bullets: ['Explainer videos', 'Feature demos', 'Conversion-focused scripting'],
    images: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop'],
    caseStudies: [{ title: 'Demo Series', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&q=80&auto=format&fit=crop', url: '/portfolio' }],
    meta: { title: 'Product Demos — Our Services', description: 'Demo videos that convert curious browsers into customers.' }
  }
];

export default services;