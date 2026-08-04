import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const ALLOWED_DOMAIN = "hellopolymer.com";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    // Hard gate: only @hellopolymer.com Google accounts get past sign-in, regardless
    // of what Google Cloud's OAuth consent screen allows.
    async signIn({ profile }) {
      const email = typeof profile?.email === "string" ? profile.email : "";
      return email.toLowerCase().endsWith(`@${ALLOWED_DOMAIN}`);
    },
  },
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
};
