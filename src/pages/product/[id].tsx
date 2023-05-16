import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetail,
} from "../styles/pages/product";

const Product = () => {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer>w</ImageContainer>
      <ProductDetail>
        <h1>Camiset x</h1>
        <span>$ 79,9</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          perferendis hic distinctio molestias recusandae atque impedit nulla
          qui ex consequuntur, odio minus, alias, nobis animi delectus ipsum aut
          porro non?
        </p>
        <button>Buy Now</button>
      </ProductDetail>
    </ProductContainer>
  );
};

export default Product;
