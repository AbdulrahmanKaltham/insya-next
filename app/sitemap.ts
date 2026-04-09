import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ensia.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://ensia.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://ensia.com/tracks', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://ensia.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://ensia.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: 'https://ensia.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://ensia.com/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}