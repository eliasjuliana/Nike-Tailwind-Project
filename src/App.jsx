import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";

import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b dark:bg-neutral-900  dark:text-white-400"><Hero/></section>
    <section className="padding  dark:bg-neutral-800 dark:text-white-400"><PopularProducts/></section>
    <section className="padding dark:bg-neutral-900 dark:text-white-400"><SuperQuality/></section>
    <section className="padding-x py-10 dark:bg-neutral-900 dark:text-white-400"><Services/></section>
    <section className="padding dark:bg-neutral-900 dark:text-white-400"><SpecialOffers/></section>
    <section className="bg-pale-blue padding dark:bg-neutral-900 dark:text-white-400"><CustomerReviews/></section>
    <section className="padding-x sm:py-32 py-16 w-full dark:bg-neutral-900 dark:text-white-400"><Subscribe/></section>
    <section className="bg-neutral-900 padding-x padding-t pb-8 dark:text-white-400"><Footer/></section>
  </main>

  
);

export default App;
