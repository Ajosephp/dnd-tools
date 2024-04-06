// DesktopMenu Component

import { NavItem } from "./NavItem";

interface DesktopMenuProps {
    className?: string;
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ className }) => {
    const navClass = `lg:flex md:flex lg:flex-1 items-center justify-end hidden space-x-4 ${className || ''}`;

    return (
      <nav className={navClass}>
        <ul className="flex gap-8 text-sm font-medium">
          <NavItem href="/character-generator">Character Generator</NavItem>
          <NavItem href="/initiative-tracker">Initiative Tracker</NavItem>
        </ul>
      </nav>
    );
  };