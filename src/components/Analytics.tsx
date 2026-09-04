import Script from 'next/script'

/**
 * GA4.
 *
 * Loaded with afterInteractive so analytics never sits in front of the page
 * painting. `send_page_view` is left on: this site has real URL changes on
 * every navigation, so GA4's automatic page_view is accurate and we do not
 * need to fire our own.
 *
 * The measurement ID is hard-coded rather than read from an env var so the tag
 * cannot silently vanish because a Vercel variable was never set — a missing
 * tag is exactly the failure this site has been suffering from.
 */
const GA4_ID = 'G-R4ZCX59BKS'

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
