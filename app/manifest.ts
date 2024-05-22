import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CodeDevils',
    short_name: 'CodeDevils',
    description:
      'Discover CodeDevils, a vibrant software development community at Arizona State University. Learn how we help members grow their coding skills and prepare for tech careers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
