import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AkashAkter — Full-Stack Engineer & Machine Learning Researcher",
  description:
    "Portfolio of AkashAkter. Software engineer & researcher specializing in Neural Networks, SVM classification, and modern production web systems. Preparing for graduate studies (PhD).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className="scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var origSetAttr=Element.prototype.setAttribute;Element.prototype.setAttribute=function(n,v){if(typeof n==='string'&&(n.startsWith('bis_')||n.startsWith('__processed_'))){return;}return origSetAttr.call(this,n,v);};var t=localStorage.getItem('theme');if(t==='paper'){document.documentElement.setAttribute('data-theme','paper');}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased bg-[var(--surface)] text-[var(--text)] selection:bg-[var(--selection)] selection:text-[var(--on-accent)]"
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var strip=function(){document.querySelectorAll('*').forEach(function(el){Array.from(el.attributes).forEach(function(a){if(a.name.startsWith('bis_')||a.name.startsWith('__processed_')){el.removeAttribute(a.name);}});});};strip();var obs=new MutationObserver(strip);obs.observe(document.documentElement,{attributes:true,subtree:true});}catch(e){}})()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
