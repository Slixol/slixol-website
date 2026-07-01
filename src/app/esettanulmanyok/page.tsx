import { buildMetadata } from "@/app/lib/seoRoutes";
import SectionPage from "@/app/components/SectionPage";

export const metadata = buildMetadata("esettanulmanyok");

export default function Page() {
  return <SectionPage slug="esettanulmanyok" />;
}
