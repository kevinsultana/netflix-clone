import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="px-60 pt-20 pb-2">
      <div className="flex gap-6 text-white text-4xl mb-3">
        <FaInstagram />
        <FaFacebookF />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="text-white/60 mb-8">
        <div className="grid grid-cols-4 gap-40 pb-4">
          <p>Audio Description</p>
          <p>Help Center</p>
          <p>Gift Card</p>
          <p>Media Center</p>
        </div>
        <div className="grid grid-cols-4 gap-40 pb-4">
          <p>Investor Relations</p>
          <p>Legal Notices</p>
          <p>Netvlix Shops</p>
          <p>Term of Use</p>
        </div>
        <div className="grid grid-cols-4 gap-40 pb-4">
          <p>Privacy</p>
          <p>Legal Notices</p>
          <p>Cookies Preferences</p>
          <p>Corporate Information</p>
        </div>
        <div className="grid grid-cols-4 gap-40 pb-4">
          <p>Contact Us</p>
          <p>Do Not Sell or Share My Personal Information</p>
          <p>Ad Choices</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex px-2 py-3 border border-white text-white/60">
          <p>Service Code</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-white/60 mt-8">
          <p>© 2022 Netflix, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
