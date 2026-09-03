/* ============================================
   XECURE AI — HOME PAGE
   ============================================ */
import { initHeroScene } from '../js/hero-scene.js';
import { icon } from '../js/icons.js';

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
            <span>Cybersecurity • GRC • AI Governance</span>
          </div>
          <h1 class="hero-title">
            Intelligent Security.<br/>
            <span class="text-gradient">Proven Compliance.</span><br/>
            Responsible AI.
          </h1>
          <p class="hero-subtitle">
            XecureAI helps organizations manage cyber risk, achieve compliance, strengthen security controls, and adopt AI responsibly.
          </p>
          <div class="hero-actions">
            <a href="mailto:support@xecureai.com?subject=Consultation Inquiry - XecureAI" class="btn btn-glass btn-lg">
              <span>Schedule a Consultation</span>
              ${icon('arrowRight', 18)}
            </a>
            <a href="#/services" data-route="/services" class="btn btn-outline btn-lg">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- STANDARDS & FRAMEWORKS MARQUEE -->
    <section class="marquee-container">
      <div class="marquee-track">
        ${['ISO/IEC 27001', 'ISO/IEC 42001 (AI)', 'SOC 2 Type II', 'NIST AI RMF', 'NIST CSF 2.0', 'PCI DSS v4.0', 'GDPR & Privacy', 'Qatar NIA & PDP', 'Saudi NCA & ECC', 'UAE NESA', 'CIS Controls', 'HIPAA',
           'ISO/IEC 27001', 'ISO/IEC 42001 (AI)', 'SOC 2 Type II', 'NIST AI RMF', 'NIST CSF 2.0', 'PCI DSS v4.0', 'GDPR & Privacy', 'Qatar NIA & PDP', 'Saudi NCA & ECC', 'UAE NESA', 'CIS Controls', 'HIPAA']
          .map(name => `
            <div class="marquee-item floating" style="animation-delay: ${Math.random() * 2}s">
              ${icon('shieldCheck', 20)}
              <span>${name}</span>
            </div>
          `).join('')}
      </div>
    </section>

    <!-- CORE PILLARS OVERVIEW -->
    <section class="section" id="pillars-overview" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Core Pillars</span>
          </div>
          <h2 class="section-title text-reveal">Cybersecurity, GRC & AI Governance Solutions</h2>
          <p class="section-subtitle">Integrated consulting and technical services designed to protect assets, secure compliance, and enable responsible innovation.</p>
        </div>
        <div class="grid grid-3 stagger-children">
          ${[
            { 
              ic: 'shield', 
              title: 'Cybersecurity & Controls', 
              desc: 'Comprehensive technical security assessments, penetration testing (VAPT), cloud security engineering, and Zero Trust identity architectures.', 
              color: 'var(--cyber-blue)',
              tags: ['VAPT & Pentesting', 'Cloud Security', 'Zero Trust Architecture', 'Security Engineering']
            },
            { 
              ic: 'fileText', 
              title: 'GRC & Compliance', 
              desc: 'End-to-end ISMS implementation, ISO 27001 (2013 → 2022), SOC 2 readiness, enterprise risk management, and regulatory compliance advisory.', 
              color: 'var(--electric-blue)',
              tags: ['ISO/IEC 27001', 'SOC 2 Type I & II', 'Cyber Risk Quantification', 'Regulatory Assurance']
            },
            { 
              ic: 'aiChip', 
              title: 'AI Governance & Security', 
              desc: 'Pioneering AI governance advisory including ISO 42001 (AIMS), NIST AI RMF alignment, enterprise LLM security, and ethical AI auditing.', 
              color: 'var(--ai-purple)',
              tags: ['ISO/IEC 42001', 'NIST AI RMF', 'LLM & GenAI Security', 'AI Ethics & Risk']
            },
          ].map(svc => `
            <div class="card service-card" style="display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <div class="card-icon" style="border-color: ${svc.color}30; background: ${svc.color}15;">
                  ${icon(svc.ic, 28, svc.color)}
                </div>
                <h3 class="card-title">${svc.title}</h3>
                <p class="card-description" style="margin-bottom:var(--space-6);">${svc.desc}</p>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);margin-top:auto;">
                ${svc.tags.map(t => `<span class="tag" style="background:rgba(37,99,235,0.06);border:1px solid rgba(37,99,235,0.15);font-size:11px;padding:2px 8px;border-radius:12px;color:var(--text-secondary);">${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ASSURANCE LIFECYCLE -->
    <section class="section" id="framework">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Our Methodology</span>
          </div>
          <h2 class="section-title">XecureAI <span class="text-gradient">Assurance360™</span></h2>
          <p class="section-subtitle">A structured governance, risk management, and security lifecycle built for audit certainty and operational resilience.</p>
        </div>
        <div class="process-grid stagger-children">
          ${[
            { title: 'Discover & Scope', desc: 'Map data flows, systems, AI models, and regulatory obligations.', ic: 'search' },
            { title: 'Assess & Benchmark', desc: 'Identify security gaps, cyber risks, and compliance non-conformities.', ic: 'eye' },
            { title: 'Architect & Policy', desc: 'Design governance policies, ISMS/AIMS structures, and controls.', ic: 'fileText' },
            { title: 'Implement Controls', desc: 'Deploy technical and organizational safeguards across teams.', ic: 'shield' },
            { title: 'Audit Readiness', desc: 'Execute mock audits, evidence gathering, and pre-assessment reviews.', ic: 'checkCircle' },
            { title: 'Certification', desc: 'Support stage-1 & stage-2 audits for seamless certification success.', ic: 'trophy' },
            { title: 'Continuous Governance', desc: 'Maintain compliance, monitor AI risk, and quantify cyber posture.', ic: 'refresh' },
          ].map(step => `
            <div class="process-step card">
              <div style="margin-bottom:var(--space-3);color:var(--cyber-blue);">${icon(step.ic, 28, 'var(--cyber-blue)')}</div>
              <h3 class="process-step-title">${step.title}</h3>
              <p class="process-step-desc">${step.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- AI GOVERNANCE SPOTLIGHT -->
    <section class="section" id="ai-section" style="position:relative;overflow:hidden;">
      <div class="glow-shape glow-shape--purple" style="width:500px;height:500px;top:20%;right:-10%;"></div>
      <div class="glow-shape glow-shape--cyan" style="width:300px;height:300px;bottom:10%;left:5%;"></div>
      <div class="container">
        <div class="ai-grid">
          <div class="reveal-left">
            <div class="section-label">
              <span class="label-dot"></span>
              <span>AI Governance & Trust</span>
            </div>
            <h2 class="section-title">Adopt AI Responsibly.<br/><span class="text-gradient-purple">Govern With Confidence.</span></h2>
            <p style="color:var(--text-secondary);line-height:var(--leading-relaxed);margin-bottom:var(--space-8);">
              As organizations adopt generative AI and large language models, regulatory expectations and security risks accelerate. XecureAI provides specialized AI governance frameworks, ISO 42001 certification readiness, NIST AI RMF alignment, LLM vulnerability testing, and ethical risk management.
            </p>
            <div style="display:flex;flex-direction:column;gap:var(--space-4);">
              ${[
                'ISO/IEC 42001 (AIMS) Implementation',
                'NIST AI Risk Management Framework Alignment',
                'Enterprise GenAI & LLM Security Testing',
                'Shadow AI Policy & Acceptable Use Governance',
                'Algorithmic Risk, Fairness & Transparency Audits'
              ].map(item => `
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
              <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--ai-purple);margin-bottom:var(--space-4);text-transform:uppercase;letter-spacing:1px;">// GRC & AI Governance Metrics</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);">
                ${[
                  { label: 'Audit Success Rate', value: '100%' },
                  { label: 'Standards Supported', value: '15+' },
                  { label: 'AI Models Governed', value: '50+' },
                  { label: 'Audit Prep Accelerated', value: '65%' },
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
            { count: 100, suffix: '%', label: 'Certification & Audit Success' },
            { count: 50, suffix: '+', label: 'Global Standards & Frameworks' },
            { count: 3, suffix: '', label: 'Global Advisory Hubs' },
            { count: 10, suffix: '+', label: 'Years Advisory Leadership' },
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
            <span>Proven Success</span>
          </div>
          <h2 class="section-title">Case Studies & <span class="text-gradient">Results</span></h2>
          <p class="section-subtitle">Real-world examples of how XecureAI helps organizations achieve compliance, strengthen controls, and govern risk.</p>
        </div>
        <div class="grid grid-2 stagger-children">
          <div class="card case-study-card" onclick="window.location.hash='#/case-studies'">
            <div class="card-image-wrap">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" alt="ISO 27001 Cloud Certification" class="card-image" loading="lazy" decoding="async" width="800" height="450" />
              <div class="card-image-overlay"></div>
            </div>
            <div class="card-badge">
              ${icon('checkCircle', 14, 'var(--cyber-blue)')}
              <span>ISO/IEC 27001</span>
            </div>
            <div class="card-meta">
              <span>${icon('mapPin', 12)} United States</span>
              <span>${icon('monitor', 12)} Technology & Cloud</span>
            </div>
            <h3 class="card-title">ISO/IEC 27001 Certification Achieved</h3>
            <p class="card-description">Supported a technology company through the complete ISO/IEC 27001 implementation journey — from gap assessment and risk management to ISMS development and certification audit readiness.</p>
            <div class="card-result">
              ${icon('trophy', 16, 'var(--success)')}
              <span>ISO/IEC 27001 Certification Achieved</span>
            </div>
          </div>
          <div class="card case-study-card" onclick="window.location.hash='#/case-studies'">
            <div class="card-image-wrap">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" alt="Multi-Framework Compliance" class="card-image" loading="lazy" decoding="async" width="800" height="450" />
              <div class="card-image-overlay"></div>
            </div>
            <div class="card-badge">
              ${icon('checkCircle', 14, 'var(--cyber-blue)')}
              <span>Multi-Framework</span>
            </div>
            <div class="card-meta">
              <span>${icon('mapPin', 12)} United Kingdom</span>
              <span>${icon('monitor', 12)} Technology</span>
            </div>
            <h3 class="card-title">Multi-Framework Compliance Success</h3>
            <p class="card-description">Strengthened a technology company's security governance and demonstrated compliance across ISO 27001, SOC 2 Type II, PCI DSS, and Cyber Essentials Plus.</p>
            <div class="card-result">
              ${icon('trophy', 16, 'var(--success)')}
              <span>6 Certifications Achieved</span>
            </div>
          </div>
        </div>
        <div class="text-center mt-8 reveal">
          <a href="#/case-studies" data-route="/case-studies" class="btn btn-outline">
            View All Case Studies
            ${icon('arrowRight', 16)}
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
            <h2 class="cta-title text-h2">Ready to Elevate Your <span class="text-gradient">GRC & Security</span> Posture?</h2>
            <p class="cta-subtitle text-body-lg">Partner with XecureAI to manage cyber risk, achieve audit certification, strengthen security controls, and govern enterprise AI responsibly.</p>
            <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
              <a href="mailto:support@xecureai.com?subject=Consultation Inquiry - XecureAI" class="btn btn-glass btn-lg">
                Schedule a Consultation
                ${icon('arrowRight', 18)}
              </a>
              <a href="#/services" data-route="/services" class="btn btn-outline btn-lg">Explore All Services</a>
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
