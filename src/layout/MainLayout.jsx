import React, { useEffect } from "react";
import Topbar from "./Topbar";
import Header from "./Header";
import Footer from "./Footer";
import AuthModal from "./AuthModal";
import Breadcrumb from "../components/common/Breadcrumb";
import { useRouter } from "next/router";
import Topbar2 from "./Topbar2";
import Header2 from "./Header2";
import Head from "next/head";
import Footer2 from "./Footer2";

const MainLayout = ({ children }) => {
  const route = useRouter();

  useEffect(() => {
    // Add the class to the <body> tag based on the current route
    const body = document.body;
    if (route.pathname === "/index2") {
      body.classList.add("style-2");
    } else {
      body.classList.remove("style-2");
    }

    // Clean up the class when the component unmounts
    return () => {
      body.classList.remove("style-2");
    };
  }, [route.pathname]);


  
  return (
    <>
      <Head>
        <title>{`Zidkart`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
                {/* Add the GTM script here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1301941023855283');
fbq('track', 'PageView');
`,
          }}
        />  
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11146835601"></script>
      <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11146835601')`,
          }}
        />

      </Head>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
             <img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1301941023855283&ev=PageView&noscript=1"
/>`,
          }}
        />
      {route.pathname === "/index2" ? <Topbar2 /> : <Topbar />}
      <AuthModal />
      {route.pathname === "/index2" ? <Header2 /> : <Header />}
      {route.pathname === "/" || route.pathname === "/index2" ? (
        <></>
      ) : (
        <Breadcrumb />
      )}
      {children}
      {route.pathname === "/index2" ? <Footer2 /> : <Footer />}
    </>
  );
};

export default MainLayout;
