import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryBasePath = '/celvion-superpixel-site';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      trailingSlash: true,
      basePath: repositoryBasePath,
      assetPrefix: repositoryBasePath,
      images: { unoptimized: true },
    }
  : {
      images: { unoptimized: true },
    };

export default nextConfig;
