import "./globals.css";
import localFont from 'next/font/local';

const rogFont = localFont({
  src: '../public/fonts/asusrog_regular.ttf', 
  variable: '--font-rog',
});

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


export const metadata = {
  title: "Account Login | ROG - Republic of Gamers",
  description: "Official ROG Login Page",
};
