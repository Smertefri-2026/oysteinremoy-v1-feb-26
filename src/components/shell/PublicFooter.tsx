import Container from "@/components/ui/Container";

export default function PublicFooter({
  name = "Øystein Remøy",
}: {
  name?: string;
}) {
  return (
    <footer className="mt-16">
      {/* Gradient “brand footer” */}
      <div className="bg-linear-to-r from-[#003366] to-[#005F56]">
        <Container className="py-10">
          <div className="flex flex-col gap-3">
            {/* Top row */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-white/95">
                <div className="text-sm font-semibold">
                  © {new Date().getFullYear()} {name}
                </div>
                <div className="mt-1 text-xs text-white/75">
                </div>
              </div>

              {/* Mini badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90">
                <span className="h-2 w-2 rounded-full bg-white/80" />
                (C) Remøy Ventures AS
              </div>
            </div>

            {/* Bottom divider + links */}
            <div className="mt-2 border-t border-white/15 pt-4">
              <div className="flex flex-col gap-2 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  <a className="hover:text-white transition" href="/personvern">
                    Personvern
                  </a>
                  <a className="hover:text-white transition" href="/kontakt">
                    Kontakt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}