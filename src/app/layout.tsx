/*
 * Copyright (C), 2024 Hibiscus Software. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import Header from '../components/header';
import Footer from '../components/footer';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0 m-auto">
        <Header></Header>
        {children}
        <Footer></Footer>
        <script src="https://kit.fontawesome.com/183cb9658c.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}