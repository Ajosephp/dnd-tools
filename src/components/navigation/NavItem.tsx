// NavItem Component

import Link from 'next/link';

interface NavItemProps {
    href: string;
    onClick?: () => void; // Optional onClick function
    className?: string;
    children: React.ReactNode;
  }

export const NavItem: React.FC<NavItemProps> = ({ href, onClick, className, children }) => {
    return (
      <li className={`transition-colors hover:underline ${className || ''}`}
          onClick={onClick}>
        <Link href={href}>
            {children}
        </Link>
      </li>
    );
};