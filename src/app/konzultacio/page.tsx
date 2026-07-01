import { buildMetadata } from "@/app/lib/seoRoutes";
import SectionPage from "@/app/components/SectionPage";

export const metadata = buildMetadata("konzultacio");

export default function Page() {
  return <SectionPage slug="konzultacio" />;
}
