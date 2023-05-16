import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetail,
} from "../styles/pages/product";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
  };
}

export default function Product({ product }: ProductProps) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={480}
        />
      </ImageContainer>
      <ProductDetail>
        <h1>{product.name}</h1>
        <span>$ {product.price}</span>
        <p>{product.description}</p>
        <button>Buy Now</button>
      </ProductDetail>
    </ProductContainer>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_Ntkz9GfFsCJul9" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const price = product.default_price as Stripe.Price;
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount! / 100,
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1,
  };
};
