"use client";

import { signOut } from "next-auth/react";
import { SignOutIcon } from "./icons";

export default function SignOutButton() {
  return (
    <button type="button" className="railitem" onClick={() => signOut({ callbackUrl: "/signin" })} aria-label="Sign out">
      <span className="railicon">
        <SignOutIcon />
      </span>
      <span className="raillabel">Sign out</span>
    </button>
  );
}
