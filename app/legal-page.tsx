'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export type LegalContent = {
  kicker: string;
  title: string;
  lede: string;
  effective?: string;
  summary?: string;
  sections: LegalSection[];
  ctaLabel?: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const withBasePath = (href: string) => href.startsWith('/') ? `${basePath}${href}` : href;

export default function LegalPage({
  en, zh, email, licenseText,
}: {
  en: LegalContent;
  zh: LegalContent;
  email?: string;
  licenseText?: { title: string; text: string };
}) {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');
  useEffect(() => {
    const saved = window.localStorage.getItem('celvion-superpixel-language');
    const preferred = saved === 'en' || saved === 'zh' ? saved : navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    document.documentElement.lang = preferred === 'zh' ? 'zh-Hans' : 'en';
    const timer = window.setTimeout(() => setLanguage(preferred), 0);
    return () => window.clearTimeout(timer);
  }, []);
  const content = language === 'zh' ? zh : en;
  const toggle = () => {
    const next = language === 'zh' ? 'en' : 'zh'; setLanguage(next);
    window.localStorage.setItem('celvion-superpixel-language', next); document.documentElement.lang = next === 'zh' ? 'zh-Hans' : 'en';
  };

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="nav-shell">
      <Link className="brand" href="/"><Image src={`${basePath}/assets/app-icon.png`} alt="" width={40} height={40} priority /><span>Celvion <b>SuperPixel</b></span></Link>
      <nav className="nav-links" aria-label="Primary navigation"><Link href="/">{language === 'zh' ? '首页' : 'Overview'}</Link><Link href="/support">{language === 'zh' ? '支持' : 'Support'}</Link><Link href="/privacy">{language === 'zh' ? '隐私' : 'Privacy'}</Link><button type="button" onClick={toggle}>{language === 'zh' ? 'EN' : '中文'}</button></nav>
    </div></header>
    <main id="main" className="legal-main">
      <section className="legal-hero shell"><p className="eyebrow">{content.kicker}</p><h1>{content.title}</h1><p className="legal-lede">{content.lede}</p>{content.effective && <p className="effective">{content.effective}</p>}</section>
      <div className="legal-layout shell">
        <article className="legal-article">
          {content.summary && <div className="commitment"><span>{language === 'zh' ? '核心说明' : 'Core statement'}</span><p>{content.summary}</p></div>}
          {content.sections.map((section, index) => <section key={`${index}-${section.heading}`} id={`section-${index + 1}`}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
            {section.links && <div className="legal-links">{section.links.map(link => <a key={link.href} href={withBasePath(link.href)} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
          </section>)}
          {licenseText && <section className="license-text"><h2>{licenseText.title}</h2><pre>{licenseText.text}</pre></section>}
          {email && <div className="support-cta"><p>{language === 'zh' ? '仍有问题？直接联系开发者。' : 'Still need help? Contact the developer directly.'}</p><a className="button primary" href={`mailto:${email}`}>{content.ctaLabel ?? (language === 'zh' ? '发送邮件' : 'Email support')}</a><code>{email}</code></div>}
        </article>
        <aside className="legal-aside"><p>{language === 'zh' ? '本页内容' : 'On this page'}</p><nav>{content.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}>{section.heading}</a>)}</nav></aside>
      </div>
    </main>
    <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={`${basePath}/assets/app-icon.png`} alt="" width={34} height={34} /><span>Celvion SuperPixel</span></div><p>© 2026 Xinyu Guo. {language === 'zh' ? '保留所有权利。' : 'All rights reserved.'}</p><nav><Link href="/support">{language === 'zh' ? '支持' : 'Support'}</Link><Link href="/privacy">{language === 'zh' ? '隐私' : 'Privacy'}</Link><Link href="/terms">{language === 'zh' ? '条款' : 'Terms'}</Link><Link href="/licenses">{language === 'zh' ? '许可证' : 'Licenses'}</Link></nav></div></footer>
  </>;
}
