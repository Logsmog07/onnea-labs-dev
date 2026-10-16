"use client";

import Script from "next/script";

export default function CookieBanner() {
  return (
    <Script 
      src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" 
      strategy="lazyOnload"
      onLoad={() => {
        if (typeof window !== "undefined" && (window as any).cookieconsent) {
          (window as any).cookieconsent.initialise({
            "palette": {
              "popup": { "background": "#000" },
              "button": { "background": "#6366f1" } 
            },
            "position": "bottom-left",
            "content": {
              "message": "Onnea Labs uses cookies on our site to help enhance your user experience. By using our website, you acknowledge and consent to our use of cookies.",
              "dismiss": "Ok",
              "href": "/privacy-policy"
            }
          });
        }
      }}
    />
  );
}