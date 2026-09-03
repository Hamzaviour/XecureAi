/* ============================================
   XECURE AI — CAREER PAGE
   ============================================ */
import { icon } from '../js/icons.js';

const positions = [
  {
    title: 'Senior Security Analyst',
    department: 'Cybersecurity',
    location: 'Remote / Qatar',
    type: 'Full-time',
    tags: ['SIEM', 'Incident Response', 'Threat Analysis', 'SOC'],
  },
  {
    title: 'Penetration Tester',
    department: 'Cyber Defense',
    location: 'Remote / Pakistan',
    type: 'Full-time',
    tags: ['Web App Testing', 'Network Pentesting', 'API Security', 'Red Team'],
  },
  {
    title: 'AI Security Engineer',
    department: 'AI Security',
    location: 'Remote / United States',
    type: 'Full-time',
    tags: ['LLM Security', 'AI Risk', 'ML Pipelines', 'Prompt Injection'],
  },
  {
    title: 'GRC Consultant',
    department: 'Cyber Risk',
    location: 'Remote / Qatar',
    type: 'Full-time',
    tags: ['ISO 27001', 'SOC 2', 'PCI DSS', 'Risk Assessment'],
  },
  {
    title: 'SOC Analyst — L2',
    department: 'Cyber Defense',
    location: 'Qatar',
    type: 'Full-time',
    tags: ['SIEM', 'MDR', 'Threat Hunting', 'Incident Triage'],
  },
  {
    title: 'Cloud Security Engineer',
    department: 'Cybersecurity',
    location: 'Remote / United States',
    type: 'Full-time',
    tags: ['AWS', 'Azure', 'CSPM', 'Container Security'],
  },
];

export function careerPage() {
  const html = `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">
          <span class="label-dot"></span>
          <span>Careers</span>
        </div>
        <h1>Join the Future of <span class="text-gradient">Cybersecurity</span></h1>
        <p>Build your career at the intersection of cybersecurity and artificial intelligence. Help organizations around the world defend their digital future.</p>
      </div>
    </section>

    <!-- Why Xecure AI -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Why Xecure AI</span>
          </div>
          <h2 class="section-title text-reveal">Why Work With Us</h2>
          <p class="section-subtitle">At Xecure AI, you'll work on real-world security challenges that matter, alongside talented professionals who are passionate about protecting the digital world.</p>
        </div>
        <div class="benefits-grid stagger-children">
          ${[
            { ic: 'globe', title: 'Global Impact', desc: 'Protect organizations across 3 continents.' },
            { ic: 'cpu', title: 'Cutting-Edge Tech', desc: 'Work with AI, ML, and advanced security tools.' },
            { ic: 'bookOpen', title: 'Continuous Learning', desc: 'Certifications, training, and conference support.' },
            { ic: 'home', title: 'Remote Flexibility', desc: 'Work from anywhere with flexible schedules.' },
            { ic: 'trendingUp', title: 'Career Growth', desc: 'Clear advancement paths and mentorship.' },
            { ic: 'users', title: 'Collaborative Culture', desc: 'A team that values integrity and innovation.' },
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
            <span>Open Positions</span>
          </div>
          <h2 class="section-title">Current <span class="text-gradient">Opportunities</span></h2>
          <p class="section-subtitle">Explore our open roles and find your place in the Xecure AI team.</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:var(--space-4);" class="stagger-children">
          ${positions.map(pos => `
            <div class="card career-card" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-4);">
              <div style="flex:1;min-width:250px;">
                <h3 class="card-title" style="margin-bottom:var(--space-2);">${pos.title}</h3>
                <div style="display:flex;gap:var(--space-4);font-size:var(--text-xs);color:var(--text-tertiary);margin-bottom:var(--space-3);">
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
            <h2 class="cta-title text-h2">Don't See Your <span class="text-gradient-purple">Role?</span></h2>
            <p class="cta-subtitle text-body-lg">We're always looking for talented security professionals. Send us your resume.</p>
            <a href="mailto:support@xecureai.com" class="btn btn-glass btn-lg">
              Send Your Resume
              ${icon('arrowRight', 18)}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  return { html, init() {} };
}
