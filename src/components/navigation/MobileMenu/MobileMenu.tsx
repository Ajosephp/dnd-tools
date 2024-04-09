// MobileMenu Component
import styles from './MobileMenu.module.css';
import { NavItem } from "../NavItem";

interface MobileMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen, className }) => {
    if (!isMenuOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-10" onClick={() => setIsMenuOpen(false)}></div>
            {/* Tailwind's dark mode prefix will handle the theme switching */}
            <nav className={styles.nav}>
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