
import "./globals.css";

export const metadata = {
  title: "Weather App",
  description: "Multi-user weather dashboard",
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
