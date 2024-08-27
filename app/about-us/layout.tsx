"use client";
import { NextUIProvider } from "@nextui-org/react";
export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full">
      {/* <Navbar /> */}

      <main className="flex grow">
        {/* <NextUIProvider> */}
          {children}
          {/* </NextUIProvider> */}
      </main>
    </div>
  );
}
