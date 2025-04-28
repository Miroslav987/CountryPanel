
import CountryDetails from "@/Components/CountryDetails";
import CountryList from "@/Components/CountryList";
import { Suspense } from "react";


export default function HomePageContent() {
  return (
    <>
    <div className="country_block">
      <aside >
      <Suspense fallback={<div>Loading country list...</div>}>
        <CountryList />
        </Suspense>
      </aside>
      <main >
      <Suspense fallback={<div>Loading deatil country...</div>}>
        <CountryDetails />
      </Suspense>
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