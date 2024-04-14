import { Navbar, Footer } from "../Components";
import { Hero, About, Technology } from "../sections";

const Page = () => (
  <div className="overflow-hidden bg-[#EEF5FF]">
    <Navbar />
    <Hero />
    <About />
    <Technology />
    {/* <Footer /> */}
  </div>
);

export default Page;
