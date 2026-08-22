import type { Metadata } from 'next';
import LegalPage, { type LegalContent } from '../legal-page';

export const metadata: Metadata = { title: 'Licenses & Technology Notices', description: 'Original technology and third-party license notices for Celvion SuperPixel.' };

const bsd = `BSD 3-Clause License

Copyright (c) 2021, Xintao Wang
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;

const en: LegalContent = {
  kicker: 'Technology & attribution', title: 'Licenses & Notices',
  lede: 'Celvion SuperPixel combines independently developed computational-photography technology with clearly identified platform services and one optional third-party model component.',
  effective: 'Notice version 1.0 · Updated August 22, 2026',
  summary: 'Third-party licenses apply only to the components identified below. They do not make Celvion SuperPixel, the Celvion MFSR implementation, the interface, branding, documentation, or other original application code open source.',
  sections: [
    { heading: 'Celvion MFSR — independently developed', paragraphs: ['Celvion MFSR Core, Celvion MFSR Metal, the app-specific capture integration, validation gates, and associated original source code are independently designed and implemented by Celvion / Xinyu Guo. The audited clean-room MFSR package contains no third-party source code, binary library, machine-learning model, model weights, dataset, or bundled third-party asset.', 'This technology is proprietary and all rights are reserved. It is not licensed under the Real-ESRGAN BSD license or any other open-source license merely because the app also contains an independently identified third-party component.', 'Research papers, standards, and patent materials cited in internal engineering records are references used for study, testing, and legal review. Their source code, figures, model files, and long-form text are not redistributed as part of the Celvion MFSR package. This statement describes development and license provenance; it is not a patent non-infringement or freedom-to-operate opinion.'] },
    { heading: 'RealESRGAN_x2plus Core ML model', paragraphs: ['Purpose: optional on-device enhancement after an eligible MFSR result. The app currently embeds a Core ML conversion derived from the official RealESRGAN_x2plus v0.2.1 checkpoint.', 'Original source project: xinntao/Real-ESRGAN. Copyright © 2021 Xintao Wang. Source-code license: BSD 3-Clause.', 'The BSD source-code notice does not by itself establish rights in checkpoint weights, training data, or third-party material that may be reflected in model weights. Commercial use and model redistribution therefore remain separate release-review items. The checkpoint, architecture, project name, and upstream copyrights remain attributable to their respective rights holders; local conversion does not make the model a Celvion-owned model or imply endorsement.'], links: [{ label: 'Real-ESRGAN source project', href: 'https://github.com/xinntao/Real-ESRGAN' }, { label: 'Plain-text source-code license', href: '/legal/Real-ESRGAN-LICENSE.txt' }] },
    { heading: 'Apple platform frameworks', paragraphs: ['Celvion SuperPixel uses Apple platform APIs such as AVFoundation, Core Motion, Metal, Core Image, Core Graphics, ImageIO, Accelerate, Core ML, CryptoKit, Photos, Foundation, and Swift system libraries. These are supplied by Apple’s operating system and development toolchain and are governed by the applicable Apple agreements.', 'The MFSR Metal shaders and app integration code are original Celvion code. Listing Apple frameworks here is a platform disclosure, not an open-source attribution and not a claim that Apple endorses Celvion SuperPixel.'] },
    { heading: 'DNG and image formats', paragraphs: ['The app relies on Apple system imaging services for supported RAW/DNG decoding. It does not bundle the Adobe DNG SDK or libtiff. File-format compatibility can vary by iPhone, lens, image, and iOS release.'] },
    { heading: 'License scope', paragraphs: ['Except where an identified third-party license expressly states otherwise for its component, Celvion SuperPixel branding, interface, documentation, product text, and original application code remain the property of their respective rights holders. No permission is granted to use Celvion names, icons, or trade dress to imply affiliation or endorsement.'] },
    { heading: 'Corrections', paragraphs: ['If you believe an attribution or license notice needs correction, contact the developer below.'] },
  ], ctaLabel: 'Report a license issue',
};

const zh: LegalContent = {
  kicker: '技术与署名', title: '许可证与声明',
  lede: 'Celvion SuperPixel 由独立开发的计算摄影技术、明确列出的系统服务，以及一个可选第三方模型组件共同组成。',
  effective: '声明版本 1.0 · 更新于 2026 年 8 月 22 日',
  summary: '第三方许可证只适用于下方明确标出的组件，不会因此让 Celvion SuperPixel、Celvion MFSR 实现、界面、品牌、文档或其他原创 App 代码成为开源软件。',
  sections: [
    { heading: 'Celvion MFSR — 独立开发', paragraphs: ['Celvion MFSR Core、Celvion MFSR Metal、App 专用拍摄接线、真实性与质量门，以及相关原创源码，均由 Celvion / Xinyu Guo 独立设计与实现。经审计的 clean-room MFSR 包不包含第三方源码、二进制库、机器学习模型、模型权重、数据集或打包的第三方资产。', '上述技术属于项目专有技术，保留所有权利。它不会因为 App 另行包含一个明确标注的第三方组件，就自动受到 Real-ESRGAN BSD 许可证或其他开源许可证约束。', '内部工程记录引用的论文、标准与专利材料仅用于研究、测试与法律审查；相关源码、图片、模型文件和长篇文本不随 Celvion MFSR 包重新分发。本说明用于描述开发与许可证来源，不构成专利不侵权或自由实施法律意见。'] },
    { heading: 'RealESRGAN_x2plus Core ML 模型', paragraphs: ['用途：在符合条件的 MFSR 结果之后提供可选的设备端增强。App 当前嵌入由官方 RealESRGAN_x2plus v0.2.1 checkpoint 转换得到的 Core ML 模型。', '原始源码项目：xinntao/Real-ESRGAN。版权：© 2021 Xintao Wang。源码许可证：BSD 3-Clause。', 'BSD 源码许可证本身不能自动证明 checkpoint 权重、训练数据或模型权重中可能涉及的第三方材料具备相同权利；商业使用与模型再分发仍属于独立的发布前审查项。checkpoint、网络结构、项目名称及上游版权仍归各自权利人；转换为 Core ML 不会把模型变成 Celvion 自有模型，也不表示其为 Celvion SuperPixel 背书。'], links: [{ label: 'Real-ESRGAN 源项目', href: 'https://github.com/xinntao/Real-ESRGAN' }, { label: '打开源码许可证文本', href: '/legal/Real-ESRGAN-LICENSE.txt' }] },
    { heading: 'Apple 平台框架', paragraphs: ['Celvion SuperPixel 使用 AVFoundation、Core Motion、Metal、Core Image、Core Graphics、ImageIO、Accelerate、Core ML、CryptoKit、Photos、Foundation 与 Swift 系统库等 Apple 平台 API。这些能力由 Apple 操作系统与开发工具链提供，并受适用的 Apple 协议约束。', 'MFSR Metal 着色器与 App 接线代码属于 Celvion 原创代码。列出 Apple 框架只是平台披露，不是开源署名，也不表示 Apple 为 Celvion SuperPixel 背书。'] },
    { heading: 'DNG 与图像格式', paragraphs: ['App 依赖 Apple 系统图像服务解码受支持的 RAW/DNG，不打包 Adobe DNG SDK 或 libtiff。文件格式兼容性可能随 iPhone、镜头、图像和 iOS 版本变化。'] },
    { heading: '许可证适用范围', paragraphs: ['除非某项第三方许可证对其组件另有明确规定，Celvion SuperPixel 的品牌、界面、文档、产品文字和原创 App 代码仍归各自权利人所有。不得使用 Celvion 名称、图标或视觉识别暗示关联或背书。'] },
    { heading: '问题与更正', paragraphs: ['如果你认为某项署名或许可证声明需要更正，请联系下方开发者邮箱。'] },
  ], ctaLabel: '报告许可证问题',
};

export default function LicensesPage() {
  return <LegalPage en={en} zh={zh} email="gggxxxyyyy@gmail.com" licenseText={{ title: 'Real-ESRGAN · BSD 3-Clause', text: bsd }} />;
}
