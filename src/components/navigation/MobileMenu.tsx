// MobileMenu Component

import { NavItem } from "./NavItem";

interface MobileMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen, className }) => {
    if (!isMenuOpen) return null;

    const navClass = `lg:hidden block absolute top-16 w-full left-0 right-0 z-20 bg-white ${className || ''}`;
    
    return (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-10 z-10" onClick={() => setIsMenuOpen(false)}></div>
        <nav className={navClass}>
            <ul className="text-center text-md font-medium">
                <NavItem href="/" 
                         onClick={() => setIsMenuOpen(false)}
                         className="mb-1 mt-1 pb-1 pt-1">Home
                </NavItem>
                <NavItem href="/character-generator"
                         onClick={() => setIsMenuOpen(false)}
                         className="mb-1 mt-1 pb-1 pt-1">Character Generator
                </NavItem>
                <NavItem href="/initiative-tracker"
                         onClick={() => setIsMenuOpen(false)}
                         className="mb-1 mt-1 pb-1 pt-1">Initiative Tracker
                </NavItem>
            </ul>
        </nav>
        </>
    );
};