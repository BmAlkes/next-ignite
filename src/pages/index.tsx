import Image from "next/image";
import { HomeContainer, Product } from "./styles/pages/home";
import { useKeenSlider } from "keen-slider/react";

import camiseta1 from "../pages/assets/Camisa-Maratona 1.png";
import camiseta2 from "../pages/assets/IgniteLab-T-shirt 1.png";
import camiseta3 from "../pages/assets/Igniter-abord-2-t-shirt 1.png";
import camiseta4 from "../pages/assets/Variant6.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>$ 39.99</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>$ 59.99</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>$ 59.99</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta4} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>$ 59.99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
