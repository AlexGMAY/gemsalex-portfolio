"use client";

import Script from "next/script";

export function ScriptOptimizer() {
  return (
    <>
      {/* Load critical scripts with strategy="afterInteractive" */}
      <Script
        src="https://js.stripe.com/v3"
        strategy="afterInteractive"
        onLoad={() => console.log("Stripe loaded")}
      />

      {/* Load non-critical scripts with strategy="lazyOnload" */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Load Google Maps only when needed */}
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&loading=async&libraries=places"
        strategy="lazyOnload"
      />
    </>
  );
}
