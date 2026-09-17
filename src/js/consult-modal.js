/* ============================================
   XECURE AI — CONSULTATION & SCHEDULE CALL MODAL
   Small, clean, high-conversion advisory form
   ============================================ */

export function initConsultModal() {
  // Inject modal markup if not already present
  if (!document.getElementById('consult-modal')) {
    const modalHTML = `
      <div class="modal-backdrop" id="consult-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="consult-modal-title">
        <div class="modal-container">
          <div class="modal-card">
            <button class="modal-close" id="modal-close-btn" aria-label="Close consultation modal" type="button">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div class="modal-body-content" id="modal-form-view">
              <div class="modal-header">
                <div class="modal-badge">
                  <span class="pulse-dot"></span>
                  <span>Direct Advisory Session</span>
                </div>
                <h2 id="consult-modal-title" class="modal-title">Schedule a Consultation</h2>
                <p class="modal-subtitle">Connect with our GRC, AI governance & cybersecurity specialists to benchmark posture and define your roadmap.</p>
              </div>

              <form class="modal-form" id="consult-form" novalidate>
                <div class="form-row">
                  <div class="form-group">
                    <label for="consult-name" class="form-label">Full Name <span class="required">*</span></label>
                    <div class="input-wrapper">
                      <svg class="input-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <input type="text" id="consult-name" name="name" class="form-input" placeholder="e.g. Alex Rivera" required autocomplete="name" />
                    </div>
                    <span class="form-error" id="name-error">Please enter your name</span>
                  </div>

                  <div class="form-group">
                    <label for="consult-email" class="form-label">Work Email <span class="required">*</span></label>
                    <div class="input-wrapper">
                      <svg class="input-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      <input type="email" id="consult-email" name="email" class="form-input" placeholder="alex@company.com" required autocomplete="email" />
                    </div>
                    <span class="form-error" id="email-error">Please enter a valid work email</span>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="consult-company" class="form-label">Company / Organization</label>
                    <div class="input-wrapper">
                      <svg class="input-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      <input type="text" id="consult-company" name="company" class="form-input" placeholder="Acme Global" autocomplete="organization" />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="consult-topic" class="form-label">Area of Focus</label>
                    <div class="input-wrapper select-wrapper">
                      <svg class="input-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <select id="consult-topic" name="topic" class="form-select">
                        <option value="GRC & Compliance (ISO 27001, SOC 2, HIPAA)">GRC & Compliance (ISO 27001, SOC 2)</option>
                        <option value="AI Governance & Safety (NIST AI RMF, ISO 42001)">AI Governance & Safety (ISO 42001)</option>
                        <option value="Cybersecurity & Penetration Testing">Cybersecurity & Penetration Testing</option>
                        <option value="Cloud Security Architecture">Cloud Security Architecture</option>
                        <option value="General Executive Advisory">General Executive Advisory</option>
                      </select>
                      <svg class="select-chevron" viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="consult-message" class="form-label">Project Details / Goals (Optional)</label>
                  <textarea id="consult-message" name="message" class="form-textarea" rows="2" placeholder="Briefly describe your objectives, target audit dates, or specific questions..."></textarea>
                </div>

                <div class="modal-actions">
                  <button type="submit" class="btn btn-primary btn-submit" id="consult-submit-btn">
                    <span class="btn-text">Confirm Consultation Request</span>
                    <span class="btn-loading" style="display:none;">
                      <svg class="spinner" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="10"/></svg>
                      Sending...
                    </span>
                    <svg class="btn-arrow" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
                  </button>
                </div>

                <div class="modal-footer-info">
                  <span class="secure-tag">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span>Strictly confidential under mutual NDA</span>
                  </span>
                  <span class="response-tag">⚡ Response in &lt; 24h</span>
                </div>
              </form>
            </div>

            <!-- Success Card -->
            <div class="modal-success" id="modal-success-view" style="display: none;">
              <div class="success-icon-badge">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 class="success-title">Consultation Request Received</h3>
              <p class="success-desc" id="consult-success-msg">
                Thank you! Our lead cybersecurity & GRC consultant will contact you at your work email within 24 hours with session scheduling details.
              </p>
              <div class="success-actions">
                <button type="button" class="btn btn-primary btn-sm modal-done-btn" id="modal-done-btn">Done</button>
                <a href="mailto:support@xecureai.com" class="btn btn-glass btn-sm">Direct Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const modal = document.getElementById('consult-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const doneBtn = document.getElementById('modal-done-btn');
  const form = document.getElementById('consult-form');
  const formView = document.getElementById('modal-form-view');
  const successView = document.getElementById('modal-success-view');
  const submitBtn = document.getElementById('consult-submit-btn');
  const nameInput = document.getElementById('consult-name');
  const emailInput = document.getElementById('consult-email');
  const topicSelect = document.getElementById('consult-topic');

  function openModal(options = {}) {
    if (!modal) return;

    // Reset views
    if (formView) formView.style.display = 'block';
    if (successView) successView.style.display = 'none';
    if (form) form.reset();

    // Clear any previous error styling
    document.querySelectorAll('.form-group.has-error').forEach(el => el.classList.remove('has-error'));

    // Optional topic preselection based on context
    if (options.topic && topicSelect) {
      const optionMatch = Array.from(topicSelect.options).find(opt => 
        opt.value.toLowerCase().includes(options.topic.toLowerCase())
      );
      if (optionMatch) topicSelect.value = optionMatch.value;
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Focus first field
    setTimeout(() => {
      nameInput?.focus();
    }, 120);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  // Close triggers
  closeBtn?.addEventListener('click', closeModal);
  doneBtn?.addEventListener('click', closeModal);

  // Click outside backdrop to close
  modal?.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-container')) {
      closeModal();
    }
  });

  // Escape key support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });

  // Form Validation and Submission
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameVal = nameInput?.value.trim();
    const emailVal = emailInput?.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nameGroup = nameInput?.closest('.form-group');
    const emailGroup = emailInput?.closest('.form-group');

    if (!nameVal) {
      nameGroup?.classList.add('has-error');
      isValid = false;
    } else {
      nameGroup?.classList.remove('has-error');
    }

    if (!emailVal || !emailRegex.test(emailVal)) {
      emailGroup?.classList.add('has-error');
      isValid = false;
    } else {
      emailGroup?.classList.remove('has-error');
    }

    if (!isValid) return;

    // Simulate swift submission
    if (submitBtn) {
      submitBtn.disabled = true;
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      const btnArrow = submitBtn.querySelector('.btn-arrow');
      if (btnText) btnText.style.display = 'none';
      if (btnArrow) btnArrow.style.display = 'none';
      if (btnLoading) btnLoading.style.display = 'inline-flex';

      setTimeout(() => {
        submitBtn.disabled = false;
        if (btnText) btnText.style.display = 'inline';
        if (btnArrow) btnArrow.style.display = 'inline';
        if (btnLoading) btnLoading.style.display = 'none';

        // Show success state
        if (formView) formView.style.display = 'none';
        if (successView) successView.style.display = 'flex';

        const successMsg = document.getElementById('consult-success-msg');
        if (successMsg && nameVal) {
          successMsg.textContent = `Thank you, ${nameVal}! Our lead cybersecurity & GRC consultant has received your inquiry and will reach out to ${emailVal} within 24 hours.`;
        }
      }, 600);
    }
  });

  // Real-time error clearance
  nameInput?.addEventListener('input', () => {
    if (nameInput.value.trim()) {
      nameInput.closest('.form-group')?.classList.remove('has-error');
    }
  });

  emailInput?.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value.trim())) {
      emailInput.closest('.form-group')?.classList.remove('has-error');
    }
  });

  // Global Event Delegation for all CTA buttons and consultation links
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    // Check if element is intended for consultation / scheduling
    const hasDataAttr = target.hasAttribute('data-open-consult-modal') || target.hasAttribute('data-consult-modal');
    const href = target.getAttribute('href') || '';
    const isConsultMailto = href.startsWith('mailto:support@xecureai.com') && (
      href.toLowerCase().includes('consultation') ||
      href.toLowerCase().includes('inquiry') ||
      href.toLowerCase().includes('request')
    );
    const text = target.textContent.trim().toLowerCase();
    const isConsultText = (
      text.includes('consult with us') ||
      text.includes('schedule a consultation') ||
      text.includes('schedule call') ||
      text.includes('schedule a call') ||
      text.includes('contact advisory')
    );

    if (hasDataAttr || isConsultMailto || (isConsultText && !target.closest('.modal-card') && !target.classList.contains('modal-done-btn'))) {
      e.preventDefault();

      // Determine topic hint if any
      let topicHint = '';
      if (href.toLowerCase().includes('services')) topicHint = 'Cybersecurity';
      if (href.toLowerCase().includes('case%20study') || href.toLowerCase().includes('case study')) topicHint = 'GRC';
      if (text.includes('ai')) topicHint = 'AI Governance';

      openModal({ topic: topicHint });
    }
  });

  // Export globally for programmatic triggers
  window.openConsultModal = openModal;
  window.closeConsultModal = closeModal;
}
