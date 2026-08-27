'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Language = 'en' | 'zh';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const copy = {
  en: {
    navFeatures: 'Features', navSupport: 'Support', navPrivacy: 'Privacy', language: '中文',
    eyebrow: 'Computational telephoto camera', title: 'See more detail.\nFrom your iPhone.',
    lede: 'Celvion SuperPixel captures multiple observations and processes them entirely on your iPhone. Smart Capture labels any fallback honestly; True Super Resolution publishes only results that pass its authenticity checks. If a strict capture fails but leaves a verified single-frame source, you can choose a separate on-device AI recovery pass.',
    soon: 'Coming to the App Store', support: 'Get support',
    note: 'Designed for supported iPhone rear-camera systems — from single-camera models to Pro telephoto hardware.',
    workflowEyebrow: 'Native camera. Serious computation.', workflowTitle: 'A clearer way to reach farther.',
    workflowBody: 'SuperPixel uses the physical camera available on your iPhone, then adds carefully bounded multi-frame reconstruction instead of pretending a crop is optical zoom.',
    features: [
      ['01', 'Capture a real burst', 'JPG uses Apple camera frameworks and the selected physical lens; Bayer RAW is offered only when that lens reports support.'],
      ['02', 'Reconstruct, not just resize', 'Only multi-frame results that pass the formal authenticity checks are labeled True Super Resolution.'],
      ['03', 'Choose the final finish', 'Eligible fusion results can use optional on-device AI denoising or enhancement. If strict fusion fails but a verified single-frame source was retained, the library can separately offer ordinary 2× AI recovery or same-size AI denoising. Neither is a multi-frame result.'],
      ['04', 'Truthful result states', 'The app distinguishes authentic fusion, single-frame fallback, multi-frame fallback, single-frame AI recovery, and neural enhancement. Standard EXIF and GPS are exported only as configured.'],
    ],
    reachEyebrow: 'For supported iPhone camera systems', reachTitle: 'Computed reach for Air.\nPhysical telephoto first on Pro.',
    reachBody: 'On iPhone models without a physical telephoto lens, SuperPixel uses multi-frame evidence to improve supported 2×–4× computational views when the scene allows it. On Pro models, it first selects an available physical lens, then applies bounded reconstruction. Results vary with light, motion, focus, hardware, and temperature.',
    rawTitle: 'Bayer RAW when the physical lens exposes it. JPG otherwise.',
    rawBody: 'SuperPixel checks the selected physical camera at runtime. Smart Capture can use JPG when RAW is unavailable. True Super Resolution never relabels a fallback as an authentic result. When strict fusion fails, only an identity-checked source can unlock a separately labeled single-frame AI 2× or denoise action.',
    privacyEyebrow: 'Private by design', privacyTitle: 'Your photos stay on your iPhone.',
    privacyBody: 'Capture, alignment, MFSR reconstruction, optional AI enhancement, and export happen locally. No account, advertising tracker, or developer photo server is required.',
    privacyLink: 'Read the privacy policy', footer: 'All rights reserved.',
  },
  zh: {
    navFeatures: '功能', navSupport: '支持', navPrivacy: '隐私', language: 'EN',
    eyebrow: '计算长焦相机', title: '让手里的镜头，\n看见更多细节。',
    lede: 'Celvion SuperPixel 连续采集多次观测，并在 iPhone 本机完成处理。“智能成片”会如实标注降级结果；“真实超分”只发布通过真实性验证的成片。如果严格拍摄失败但保留了经验证的单帧来源，你还可以单独选择设备端 AI 补救。',
    soon: '即将登陆 App Store', support: '获取支持',
    note: '面向受支持的 iPhone 后置相机系统——从单摄机型到 Pro 长焦硬件。',
    workflowEyebrow: '原生相机，认真计算', workflowTitle: '用更清晰的方式，看得更远。',
    workflowBody: 'SuperPixel 先调用 iPhone 实际可用的物理镜头，再进行有边界的多帧重建；不会把普通裁切冒充成光学变焦。',
    features: [
      ['01', '真实多帧采集', 'JPG 通过 Apple 原生相机框架从所选物理镜头采集；只有该镜头实际支持时才提供 Bayer RAW。'],
      ['02', '重建，而不只是放大', '只有通过正式真实性验证的多帧结果，才会被标记为“真实超分”。'],
      ['03', '成片方式由你选择', '符合条件的融合结果可使用设备端 AI 降噪或增强。如果严格融合失败但保留了经验证的单帧来源，作品库会单独提供普通 2× AI 补救或原尺寸 AI 降噪；它们都不是多帧真实超分。'],
      ['04', '结果状态如实标注', 'App 会区分真实融合、单帧降级、多帧降级、单帧 AI 补救与神经增强；标准 EXIF 与 GPS 仅按你的设置导出。'],
    ],
    reachEyebrow: '面向受支持的 iPhone 相机系统', reachTitle: 'Air 使用多帧计算，\nPro 优先调用物理长焦。',
    reachBody: '在没有物理长焦的 iPhone 上，SuperPixel 会在场景证据足够时，利用多帧信息改善受支持的 2×–4× 计算视角；在 Pro 机型上，它会先选择可用的物理镜头，再进行有边界的重建。实际结果会受光线、运动、对焦、硬件与温度影响。',
    rawTitle: '物理镜头提供 Bayer RAW 才使用 RAW，否则使用 JPG。',
    rawBody: 'SuperPixel 会在运行时检查当前物理镜头。“智能成片”可在 RAW 不可用时使用 JPG；“真实超分”不会把降级结果重新标成真实超分。严格融合失败后，只有通过身份验证的来源才会显示单独的 AI 2× 或降噪操作。',
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
        <div className="phone-stage" aria-label="Celvion SuperPixel camera interface preview"><div className="glow glow-cyan" /><div className="glow glow-magenta" /><div className="phone-frame"><Image src={`${basePath}/assets/camera-preview.png`} alt="Celvion SuperPixel camera interface showing multi-frame RAW capture" width={852} height={1844} priority /></div><div className="capture-chip chip-one"><strong>10–12</strong><span>{language === 'zh' ? '首轮候选' : 'first pass'}</span></div><div className="capture-chip chip-two"><strong>RAW</strong><span>{language === 'zh' ? '原生采集' : 'native capture'}</span></div></div>
      </section>
      <section className="feature-section" id="features"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{t.workflowEyebrow}</p><h2>{t.workflowTitle}</h2></div><p>{t.workflowBody}</p></div><div className="feature-grid">{t.features.map(([number, title, body]) => <article className="feature-card" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="reach-section shell"><div className="reach-visual" aria-hidden="true"><div className="lens-ring ring-one"><span>1×</span></div><div className="lens-ring ring-two"><span>2×</span></div><div className="lens-ring ring-four"><span>4×</span></div><div className="detail-grid" /></div><div className="reach-copy"><p className="eyebrow">{t.reachEyebrow}</p><h2>{t.reachTitle.split('\n').map(line => <span key={line}>{line}</span>)}</h2><p>{t.reachBody}</p></div></section>
      <section className="format-section shell"><div className="format-control" aria-hidden="true"><span className="active">RAW</span><span>JPG</span></div><div><h2>{t.rawTitle}</h2><p>{t.rawBody}</p></div></section>
      <section className="privacy-section"><div className="shell privacy-panel"><div><p className="eyebrow">{t.privacyEyebrow}</p><h2>{t.privacyTitle}</h2><p>{t.privacyBody}</p><Link className="inline-link" href="/privacy">{t.privacyLink} <span aria-hidden="true">→</span></Link></div><div className="privacy-orbit" aria-hidden="true"><Image src={`${basePath}/assets/app-icon.png`} alt="" width={132} height={132} /><span className="orbit orbit-one" /><span className="orbit orbit-two" /></div></div></section>
    </main>
    <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><Image src={`${basePath}/assets/app-icon.png`} alt="" width={34} height={34} /><span>Celvion SuperPixel</span></div><p>© 2026 Xinyu Guo. {t.footer}</p><nav aria-label="Footer navigation"><Link href="/support">{t.navSupport}</Link><Link href="/privacy">{t.navPrivacy}</Link><Link href="/terms">{language === 'zh' ? '使用条款' : 'Terms'}</Link><Link href="/licenses">{language === 'zh' ? '许可证' : 'Licenses'}</Link></nav></div></footer>
  </>;
}
