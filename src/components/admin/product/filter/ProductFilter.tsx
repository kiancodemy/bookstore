import LanguageFilter from "./filterItems/LanguageFilter";
import PriceFilter from "./filterItems/PriceFilter";
import PublicationYear from "./filterItems/publicationYear";
import Activity from "./filterItems/Activity";
import Availability from "./filterItems/Avalibility";
import PageNumber from "./filterItems/PageNumber";

export default function ProductFilter() {
  


  return (
    <div className="flex flex-col gap-y-6 p-2 bg-background rounded-md">
      <LanguageFilter></LanguageFilter>
      <PriceFilter></PriceFilter>
      <PublicationYear></PublicationYear>
      <Activity></Activity>
      <Availability></Availability>
      <PageNumber></PageNumber>
    </div>
  );
}
