import Container from "@/components/ui/Container";

export default function PublicFooter({ name = "Site" }: { name?: string }) {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-8">
        <div className="flex flex-col gap-2 text-sm text-muted">
          <div>© {new Date().getFullYear()} {name}</div>
          <div className="text-xs">
            Bygget med samme UI-kjerne (tokens + komponenter) på tvers av prosjekter.
          </div>
        </div>
      </Container>
    </footer>
  );
}