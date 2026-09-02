import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manish Singh | Software Developer & QA Automation Engineer',
  description: 'Cinematic developer portfolio of Manish Singh. Specializing in test automation architectures, full-stack systems, and shift-left quality assurance.',
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
