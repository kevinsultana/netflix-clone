import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const iconClassName =
    "hover:text-red-700 transition-all duration-300 hover:scale-120";
  return (
    <div className="px-6 pt-12 md:px-60 md:pt-20 pb-2">
      <div className="flex gap-6 text-white text-xl md:text-4xl mb-8">
        <FaInstagram className={iconClassName} />
        <FaFacebookF className={iconClassName} />
        <FaTwitter className={iconClassName} />
        <FaYoutube className={iconClassName} />
      </div>
      <div className="text-white/60 text-xs md:text-lg mb-8">
        <div className="grid grid-cols-4 md:gap-40 pb-4">
          <p>Audio Description</p>
          <p>Help Center</p>
          <p>Gift Card</p>
          <p>Media Center</p>
        </div>
        <div className="grid grid-cols-4 md:gap-40 pb-4">
          <p>Investor Relations</p>
          <p>Legal Notices</p>
          <p>Netvlix Shops</p>
          <p>Term of Use</p>
        </div>
        <div className="grid grid-cols-4 md:gap-40 pb-4">
          <p>Privacy</p>
          <p>Legal Notices</p>
          <p>Cookies Preferences</p>
          <p>Corporate Information</p>
        </div>
        <div className="grid grid-cols-4 md:gap-40 pb-4">
          <p>Contact Us</p>
          <p>Do Not Sell or Share My Personal Information</p>
          <p>Ad Choices</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex px-1 py-2 md:px-2 md:py-3 border border-white text-white/60">
          <p className="text-xs md:text-lg">Service Code</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-white/60 mt-8 text-xs md:text-lg">
          <p>© 2025 Netflix, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
