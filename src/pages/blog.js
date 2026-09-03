/* ============================================
   XECURE AI — BLOG PAGE
   Cybersecurity insights & resources
   ============================================ */
import { icon } from '../js/icons.js';

const blogPosts = [
  {
    id: 1,
    category: 'AI Security',
    date: 'Aug 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    title: 'The Rising Threat of Prompt Injection Attacks on Enterprise LLMs',
    excerpt: 'As organizations integrate large language models into critical workflows, prompt injection attacks have emerged as one of the most significant security risks. Learn how to identify, test, and defend against these threats.',
    tags: ['LLM Security', 'Prompt Injection', 'AI Risk'],
  },
  {
    id: 2,
    category: 'Compliance',
    date: 'Aug 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80',
    title: 'ISO 27001:2022 Transition — What You Need to Know Before the Deadline',
    excerpt: 'The transition deadline from ISO 27001:2013 to ISO 27001:2022 is approaching. This comprehensive guide covers the key changes, new Annex A controls, and a step-by-step transition roadmap.',
    tags: ['ISO 27001', 'ISMS', 'Compliance'],
  },
  {
    id: 3,
    category: 'Cybersecurity',
    date: 'Aug 5, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
    title: 'Zero Trust Architecture: A Practical Implementation Guide for Enterprises',
    excerpt: 'Zero Trust is no longer a buzzword — it\'s a necessity. This guide walks through practical steps to implement Zero Trust principles across identity, network, data, and application layers.',
    tags: ['Zero Trust', 'Network Security', 'IAM'],
  },
  {
    id: 4,
    category: 'Cloud Security',
    date: 'Jul 22, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    title: 'Securing Multi-Cloud Environments: AWS, Azure, and GCP Best Practices',
    excerpt: 'Operating across multiple cloud providers introduces unique security challenges. Discover proven strategies for maintaining consistent security posture across AWS, Azure, and GCP.',
    tags: ['AWS', 'Azure', 'CSPM', 'Cloud'],
  },
  {
    id: 5,
    category: 'Cyber Risk',
    date: 'Jul 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    title: 'Quantifying Cyber Risk: From Technical Metrics to Board-Level Reporting',
    excerpt: 'Bridging the gap between technical security metrics and business risk language. Learn how to translate vulnerability data, threat intelligence, and incident metrics into quantified business risk.',
    tags: ['Risk Quantification', 'CISO', 'Board Reporting'],
  },
  {
    id: 6,
    category: 'Penetration Testing',
    date: 'Jun 28, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    title: 'API Security Testing: OWASP Top 10 API Vulnerabilities Explained',
    excerpt: 'APIs are the backbone of modern applications — and a prime target for attackers. Deep dive into the OWASP API Security Top 10 with real-world examples and remediation strategies.',
    tags: ['API Security', 'OWASP', 'Pentesting'],
  },
];

export function blogPage() {
  const html = `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">
          <span class="label-dot"></span>
          <span>Blog & Insights</span>
        </div>
        <h1>Cybersecurity <span class="text-gradient">Insights</span></h1>
        <p>Expert analysis, practical guides, and thought leadership on cybersecurity, AI security, compliance, and cyber risk management.</p>
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
                <span style="padding:var(--space-1) var(--space-3);border-radius:var(--radius-full);background:rgba(7,17,31,0.7);backdrop-filter:blur(10px);border:1px solid rgba(37,99,235,0.3);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--electric-blue);letter-spacing:var(--tracking-wider);text-transform:uppercase;">Featured Article</span>
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
              <a href="mailto:support@xecureai.com?subject=Inquiry: Prompt Injection Security" class="btn btn-glass" style="align-self:flex-start;">
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
            <h2 class="cta-title text-h2">Stay Ahead of <span class="text-gradient">Cyber Threats</span></h2>
            <p class="cta-subtitle text-body-lg">Subscribe to our newsletter for the latest cybersecurity insights, threat intelligence, and compliance updates.</p>
            <form action="https://formsubmit.co/support@xecureai.com" method="POST" class="newsletter-form">
              <input type="hidden" name="_subject" value="Newsletter Subscription - Xecure AI">
              <input type="hidden" name="_template" value="table">
              <input type="email" name="email" placeholder="Enter your email" required style="flex:1;min-width:220px;padding:var(--space-3) var(--space-5);border-radius:var(--radius-lg);background:var(--bg-glass);border:1px solid var(--border-color);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:var(--text-primary);" />
              <button type="submit" class="btn btn-glass">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  return { html, init() {} };
}
