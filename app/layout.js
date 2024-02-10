import "./globals.css";



export const metadata = {
  title: "QuantumField",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </html>
  );
}
