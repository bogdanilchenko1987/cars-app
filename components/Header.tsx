"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-b-zinc-500 py-3 px-4 sm:px-10  min-h-[65px] tracking-wide relative z-50">
      {/* <header className="flex justify-between   items-center shadow-md py-3 px-4 sm:px-10 bg-white min-h-[65px] tracking-wide relative z-50"> */}
      <Link href="/">
        <Image
          src="/img/car-icon.png"
          alt="Logo"
          className="w-[35px] h-[35px] "
          width="35"
          height="35"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[20px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href ? "text-zinc-900" : "text-zinc-500"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
