// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Senith Jayakody';
export const SITE_DESCRIPTION = 'Researcher in machine learning, signal processing, multispectral imaging, and biomedical sensing.';

export const CV_URL = '/resume.pdf';

export const CONTACT = {
  organization: 'Multidisciplinary AI Research Centre (MARC)',
  addressLines: [
    'University of Peradeniya, Sri Lanka',
  ],
  emails: [
    'senithjayakody2000@gmail.com',
    'senith@eng.pdn.ac.lk',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'GitHub',
    href: 'https://github.com/SenithJayakody',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:senithjayakody2000@gmail.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://lk.linkedin.com/in/senith-jayakody-09646b25b',
    icon: 'linkedin',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=bFCE8xoAAAAJ&hl=en',
    icon: 'scholar',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Shravan Goswami',
  designerUrl: 'https://shravangoswami.com',
  sourceLabel: 'Open Source',
  sourceUrl: 'https://github.com/shravanngoswamii/astro-scholar',
};

// Umami analytics — configured via environment variables so no tracking ID is
// committed. Set PUBLIC_UMAMI_WEBSITE_ID (e.g. in a .env file or a CI variable)
// to enable it; leave it unset to disable analytics entirely.
export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
