'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Language = 'en' | 'zh';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const copy = {
  en: {
    navFeatures: 'Features', navSupport: 'Support', navPrivacy: 'Privacy', language: '中文',
    eyebrow: 'Computational telephoto camera', title: 'More detail.\nFrom the camera you have.',
    lede: 'Celvion SuperPixel captures a short burst, reconstructs fine detail with an independently developed MFSR pipeline, and finishes the result entirely on your iPhone.',
    soon: 'Coming to the App Store', support: 'Get support',
    note: 'Designed for iPhone — from single-camera models to Pro telephoto systems.',
    workflowEyebrow: 'Native camera. Serious computation.', workflowTitle: 'A clearer way to reach farther.',
    workflowBody: 'SuperPixel uses the physical camera available on your iPhone, then adds carefully bounded multi-frame reconstruction instead of pretending a crop is optical zoom.',
    features: [
      ['01', 'Capture a real burst', 'RAW or JPG capture uses Apple camera frameworks and the physical lens selected for the shot.'],
      ['02', 'Reconstruct, not just resize', 'Celvion MFSR aligns multiple observations and reconstructs additional spatial detail on device.'],
      ['03', 'Choose the final finish', 'Keep the direct fusion result or enable optional Real-ESRGAN 2× enhancement for a larger output.'],
      ['04', 'Save with context', 'Export the finished image while preserving an honest record of the capture and processing path.'],
    ],
    reachEyebrow: 'Built for every iPhone camera', reachTitle: 'Computational reach for Air.\nNative reach for Pro.',
    reachBody: 'On iPhone models without a physical telephoto lens, SuperPixel is designed to turn multi-frame information into a more useful 2×–4× view. On Pro models, it starts from the best available physical lens and extends from there.',
    rawTitle: 'RAW when the lens supports it. JPG when it does not.',
    rawBody: 'SuperPixel checks the selected physical camera at runtime. The RAW/JPG control reflects what that lens can actually deliver, with a safe JPG fallback when Bayer RAW is unavailable.',
    privacyEyebrow: 'Private by design', privacyTitle: 'Your photos stay on your iPhone.',
    privacyBody: 'Capture, alignment, MFSR reconstruction, optional AI enhancement, and export happen locally. No account, advertising tracker, or developer photo server is required.',
    privacyLink: 'Read the privacy policy', footer: 'All rights reserved.',
  },
  zh: {
    navFeatures: '功能', navSupport: '支持', navPrivacy: '隐私', language: 'EN',
    eyebrow: '计算长焦相机', title: '让手里的镜头，\n看见更多细节。',
    lede: 'Celvion SuperPixel 连续捕捉多帧画面，通过独立开发的 MFSR 流程重建细节，再在你的 iPhone 上完成全部处理。',
    soon: '即将登陆 App Store', support: '获取支持',
    note: '为不同 iPhone 相机系统而设计——从单摄机型到 Pro 长焦。',
    workflowEyebrow: '原生相机，认真计算', workflowTitle: '用更清晰的方式，看得更远。',
    workflowBody: 'SuperPixel 先调用 iPhone 实际可用的物理镜头，再进行有边界的多帧重建；不会把普通裁切冒充成光学变焦。',
    features: [
      ['01', '真实多帧采集', 'RAW 或 JPG 均通过 Apple 原生相机框架，从本次选定的物理镜头采集。'],
      ['02', '重建，而不只是放大', 'Celvion MFSR 在设备端对齐多次观测，并重建额外的空间细节。'],
      ['03', '成片方式由你选择', '可直接保留融合结果，也可开启 Real-ESRGAN 2× 进一步放大。'],
      ['04', '带着处理依据保存', '导出成片时，保留真实的采集与处理路径信息。'],
    ],
    reachEyebrow: '为每一种 iPhone 相机而做', reachTitle: '让 Air 拥有计算长焦，\n让 Pro 延伸原生长焦。',
    reachBody: '在没有物理长焦的 iPhone 上，SuperPixel 通过多帧信息让 2×–4× 视角更有实用价值；在 Pro 机型上，它会先使用最合适的物理镜头，再从那里继续延伸。',
    rawTitle: '镜头支持就用 RAW，不支持就安全回到 JPG。',
    rawBody: 'SuperPixel 会在运行时检查当前物理镜头。RAW/JPG 按钮只显示这颗镜头真正具备的能力；Bayer RAW 不可用时会明确回退到 JPG。',
    privacyEyebrow: '隐私优先', privacyTitle: '照片始终留在你的 iPhone。',
    privacyBody: '拍摄、对齐、MFSR 重建、可选 AI 增强与导出均在本地完成，无需账户、广告跟踪器或开发者照片服务器。',
    privacyLink: '阅读隐私政策', footer: '保留所有权利。',
  },
} as const;

