
# BLKNV – React + Next.js UI Components Library

Reusable React / Next.js components by BLKNV Inc.  
Speed up development with production-ready UI sections such as Navbar, Hero, Pricing, Footer, and more.

---

## 📦 Installation

```bash
npm install blknv
# or
yarn add blknv
# or
pnpm add blknv
```

---

## ⚡ Quick Usage

```ts
import {
  Navbar,
  Hero,
  Features,
  Pricing,
  Footer
} from "blknv";

export default function Home() {
  return (
    <>
      <Navbar
        logo="BLKNV"
        navItems={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />
      
      <Hero
        heading="Build Faster with BLKNV"
        subHeading="A modern UI component library for Next.js and React"
        cta="https://blknv.com"
        buttonLabel="Get Started"
      />

      <Features
        features={[
          { title: "Fast Setup", description: "Install & use instantly" },
          { title: "Next.js Ready", description: "Optimized for modern apps" },
        ]}
      />

      <Pricing
        pricingPlans={[
          { title: "Starter", price: "$0", features: ["Basic components"] },
          { title: "Pro", price: "$29", features: ["Full library", "Premium support"] },
        ]}
      />

      <Footer
        companyName="BLKNV Inc"
        policies={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ]}
      />
    </>
  );
}
```

---

## 🧩 Available Components

- Announcement  
- Navbar  
- Hero  
- Features  
- Painpoints  
- Problem  
- Pricing  
- CallToAction  
- Reviews  
- Footer  

---

## 📐 Types Included

You also get TypeScript support out of the box.

```ts
import { NavItems, PricingArrayTypes } from "blknv";

const nav: NavItems[] = [
  { label: "Docs", href: "/docs" },
  { label: "GitHub", href: "https://github.com/blknv/blknv" }
];

const plans: PricingArrayTypes[] = [
  { title: "Free", price: "$0", features: ["Basic usage"] },
  { title: "Pro", price: "$29", features: ["Full access"] }
];
```

---

## 🔑 Features

- ✅ Ready-to-use UI sections  
- ✅ Works with Next.js 13+ (App Router & Pages Router)  
- ✅ Built with React 18  
- ✅ TypeScript support included  
- ✅ Lightweight & customizable  

---

## 🌍 Community & Contribution

We ❤️ open source!  

- Star us on GitHub → [BLKNV UI Library](https://github.com/blknv/blknv)  
- Open an issue for bugs or feature requests  
- PRs are welcome!  

---

## 📄 License

MIT – free to use in personal & commercial projects.

---

✨ Made with ❤️ by BLKNV Inc
