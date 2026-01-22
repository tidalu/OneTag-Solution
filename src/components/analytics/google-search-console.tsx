import Script from "next/script";

export interface GoogleSearchConsoleProps {
  verificationCode: string;
}

export function GoogleSearchConsole({
  verificationCode,
}: GoogleSearchConsoleProps) {
  return (
    <meta
      name="google-site-verification"
      content={verificationCode}
    />
  );
}

// Alternative: Using HTML file verification (create in public folder)
// public/google[verification-code].html with content:
// google-site-verification: google[verification-code].html
