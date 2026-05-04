import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TAXSIM Emulator - PolicyEngine Demo Day',
  description: 'Demo day presentation for the PolicyEngine TAXSIM Emulator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
