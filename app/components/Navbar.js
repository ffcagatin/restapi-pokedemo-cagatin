"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full h-[96px] flex items-center justify-between">
      <Image
        src="/logo.png"
        alt="Pokemon Logo"
        width={180}
        height={80}
        priority
      />

      <div className="flex items-center gap-12 text-blue-900 font-bold pixel-font uppercase text-xs">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}