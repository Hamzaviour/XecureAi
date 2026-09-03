/* ============================================
   XECURE AI — CAREER PAGE
   ============================================ */
import { icon } from '../js/icons.js';

const positions = [
  {
    title: 'Lead GRC Consultant & ISO 27001 Auditor',
    department: 'GRC & Compliance',
    location: 'Remote / Qatar',
    type: 'Full-time',
    tags: ['ISO 27001:2022', 'SOC 2 Type II', 'ISMS Auditing', 'Risk Treatment'],
  },
  {
    title: 'AI Governance & Ethics Specialist',
    department: 'AI Governance',
    location: 'Remote / United States',
    type: 'Full-time',
    tags: ['ISO/IEC 42001', 'NIST AI RMF', 'Algorithmic Audits', 'Responsible AI'],
  },
  {
    title: 'Senior Penetration Tester & Red Teamer',
    department: 'Cybersecurity',
    location: 'Remote / Pakistan',
    type: 'Full-time',
    tags: ['VAPT', 'API Security', 'Cloud Pentesting', 'OWASP Top 10'],
  },
  {
    title: 'Generative AI & LLM Security Engineer',
    department: 'AI Governance & Security',
    location: 'Remote / United States',
    type: 'Full-time',
    tags: ['OWASP LLM', 'Prompt Injection', 'RAG Security', 'Guardrails'],
  },
  {
    title: 'Senior Cloud Security Architect',
    department: 'Cybersecurity',
    location: 'Remote / Qatar',
    type: 'Full-time',
    tags: ['AWS', 'Azure', 'CSPM', 'Zero Trust IAM', 'Kubernetes'],
  },
  {
    title: 'Cyber Risk & Third-Party Risk (TPRM) Analyst',
    department: 'GRC & Compliance',
    location: 'Remote / Pakistan',
    type: 'Full-time',
    tags: ['FAIR Methodology', 'Vendor Risk', 'SIG Questionnaires', 'Risk Registers'],
  },
];

export function careerPage() {
  const html = `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">
          <span class="label-dot"></span>
          <span>Careers at XecureAI</span>
        </div>
        <h1>Shape the Future of <span class="text-gradient">GRC & AI Governance</span></h1>
        <p>Build your career at the forefront of enterprise cybersecurity, regulatory compliance, and responsible AI governance.</p>
      </div>
    </section>

    <!-- Why XecureAI -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Why Join XecureAI</span>
          </div>
          <h2 class="section-title text-reveal">Why Build Your Career With Us</h2>
          <p class="section-subtitle">Work with top-tier global clients on pivotal security transformations, international standard certifications, and cutting-edge AI governance initiatives.</p>
        </div>
        <div class="benefits-grid stagger-children">
          ${[
            { ic: 'globe', title: 'Global Advisory Impact', desc: 'Advise enterprise and government clients across Qatar, North America, and South Asia.' },
            { ic: 'cpu', title: 'Pioneering AI Practice', desc: 'Work directly on ISO 42001 and NIST AI Risk Management Framework implementations.' },
            { ic: 'bookOpen', title: 'Professional Certifications', desc: 'Full company sponsorship for CISSP, CISA, ISO Lead Auditor, and CCSP certifications.' },
            { ic: 'home', title: 'Remote-First Flexibility', desc: 'Collaborate with distributed global teams with flexible working schedules.' },
            { ic: 'trendingUp', title: 'Accelerated Leadership', desc: 'Fast-track career advancement from practitioner to practice leader.' },
            { ic: 'users', title: 'Culture of Excellence', desc: 'A collaborative, integrity-driven team passionate about governance and security.' },
          ].map(b => `
            <div class="card benefit-item">
              <div class="benefit-icon">${icon(b.ic, 28, 'var(--cyber-blue)')}</div>
              <div>
                <h4 class="benefit-title">${b.title}</h4>
                <p class="benefit-desc">${b.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="section" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Open Opportunities</span>
          </div>
          <h2 class="section-title">Current Advisory & <span class="text-gradient">Technical Openings</span></h2>
          <p class="section-subtitle">Explore open roles across our GRC, AI Governance, and Cybersecurity practices.</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:var(--space-4);" class="stagger-children">
          ${positions.map(pos => `
            <div class="card career-card">
              <div class="career-card-info">
                <h3 class="card-title" style="margin-bottom:var(--space-2);">${pos.title}</h3>
                <div style="display:flex;gap:var(--space-4);font-size:var(--text-xs);color:var(--text-tertiary);margin-bottom:var(--space-3);flex-wrap:wrap;">
                  <span style="display:flex;align-items:center;gap:var(--space-1);">${icon('briefcase', 12)} ${pos.department}</span>
                  <span style="display:flex;align-items:center;gap:var(--space-1);">${icon('mapPin', 12)} ${pos.location}</span>
                  <span style="display:flex;align-items:center;gap:var(--space-1);">${icon('clock', 12)} ${pos.type}</span>
                </div>
                <div class="card-tags">
                  ${pos.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
              </div>
              <a href="mailto:support@xecureai.com?subject=Application: ${encodeURIComponent(pos.title)}" class="btn btn-glass btn-sm">
                Apply Now
                ${icon('arrowRight', 14)}
              </a>
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
          <div class="glow-shape glow-shape--purple" style="width:300px;height:300px;top:-20%;left:30%;"></div>
          <div style="position:relative;z-index:1;">
            <h2 class="cta-title text-h2">Don't See Your <span class="text-gradient-purple">Exact Match?</span></h2>
            <p class="cta-subtitle text-body-lg">We are always eager to connect with exceptional GRC auditors, AI ethicists, and cybersecurity engineers. Send us your CV.</p>
            <a href="mailto:support@xecureai.com?subject=General Career Inquiry - XecureAI" class="btn btn-glass btn-lg">
              Submit General Application
              ${icon('arrowRight', 18)}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  return { html, init() {} };
}
