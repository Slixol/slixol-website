import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-6 text-center">
      <Image
        src="/logos/slixol-x-magenta.png"
        alt="Slixol"
        width={64}
        height={64}
        className="mb-8 opacity-60"
      />
      <h1 className="font-safiro text-5xl md:text-7xl text-white mb-4">404</h1>
      <p className="text-light-gray text-base md:text-lg mb-8 max-w-md">
        Ez az oldal nem található. Lehet, hogy elköltözött, vagy nem is létezett.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-magenta text-white hover:bg-magenta/80 transition-all duration-300"
      >
        Vissza a főoldalra
      </Link>
    </div>
  );
}
