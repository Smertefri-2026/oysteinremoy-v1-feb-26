import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Target,
  Users,
  ClipboardList,
  Handshake,
  TrendingUp,
} from "lucide-react";

export type Talk = {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;      // f.eks. "45–60 min"
  audience: string;      // f.eks. "Ledere / team / HR"
  outcomes: string[];    // 3–7 konkrete takeaways
  agenda?: string[];     // valgfritt
  description: string;   // intro-tekst
  icon: LucideIcon;
};

export const TALKS: Talk[] = [
  {
    slug: "ledelse",
    title: "Det fins ikke dårlige ansatte – bare dårlige ledere",
    subtitle: "Trygghet, tydelighet og kultur som faktisk virker.",
    duration: "45–60 min",
    audience: "Ledere, mellomledere, HR og team",
    description:
      "Et energisk og praktisk foredrag om ledelse i hverdagen. Vi flytter fokus fra irettesettelse til utvikling: tydelige forventninger, trygghet i teamet og en kultur som gjør at folk tar ansvar.",
    outcomes: [
      "En enkel modell for forventningsavklaring (uten å bli «streng»)",
      "Hvordan skape psykologisk trygghet som gir bedre prestasjon",
      "Praktiske setninger du kan bruke i vanskelige samtaler",
      "Hvordan du forebygger friksjon og sykefravær med små grep",
    ],
    agenda: [
      "Hvorfor god ledelse ofte er for lite konkret",
      "Trygghet + tydelighet = ansvar",
      "3 grep som endrer kultur raskt",
      "Samtaler som bygger folk (ikke bryter dem ned)",
      "Oppsummering: din 14-dagers plan",
    ],
    icon: Users,
  },
  {
    slug: "nevrodiversitet",
    title: "Spekteret (med humor og varme)",
    subtitle: "Bedre samspill, mindre misforståelser – mer rom for styrker.",
    duration: "45–60 min",
    audience: "Team, ledere, HR og fagmiljø",
    description:
      "En ufarlig og nyttig prat om forskjeller: hvem er vi på jobb og hjemme – og hvorfor trigges vi ulikt? Målet er ikke diagnose, men forståelse og språk for samarbeid.",
    outcomes: [
      "Hvorfor misforståelser oppstår (og hvordan dere stopper dem)",
      "Hvordan lage tydelige avtaler som passer flere typer mennesker",
      "Hvordan styrker kan blomstre uten at det blir kaos",
      "Hva man kan si – og ikke si – for å skape trygghet",
    ],
    icon: Sparkles,
  },
  {
    slug: "salg",
    title: "Salgskurs som faktisk gir mersalg",
    subtitle: "Enkle rutiner, bedre oppfølging og mer gjentagende salg.",
    duration: "60–90 min (kan kortes ned)",
    audience: "Salgsteam, kundeservice, gründere og ledere",
    description:
      "Praktisk salg uten buzzwords: vinn kunden, skap gjentagende salg og bygg portefølje. Vi fokuserer på oppfølging og system – ikke press.",
    outcomes: [
      "Et konkret oppfølgingsløp (hva du gjør dag 1–7–14–30)",
      "Hvordan du øker konvertering uten å virke masete",
      "En CRM-minimalisme som faktisk blir brukt",
      "Enkle spørsmål som avdekker behov og budsjett",
    ],
    icon: TrendingUp,
  },
  {
    slug: "kapital",
    title: "Investor vs kunder",
    subtitle: "Kundene dine kan være din beste kapitalstrategi.",
    duration: "45–60 min",
    audience: "Gründere, ledere, prosjektansvarlige",
    description:
      "Hva om kundene dine er de beste investorene? Slik bruker du kundene til markedsanalyse, validering og forretningsplan – og bygger samarbeid/finansiering med de du faktisk skal levere til.",
    outcomes: [
      "Hvordan du validerer før du bruker penger",
      "Hvordan kundedata blir til pitch og plan",
      "Hva investorer faktisk ser etter (i praksis)",
      "Hvordan du bygger momentum uten store budsjetter",
    ],
    icon: Handshake,
  },
  {
    slug: "endring",
    title: "Endring er en prosess",
    subtitle: "Tydelig retning, små steg og målbar fremdrift.",
    duration: "45–60 min",
    audience: "Ledere, team, prosjektledere",
    description:
      "Endring må ledes – i ansatte, rutiner, kultur og kommersiell vekst. Du får en enkel metode med rytme og måling, så det faktisk blir gjort.",
    outcomes: [
      "En enkel «endringsrytme» som skaper framdrift",
      "Hvordan du unngår endringstretthet",
      "Hvordan du får med folk som er skeptiske",
      "Hvordan du måler små steg – uten å drukne i rapportering",
    ],
    icon: ClipboardList,
  },
  {
    slug: "posisjon",
    title: "Ta en posisjon i markedet",
    subtitle: "Bli valgt for noe – budskap, prioritering og synlighet som henger sammen.",
    duration: "45–60 min",
    audience: "Ledere, marked, gründere og fagansvarlige",
    description:
      "Bli valgt for noe. Vi bygger et tydelig budskap og en prioriteringsliste, så du tar plass i hodet på kunden med kvalitet, ikke støy.",
    outcomes: [
      "Hvordan du spisser budskapet på 15 minutter",
      "Hvordan du velger riktig kanal (og dropper resten)",
      "Hvordan du lager «bevis» som bygger tillit",
      "Hvordan du får synlighet uten å være overalt",
    ],
    icon: Target,
  },
];

export function getTalkBySlug(slug: string) {
  return TALKS.find((t) => t.slug === slug);
}