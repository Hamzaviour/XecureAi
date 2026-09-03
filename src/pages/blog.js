/* ============================================
   XECURE AI — BLOG PAGE
   Cybersecurity insights & resources
   ============================================ */
import { icon } from '../js/icons.js';

const blogPosts = [
  {
    id: 1,
    category: 'AI Governance',
    date: 'Aug 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    title: 'Implementing ISO/IEC 42001: The Blueprint for Enterprise AI Governance',
    excerpt: 'As organizations scale generative AI and machine learning into production workflows, ISO/IEC 42001 provides the first certifiable global standard for Artificial Intelligence Management Systems (AIMS). Discover how to establish AI governance, risk controls, and ethical safeguards.',
    tags: ['ISO 42001', 'AI Governance', 'AIMS', 'NIST AI RMF'],
  },
  {
    id: 2,
    category: 'GRC & Compliance',
    date: 'Aug 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80',
    title: 'ISO 27001:2022 Transition Guide — Key Changes & Audit Roadmap',
    excerpt: 'The transition window for ISO/IEC 27001:2013 is closing. This executive guide details the reorganized Annex A control attributes, 11 new security controls, and a phased transition methodology for zero audit findings.',
    tags: ['ISO 27001:2022', 'ISMS', 'Audit Readiness'],
  },
  {
    id: 3,
    category: 'Cybersecurity',
    date: 'Aug 5, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
    title: 'Zero Trust & Identity Governance: Practical Implementation for Modern Enterprises',
    excerpt: 'Zero Trust is an architectural imperative. Explore how to implement continuous authentication, least-privilege RBAC/ABAC, and automated identity governance across multi-cloud enterprise environments.',
    tags: ['Zero Trust', 'IAM Governance', 'Cloud Security'],
  },
  {
    id: 4,
    category: 'AI Security',
    date: 'Jul 22, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    title: 'Securing Generative AI: Defending Enterprise LLMs against OWASP Top 10 Risks',
    excerpt: 'From indirect prompt injection and insecure output handling to training data poisoning — learn technical defense strategies, guardrail engineering, and automated red-teaming for enterprise LLM applications.',
    tags: ['OWASP LLM', 'Prompt Injection', 'GenAI Security'],
  },
  {
    id: 5,
    category: 'Cyber Risk',
    date: 'Jul 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    title: 'Quantifying Cyber Risk: Translating Technical Vulnerabilities into Board-Level Impact',
    excerpt: 'Bridge the communication gap between security teams and executive leadership. Learn how to apply the FAIR model to convert risk into monetary figures and justify strategic security investments.',
    tags: ['Risk Quantification', 'FAIR Model', 'Board Reporting'],
  },
  {
    id: 6,
    category: 'Audit & Compliance',
    date: 'Jun 28, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    title: 'SOC 2 Type II vs ISO 27001: Choosing the Right Compliance Strategy for SaaS',
    excerpt: 'Comparing trust criteria, scoping requirements, audit lifecycles, and international recognition to determine whether your organization needs SOC 2, ISO 27001, or an integrated multi-framework program.',
    tags: ['SOC 2 Type II', 'ISO 27001', 'SaaS Compliance'],
  },
];

