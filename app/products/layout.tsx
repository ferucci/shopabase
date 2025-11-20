export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <span>Layout Products page</span> */}
      {children}
    </>
  );
}
