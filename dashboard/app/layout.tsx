import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Outreach Command Center",
  description: "Polymer internal outreach dashboard",
};

// Runs before hydration so a stored light-theme preference doesn't flash dark first.
const THEME_INIT = `try{if(localStorage.getItem('polymer-theme')==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
