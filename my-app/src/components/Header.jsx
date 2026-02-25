"use client";

import { usePathname } from "next/navigation";
import PillNav from "./PillNav";

export default function Header() {
  const pathname = usePathname();
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <PillNav
      logo="C:\Users\slush\PROJECTS\my-app\WEBDESIGN_GMT\grundlagen\Logo.svg" // put your logo path here
      items={items}
      activeHref={pathname}
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#000" // dark background
      pillColor="#fff" // pill background
      hoveredPillTextColor="#fff" // text on hover
      pillTextColor="#000" // default pill text
      initialLoadAnimation={false}
    />
  );
}
