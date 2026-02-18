import FeatureSplit from "../seksjon/FeatureSplit";
import { Handshake } from "lucide-react";

export default function Seksjon5Investor() {
  return (
    <FeatureSplit
      badge="Foredrag 4"
      title="Investor vs kunder"
      description="Hva om kundene dine er de beste investorene? Du lærer hvordan du kan bruke kunder til validering, markedsanalyse og bedre beslutninger — og hvordan dette gjør deg mer attraktiv for investorer."
      bullets={[
        "Kunder som markedsanalyse: hva de faktisk betaler for",
        "Validering: fra idé → betalende kunde",
        "Bygg samarbeid/finansiering med de du skal levere til",
      ]}
      Icon={Handshake}
      imageSrc="/foredrag/investor.jpg"
      imageAlt="Kunder, validering og kapital"
            flip

    />
  );
}