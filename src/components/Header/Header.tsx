import Link from "next/link"

interface HeaderProps {
    // Props definition if needed
  }
  
  export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex items-center h-14 px-4 border-b gap-4 w-full md:px-6 mb-6">

      <Link className="flex items-center gap-2 font-semibold" href="/">
        DnD Tools
      </Link>
      <nav className="ml-auto flex items-center space-x-4">
        <Link className="text-sm font-medium transition-colors hover:underline" href="/character-generator">
          Character Generator
        </Link>
      </nav>

    </header>
  )
};

