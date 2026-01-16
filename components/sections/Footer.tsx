"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#0B1120] text-slate-400 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        <div className="flex gap-6">
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">
                LinkedIn
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-white transition-colors">
                GitHub
            </Link>
        </div>
        <p className="text-sm">
            &copy; Copyright {new Date().getFullYear()}. All Right reserved.
        </p>
      </div>
    </footer>
  );
}