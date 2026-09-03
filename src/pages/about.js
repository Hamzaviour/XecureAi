/* ============================================
   XECURE AI — ABOUT PAGE
   ============================================ */
import { icon } from '../js/icons.js';

export function aboutPage() {
  const html = `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">
          <span class="label-dot"></span>
          <span>About XecureAI</span>
        </div>
        <h1>Strategic Cybersecurity, <br/><span class="text-gradient">GRC & AI Governance.</span></h1>
        <p>XecureAI helps organizations manage cyber risk, achieve compliance, strengthen security controls, and adopt AI responsibly across global markets.</p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section">
      <div class="container">
        <div class="grid grid-2 stagger-children">
          <div class="card" style="border-color:rgba(37,99,235,0.2);">
            <div style="margin-bottom:var(--space-4);color:var(--cyber-blue);">${icon('target', 32, 'var(--cyber-blue)')}</div>
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--cyber-blue);font-weight:var(--font-semibold);text-transform:uppercase;letter-spacing:var(--tracking-widest);margin-bottom:var(--space-4);">Our Mission</div>
            <h3 style="font-size:var(--text-2xl);margin-bottom:var(--space-4);">Enable Secure & Compliant Growth</h3>
            <p class="card-description">To empower organizations with robust cybersecurity architectures, audit-proven GRC programs, and responsible AI governance frameworks that protect critical assets, reduce risk, and enable sustainable digital transformation.</p>
          </div>
          <div class="card" style="border-color:rgba(124,58,237,0.2);">
            <div style="margin-bottom:var(--space-4);color:var(--ai-purple);">${icon('eye', 32, 'var(--ai-purple)')}</div>
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--ai-purple);font-weight:var(--font-semibold);text-transform:uppercase;letter-spacing:var(--tracking-widest);margin-bottom:var(--space-4);">Our Vision</div>
            <h3 style="font-size:var(--text-2xl);margin-bottom:var(--space-4);">The Trusted Global Advisory Partner</h3>
            <p class="card-description">To be the premier global advisory partner for enterprise cybersecurity, regulatory compliance, and trustworthy artificial intelligence — fostering digital environments where innovation and security thrive in harmony.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Pillars of Excellence -->
    <section class="section" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Our Foundation</span>
          </div>
          <h2 class="section-title">Three Pillars of <span class="text-gradient">Advisory Excellence</span></h2>
          <p class="section-subtitle">We bridge the gap between technical controls, executive risk management, and regulatory compliance.</p>
        </div>
        <div class="grid grid-3 stagger-children">
          <div class="card" style="border-top:3px solid var(--cyber-blue);padding-top:var(--space-8);">
            <div style="margin-bottom:var(--space-4);color:var(--cyber-blue);">${icon('shield', 36, 'var(--cyber-blue)')}</div>
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--cyber-blue);font-weight:var(--font-semibold);text-transform:uppercase;letter-spacing:var(--tracking-widest);margin-bottom:var(--space-3);">PILLAR 01</div>
            <h3 class="card-title">Cybersecurity & Controls</h3>
            <p class="card-description">Technical vulnerability assessments (VAPT), cloud security engineering, Zero Trust architectures, and technical control hardening designed to withstand modern threat landscapes.</p>
          </div>
          <div class="card" style="border-top:3px solid var(--electric-blue);padding-top:var(--space-8);">
            <div style="margin-bottom:var(--space-4);color:var(--electric-blue);">${icon('clipboard', 36, 'var(--electric-blue)')}</div>
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--electric-blue);font-weight:var(--font-semibold);text-transform:uppercase;letter-spacing:var(--tracking-widest);margin-bottom:var(--space-3);">PILLAR 02</div>
            <h3 class="card-title">GRC & Compliance</h3>
            <p class="card-description">Comprehensive ISMS implementation, ISO 27001 (2013 → 2022) transitions, SOC 2 readiness, enterprise cyber risk quantification (FAIR), and third-party vendor risk management.</p>
          </div>
          <div class="card" style="border-top:3px solid var(--ai-purple);padding-top:var(--space-8);">
            <div style="margin-bottom:var(--space-4);color:var(--ai-purple);">${icon('aiChip', 36, 'var(--ai-purple)')}</div>
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--ai-purple);font-weight:var(--font-semibold);text-transform:uppercase;letter-spacing:var(--tracking-widest);margin-bottom:var(--space-3);">PILLAR 03</div>
            <h3 class="card-title">AI Governance & Ethics</h3>
            <p class="card-description">Pioneering AI management systems (ISO/IEC 42001), NIST AI Risk Management Framework operationalization, enterprise LLM security testing, and ethical algorithmic auditing.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Values -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Our Core Values</span>
          </div>
          <h2 class="section-title text-reveal">Principles That Guide Our Practice</h2>
        </div>
        <div class="values-grid stagger-children">
          ${[
            { ic: 'handshake', title: 'Governance Integrity', desc: 'We deliver objective, evidence-driven advisory with transparency, audit rigor, and complete independence.' },
            { ic: 'brain', title: 'Actionable Intelligence', desc: 'We translate complex regulatory standards and technical risks into clear, pragmatic business roadmaps.' },
            { ic: 'scale', title: 'Responsible Innovation', desc: 'We champion the safe, ethical adoption of artificial intelligence through forward-looking governance.' },
            { ic: 'shield', title: 'Audit Certainty', desc: 'Our rigorous methodologies are engineered to achieve 100% audit readiness and certification success.' },
            { ic: 'lightbulb', title: 'Client Partnership', desc: 'We embed with your engineering, legal, and executive teams as long-term strategic security partners.' },
            { ic: 'lock', title: 'Asset Protection', desc: 'We protect what matters most — sensitive data, IP, customer trust, and enterprise reputation.' },
          ].map(v => `
            <div class="card value-card">
              <div class="value-icon">${icon(v.ic, 36, 'var(--cyber-blue)')}</div>
              <h3 class="value-title">${v.title}</h3>
              <p class="value-desc">${v.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Global Presence -->
    <section class="section" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Global Reach</span>
          </div>
          <h2 class="section-title">International Governance.<br/><span class="text-gradient">Local Regional Insight.</span></h2>
          <p class="section-subtitle">Delivering world-class GRC, AI governance, and cybersecurity advisory across key global markets.</p>
        </div>
        <div class="presence-grid stagger-children">
          <div class="card presence-card">
            <div class="presence-flag" style="display:flex;justify-content:center;">${icon('mapPin', 40, 'var(--cyber-blue)')}</div>
            <div class="presence-country">Qatar</div>
            <div class="presence-focus">GCC GRC, National Information Assurance (NIA) & Data Privacy</div>
          </div>
          <div class="card presence-card">
            <div class="presence-flag" style="display:flex;justify-content:center;">${icon('mapPin', 40, 'var(--ai-purple)')}</div>
            <div class="presence-country">Pakistan</div>
            <div class="presence-focus">South Asia Delivery Hub, VAPT & Security Engineering</div>
          </div>
          <div class="card presence-card">
            <div class="presence-flag" style="display:flex;justify-content:center;">${icon('mapPin', 40, 'var(--electric-blue)')}</div>
            <div class="presence-country">United States</div>
            <div class="presence-focus">North America Enterprise GRC, SOC 2 & AI Governance Advisory</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-inner reveal-scale">
          <div class="cta-bg"></div>
          <div class="glow-shape glow-shape--blue" style="width:300px;height:300px;top:-20%;right:20%;"></div>
          <div style="position:relative;z-index:1;">
            <h2 class="cta-title text-h2">Partner with <span class="text-gradient">XecureAI</span></h2>
            <p class="cta-subtitle text-body-lg">Let our seasoned GRC, AI governance, and cybersecurity consultants help you navigate audits and build lasting trust.</p>
            <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
              <a href="mailto:support@xecureai.com?subject=Consultation Inquiry - XecureAI About" class="btn btn-glass btn-lg">
                Schedule a Consultation
                ${icon('arrowRight', 18)}
              </a>
              <a href="#/services" data-route="/services" class="btn btn-outline btn-lg">Explore Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return { html, init() {} };
}
