import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registery";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import FeaturedCharacters from "./components/FeaturedCharacters/FeaturedCharacters";
import { Lato } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Topbar from "./components/Topbar/Topbar";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Topbar />
        <main>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
