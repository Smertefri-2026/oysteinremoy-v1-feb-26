// src/app/om/page.tsx
import type { Metadata } from "next";
import Page from "@/components/layout/Page";

import Seksjon1Hero from "./seksjon/Seksjon1Hero";
import Seksjon2Bakgrunn from "./seksjon/Seksjon2Bakgrunn";
import Seksjon3Erfaring from "./seksjon/Seksjon3Erfaring";
import Seksjon4Bygger from "./seksjon/Seksjon4Bygger";
import Seksjon5Mennesker from "./seksjon/Seksjon5Mennesker";
import Seksjon6Stil from "./seksjon/Seksjon6Stil";
import Seksjon7Kontakt from "./seksjon/Seksjon7Kontakt";



export default function OmPage() {
  return (
    <Page
     
    >
      <div className="grid gap-14">
        <Seksjon1Hero />
        <Seksjon2Bakgrunn />
        <Seksjon3Erfaring />
        <Seksjon4Bygger />
        <Seksjon5Mennesker />
        <Seksjon6Stil />
        <Seksjon7Kontakt />
      </div>
    </Page>
  );
}