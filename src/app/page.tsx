
import CountryDetails from "@/Components/CountryDetails";
import CountryList from "@/Components/CountryList";


export default function Home() {
  return (
    <>
    <div className="country_block">
      <aside >
        <CountryList />
      </aside>
      <main >
        <CountryDetails />
      </main>
      </div>
    </>
  );
}
