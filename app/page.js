import { Navbar, Footer } from "../Components";
import { Hero, About, Technology, Client } from "../sections";

const Page = () => (
  <div className="overflow-hidden bg-[#EEF5FF]">
    <Navbar />
    <Hero />
    <About />
    <Technology />
    <Client />
    {/* <Footer /> */}
  </div>
);

export default Page;
