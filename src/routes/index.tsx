import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Página" },
      { name: "description", content: "Página preta vazia — em construção." },
      { property: "og:title", content: "Nova Página" },
      { property: "og:description", content: "Página preta vazia — em construção." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#000000" }}
    />
  );
}
