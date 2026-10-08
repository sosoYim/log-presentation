import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BailLyon — Pars serein, loue malin",
  description: "La plateforme de sous-location étudiante à Lyon. Trouvez ou proposez un logement pour votre stage, échange ou quelques mois.",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${montserrat.className} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
