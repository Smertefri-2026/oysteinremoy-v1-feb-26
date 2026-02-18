// src/app/kurs/seksjon/Seksjon6Nettbutikk.tsx
import FeatureSplit from "./FeatureSplit";
import { ShoppingCart } from "lucide-react";

export default function Seksjon6Nettbutikk() {
  return (
    <FeatureSplit
      badge="Kurs 5"
      title="Nettbutikk som selger – ikke bare viser produkter"
      description="Praktisk forbedring av produktsider, checkout og flyt. Passer både Shopify og custom."
      bullets={[
        "Produktside: bevis, friksjon, FAQ og trygghet",
        "Checkout: færre steg, mindre tvil, høyere kjøp",
        "E-postflyt: velkomst, abandoned cart, gjørekjøp",
      ]}
      Icon={ShoppingCart}
      imageSrc="/kurs/nettbutikk.jpg"
      imageAlt="Nettbutikk og konvertering"
    />
  );
}