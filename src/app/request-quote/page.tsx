"use client";
import { useState, FormEvent } from "react";
import { PageBackButton } from "@/src/components/page-back-button";
export default function RequestQuote() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setSending(true);
    setError("");

    const fields = Object.fromEntries(new FormData(form).entries());
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !publicKey) {
        throw new Error(
          "Online email delivery is not configured yet. Please email info@vseeds.lk directly.",
        );
      }

      const templateParams = {
        full_name: fields["Full name"],
        company_name: fields["Company name"],
        reply_to: fields.Email,
        phone_whatsapp: fields["Phone / WhatsApp"],
        project_type: fields["Project type"],
        industry: fields.Industry,
        budget_range: fields["Budget range"],
        expected_timeline: fields["Expected timeline"],
        project_description: fields["Project description"],
        required_features: fields["Required features"],
      };

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });
      if (!response.ok) {
        throw new Error("We could not send your inquiry right now. Please try again shortly.");
      }
      setDone(true);
      form.reset();
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Your inquiry could not be sent. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <section className="page-section section-soft request-quote-section">
      <div className="container quote-page-content">
        <PageBackButton />
        <div className="quote-intro">
          <span className="eyebrow">YOUR PROJECT</span>
          <h1>Let’s make a plan.</h1>
          <p>
            Tell us a little about your business and what you need. We’ll use
            this to prepare for a useful conversation.
          </p>
        </div>
        <div className="quote-card">
          {done ? (
            <div className="success">
              <h2>Thanks for reaching out.</h2>
              <p>
                Your inquiry has been sent to our team. We’ll be in touch soon.
              </p>
              <button
                className="button button-outline"
                onClick={() => setDone(false)}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form className="quote-form" onSubmit={submit}>
              {[
                ["Full name", "text"],
                ["Company name", "text"],
                ["Email", "email"],
                ["Phone / WhatsApp", "tel"],
                ["Project type", "text"],
                ["Industry", "text"],
                ["Budget range", "text"],
                ["Expected timeline", "text"],
              ].map(([l, t]) => (
                <label key={l}>
                  {l}
                  <input
                    required={l === "Full name" || l === "Email"}
                    type={t}
                    name={l}
                    placeholder={l}
                  />
                </label>
              ))}
              <label className="wide">
                Project description
                <textarea name="Project description" required rows={4} />
              </label>
              <label className="wide">
                Required features
                <textarea name="Required features" rows={3} />
              </label>
              <div className="wide">
                <button className="button button-primary" disabled={sending}>
                  {sending ? "Sending…" : "Send project details"}
                </button>
                <p className="form-note" role="status" aria-live="polite">
                  {error || (sending ? "Sending your inquiry…" : "")}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

