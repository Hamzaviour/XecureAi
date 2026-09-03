/* ============================================
   XECURE AI — CASE STUDIES PAGE
   ============================================ */
import { icon } from '../js/icons.js';

const caseStudies = [
  {
    id: 1,
    badge: 'ISO/IEC 27001 ISMS',
    location: 'United States',
    industry: 'Technology & Cloud Services',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    title: 'Supporting a Cloud Enterprise in Achieving ISO/IEC 27001 Certification',
    challenge: 'The organization needed to establish a comprehensive Information Security Management System (ISMS), align policies across global engineering teams, remediate technical control gaps, and achieve ISO/IEC 27001 certification to win tier-1 enterprise contracts.',
    steps: [
      { num: '01', title: 'Gap Assessment & Scoping', desc: 'Assessed existing infrastructure and workflows against ISO 27001 requirements, mapping all technical and procedural gaps.' },
      { num: '02', title: 'Risk Assessment & Treatment', desc: 'Implemented an asset-based risk management methodology, quantifying likelihood, impact, and treatment plans.' },
      { num: '03', title: 'ISMS Governance & Policies', desc: 'Authored and institutionalized 24+ mandatory policies, procedures, Statement of Applicability (SoA), and governance charters.' },
      { num: '04', title: 'Control Engineering', desc: 'Collaborated with DevOps and IT to enforce technical controls including IAM least privilege, encryption, and logging.' },
      { num: '05', title: 'Internal Audit & Pre-Assessment', desc: 'Conducted a rigorous internal audit, identified non-conformities, and facilitated leadership management reviews.' },
      { num: '06', title: 'Certification Audit Support', desc: 'Guided the client through Stage 1 and Stage 2 certification audits with zero major non-conformities.' },
    ],
    result: 'ISO/IEC 27001 Certification Achieved with Zero Major Non-Conformities',
    certifications: ['ISO/IEC 27001', 'ISMS Certified', 'Zero Non-Conformities'],
  },
  {
    id: 2,
    badge: 'Multi-Framework GRC',
    location: 'United Kingdom',
    industry: 'Financial Technology & SaaS',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    title: 'Integrated Multi-Framework GRC Architecture: ISO 27001, SOC 2 & PCI DSS',
    challenge: 'A rapidly scaling FinTech organization required simultaneous compliance across ISO 27001, SOC 2 Type II, and PCI DSS v4.0 to satisfy institutional investors and banking partners without duplicating operational overhead.',
    steps: [
      { num: '01', title: 'Unified Control Mapping', desc: 'Built a consolidated control framework mapping overlapping controls across ISO 27001, SOC 2, and PCI DSS.' },
      { num: '02', title: 'Evidence Automation', desc: 'Streamlined continuous evidence collection across AWS cloud environments, GitHub pipelines, and HR systems.' },
      { num: '03', title: 'Third-Party Risk (TPRM)', desc: 'Engineered a vendor risk management framework assessing cloud providers, APIs, and SaaS dependencies.' },
      { num: '04', title: 'VAPT & Threat Modeling', desc: 'Conducted penetration testing on web applications and payment APIs, remediating critical vulnerabilities.' },
      { num: '05', title: 'SOC 2 Type II Observation', desc: 'Monitored controls over a 6-month observation window to validate operating effectiveness.' },
      { num: '06', title: 'Audit Facilitation', desc: 'Coordinated external auditors across all three assessments, delivering clean compliance reports.' },
    ],
    result: 'ISO 27001, SOC 2 Type II, and PCI DSS Certifications Achieved',
    certifications: ['ISO/IEC 27001', 'SOC 2 Type II', 'PCI DSS v4.0', 'Cyber Essentials Plus'],
  },
  {
    id: 3,
    badge: 'AI Governance & NIST AI RMF',
    location: 'United States',
    industry: 'Enterprise Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    title: 'Operationalizing Enterprise AI Governance & NIST AI RMF for a GenAI Platform',
    challenge: 'A cutting-edge generative AI company needed to institute formal AI governance, demonstrate responsible AI adoption to enterprise customers, and align their LLM pipelines with the NIST AI Risk Management Framework.',
    steps: [
      { num: '01', title: 'AI System Mapping', desc: 'Cataloged all internal LLM pipelines, foundation models, fine-tuning datasets, and third-party AI APIs.' },
      { num: '02', title: 'NIST AI RMF Governance (Govern)', desc: 'Established AI ethics principles, acceptable use policies, risk tolerance criteria, and human-in-the-loop oversight.' },
      { num: '03', title: 'AI Risk & Bias Auditing (Measure)', desc: 'Audited models for prompt injection vulnerabilities, hallucination rates, data leakage, and algorithmic fairness.' },
      { num: '04', title: 'LLM Security Guardrails (Manage)', desc: 'Implemented input/output guardrails, automated PII sanitization, and continuous red-teaming protocols.' },
      { num: '05', title: 'ISO 42001 Readiness', desc: 'Benchmarked the AI Management System (AIMS) against emerging ISO/IEC 42001 requirements.' },
      { num: '06', title: 'Transparency Documentation', desc: 'Published AI Model Cards, compliance disclosures, and customer-facing trust center reports.' },
    ],
    result: 'NIST AI RMF Alignment & Enterprise AI Trust Framework Certified',
    certifications: ['NIST AI RMF', 'ISO 42001 Readiness', 'Responsible AI Framework', 'OWASP LLM Compliant'],
  },
  {
    id: 4,
    badge: 'Regional Compliance & Transition',
    location: 'Qatar',
    industry: 'Energy & Enterprise Sector',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    title: 'Guiding Enterprise Organizations in Qatar Through ISO 27001:2022 Transitions',
    challenge: 'Multiple leading organizations in Qatar needed to transition their existing ISMS to the updated ISO/IEC 27001:2022 standard while maintaining alignment with National Information Assurance (NIA) and Personal Data Privacy (PDP) regulations.',
    steps: [
      { num: '01', title: 'Transition Gap Assessment', desc: 'Evaluated existing ISMS documentation and technical controls against updated ISO 27001:2022 requirements.' },
      { num: '02', title: 'Annex A Control Modernization', desc: 'Implemented updated and new controls (threat intelligence, cloud security, data masking, secure coding).' },
      { num: '03', title: 'Risk & SoA Realignment', desc: 'Restructured the Statement of Applicability (SoA) and enhanced cyber risk treatment methodologies.' },
      { num: '04', title: 'Regulatory Integration', desc: 'Harmonized ISMS controls with Qatar National Cyber Security Agency (NCSA) NIA guidelines.' },
      { num: '05', title: 'Stakeholder & Team Training', desc: 'Conducted executive briefings and operational training on updated security control responsibilities.' },
      { num: '06', title: 'Transition Audit Success', desc: 'Guided client organizations through transition certification audits with 100% success.' },
    ],
    result: '100% Successful ISO/IEC 27001:2022 Transitions Across All Client Orgs',
    certifications: ['ISO/IEC 27001:2022', 'Qatar NIA Aligned', 'PDP Compliance'],
  },
];

