// Header Component
'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { DesktopMenu } from "../DesktopMenu";
import { ModeToggle } from "@/components/ui/mode-toggle";


interface HeaderProps {
    // Props definition here
  }
  
  export const Header: React.FC<HeaderProps> = () => {
// Set the initial width to False - we will check this below
const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Now safe to use window because this runs client-side
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    // Initial check when component mounts
    handleResize();
    // Setup event listener for subsequent resizes
    window.addEventListener('resize', handleResize);
    // Cleanup to remove the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

return (
  <header className="h-16 flex items-center justify-between px-4 mb-8 border-b lg:px-8 lg:mb-12">
    <div className="flex items-center flex-1">
      <Link className="text-xl font-semibold" href="/">
        DnD Tools
      </Link>
    </div>

    {/* Conditionally render based on viewport size */}
    {isMobileView ? <MobileMenu /> : <DesktopMenu />}
    
    <ModeToggle />
  </header>
);
};