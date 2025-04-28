
import CountryDetails from "@/Components/CountryDetails";
import CountryList from "@/Components/CountryList";
import { Suspense } from "react";


export default function HomePageContent() {
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

const Home = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HomePageContent />
  </Suspense>
);