import { buildMetadata } from "@/app/lib/seoRoutes";
import SectionPage from "@/app/components/SectionPage";

export const metadata = buildMetadata("gyik");

export default function Page() {
  return <SectionPage slug="gyik" />;
}
