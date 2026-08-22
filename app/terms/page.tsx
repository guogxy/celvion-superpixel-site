import type { Metadata } from 'next';
import LegalPage, { type LegalContent } from '../legal-page';

export const metadata: Metadata = { title: 'Terms of Use', description: 'Terms of use for Celvion SuperPixel.' };

const en: LegalContent = {
  kicker: 'Legal', title: 'Terms of Use',
  lede: 'Please read these terms before using Celvion SuperPixel. You remain responsible for reviewing processed results and keeping important originals.',
  effective: 'Effective August 22, 2026 · Version 1.0',
  summary: 'Celvion SuperPixel is licensed through the App Store. These terms supplement Apple’s Standard EULA; mandatory law and the Apple agreement take precedence where applicable.',
  sections: [
    { heading: '1. Application and acceptance', paragraphs: ['By downloading, installing, or using Celvion SuperPixel, you agree to these Terms of Use. If you do not agree, stop using and uninstall the app. These terms supplement Apple’s Standard End User License Agreement for App Store downloads.'], links: [{ label: 'Apple Standard EULA', href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' }] },
    { heading: '2. Scope of license', paragraphs: ['Subject to these terms, the app provider grants you a limited, non-exclusive, non-transferable license to use Celvion SuperPixel on Apple-branded devices you own or control, as permitted by the applicable Apple Usage Rules. The app is licensed, not sold.'] },
    { heading: '3. Camera and processing results', paragraphs: ['Celvion SuperPixel provides multi-frame capture, RAW/JPG processing, MFSR reconstruction, computational zoom, and optional AI enhancement. Results depend on scene motion, lighting, focus, camera hardware, device temperature, storage, and selected settings.', 'Multi-frame or AI processing can produce softness, ghosting, ringing, oversmoothing, or incorrect-looking detail. Output pixel dimensions do not by themselves prove new optical detail. Inspect important results before saving, publishing, or relying on them.', 'The app does not guarantee support for every iPhone, lens, RAW mode, scene, image size, or operating-system version, and is not intended for evidentiary preservation, scientific measurement, safety-critical use, or any purpose requiring guaranteed accuracy. Keep original files and independent backups.'] },
    { heading: '4. Your content and responsibilities', paragraphs: ['You retain the rights you lawfully hold in captured photos and processed results. On-device processing does not transfer ownership to the app provider.', 'You are responsible for having the rights and permissions required to photograph, process, save, and share content, and for complying with privacy, publicity, copyright, property, and other applicable laws. Review both image content and metadata before sharing.'] },
    { heading: '5. Prohibited conduct', bullets: ['Do not use the app to create, process, or distribute unlawful, infringing, fraudulent, or malicious content.', 'Do not bypass security restrictions, interfere with normal operation, or reverse engineer, redistribute, or resell the app except where applicable law expressly permits it.', 'Do not use third-party project names or trademarks to imply that their authors endorse Celvion SuperPixel.'] },
    { heading: '6. Original and third-party technology', paragraphs: ['The Celvion MFSR implementation and other original app code are independently developed proprietary technology. The app also uses Apple platform frameworks and includes an optional Real-ESRGAN model component subject to its own license. Third-party licenses apply only to the identified components, not to the app as a whole.'], links: [{ label: 'Licenses and notices', href: '/licenses' }] },
    { heading: '7. Updates and compatibility', paragraphs: ['Features may be updated, changed, limited, or discontinued for security, compatibility, performance, legal, or product reasons. RAW and telephoto choices reflect the actual capabilities reported by the selected physical camera. Optional AI processing requires compatible device resources and may fall back to the direct MFSR result.'] },
    { heading: '8. Support', paragraphs: ['The app provider, not Apple, is responsible for maintenance and support. Apple has no obligation to provide maintenance or technical support for the app.'], links: [{ label: 'Support page', href: '/support' }] },
    { heading: '9. Disclaimer and liability', paragraphs: ['To the maximum extent permitted by applicable law, Celvion SuperPixel is provided “as is” and “as available,” without a promise that it will be uninterrupted, error-free, compatible with every device, or capable of producing a particular visual result.', 'To the maximum extent permitted by law, the app provider is not liable for indirect, incidental, special, or consequential loss arising from use or inability to use the app, processing failure, failure to keep backups, or inappropriate capture, export, or sharing settings. Nothing here limits consumer rights or liability that cannot legally be excluded.'] },
    { heading: '10. Termination and changes', paragraphs: ['Your license may terminate if you materially violate these terms. Provisions concerning intellectual property, disclaimers, liability, and third-party licenses survive where their nature requires.', 'These terms and their effective date may be updated when features, law, or distribution requirements change. Material changes will be presented in an appropriate manner.'] },
    { heading: '11. Contact', paragraphs: ['App provider: Xinyu Guo. Questions about these terms may be sent to the email below.'] },
  ], ctaLabel: 'Email the app provider',
};

const zh: LegalContent = {
  kicker: '法律信息', title: '使用条款',
  lede: '请在使用 Celvion SuperPixel 前阅读本条款。你始终负责检查处理结果并保留重要原片。',
  effective: '生效日期：2026 年 8 月 22 日 · 版本 1.0',
  summary: 'Celvion SuperPixel 通过 App Store 提供许可。本条款补充 Apple 标准 EULA；适用时，法律强制性规定及 Apple 协议优先。',
  sections: [
    { heading: '一、适用与接受', paragraphs: ['下载、安装或使用 Celvion SuperPixel，即表示你同意本使用条款。若不同意，请停止使用并卸载 App。本条款是对 App Store 下载内容适用的 Apple 标准最终用户许可协议的补充。'], links: [{ label: 'Apple 标准 EULA', href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' }] },
    { heading: '二、许可范围', paragraphs: ['在遵守本条款的前提下，App 提供方授予你有限、非独占、不可转让的许可，允许你按照 Apple 适用的使用规则，在你拥有或控制的 Apple 设备上使用 Celvion SuperPixel。App 是许可使用，而非出售。'] },
    { heading: '三、相机与处理结果', paragraphs: ['Celvion SuperPixel 提供多帧拍摄、RAW/JPG 处理、MFSR 重建、计算变焦和可选 AI 增强。场景运动、光线、对焦、相机硬件、设备温度、存储空间与设置均会影响结果。', '多帧或 AI 处理可能产生柔化、重影、振铃、过度平滑或不正确的细节观感。输出像素尺寸本身不等于新增真实光学细节；保存、发布或使用重要结果前请仔细检查。', 'App 不保证支持每一款 iPhone、镜头、RAW 模式、场景、图像尺寸或系统版本，也不用于证据保存、科研测量、安全关键用途或任何要求结果准确性得到保证的场景。请保留原片与独立备份。'] },
    { heading: '四、你的内容与责任', paragraphs: ['你保留依法对拍摄照片和处理结果享有的权利。本地处理不会把这些内容的所有权转移给 App 提供方。', '你应确保有权拍摄、处理、保存与分享相关内容，并遵守隐私、肖像、著作权、财产权及其他适用法律。分享前请检查图像内容与元数据。'] },
    { heading: '五、禁止行为', bullets: ['不得使用 App 制作、处理或传播违法、侵权、欺诈或恶意内容。', '不得绕过安全限制、干扰正常运行，或在法律不允许的范围内反向工程、重新分发或转售 App。', '不得使用第三方项目名称或商标暗示其作者为 Celvion SuperPixel 背书。'] },
    { heading: '六、自研与第三方技术', paragraphs: ['Celvion MFSR 实现及其他原创 App 代码属于独立开发的专有技术。App 同时使用 Apple 平台框架，并包含受自身许可证约束的可选 Real-ESRGAN 模型组件。第三方许可证只适用于所标明的组件，而非整个 App。'], links: [{ label: '许可证与声明', href: '/licenses' }] },
    { heading: '七、更新与兼容性', paragraphs: ['App 可能因安全、兼容、性能、法律或产品原因更新、调整、限制或停止部分功能。RAW 与长焦选项会反映所选物理镜头实际报告的能力；可选 AI 处理需要兼容的设备资源，并可能回退到直接 MFSR 结果。'] },
    { heading: '八、技术支持', paragraphs: ['App 的维护与支持由 App 提供方承担，Apple 没有义务为本 App 提供维护或技术支持。'], links: [{ label: '技术支持页面', href: '/support' }] },
    { heading: '九、免责声明与责任限制', paragraphs: ['在适用法律允许的最大范围内，Celvion SuperPixel 按“现状”和“可用”状态提供，不承诺永不中断、完全无错误、兼容所有设备或产生特定视觉结果。', '在法律允许的最大范围内，App 提供方不对因使用或无法使用 App、处理失败、未保留备份，或拍摄、导出、分享设置不当而产生的间接、附带、特殊或后果性损失负责。本条不限制依法不得排除的消费者权利或责任。'] },
    { heading: '十、终止与条款更新', paragraphs: ['如果你严重违反本条款，使用许可可能终止。知识产权、免责声明、责任与第三方许可等按其性质应继续有效的条款不因终止而失效。', '功能、法律或分发要求变化时，本条款及生效日期可能更新；重大变化会以适当方式提示。'] },
    { heading: '十一、联系我们', paragraphs: ['App 提供方：Xinyu Guo。有关本条款的问题可发送至下方邮箱。'] },
  ], ctaLabel: '联系 App 提供方',
};

export default function TermsPage() { return <LegalPage en={en} zh={zh} email="gggxxxyyyy@gmail.com" />; }