export function caseStudiesPage() {
  const html = `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">
          <span class="label-dot"></span>
          <span>Case Studies & Track Record</span>
        </div>
        <h1>Proven <span class="text-gradient">GRC & Security Results</span></h1>
        <p>Explore how XecureAI partners with global organizations to achieve audit certification, manage cyber risk, and govern enterprise AI responsibly.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:flex;flex-direction:column;gap:var(--space-8);" class="stagger-children">
          ${caseStudies.map(cs => `
            <div class="card case-study-card" id="case-${cs.id}" onclick="this.querySelector('.case-study-detail').classList.toggle('open')">
              <div class="card-image-wrap">
                <img src="${cs.image}" alt="${cs.title}" class="card-image" loading="lazy" decoding="async" width="1200" height="600" />
                <div class="card-image-overlay"></div>
              </div>
              <div class="card-badge">
                ${icon('checkCircle', 14, 'var(--cyber-blue)')}
                <span>${cs.badge}</span>
              </div>
              <div class="card-meta">
                <span>${icon('mapPin', 12)} ${cs.location}</span>
                <span>${icon('briefcase', 12)} ${cs.industry}</span>
              </div>
              <h3 class="card-title">${cs.title}</h3>
              <p class="card-description">${cs.challenge}</p>
              
              ${cs.certifications ? `
                <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);margin-top:var(--space-4);">
                  ${cs.certifications.map(c => `<span style="padding:var(--space-1) var(--space-3);border-radius:var(--radius-full);background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);font-size:var(--text-xs);color:var(--success);">${c}</span>`).join('')}
                </div>
              ` : ''}

              <div class="case-study-detail">
                <h4>How XecureAI Delivered Results</h4>
                <div class="case-study-steps">
                  ${cs.steps.map(step => `
                    <div class="case-study-step">
                      <div class="step-num">${step.num}</div>
                      <h5>${step.title}</h5>
                      <p>${step.desc}</p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="card-result">
                ${icon('trophy', 16, 'var(--success)')}
                <span>${cs.result}</span>
              </div>
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
            <h2 class="cta-title text-h2">Ready to Achieve <span class="text-gradient">Compliance Certainty?</span></h2>
            <p class="cta-subtitle text-body-lg">Partner with XecureAI to fast-track your ISO 27001, SOC 2, or AI Governance initiative.</p>
            <div class="cta-actions">
              <a href="mailto:support@xecureai.com?subject=Case Study Consultation - XecureAI" class="btn btn-primary btn-lg">
                Schedule Advisory Call
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
