import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaFacebookF } from "react-icons/fa";

const IconsLink: React.FC = () => {
  return (
    <div className="flex text-white items-center gap-[30px]">
      
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/abdoahmed-salem-6bb12424a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="text-[24px]" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/01070889446"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-[26px]" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61574886497180&sk=photos"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF className="text-[24px]" />
      </a>

    </div>
  );
};

export default IconsLink;