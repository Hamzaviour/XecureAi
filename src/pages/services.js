/* ============================================
   XECURE AI — SERVICES PAGE
   ============================================ */
import { icon } from '../js/icons.js';

const services = [
  {
    ic: 'shield',
    title: 'Information Security',
    desc: 'Establish and improve your information security programs with assessments, architecture, policies, controls, governance, and strategy.',
    details: ['Security Assessment', 'Security Architecture', 'Security Policies', 'Security Controls', 'Governance', 'Maturity Assessment'],
  },
  {
    ic: 'aiChip',
    title: 'AI Security',
    desc: 'Secure your AI systems, LLMs, and generative AI with risk assessments, governance, prompt injection testing, and secure AI architecture.',
    details: ['AI Risk Assessment', 'LLM Security', 'Generative AI Security', 'Prompt Injection Testing', 'AI Red Teaming', 'AI Compliance'],
  },
  {
    ic: 'clipboard',
    title: 'GRC & Compliance',
    desc: 'Navigate complex regulatory requirements with ISO 27001, SOC 2, PCI DSS, NIST, GDPR, and custom compliance consulting.',
    details: ['ISO 27001', 'SOC 2', 'PCI DSS', 'NIST', 'GDPR', 'Cyber Essentials'],
  },
  {
    ic: 'target',
    title: 'Penetration Testing',
    desc: 'Identify vulnerabilities before attackers do with comprehensive network, web application, API, mobile, and cloud penetration testing.',
    details: ['Network Pentesting', 'Web Application Testing', 'API Security Testing', 'Mobile App Testing', 'Cloud Pentesting', 'Red Teaming'],
  },
  {
    ic: 'cloud',
    title: 'Cloud Security',
    desc: 'Protect your cloud infrastructure across AWS, Azure, and GCP with security assessments, architecture reviews, and hardening.',
    details: ['AWS Security', 'Azure Security', 'GCP Security', 'Cloud Architecture Review', 'CSPM', 'Container Security'],
  },
  {
    ic: 'radar',
    title: 'SOC / MDR / XDR',
    desc: '24/7 security monitoring, managed detection and response, and extended detection across your entire digital environment.',
    details: ['SOC as a Service', 'Managed Detection', 'Extended Detection', 'Threat Hunting', 'Incident Response', 'SIEM Management'],
  },
  {
    ic: 'key',
    title: 'Identity & Access Management',
    desc: 'Implement zero-trust architectures, SSO, MFA, privileged access management, and identity governance frameworks.',
    details: ['Zero Trust', 'SSO / MFA', 'Privileged Access', 'Identity Governance', 'Access Reviews', 'Directory Services'],
  },
  {
    ic: 'lock',
    title: 'Privacy & Data Protection',
    desc: 'Ensure data privacy compliance with GDPR, data classification, DLP, privacy impact assessments, and data governance.',
    details: ['GDPR Compliance', 'Data Classification', 'DLP Implementation', 'Privacy Assessments', 'Data Governance', 'Cross-Border Data'],
  },
  {
    ic: 'refresh',
    title: 'Business Continuity',
    desc: 'Build organizational resilience with disaster recovery planning, business impact analysis, and continuity testing.',
    details: ['DR Planning', 'Business Impact Analysis', 'Continuity Testing', 'Crisis Management', 'Recovery Strategies', 'Resilience Programs'],
  },
  {
    ic: 'bookOpen',
    title: 'Security Awareness',
    desc: 'Educate your workforce with phishing simulations, security training programs, and culture transformation initiatives.',
    details: ['Phishing Simulation', 'Training Programs', 'Culture Assessment', 'Awareness Campaigns', 'Executive Training', 'Compliance Training'],
  },
  {
    ic: 'userTie',
    title: 'vCISO',
    desc: 'Access seasoned security leadership on-demand with virtual CISO services, security strategy, and board-level reporting.',
    details: ['Security Strategy', 'Board Reporting', 'Security Roadmap', 'Risk Oversight', 'Vendor Management', 'Team Building'],
  },
];

export function servicesPage() {
  const html = `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">
          <span class="label-dot"></span>
          <span>Our Services</span>
        </div>
        <h1>Comprehensive <span class="text-gradient">Security Solutions</span></h1>
        <p>From information security and AI protection to compliance, penetration testing, and 24/7 monitoring — we deliver end-to-end cybersecurity services.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-3 stagger-children">
          ${services.map(svc => `
            <div class="card service-card">
              <div class="card-icon">${icon(svc.ic, 28, 'var(--cyber-blue)')}</div>
              <h3 class="card-title">${svc.title}</h3>
              <p class="card-description">${svc.desc}</p>
              <div class="career-card">
                <div class="card-tags" style="margin-top: var(--space-5);">
                  ${svc.details.map(d => `<span class="tag">${d}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Industries Section -->
    <section class="section" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Industries</span>
          </div>
          <h2 class="section-title">Industries <span class="text-gradient">We Serve</span></h2>
          <p class="section-subtitle">Tailored security solutions for organizations across diverse sectors and regulatory environments.</p>
        </div>
        <div class="grid grid-4 stagger-children">
          ${[
            { ic: 'building', name: 'Government' },
            { ic: 'bank', name: 'Banking & Finance' },
            { ic: 'hospital', name: 'Healthcare' },
            { ic: 'monitor', name: 'Technology' },
            { ic: 'zap', name: 'Energy & Utilities' },
            { ic: 'graduationCap', name: 'Education' },
            { ic: 'rocket', name: 'Startups & SaaS' },
            { ic: 'phone', name: 'Telecom' },
          ].map(ind => `
            <div class="card" style="text-align:center;padding:var(--space-8) var(--space-4);">
              <div style="margin-bottom:var(--space-3);display:flex;justify-content:center;">${icon(ind.ic, 32, 'var(--cyber-blue)')}</div>
              <div style="font-weight:var(--font-semibold);font-size:var(--text-sm);">${ind.name}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-inner reveal-scale">
          <div class="cta-bg"></div>
          <div class="glow-shape glow-shape--blue" style="width:300px;height:300px;top:-20%;left:20%;"></div>
          <div style="position:relative;z-index:1;">
            <h2 class="cta-title text-h2">Need a Security <span class="text-gradient">Assessment?</span></h2>
            <p class="cta-subtitle text-body-lg">Our experts will evaluate your security posture and provide actionable recommendations.</p>
            <a href="mailto:support@xecureai.com" class="btn btn-glass btn-lg">
              Schedule a Consultation
              ${icon('arrowRight', 18)}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  return { html, init() {} };
}
