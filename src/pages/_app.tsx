import type { AppProps } from "next/app";
import { globalStyles } from "./styles/global";
import logo from "../pages/assets/Logo.svg";
import { Container, Header } from "./styles/pages/app";
import Image from "next/image";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  console.log(logo);
  return (
    <Container>
      <Header>
        <Image src={logo} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
