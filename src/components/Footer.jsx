import React from "react";
import SocialLinks from "./SocialLinks";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-6 text-sm text-muted md:px-14">
      <p>Thanks for visiting. © {new Date().getFullYear()} Mia</p>
      <SocialLinks />
    </footer>
  );
};
