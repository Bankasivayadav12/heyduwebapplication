"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#041B3D] text-white px-6 md:px-16 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">

          {/* Logo */}
          <div>
            <Image
              src="/navbar/logo_footer.png"
              alt="Heydu"
              width={150}
              height={60}
              className="object-contain mb-6"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              
              <Link href="/"><li className="hover:text-white cursor-pointer">→ Home</li></Link>
              <Link href="/"><li className="hover:text-white cursor-pointer">→ Products</li></Link>
              <Link href="/about"><li className="hover:text-white cursor-pointer">→ About Us</li></Link>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <p>No.35A, Jampo park,<br />Singapore - 600 080.</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <p>+91 9878456213</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <p>contact@heydu.com</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Follow us on</h3>
            <div className="flex gap-5 text-gray-300">
              <Facebook size={20} className="hover:text-white cursor-pointer" />
              <Instagram size={20} className="hover:text-white cursor-pointer" />
              <Linkedin size={20} className="hover:text-white cursor-pointer" />
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-gray-400 text-center">
          © Copyright 2025 Heydu. All Right Reserved.
        </div>

      </div>
    </footer>
  );
}
