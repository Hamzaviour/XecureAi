/* ============================================
   XECURE AI — HOME PAGE
   ============================================ */
import { initHeroScene } from '../js/hero-scene.js';

export function homePage() {
  const html = `
    <!-- HERO SECTION -->
    <section class="hero" id="hero">
      <div class="hero-canvas" id="hero-canvas"></div>
      <div class="hero-gradient-overlay"></div>

      <!-- Glow shapes (AnimatedGlowShape component) -->
      <div class="glow-shape glow-shape--blue" style="width:500px;height:500px;top:-10%;right:10%;"></div>
      <div class="glow-shape glow-shape--purple" style="width:400px;height:400px;bottom:10%;left:-5%;"></div>

      <div class="container" style="position:relative;z-index:2;">
        <div class="hero-content">
          <div class="hero-label">
            <span class="pulse-dot"></span>
            <span>AI-Powered Cybersecurity</span>
          </div>
          <h1 class="hero-title">
            Intelligent Security.<br/>
            <span class="text-gradient">Stronger Defense.</span>
          </h1>
          <p class="hero-subtitle">
            Xecure AI delivers intelligent cybersecurity and AI security solutions that help organizations detect threats, reduce cyber risk, protect critical assets, and build resilient digital environments.
          </p>
          <div class="hero-actions">
            <a href="#/services" data-route="/services" class="btn btn-glass btn-lg">
              <span>Secure Your Organization</span>
              <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
            </a>
            <a href="#/services" data-route="/services" class="btn btn-outline btn-lg">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUSTED BY MARQUEE -->
    <section class="marquee-container">
      <div class="marquee-track">
        ${['Government Agencies', 'Financial Institutions', 'Healthcare Providers', 'Technology Companies', 'SaaS Enterprises', 'Energy & Utilities', 'Education Sector', 'Insurance Companies',
           'Government Agencies', 'Financial Institutions', 'Healthcare Providers', 'Technology Companies', 'SaaS Enterprises', 'Energy & Utilities', 'Education Sector', 'Insurance Companies']
          .map(name => `
            <div class="marquee-item floating" style="animation-delay: ${Math.random() * 2}s">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
              <span>${name}</span>
            </div>
          `).join('')}
      </div>
    </section>

    <!-- SECURITY FRAMEWORK -->
    <section class="section" id="framework">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Our Framework</span>
          </div>
          <h2 class="section-title">Xecure AI <span class="text-gradient">Secure360™</span></h2>
          <p class="section-subtitle">A complete security lifecycle designed to protect, detect, and defend your digital infrastructure at every stage.</p>
        </div>
        <div class="process-grid stagger-children">
          ${[
            { title: 'Discover', desc: 'Understand assets, systems, data and risks across your environment.' },
            { title: 'Assess', desc: 'Identify vulnerabilities, weaknesses, and compliance gaps.' },
            { title: 'Protect', desc: 'Implement security controls, policies, and defense mechanisms.' },
            { title: 'Detect', desc: 'Monitor threats, anomalies, and suspicious activity in real-time.' },
            { title: 'Respond', desc: 'Investigate and respond to security incidents rapidly.' },
            { title: 'Recover', desc: 'Restore operations and strengthen organizational resilience.' },
            { title: 'Optimize', desc: 'Continuously improve security using intelligence and AI.' },
          ].map(step => `
            <div class="process-step card">
              <h3 class="process-step-title">${step.title}</h3>
              <p class="process-step-desc">${step.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SERVICES OVERVIEW -->
    <section class="section" id="services-overview" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>What We Do</span>
          </div>
          <h2 class="section-title text-reveal">Security Solutions Built for Modern Threats</h2>
          <p class="section-subtitle">Four specialized divisions delivering comprehensive cybersecurity, AI security, risk management, and cyber defense.</p>
        </div>
        <div class="grid grid-4 stagger-children">
          ${[
            { icon: '🛡️', title: 'Cybersecurity', desc: 'Traditional and modern cybersecurity — from security assessments and architecture to governance and compliance.', color: 'var(--cyber-blue)' },
            { icon: '🤖', title: 'AI Security', desc: 'Securing AI systems, LLMs, generative AI, and implementing AI-powered threat detection and defense.', color: 'var(--ai-purple)' },
            { icon: '⚠️', title: 'Cyber Risk', desc: 'Enterprise risk assessment, vendor risk management, risk quantification, and executive risk reporting.', color: 'var(--electric-blue)' },
            { icon: '🔒', title: 'Cyber Defense', desc: 'SOC operations, MDR/XDR, threat detection, incident response, and 24/7 security monitoring.', color: 'var(--cyan)' },
          ].map(svc => `
            <div class="card service-card">
              <div class="card-icon" style="border-color: ${svc.color}30; background: ${svc.color}15;">
                <span>${svc.icon}</span>
              </div>
              <h3 class="card-title">${svc.title}</h3>
              <p class="card-description">${svc.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- AI SECURITY DIFFERENTIATOR -->
    <section class="section" id="ai-section" style="position:relative;overflow:hidden;">
      <div class="glow-shape glow-shape--purple" style="width:500px;height:500px;top:20%;right:-10%;"></div>
      <div class="glow-shape glow-shape--cyan" style="width:300px;height:300px;bottom:10%;left:5%;"></div>
      <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-16);align-items:center;">
          <div class="reveal-left">
            <div class="section-label">
              <span class="label-dot"></span>
              <span>AI Security</span>
            </div>
            <h2 class="section-title" style="text-align:left;">Secure Your AI.<br/><span class="text-gradient-purple">Before It's Too Late.</span></h2>
            <p style="color:var(--text-secondary);line-height:var(--leading-relaxed);margin-bottom:var(--space-8);">
              As organizations adopt AI and large language models, new attack surfaces emerge. Xecure AI provides specialized AI security assessments, AI governance, LLM security, prompt injection testing, and secure AI architecture — helping you innovate safely.
            </p>
            <div style="display:flex;flex-direction:column;gap:var(--space-4);">
              ${['AI Risk Assessment', 'LLM & Generative AI Security', 'AI Red Teaming', 'AI Governance & Compliance', 'Secure AI Architecture'].map(item => `
                <div style="display:flex;align-items:center;gap:var(--space-3);">
                  <div style="width:24px;height:24px;border-radius:var(--radius-full);background:linear-gradient(135deg,var(--ai-purple),var(--cyber-blue));display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
                  </div>
                  <span style="font-size:var(--text-sm);font-weight:var(--font-medium);">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="reveal-right" style="position:relative;">
            <div class="card" style="padding:var(--space-10);border-color:rgba(124,58,237,0.2);">
              <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--ai-purple);margin-bottom:var(--space-4);">// AI Security Assessment</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);">
                ${[
                  { label: 'AI Models Secured', value: '150+' },
                  { label: 'Prompt Injections Found', value: '2,340' },
                  { label: 'LLM Vulnerabilities', value: '89' },
                  { label: 'Risk Score Reduced', value: '73%' },
                ].map(stat => `
                  <div style="padding:var(--space-4);border-radius:var(--radius-lg);background:rgba(124,58,237,0.06);border:1px solid rgba(124,58,237,0.1);">
                    <div style="font-size:var(--text-2xl);font-weight:var(--font-bold);color:var(--ai-purple);">${stat.value}</div>
                    <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:var(--space-1);">${stat.label}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="section" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="stats-grid reveal">
          ${[
            { count: 150, suffix: '+', label: 'Organizations Protected' },
            { count: 99, suffix: '.9%', label: 'Security Uptime' },
            { count: 24, suffix: '/7', label: 'SOC Monitoring' },
            { count: 3, suffix: '', label: 'Global Offices' },
          ].map(stat => `
            <div class="stat-item">
              <div class="stat-number text-gradient" data-count="${stat.count}" data-suffix="${stat.suffix}">${stat.count}${stat.suffix}</div>
              <div class="stat-label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FEATURED CASE STUDIES -->
    <section class="section" id="featured-cases">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Success Stories</span>
          </div>
          <h2 class="section-title">Proven <span class="text-gradient">Results</span></h2>
          <p class="section-subtitle">See how we've helped organizations strengthen their security posture and achieve compliance.</p>
        </div>
        <div class="grid grid-2 stagger-children">
          <div class="card case-study-card">
            <div class="card-badge">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"/></svg>
              <span>ISO/IEC 27001</span>
            </div>
            <div class="card-meta">
              <span>📍 United States</span>
              <span>💻 Technology & Cloud Services</span>
            </div>
            <h3 class="card-title">ISO/IEC 27001 Certification Achieved</h3>
            <p class="card-description">Supported a technology company through the complete ISO/IEC 27001 implementation journey — from gap assessment and risk management to ISMS development and certification audit readiness.</p>
            <div class="card-result">
              <span>🏆</span>
              <span>ISO/IEC 27001 Certification Achieved</span>
            </div>
          </div>
          <div class="card case-study-card">
            <div class="card-badge">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"/></svg>
              <span>Multi-Framework</span>
            </div>
            <div class="card-meta">
              <span>📍 United Kingdom</span>
              <span>💻 Technology</span>
            </div>
            <h3 class="card-title">Multi-Framework Compliance Success</h3>
            <p class="card-description">Strengthened a technology company's security governance and demonstrated compliance across ISO 27001, SOC 2 Type II, PCI DSS, and Cyber Essentials Plus.</p>
            <div class="card-result">
              <span>🏆</span>
              <span>6 Certifications Achieved</span>
            </div>
          </div>
        </div>
        <div class="text-center mt-8 reveal">
          <a href="#/case-studies" data-route="/case-studies" class="btn btn-outline">
            View All Case Studies
            <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-inner reveal-scale">
          <div class="cta-bg"></div>
          <div class="glow-shape glow-shape--blue" style="width:300px;height:300px;top:-20%;left:20%;"></div>
          <div class="glow-shape glow-shape--purple" style="width:250px;height:250px;bottom:-20%;right:20%;"></div>
          <div style="position:relative;z-index:1;">
            <h2 class="cta-title text-h2">Ready to <span class="text-gradient">Secure</span> Your Organization?</h2>
            <p class="cta-subtitle text-body-lg">Get in touch with our security experts and discover how Xecure AI can protect your digital infrastructure.</p>
            <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
              <a href="mailto:info@xecureai.com" class="btn btn-glass btn-lg">
                Get Protected
                <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
              </a>
              <a href="#/about" data-route="/about" class="btn btn-outline btn-lg">Learn About Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      const canvas = document.getElementById('hero-canvas');
      const cleanup = initHeroScene(canvas);

      // Init counters
      import('../js/counter.js').then(m => m.initCounters());

      return cleanup;
    }
  };
}
