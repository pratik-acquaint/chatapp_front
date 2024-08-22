'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// export const metadata = {
//   title: "Chat-App",
//   description: "developed using Next Js with Socket.io",
// };

const redirectUri = typeof window !== "undefined" ? window.location.origin : "";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {/* <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={'http//:localhost:3001'}
        > */}
          {children}
        {/* </Auth0Provider> */}
      </body>
    </html>
  );
}
