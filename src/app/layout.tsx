import type { Metadata } from "next";
import "./globals.scss";
import StoreProvider from "./StoreProvider";


export const metadata: Metadata = {
  title: "Country Panel",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
