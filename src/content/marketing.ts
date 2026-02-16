// src/content/marketing.ts
export type MarketingCase = {
  title: string;
  industry: string;
  situation: string;
  approach: string[];
  results: string[];
  note?: string;
};

export const marketingCases: MarketingCase[] = [
  {
    title: "Vekst etter tap av stor kunde",
    industry: "Dagligvare / produksjon (bransje)",
    situation:
      "Selskapet opplevde et stort omsetningsfall etter at en sentral salgskanal forsvant. Målet var å hente inn tapet gjennom nye kanaler og en mer direkte salgsmodell.",
    approach: [
      "Ny posisjonering og tydelig budskap i markedet",
      "Oppsett av struktur for kampanjer og lead-flyt",
      "Tiltak for morgenlevering / direkte salg og bedre distribusjonslogikk",
      "Løpende optimalisering basert på data",
    ],
    results: [
      "Sterk vekst over tid",
      "Omsetning økte fra ca. 250 MNOK til ca. 500 MNOK årlig (omtrent dobbling)",
    ],
    note:
      "Formulert generelt av hensyn til konfidensialitet. Mer detaljer kan deles i dialog.",
  },
  {
    title: "Nettsted som konverterer bedre",
    industry: "Tjenestebedrift (bransje)",
    situation:
      "Mye trafikk, men få henvendelser. Behov for tydeligere struktur, tilbud og CTA.",
    approach: [
      "Ny informasjonsarkitektur (hva – for hvem – hvorfor nå)",
      "Landingssider per tjeneste og målgruppe",
      "Forenklet kontaktflyt og færre friksjonspunkter",
    ],
    results: [
      "Flere kvalifiserte henvendelser",
      "Bedre kvalitet i leads og tydeligere forventningsstyring",
    ],
  },
];

export const nettløsningerPackages = [
  {
    title: "Nettsted (Proff)",
    bullets: [
      "Strategi + struktur (IA) + tekstforslag",
      "Design som matcher målgruppen",
      "Teknisk SEO-baseline (title/desc, hastighet, sitemap)",
      "Kontaktflyt som faktisk konverterer",
    ],
  },
  {
    title: "Landing pages (Kampanje)",
    bullets: [
      "1–5 landingssider per målgruppe",
      "A/B-tanker (overskrift, CTA, bevis)",
      "Måling: events og konverteringspunkter",
      "Klar plan for forbedring etter lansering",
    ],
  },
  {
    title: "Rebuild / Redesign",
    bullets: [
      "Rydding i budskap og innhold",
      "Ny meny- og side-struktur",
      "Bedre mobilopplevelse",
      "Migrering som tar hensyn til SEO",
    ],
  },
] as const;

export const processSteps = [
  {
    title: "1) Avklar mål og tilbud",
    text: "Hva selger du, til hvem, og hva er den ene handlingen du vil at folk skal ta?",
  },
  {
    title: "2) Struktur og budskap",
    text: "Vi lager en enkel, logisk reise: problem → løsning → bevis → CTA.",
  },
  {
    title: "3) Bygg og lanser",
    text: "Rask og ryddig levering. Mobil først. Teknisk SEO på plass.",
  },
  {
    title: "4) Optimaliser",
    text: "Mål, lær og forbedre. Små endringer kan gi stor effekt.",
  },
] as const;

export const nettløsningerFAQ = [
  {
    q: "Hva slags løsninger bygger du?",
    a: "Alt fra enkle landingssider til større nettsteder med mange undersider. Jeg kan også levere nettbutikk og app/portal (se egne sider).",
  },
  {
    q: "Hvilket system bruker du?",
    a: "Jeg kan jobbe i WordPress/Elementor eller bygge moderne løsninger i Next.js. Valget avhenger av budsjett, behov og hvor mye dere vil eie og kontrollere.",
  },
  {
    q: "Hvor lang tid tar det?",
    a: "En enkel side kan gå raskt. Større prosjekter tar lengre tid. Jeg jobber gjerne i tydelige sprint-leveranser så dere ser fremdrift tidlig.",
  },
  {
    q: "Kan du skrive tekst også?",
    a: "Ja – jeg kan hjelpe med struktur, overskrifter og tekstforslag som treffer målgruppen og gjør det enklere å konvertere.",
  },
  {
    q: "Jobber du med SEO?",
    a: "Ja, jeg legger alltid en teknisk SEO-baseline. Videre SEO/innhold er ofte en egen løpende innsats.",
  },
];