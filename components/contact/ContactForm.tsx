"use client";

import { FormEvent, useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setState("error");
      return;
    }
    setState("loading");

    const url = process.env.NEXT_PUBLIC_MAILER_URL;
    if (!url) {
      setState("error");
      console.error("NEXT_PUBLIC_MAILER_URL is not set");
      return;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(await res.text());
      setState("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setState("error");
    }
  };

  return (
    <div id="contact-form" className="contact-form-card" data-reveal>
      <h2>Claim Your Pass</h2>
      <p>
        Tell us a little about you and pick a pass. We’ll confirm your seat and
        send an invoice within one working day.
      </p>
      <form onSubmit={submit} noValidate>
        <label>
          NAME
          <input name="name" required placeholder="Your full name" />
        </label>
        <label>
          WORK EMAIL
          <input
            type="email"
            name="email"
            required
            placeholder="yourcompany@email.com"
          />
        </label>
        <label>
          PHONE NUMBER
          <input
            type="tel"
            name="phone"
            required
            pattern="[+0-9 ()-]{8,}"
            placeholder="+91 9121675082"
          />
        </label>
        <label>
          TOPIC
          <select name="topic" defaultValue="Tickets">
            <option>Tickets</option>
            <option>Tier-1</option>
            <option>Tier-2</option>
          </select>
        </label>
        <p className="form-disclaimer">
          BY SUBMITTING, YOU AGREE THAT SUCCESSWIKIS MAY USE YOUR DETAILS TO
          RESPOND TO THIS ENQUIRY.
        </p>
        <button type="submit" disabled={state === "loading"}>
          <span aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M3 9h12M10 4l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {state === "loading" ? "SENDING…" : "SEND INQUIRY"}
        </button>
        {state === "error" && (
          <output className="form-message error">
            Something went wrong. Please try again or email us directly.
          </output>
        )}
        {state === "success" && (
          <output className="form-message success">
            Thanks — your enquiry is ready for the SuccessWikis team.
          </output>
        )}
        <small>
          <i />
          Typical response: 1–2 business days.
        </small>
      </form>
    </div>
  );
}
