// Header Component
'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavMenuIcon } from "../NavMenuIcon";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { DesktopMenu } from "../DesktopMenu";
import { ModeToggle } from "@/components/ui/mode-toggle";


interface HeaderProps {
    // Props definition here
  }
  
  export const Header: React.FC<HeaderProps> = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
      const checkIsMobileView = () => window.innerWidth < 768;
      setIsMobileView(checkIsMobileView());
      
      // Listen to window resize events
      window.addEventListener('resize', () => setIsMobileView(checkIsMobileView()));
      return () => window.removeEventListener('resize', () => setIsMobileView(checkIsMobileView()));
    }, []);

  return (
    <header className="h-16 flex items-center justify-between px-4 mb-8 border-b lg:px-8 lg:mb-12">

      <div className="flex items-center flex-1">
      <Link className="text-xl font-semibold" href="/">
        DnD Tools
      </Link>
      </div>

      <NavMenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Conditionally render based on viewport size */}
      {isMobileView ? 
        (isMenuOpen && <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />) :
          <DesktopMenu />}
      
      <ModeToggle />
    </header>
  )
};

