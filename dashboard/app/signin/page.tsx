"use client";

import { signIn } from "next-auth/react";
import PolymerMark from "../polymer-mark";

export default function SignInPage() {
  return (
    <main className="signinwrap">
      <div className="signincard">
        <div className="brand">
          <PolymerMark size={26} />
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
