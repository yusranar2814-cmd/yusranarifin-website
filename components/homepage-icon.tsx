type HomepageIconName = "marketing" | "business" | "product" | "technology";

const paths: Record<HomepageIconName, string> = {
  marketing: "M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13",
  business: "M4 19V9h5v10H4Zm7 0V4h5v15h-5Zm7 0v-6h-2v6h2Z",
  product: "M5 5h14v14H5zM8 9h8M8 13h5",
  technology: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z",
};

export function HomepageIcon({ name }: { name: HomepageIconName }) {
  return (
    <svg aria-hidden="true" className="size-6 text-[color:var(--color-green)]" fill="none" viewBox="0 0 24 24">
      <path d={paths[name]} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}
