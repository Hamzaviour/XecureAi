/* ============================================
   XECURE AI — SERVICES PAGE
   ============================================ */
import { icon } from '../js/icons.js';

const services = [
  // GRC & Compliance
  {
    ic: 'clipboard',
    category: 'GRC & Compliance',
    title: 'ISO/IEC 27001 ISMS & 2022 Transitions',
    desc: 'Complete Information Security Management System (ISMS) implementation, gap assessments, policy development, internal audits, and seamless transition to ISO 27001:2022.',
    details: ['Gap Assessment', 'ISO 27001:2022 Transition', 'ISMS Policies & SOPs', 'Annex A Controls', 'Internal Audits', 'Certification Support'],
  },
  {
    ic: 'shield',
    category: 'GRC & Compliance',
    title: 'SOC 2 Type I & Type II Readiness',
    desc: 'Prepare your cloud and SaaS architecture for SOC 2 attestation across Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy).',
    details: ['Scoping & Gap Analysis', 'Control Design', 'Evidence Automation', 'Continuous Monitoring', 'Auditor Facilitation', 'Type II Readiness'],
  },
  {
    ic: 'alertTriangle',
    category: 'GRC & Compliance',
    title: 'Cyber Risk Management & Quantification',
    desc: 'Quantify financial impact of cyber risks, build enterprise risk registers, conduct FAIR-aligned risk assessments, and deliver executive board reports.',
    details: ['Risk Registers', 'FAIR Methodology', 'Risk Treatment Plans', 'Board Risk Reporting', 'Threat Modeling', 'Maturity Benchmarking'],
  },
  {
    ic: 'building',
    category: 'GRC & Compliance',
    title: 'Third-Party & Vendor Risk (TPRM)',
    desc: 'Establish vendor risk tiers, evaluate supplier security posture, automate security questionnaires (SIG/CAIQ), and manage supply chain cyber exposures.',
    details: ['Vendor Tiering', 'Security Questionnaires', 'Contractual Security Review', 'SaaS Risk Audits', 'Continuous Monitoring', 'Supply Chain Security'],
  },

  // AI Governance
  {
    ic: 'aiChip',
    category: 'AI Governance',
    title: 'ISO/IEC 42001 (AIMS) Implementation',
    desc: 'Lead the industry with the first international standard for Artificial Intelligence Management Systems (AIMS). Establish governance, risk controls, and ethical AI safeguards.',
    details: ['AIMS Policy & Scope', 'AI Risk Assessment', 'AI Impact Assessments', 'Control Implementation', 'AI Internal Audit', 'Certification Readiness'],
  },
  {
    ic: 'fileText',
    category: 'AI Governance',
    title: 'NIST AI Risk Management Framework',
    desc: 'Operationalize the NIST AI RMF across Govern, Map, Measure, and Manage functions to foster trustworthy, safe, and transparent enterprise AI systems.',
    details: ['NIST AI RMF Mapping', 'Trustworthiness Metrics', 'AI Model Transparency', 'Data Governance for AI', 'Explainability Audits', 'Continuous Oversight'],
  },
  {
    ic: 'zap',
    category: 'AI Governance',
    title: 'Generative AI & LLM Security (OWASP Top 10)',
    desc: 'Identify and remediate prompt injection, data leakage, model poisoning, insecure output handling, and supply chain vulnerabilities in enterprise LLMs.',
    details: ['Prompt Injection Testing', 'Model Inversion Defense', 'PII Data Redaction', 'RAG Security Architecture', 'LLM Red Teaming', 'API Gateway Guardrails'],
  },
  {
    ic: 'lock',
    category: 'AI Governance',
    title: 'Shadow AI & Corporate AI Policy',
    desc: 'Control unmanaged employee GenAI usage, design acceptable use policies, evaluate third-party AI SaaS tools, and implement DLP guardrails.',
    details: ['GenAI Acceptable Use', 'Shadow AI Discovery', 'Third-Party AI Tool Audits', 'Data Loss Prevention', 'Employee Training', 'Corporate AI Charter'],
  },

  // Cybersecurity & Technical Controls
  {
    ic: 'target',
    category: 'Cybersecurity',
    title: 'Penetration Testing & VAPT',
    desc: 'Rigorous manual and automated offensive security assessments across web applications, cloud environments, APIs, mobile apps, and enterprise networks.',
    details: ['Web App Pentesting', 'API Security Testing', 'Cloud VAPT', 'Network Pentesting', 'Mobile App Testing', 'Remediation Re-testing'],
  },
  {
    ic: 'cloud',
    category: 'Cybersecurity',
    title: 'Cloud Security Posture & Architecture',
    desc: 'Design and audit resilient cloud architectures across AWS, Azure, and GCP. Remediate misconfigurations, enforce IAM least-privilege, and automate CSPM.',
    details: ['AWS / Azure / GCP Audits', 'CSPM Implementation', 'Infrastructure as Code (IaC)', 'Kubernetes & Containers', 'Cloud Baseline Hardening', 'Zero Trust Cloud'],
  },
  {
    ic: 'key',
    category: 'Cybersecurity',
    title: 'Zero Trust & Identity Security (IAM)',
    desc: 'Eliminate implicit trust by architecting continuous verification, fine-grained access control, Single Sign-On (SSO), Multi-Factor Authentication (MFA), and PAM.',
    details: ['Zero Trust Framework', 'Identity Governance', 'Privileged Access (PAM)', 'SSO & MFA Strategy', 'Conditional Access', 'Directory Hardening'],
  },
  {
    ic: 'userTie',
    category: 'Cybersecurity',
    title: 'Virtual CISO (vCISO) & Advisory',
    desc: 'Executive-level security leadership on demand. Drive cyber strategy, lead compliance programs, manage audit committees, and present to board of directors.',
    details: ['Security Strategy Roadmap', 'Audit Committee Prep', 'Board & Exec Reporting', 'Budget & Resource Planning', 'Incident Advisory', 'Security Culture'],
  },
];

