import { Container } from "@/components/ui/container"
import Title from "@/components/ui/title"

export default function CharacterGeneratorLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <Title text="Character Generator" level={1} size="text-2xl" className="mb-4" alignment='text-center' />        
                <Container>
                    <section>{children}</section>
                </Container>  
        </>
    );
  }