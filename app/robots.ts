// Learn more at https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '',
    },
    sitemap: 'https://www.codedevils.org/sitemap.xml',
  };
}
