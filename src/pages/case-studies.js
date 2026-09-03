/* ============================================
   XECURE AI — CASE STUDIES PAGE
   ============================================ */
import { icon } from '../js/icons.js';

const caseStudies = [
  {
    id: 1,
    badge: 'ISO/IEC 27001',
    location: 'United States',
    industry: 'Technology & Cloud Services',
    title: 'Supporting a Technology Company in Achieving ISO/IEC 27001 Certification',
    challenge: 'The organization wanted to achieve ISO/IEC 27001 certification and establish a structured Information Security Management System (ISMS). The challenge was not simply preparing documentation — it was ensuring that security requirements were understood, implemented, evidenced, and embedded into business operations.',
    steps: [
      { num: '01', title: 'Gap Assessment', desc: 'Assessed the existing environment against ISO/IEC 27001 requirements and identified key compliance and security gaps.' },
      { num: '02', title: 'Risk Management', desc: 'Supported the identification, assessment, treatment, and documentation of information security risks.' },
      { num: '03', title: 'ISMS Development', desc: 'Developed and strengthened the required policies, procedures, governance structure, roles, and ISMS documentation.' },
      { num: '04', title: 'Control Implementation', desc: 'Worked with relevant teams to address gaps and implement applicable security controls across the organization.' },
      { num: '05', title: 'Audit Readiness', desc: 'Reviewed evidence, assessed implementation readiness, and helped teams prepare for the certification audit.' },
      { num: '06', title: 'Certification Support', desc: 'Supported the organization throughout its certification journey and helped address observations and improvement areas.' },
    ],
    result: 'ISO/IEC 27001 Certification Achieved',
  },
  {
    id: 2,
    badge: 'Multi-Framework',
    location: 'United Kingdom',
    industry: 'Technology',
    title: 'Supporting a Technology Company to Strengthen Its Security & Compliance Program',
    challenge: 'The organization needed to strengthen its security governance and demonstrate compliance against multiple internationally recognized security frameworks.',
    steps: [
      { num: '01', title: 'Gap Assessments', desc: 'Conducted gap assessments against each target framework to identify compliance and security gaps.' },
      { num: '02', title: 'Risk Assessments', desc: 'Performed risk assessments and developed risk treatment plans aligned with each framework.' },
      { num: '03', title: 'Policy Development', desc: 'Developed and updated security policies, procedures, and governance documentation.' },
      { num: '04', title: 'Control Implementation', desc: 'Implemented security controls across the organization aligned with all target frameworks.' },
      { num: '05', title: 'Evidence Preparation', desc: 'Prepared evidence packages and audit readiness materials for each certification.' },
      { num: '06', title: 'Audit Support', desc: 'Supported the organization through all certification and assessment processes.' },
    ],
    result: 'ISO 27001, SOC 2 Type II, PCI DSS, Cyber Essentials Plus — All Achieved',
    certifications: ['ISO/IEC 27001', 'SOC 2 Type II', 'PCI DSS', 'Cyber Essentials', 'Cyber Essentials Plus'],
  },
  {
    id: 3,
    badge: 'ISO 27001:2022 Transition',
    location: 'United Kingdom',
    industry: 'Technology',
    title: 'Successfully Transitioning from ISO/IEC 27001:2013 to ISO/IEC 27001:2022',
    challenge: 'As ISO/IEC 27001 evolved from the 2013 to the 2022 edition, the organization needed to reassess their ISMS, understand the updated requirements, address new controls, and prepare for transition audits.',
    steps: [
      { num: '01', title: 'Transition Gap Assessment', desc: 'Conducted a comprehensive ISO 27001:2013 → 2022 gap assessment.' },
      { num: '02', title: 'Documentation Update', desc: 'Updated ISMS policies, procedures, and documentation to align with the 2022 standard.' },
      { num: '03', title: 'Risk Enhancement', desc: 'Reviewed and enhanced the risk assessment and risk treatment methodology.' },
      { num: '04', title: 'Control Mapping', desc: 'Mapped existing controls to the ISO 27001:2022 Annex A control structure.' },
      { num: '05', title: 'New Controls', desc: 'Implemented requirements for new and updated Annex A controls.' },
      { num: '06', title: 'Transition Audit Prep', desc: 'Conducted internal readiness and transition audit preparation.' },
    ],
    result: 'Successful Transition to ISO/IEC 27001:2022',
  },
  {
    id: 4,
    badge: 'Multi-Organization',
    location: 'Qatar',
    industry: 'Multiple Industries',
    title: 'Supporting Multiple Organizations in Qatar Through ISO/IEC 27001:2022 Transition',
    challenge: 'Multiple organizations in Qatar needed to transition their ISMS from ISO/IEC 27001:2013 to the 2022 edition, each with unique environments, teams, and readiness levels.',
    steps: [
      { num: '01', title: 'Transition Gap Assessment', desc: 'Assessed existing ISMS environments against ISO/IEC 27001:2022 requirements.' },
      { num: '02', title: 'ISMS Updates', desc: 'Reviewed and updated policies, procedures, scope, risk documentation, and Statement of Applicability.' },
      { num: '03', title: 'Control Alignment', desc: 'Mapped existing controls against the updated Annex A structure and identified new requirements.' },
      { num: '04', title: 'Gap Remediation', desc: 'Worked with control owners to address identified gaps and strengthen implementation.' },
      { num: '05', title: 'Evidence Review', desc: 'Reviewed implementation evidence and identified areas requiring attention.' },
      { num: '06', title: 'Transition Preparation', desc: 'Prepared organizations and stakeholders for their ISO/IEC 27001:2022 transition assessments.' },
    ],
    result: 'Successful ISO/IEC 27001:2022 Transitions for Multiple Organizations',
  },
];

export function caseStudiesPage() {
  const html = `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">
          <span class="label-dot"></span>
          <span>Case Studies</span>
        </div>
        <h1>Proven <span class="text-gradient">Security Results</span></h1>
        <p>Real-world success stories showcasing how Xecure AI helps organizations achieve compliance, strengthen security, and reduce cyber risk.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:flex;flex-direction:column;gap:var(--space-8);" class="stagger-children">
          ${caseStudies.map(cs => `
            <div class="card case-study-card" id="case-${cs.id}" onclick="this.querySelector('.case-study-detail').classList.toggle('open')">
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
                <h4>How Xecure AI Helped</h4>
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
            <h2 class="cta-title text-h2">Ready to Be Our <span class="text-gradient">Next Success Story?</span></h2>
            <p class="cta-subtitle text-body-lg">Let us help your organization achieve its security and compliance goals.</p>
            <a href="mailto:support@xecureai.com" class="btn btn-glass btn-lg">
              Start Your Journey
              ${icon('arrowRight', 18)}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  return { html, init() {} };
}
