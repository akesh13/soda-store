import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import Provider from "./Provider";
import theme from "@/theme";
import ViewCanvas from "@/components/ViewCanvas";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Diet soda store",
  description: "Diet soda store created using next app by akesh",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Provider theme={theme}>
            {children}
          </Provider>
          <ViewCanvas />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
