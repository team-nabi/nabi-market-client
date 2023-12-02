import type { MetadataRoute } from 'next'
import { Environment } from '@/config/environment'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${Environment.currentAddress()}/sitemap.xml`,
    host: Environment.currentAddress(),
  }
}
