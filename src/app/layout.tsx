'use client';
import React, { useState } from "react";
import NavBar from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/global.scss";  
import BootstrapClient from "@/components/bootstrap-client";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Check if the current route is "Sign In"
  const isSignInPage = pathname === "/auth";

  return (
    <html lang="en">
      <body>
        <main>
          <Provider store={store}>
            {!isSignInPage && <NavBar />}
            <div className="main-content">{children}</div>
            {!isSignInPage && <Footer />}
{/*             <BootstrapClient /> */}
          </Provider>
        </main>
      </body>
    </html>
  );
}
