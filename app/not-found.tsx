import Image from 'next/image';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function NotFound() {
  return <main className="not-found shell">
    <Image src={`${basePath}/assets/app-icon.png`} alt="Celvion SuperPixel" width={92} height={92} />
    <p className="eyebrow">404</p>
    <h1>没有找到这个页面。</h1>
    <p>The page you requested could not be found.</p>
    <Link className="button primary" href="/">返回首页 · Back home</Link>
  </main>;
}