export function servicesPage() {
  const html = `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">
          <span class="label-dot"></span>
          <span>Our Advisory & Technical Services</span>
        </div>
        <h1>Cybersecurity, <span class="text-gradient">GRC & AI Governance</span></h1>
        <p>Strategic governance, audit-proven compliance, and technical security controls engineered to help organizations navigate regulatory demands and innovate responsibly.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-3 stagger-children">
          ${services.map(svc => `
            <div class="card service-card" style="display:flex;flex-direction:column;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-4);">
                <div class="card-icon" style="margin-bottom:0;">${icon(svc.ic, 26, 'var(--cyber-blue)')}</div>
                <span style="font-family:var(--font-mono);font-size:11px;padding:2px 8px;border-radius:12px;background:rgba(37,99,235,0.08);color:var(--cyber-blue);border:1px solid rgba(37,99,235,0.2);">${svc.category}</span>
              </div>
              <h3 class="card-title">${svc.title}</h3>
              <p class="card-description" style="margin-bottom:var(--space-6);flex:1;">${svc.desc}</p>
              <div class="career-card" style="margin-top:auto;">
                <div class="card-tags">
                  ${svc.details.map(d => `<span class="tag">${d}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Frameworks & Regulations Section -->
    <section class="section" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">
            <span class="label-dot"></span>
            <span>Standards We Support</span>
          </div>
          <h2 class="section-title">Regulatory & <span class="text-gradient">Industry Frameworks</span></h2>
          <p class="section-subtitle">We guide organizations to audit readiness and sustained compliance across global standards.</p>
        </div>
        <div class="grid grid-4 stagger-children">
          ${[
            { name: 'ISO/IEC 27001', desc: 'Information Security Management' },
            { name: 'ISO/IEC 42001', desc: 'Artificial Intelligence Management' },
            { name: 'SOC 2 (Type I & II)', desc: 'Trust Services Criteria' },
            { name: 'NIST AI RMF & CSF', desc: 'AI Risk & Cybersecurity Framework' },
            { name: 'PCI DSS v4.0', desc: 'Payment Card Industry Security' },
            { name: 'GDPR & PDPPL', desc: 'Global & Regional Privacy Regulations' },
            { name: 'Qatar NIA & PDP', desc: 'National Information Assurance' },
            { name: 'Saudi NCA / ECC', desc: 'Essential Cybersecurity Controls' },
          ].map(frm => `
            <div class="card" style="text-align:center;padding:var(--space-6) var(--space-4);">
              <div style="font-weight:var(--font-bold);font-size:var(--text-base);color:var(--text-primary);margin-bottom:var(--space-2);">${frm.name}</div>
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);">${frm.desc}</div>
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
            <h2 class="cta-title text-h2">Need Guidance on Your <span class="text-gradient">Audit or AI Strategy</span>?</h2>
            <p class="cta-subtitle text-body-lg">Schedule a consultation with our GRC and AI security consultants to benchmark your posture and define your roadmap.</p>
            <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
              <a href="mailto:support@xecureai.com?subject=Consultation Request: Services" class="btn btn-glass btn-lg">
                Schedule Advisory Call
                ${icon('arrowRight', 18)}
              </a>
              <a href="#/case-studies" data-route="/case-studies" class="btn btn-outline btn-lg">View Case Studies</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return { html, init() {} };
}
