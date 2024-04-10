// MobileMenu Component
import styles from './MobileMenu.module.css';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';

interface MobileMenuProps {
    className?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {

return (
    <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <button className="mr-4">Menu</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={styles.dropdownMenu}>
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* Wrap the DropdownMenuItem content with Link */}
                <DropdownMenuItem asChild>
                    <Link href="/" passHref>
                        Home
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/character-generator" passHref>
                        Character Generator
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/initiative-tracker" passHref>
                        Initiative Tracker
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
    </DropdownMenu>
    );
};
//     return (
//         <>
//             <div className="fixed inset-0 z-10" onClick={() => setIsMenuOpen(false)}></div>
//             {/* Tailwind's dark mode prefix will handle the theme switching */}
//             <nav className={styles.nav}>
//             <ul className="text-center text-md font-medium">
//                 <NavItem href="/" 
//                          onClick={() => setIsMenuOpen(false)}
//                          className="mb-1 mt-1 pb-1 pt-1">Home
//                 </NavItem>
//                 <NavItem href="/character-generator"
//                          onClick={() => setIsMenuOpen(false)}
//                          className="mb-1 mt-1 pb-1 pt-1">Character Generator
//                 </NavItem>
//                 <NavItem href="/initiative-tracker"
//                          onClick={() => setIsMenuOpen(false)}
//                          className="mb-1 mt-1 pb-1 pt-1">Initiative Tracker
//                 </NavItem>
//             </ul>
//         </nav>
//         </>
//     );
// };