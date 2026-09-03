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
          <span>About Xecure AI</span>
        </div>
        <h1>Intelligent Cybersecurity.<br/><span class="text-gradient">Stronger Digital Defense.</span></h1>
        <p>Xecure AI is a cybersecurity and artificial intelligence company dedicated to helping organizations navigate the increasingly complex digital threat landscape.</p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section">
      <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);" class="stagger-children">
          <div class="card" style="border-color:rgba(37,99,235,0.2);">
            <div style="margin-bottom:var(--space-4);color:var(--cyber-blue);">${icon('target', 32, 'var(--cyber-blue)')}</div>
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--cyber-blue);font-weight:var(--font-semibold);text-transform:uppercase;letter-spacing:var(--tracking-widest);margin-bottom:var(--space-4);">Our Mission</div>
            <h3 style="font-size:var(--text-2xl);margin-bottom:var(--space-4);">Empower organizations with intelligent security</h3>
            <p class="card-description">To empower organizations with intelligent cybersecurity solutions that protect critical information, reduce cyber risk, strengthen resilience, and enable secure digital transformation.</p>
          </div>
          <div class="card" style="border-color:rgba(124,58,237,0.2);">
            <div style="margin-bottom:var(--space-4);color:var(--ai-purple);">${icon('eye', 32, 'var(--ai-purple)')}</div>
            <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--ai-purple);font-weight:var(--font-semibold);text-transform:uppercase;letter-spacing:var(--tracking-widest);margin-bottom:var(--space-4);">Our Vision</div>
            <h3 style="font-size:var(--text-2xl);margin-bottom:var(--space-4);">A globally trusted security partner</h3>
            <p class="card-description">To become a globally trusted cybersecurity and AI security company, helping organizations build safer, smarter, and more resilient digital environments.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Values -->
    <section class="section" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Our Values</span>
          </div>
          <h2 class="section-title text-reveal">What Drives Us Forward</h2>
        </div>
        <div class="values-grid stagger-children">
          ${[
            { ic: 'handshake', title: 'Trust', desc: 'Security begins with trust. We earn it through transparency, reliability, and consistent results.' },
            { ic: 'brain', title: 'Intelligence', desc: 'We use technology and AI to make security smarter, faster, and more effective.' },
            { ic: 'scale', title: 'Integrity', desc: 'We operate with transparency and responsibility in everything we do.' },
            { ic: 'shield', title: 'Resilience', desc: 'We prepare organizations for evolving threats and help them bounce back stronger.' },
            { ic: 'lightbulb', title: 'Innovation', desc: 'We continuously improve cybersecurity through cutting-edge technology and fresh thinking.' },
            { ic: 'lock', title: 'Protection', desc: 'We protect what matters most — your data, your systems, your people, your business.' },
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

    <!-- Core Promise -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Our Promise</span>
          </div>
          <h2 class="section-title"><span class="text-gradient">Protect. Detect. Respond. Evolve.</span></h2>
          <p class="section-subtitle">Our four-pillar promise to every organization we work with.</p>
        </div>
        <div class="grid grid-4 stagger-children">
          ${[
            { ic: 'shield', title: 'Protect', desc: 'Protect your digital assets and infrastructure.' },
            { ic: 'search', title: 'Detect', desc: 'Detect vulnerabilities and threats early.' },
            { ic: 'zap', title: 'Respond', desc: 'Respond effectively to security incidents.' },
            { ic: 'trendingUp', title: 'Evolve', desc: 'Continuously evolve your security posture.' },
          ].map(p => `
            <div class="card" style="text-align:center;">
              <div style="margin-bottom:var(--space-4);display:flex;justify-content:center;">${icon(p.ic, 40, 'var(--cyber-blue)')}</div>
              <h3 class="card-title">${p.title}</h3>
              <p class="card-description">${p.desc}</p>
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
            <span>Global Presence</span>
          </div>
          <h2 class="section-title">Global Cybersecurity.<br/><span class="text-gradient">Local Expertise.</span></h2>
          <p class="section-subtitle">Delivering intelligent security solutions across multiple regions and regulatory environments.</p>
        </div>
        <div class="presence-grid stagger-children">
          <div class="card presence-card">
            <div class="presence-flag" style="display:flex;justify-content:center;">${icon('mapPin', 40, 'var(--cyber-blue)')}</div>
            <div class="presence-country">Qatar</div>
            <div class="presence-focus">GCC Security & Compliance</div>
          </div>
          <div class="card presence-card">
            <div class="presence-flag" style="display:flex;justify-content:center;">${icon('mapPin', 40, 'var(--ai-purple)')}</div>
            <div class="presence-country">Pakistan</div>
            <div class="presence-focus">South Asia Security Operations</div>
          </div>
          <div class="card presence-card">
            <div class="presence-flag" style="display:flex;justify-content:center;">${icon('mapPin', 40, 'var(--electric-blue)')}</div>
            <div class="presence-country">United States</div>
            <div class="presence-focus">North America Enterprise Security</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Architecture -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Our Divisions</span>
          </div>
          <h2 class="section-title">Four Pillars of <span class="text-gradient">Excellence</span></h2>
        </div>
        <div class="grid grid-4 stagger-children">
          ${[
            { ic: 'shield', title: 'Cybersecurity', desc: 'Traditional and modern cybersecurity solutions.', color: 'var(--cyber-blue)' },
            { ic: 'aiChip', title: 'AI Security', desc: 'Security for AI systems and AI-powered defense.', color: 'var(--ai-purple)' },
            { ic: 'alertTriangle', title: 'Cyber Risk', desc: 'Risk, governance, compliance, and resilience.', color: 'var(--electric-blue)' },
            { ic: 'lock', title: 'Cyber Defense', desc: 'SOC, MDR, threat detection, and incident response.', color: 'var(--cyan)' },
          ].map(d => `
            <div class="card" style="border-top:3px solid ${d.color};padding-top:var(--space-8);">
              <div style="margin-bottom:var(--space-3);color:${d.color};">${icon(d.ic, 28, d.color)}</div>
              <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:${d.color};font-weight:var(--font-semibold);text-transform:uppercase;letter-spacing:var(--tracking-widest);margin-bottom:var(--space-3);">XECURE AI</div>
              <h3 class="card-title">${d.title}</h3>
              <p class="card-description">${d.desc}</p>
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
          <div class="glow-shape glow-shape--blue" style="width:300px;height:300px;top:-20%;right:20%;"></div>
          <div style="position:relative;z-index:1;">
            <h2 class="cta-title text-h2">Want to <span class="text-gradient">Work With Us?</span></h2>
            <p class="cta-subtitle text-body-lg">Let's discuss how we can help secure your organization.</p>
            <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
              <a href="mailto:support@xecureai.com" class="btn btn-glass btn-lg">Get in Touch</a>
              <a href="#/career" data-route="/career" class="btn btn-outline btn-lg">Join Our Team</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return { html, init() {} };
}
