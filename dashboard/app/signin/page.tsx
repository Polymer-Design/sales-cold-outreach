"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <main className="signinwrap">
      <div className="signincard">
        <div className="brand">
          <div className="mark">
            <span /><span /><span /><span />
          </div>
          <div className="name">Polymer</div>
        </div>
        <h1>Outreach Command Center</h1>
        <p>Sign in with your @hellopolymer.com Google account.</p>
        <button className="googlebtn" onClick={() => signIn("google", { callbackUrl: "/" })}>
          Sign in with Google
        </button>
      </div>
    </main>
  );
}
