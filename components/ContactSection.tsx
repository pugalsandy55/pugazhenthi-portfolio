'use client';

import { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  ArrowUpRight,
  Send,
  Check,
  Copy,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { siteMeta, socialLinks } from '@/data/portfolio';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const emailAddress = 'pugazhenthip5521@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API not permitted
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setSent(false);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'your_web3forms_access_key') {
      setFormError(
        'Web3Forms access key is not configured in .env.local yet. Please email me directly at ' +
          emailAddress +
          ' or configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to enable this form.'
      );
      return;
    }

    setSending(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Botcheck honeypot check
    const botcheck = formData.get('botcheck');
    if (botcheck) {
      setSending(false);
      return;
    }

    formData.append('access_key', accessKey);
    formData.append('subject', 'New Portfolio Enquiry — Pugazhenthi p');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setSent(true);
        form.reset();
      } else {
        setFormError(result.message || 'Unable to submit enquiry. Please email me directly.');
      }
    } catch {
      setFormError('A network error occurred while sending your message. Please try again or email directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section-container" id="contact" aria-label="Contact & Collaboration">
      <div className="section-heading-block reveal-on-scroll">
        <div className="heading-copy">
          <span className="section-eyebrow">05 // START A CONVERSATION</span>
          <h2 className="section-title">
            Let&apos;s build something{' '}
            <span className="title-serif-italic">exceptional.</span>
          </h2>
        </div>
        <p className="heading-subtext">
          Have an upcoming project, freelance engagement, or full-time opportunity? My inbox is always open.
        </p>
      </div>

      <div className="contact-main-grid reveal-on-scroll">
        {/* Left Column: Direct Outreach & Socials */}
        <div className="contact-info-card">
          <div className="contact-stamp-badge">
            <span className="stamp-sub">PUGAZHENTHI P</span>
            <span className="stamp-main">LET&apos;S TALK</span>
            <span className="stamp-accent">✳ CHENNAI</span>
          </div>

          <span className="contact-channel-eyebrow">DIRECT CONTACT</span>
          <h3 className="contact-direct-heading">
            Turning vision into working software.
          </h3>
          <p className="contact-direct-sub">
            Whether you need a full-stack Django system, responsive frontend engineering, or technical collaboration,
            feel free to reach out directly.
          </p>

          {/* Quick Copy / Email Card */}
          <div className="email-action-box">
            <div className="email-address-row">
              <Mail size={16} className="text-accent flex-shrink-0" />
              <span className="email-address-text">{emailAddress}</span>
            </div>
            <div className="email-action-buttons">
              <button
                type="button"
                className="btn-copy-email"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
              >
                {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
              <a
                href={`mailto:${emailAddress}`}
                className="btn-send-mail"
                aria-label="Send direct email"
              >
                <span>Write Mail</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Verified Social Networks */}
          <div className="social-profiles-strip">
            <span className="social-strip-label">VERIFIED PROFILES</span>
            <div className="social-buttons-row">
              {socialLinks
                .filter((s) => s.platform !== 'email')
                .map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    aria-label={`Visit Pugazhenthi on ${social.label}`}
                  >
                    {social.platform === 'linkedin' && <Linkedin size={18} />}
                    {social.platform === 'github' && <Github size={18} />}
                    {social.platform === 'instagram' && <Instagram size={18} />}
                    <span className="social-btn-tooltip">{social.label}</span>
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="contact-form-card">
          <div className="form-card-topbar">
            <span className="form-topbar-title">PROJECT ENQUIRY FORM</span>
            <Sparkles size={15} className="text-accent" />
          </div>

          <form className="contact-form-body" onSubmit={handleSubmit} noValidate>
            {/* Honeypot Spam Protection (hidden from real users) */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden-honeypot"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: 'none' }}
            />

            <div className="form-field-group">
              <label htmlFor="contact-name" className="field-label">
                YOUR NAME <span className="label-req">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="e.g. Anand Sharma"
                autoComplete="name"
                className="field-input"
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="contact-email" className="field-label">
                EMAIL ADDRESS <span className="label-req">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="name@company.com"
                autoComplete="email"
                className="field-input"
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="contact-message" className="field-label">
                PROJECT OVERVIEW <span className="label-req">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about your goals, timeline, and what you're looking to build…"
                className="field-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`btn-form-submit ${sent ? 'btn-submitted' : ''}`}
            >
              <span>{sending ? 'Sending Transmission…' : sent ? 'Message Received' : 'Send Enquiry'}</span>
              {sent ? (
                <Check size={16} className="submit-icon" />
              ) : (
                <Send size={15} className="submit-icon" />
              )}
            </button>

            {/* Success feedback */}
            {sent && (
              <div className="form-alert-banner alert-success" role="status">
                <Check size={16} className="alert-icon" />
                <p>Thank you! Your enquiry has been sent. I will respond within 24–48 hours.</p>
              </div>
            )}

            {/* Error feedback */}
            {formError && (
              <div className="form-alert-banner alert-error" role="alert">
                <AlertCircle size={16} className="alert-icon" />
                <p>{formError}</p>
              </div>
            )}

            <p className="form-privacy-disclaimer">
              🔒 Respecting your privacy. Your contact details are stored securely and used solely to reply to your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
