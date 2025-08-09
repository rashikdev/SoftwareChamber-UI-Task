import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const taskFont = Bricolage_Grotesque({
  variable: "--font-task",
  subsets: ["latin"],
});

export const metadata = {
  title: "Software Chamber",
  description: "Job task from Software Chamber for Frontend Developer position",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/assets/favIcon.png"
        type="image/x-icon"
      />
      <body className={taskFont.className}>{children}</body>
    </html>
  );
}