export default function HomeClient() {
  const [language, setLanguage] = useState<Language>('zh');
  useEffect(() => {
    const saved = window.localStorage.getItem('celvion-superpixel-language');
    const preferred = saved === 'en' || saved === 'zh' ? saved : navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    document.documentElement.lang = preferred === 'zh' ? 'zh-Hans' : 'en';
    const timer = window.setTimeout(() => setLanguage(preferred), 0);
    return () => window.clearTimeout(timer);
  }, []);
  const t = copy[language];
  const toggleLanguage = () => {
    const next = language === 'zh' ? 'en' : 'zh'; setLanguage(next);
    window.localStorage.setItem('celvion-superpixel-language', next); document.documentElement.lang = next === 'zh' ? 'zh-Hans' : 'en';
  };

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="nav-shell">
      <Link className="brand" href="/" aria-label="Celvion SuperPixel home"><Image src={`${basePath}/assets/app-icon.png`} alt="" width={40} height={40} priority /><span>Celvion <b>SuperPixel</b></span></Link>
      <nav className="nav-links" aria-label="Primary navigation"><a href="#features">{t.navFeatures}</a><Link href="/support">{t.navSupport}</Link><Link href="/privacy">{t.navPrivacy}</Link><button type="button" onClick={toggleLanguage} aria-label="Switch language">{t.language}</button></nav>
    </div></header>
    <main id="main">
      <section className="hero shell">
        <div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title.split('\n').map((line, index) => <span key={line} className={index ? 'gradient-text' : ''}>{line}</span>)}</h1><p className="lede">{t.lede}</p><div className="button-row"><span className="button primary">{t.soon}</span><Link className="button secondary" href="/support">{t.support} <span aria-hidden="true">↗</span></Link></div><p className="availability">{t.note}</p></div>
        <div className="phone-stage" aria-label="Celvion SuperPixel camera interface preview"><div className="glow glow-cyan" /><div className="glow glow-magenta" /><div className="phone-frame"><Image src={`${basePath}/assets/camera-preview.png`} alt="Celvion SuperPixel camera interface showing multi-frame RAW capture" width={852} height={1844} priority /></div><div className="capture-chip chip-one"><strong>8–10</strong><span>{language === 'zh' ? '帧计算' : 'frames'}</span></div><div className="capture-chip chip-two"><strong>RAW</strong><span>{language === 'zh' ? '原生采集' : 'native capture'}</span></div></div>
      </section>
      <section className="feature-section" id="features"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{t.workflowEyebrow}</p><h2>{t.workflowTitle}</h2></div><p>{t.workflowBody}</p></div><div className="feature-grid">{t.features.map(([number, title, body]) => <article className="feature-card" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="reach-section shell"><div className="reach-visual" aria-hidden="true"><div className="lens-ring ring-one"><span>1×</span></div><div className="lens-ring ring-two"><span>2×</span></div><div className="lens-ring ring-four"><span>4×</span></div><div className="detail-grid" /></div><div className="reach-copy"><p className="eyebrow">{t.reachEyebrow}</p><h2>{t.reachTitle.split('\n').map(line => <span key={line}>{line}</span>)}</h2><p>{t.reachBody}</p></div></section>
      <section className="format-section shell"><div className="format-control" aria-hidden="true"><span className="active">RAW</span><span>JPG</span></div><div><h2>{t.rawTitle}</h2><p>{t.rawBody}</p></div></section>
      <section className="privacy-section"><div className="shell privacy-panel"><div><p className="eyebrow">{t.privacyEyebrow}</p><h2>{t.privacyTitle}</h2><p>{t.privacyBody}</p><Link className="inline-link" href="/privacy">{t.privacyLink} <span aria-hidden="true">→</span></Link></div><div className="privacy-orbit" aria-hidden="true"><Image src={`${basePath}/assets/app-icon.png`} alt="" width={132} height={132} /><span className="orbit orbit-one" /><span className="orbit orbit-two" /></div></div></section>
    </main>
    <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={`${basePath}/assets/app-icon.png`} alt="" width={34} height={34} /><span>Celvion SuperPixel</span></div><p>© 2026 Xinyu Guo. {t.footer}</p><nav aria-label="Footer navigation"><Link href="/support">{t.navSupport}</Link><Link href="/privacy">{t.navPrivacy}</Link><Link href="/terms">{language === 'zh' ? '使用条款' : 'Terms'}</Link><Link href="/licenses">{language === 'zh' ? '许可证' : 'Licenses'}</Link></nav></div></footer>
  </>;
}
