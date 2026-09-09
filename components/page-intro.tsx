import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function PageIntro({ title }: { title: string }) {
  return (
    <Section>
      <Heading as="h1" className="max-w-3xl text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
        {title}
      </Heading>
    </Section>
  );
}