export function blogPage() {
  const html = `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">
          <span class="label-dot"></span>
          <span>Insights & Thought Leadership</span>
        </div>
        <h1>Cybersecurity, <span class="text-gradient">GRC & AI Insights</span></h1>
        <p>Expert analysis, audit blueprints, regulatory updates, and technical guides authored by our GRC, AI governance, and cybersecurity practitioners.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Featured Post -->
        <div class="card reveal" style="margin-bottom:var(--space-12);padding:0;overflow:hidden;">
          <div class="blog-featured-grid">
            <div class="featured-image-wrap">
              <img src="${blogPosts[0].image}" alt="${blogPosts[0].title}" class="featured-image" loading="lazy" />
              <div class="card-image-overlay"></div>
              <div style="position:absolute;top:var(--space-4);left:var(--space-4);z-index:2;">
                <span style="padding:var(--space-1) var(--space-3);border-radius:var(--radius-full);background:rgba(7,17,31,0.75);backdrop-filter:blur(10px);border:1px solid rgba(37,99,235,0.3);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--electric-blue);letter-spacing:var(--tracking-wider);text-transform:uppercase;">Featured Article</span>
              </div>
            </div>
            <div style="padding:clamp(var(--space-6), 4vw, var(--space-10));display:flex;flex-direction:column;justify-content:center;">
              <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-4);flex-wrap:wrap;">
                <span style="padding:var(--space-1) var(--space-3);border-radius:var(--radius-full);background:rgba(124,58,237,0.1);border:1px solid rgba(124,58,237,0.2);font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--ai-purple);">${blogPosts[0].category}</span>
                <span style="font-size:var(--text-xs);color:var(--text-tertiary);">${blogPosts[0].date}</span>
                <span style="font-size:var(--text-xs);color:var(--text-tertiary);">${blogPosts[0].readTime}</span>
              </div>
              <h2 style="font-size:var(--text-2xl);margin-bottom:var(--space-4);line-height:var(--leading-snug);">${blogPosts[0].title}</h2>
              <p style="color:var(--text-secondary);line-height:var(--leading-relaxed);margin-bottom:var(--space-6);font-size:var(--text-sm);">${blogPosts[0].excerpt}</p>
              <a href="mailto:support@xecureai.com?subject=Inquiry: AI Governance Insights" class="btn btn-glass" style="align-self:flex-start;">
                Read Article ${icon('arrowRight', 16)}
              </a>
            </div>
          </div>
        </div>

        <!-- Blog Grid -->
        <div class="grid grid-3 stagger-children">
          ${blogPosts.slice(1).map(post => `
            <article class="card" style="display:flex;flex-direction:column;">
              <div class="card-image-wrap">
                <img src="${post.image}" alt="${post.title}" class="card-image" loading="lazy" />
                <div class="card-image-overlay"></div>
              </div>
              <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-3);flex-wrap:wrap;">
                <span style="padding:var(--space-1) var(--space-3);border-radius:var(--radius-full);background:rgba(37,99,235,0.08);border:1px solid rgba(37,99,235,0.15);font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--cyber-blue);">${post.category}</span>
              </div>
              <div style="display:flex;gap:var(--space-3);font-size:var(--text-xs);color:var(--text-tertiary);margin-bottom:var(--space-3);flex-wrap:wrap;">
                <span>${post.date}</span>
                <span>${post.readTime}</span>
              </div>
              <h3 style="font-size:var(--text-lg);font-weight:var(--font-semibold);margin-bottom:var(--space-3);line-height:var(--leading-snug);flex:1;">${post.title}</h3>
              <p style="font-size:var(--text-sm);color:var(--text-tertiary);line-height:var(--leading-relaxed);margin-bottom:var(--space-5);">${post.excerpt}</p>
              <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);margin-top:auto;">
                ${post.tags.map(t => `<span style="padding:var(--space-1) var(--space-2);border-radius:var(--radius-sm);background:rgba(37,99,235,0.05);font-size:10px;color:var(--text-muted);">${t}</span>`).join('')}
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-inner reveal-scale">
          <div class="cta-bg"></div>
          <div class="glow-shape glow-shape--blue" style="width:300px;height:300px;top:-20%;left:20%;"></div>
          <div class="glow-shape glow-shape--purple" style="width:200px;height:200px;bottom:-10%;right:25%;"></div>
          <div style="position:relative;z-index:1;">
            <h2 class="cta-title text-h2">Stay Ahead of <span class="text-gradient">Regulatory & AI Trends</span></h2>
            <p class="cta-subtitle text-body-lg">Subscribe for executive analysis on ISO standards, GRC frameworks, AI risk management, and cybersecurity governance.</p>
            <form action="https://formsubmit.co/support@xecureai.com" method="POST" class="newsletter-form">
              <input type="hidden" name="_subject" value="GRC & AI Newsletter Subscription - XecureAI">
              <input type="hidden" name="_template" value="table">
              <input type="email" name="email" placeholder="Enter your business email" required style="flex:1;min-width:220px;padding:var(--space-3) var(--space-5);border-radius:var(--radius-lg);background:var(--bg-glass);border:1px solid var(--border-color);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:var(--text-primary);" />
              <button type="submit" class="btn btn-glass">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
  `;

  return { html, init() {} };
}
