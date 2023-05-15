import Image from "next/image";
import { HomeContainer, Product } from "./styles/pages/home";

import camiseta1 from "../pages/assets/Camisa-Maratona 1.png";
import camiseta2 from "../pages/assets/IgniteLab-T-shirt 1.png";
import camiseta3 from "../pages/assets/Igniter-abord-2-t-shirt 1.png";
import camiseta4 from "../pages/assets/Variant6.png";
export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>$ 39.99</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>$ 59.99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
