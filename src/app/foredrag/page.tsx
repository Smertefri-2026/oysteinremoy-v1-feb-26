import Page from "@/components/layout/Page";

import Seksjon1Hero from "./seksjon/Seksjon1Hero";
import Seksjon2Ledelse from "./seksjon/Seksjon2Ledelse";
import Seksjon3Spekteret from "./seksjon/Seksjon3Spekteret";
import Seksjon4Salg from "./seksjon/Seksjon4Salg";
import Seksjon5Investor from "./seksjon/Seksjon5Investor";
import Seksjon6Endring from "./seksjon/Seksjon6Endring";
import Seksjon7Posisjon from "./seksjon/Seksjon7Posisjon";
import Seksjon8Kontakt from "./seksjon/Seksjon8Kontakt";

export default function ForedragPage() {
  return (
    <Page
     
    >
    <div className="flex flex-col gap-16">
        <Seksjon1Hero />
        <Seksjon2Ledelse />
        <Seksjon3Spekteret />
        <Seksjon4Salg />
        <Seksjon5Investor />
        <Seksjon6Endring />
        <Seksjon7Posisjon />
        <Seksjon8Kontakt />
      </div>
    </Page>
  );
}