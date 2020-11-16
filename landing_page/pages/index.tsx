import Head from "next/head";
import Image from "next/image";
import { useCallback } from "react";
import {
  Button,
  Comments,
  Container,
  Content,
  Product,
  WhyUs,
} from "../styles/pages/home";

export default function Home() {
  const handlePageToApp = useCallback(() => {
    window.open("http://app.star-money.devmatheus.com/");
  }, []);

  return (
    <Container>
      <Head>
        <title>Star Money</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Content>
        <Product id="product">
          <div>
            <h1>Olhando para sua empresa de um novo jeito</h1>
            <h2>Conheça uma nova forma de analisar sua empresa</h2>
          </div>

          <aside>
            <img src="/assets/app.svg" alt="app dashboard" />
          </aside>
        </Product>

        <WhyUs>
          <section id="why-us">
            <div>
              <h2>O que nós oferecemos</h2>
              <p>
                Com nossa aplicação, você será capaz não só de observar como
                está indo sua empresa, como também poderá ter uma idéia de como
                ela poderá estar futuramente.
              </p>

              <p>
                Também oferecemos um espaço com recomendações, de acordo com a
                área de atuação da empresa. Trazendo assim possíveis soluções
                para os pontos fracos, e ajudando a sua empresa a se manter
                forte e preparada.
              </p>
            </div>

            <aside>
              <Image src="/assets/screens.svg" width={750} height={525} />
            </aside>
          </section>

          <section id="why-us2">
            <div>
              <h2>Por que isso é interessante</h2>
              <p>
                Saber como a sua empresa está, ter balanços, previsões e ainda
                recomendações é uma poderosa forma de se prevenir de crises e
                conseguir planejar seus próximos passos, criando um cenário
                fértil para seu empreendimento crescer em grandes velocidades
              </p>
            </div>

            <aside>
              <img src="/assets/people.svg" alt="" />
              {/* <Image src="/assets/people.svg" width={390} height={680} /> */}
            </aside>
          </section>
        </WhyUs>

        <Comments id="comments">
          <h2>O que as pessoas pensam sobre isso</h2>
          <div>
            <p>
              Texto template apenas para mostrar como isso seria implementado na
              landing page. Esse parágrafo grande e logo, com várias marcações
              estão aqui puramente para teste e não estarão presentes na versão
              final
            </p>

            <img src="./assets/client1.svg" alt="nome do cliente" />
          </div>
          <div>
            <p>
              Texto template apenas para mostrar como isso seria implementado na
              landing page. Esse parágrafo pequeno não estará presente na versão
              final
            </p>

            <img src="./assets/client1.svg" alt="nome do cliente" />
          </div>
        </Comments>

        <div>
          <h2>Comece a usar o que há de mais promissor no mercado</h2>
          <Button onClick={handlePageToApp}>Use Agora</Button>
        </div>
      </Content>
    </Container>
  );
}
