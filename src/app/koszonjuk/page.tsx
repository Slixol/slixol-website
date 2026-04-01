import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Köszönjük - Slixol",
  description: "Köszönjük a megkeresést! Hamarosan felvesszük veled a kapcsolatot.",
};

export default function KoszonjukPage() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-6 text-center">
      <Image
        src="/logos/slixol-x-magenta.png"
        alt="Slixol"
        width={64}
        height={64}
        className="mb-8"
      />
      <h1 className="font-safiro text-3xl md:text-5xl text-white mb-4">
        Köszönjük!
      </h1>
      <p className="text-light-gray text-base md:text-lg mb-3 max-w-lg">
        Megkaptuk az üzeneted. Csapatunk hamarosan felveszi veled a kapcsolatot.
      </p>
      <p className="text-gray text-sm mb-8">
        Általában 24 órán belül válaszolunk.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm border border-white/20 text-white hover:border-magenta hover:text-magenta bg-transparent transition-all duration-300"
      >
        Vissza a főoldalra
      </Link>
    </div>
  );
}
