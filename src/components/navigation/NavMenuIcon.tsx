// NavMenuIcon component

interface NavMenuIconProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
  }
  
export const NavMenuIcon: React.FC<NavMenuIconProps> = ({ isMenuOpen, setIsMenuOpen, className }) => {
    return (
        <button className={`p-2 lg:hidden md:hidden ${className || ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="lg:hidden md:hidden">
                <svg className="w-6 h-6" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24" 
                     xmlns="http://www.w3.org/2000/svg"><path 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                     strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </div>
        </button>
    );
};