import FeatureSplit from "../seksjon/FeatureSplit";
import { ShoppingCart } from "lucide-react";

export default function Seksjon6Nettbutikk() {
  return (
    <FeatureSplit
      badge="Steg 5"
      title="Nettbutikk som selger – ikke bare viser produkter"
      description="Små grep i produktvisning og checkout kan gi stor effekt. Vi optimaliserer flyten så flere fullfører kjøp – og flere kommer tilbake."
      bullets={[
        "Produkttekst som svarer på spørsmål og innvendinger",
        "Checkout: mindre friksjon, mer trygghet",
        "E-postflow: velkommen, abandoned cart, oppfølging",
      ]}
      Icon={ShoppingCart}
      imageSrc="/markedsforing/nettbutikk.jpg"
      imageAlt="Nettbutikk og konvertering"
    />
  );
}