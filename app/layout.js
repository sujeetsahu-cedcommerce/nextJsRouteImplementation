import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  console.log("children", children);
  return (
    <html lang="en">
      <body>
        <header>This is a header</header>
        {children}
        <footer>This is a footer</footer> 
      </body>
    </html>
  );
}
