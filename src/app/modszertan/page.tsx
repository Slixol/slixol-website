import { buildMetadata } from "@/app/lib/seoRoutes";
import SectionPage from "@/app/components/SectionPage";

export const metadata = buildMetadata("modszertan");

export default function Page() {
  return <SectionPage slug="modszertan" />;
}
