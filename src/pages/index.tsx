import { Inter } from "next/font/google";
import { styled } from "./styles";

const inter = Inter({ subsets: ["latin"] });

const Button = styled("button", {
  backgroundColor: "$gray100",
  margin: "0px",
  border: "0px",
  padding: "1rem 2rem",
  borderRadius: 4,
  color: "white",
});
export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <Button>Hello</Button>
    </>
  );
}
