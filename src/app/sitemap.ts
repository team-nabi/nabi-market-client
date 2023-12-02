import type { MetadataRoute } from 'next'
import AppPath from '@/config/appPath'
import { Environment } from '@/config/environment'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(AppPath).map((route) => ({
    url: `${Environment.currentAddress()}${route('' as never)}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
