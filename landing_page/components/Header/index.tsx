import React, { useCallback } from "react";

import Link from "next/link";
import Image from "next/image";
import { Button, Container } from "./styles";

const Header: React.FC = () => {
  const handlePageToApp = useCallback(() => {
    window.open("http://app.star-money.devmatheus.com/");
  }, []);

  return (
    <Container>
      <header>
        <Image src="/logo.svg" width={77} height={73} />
        <Image src="/name.svg" width={174} height={34} />
      </header>
      <nav>
        <div>
          <Link href="#product">Nosso Produto</Link>
        </div>
        <div>
          <Link href="#why-us">Por que nos escolher</Link>
        </div>
        <div>
          <Link href="#comments">Nossos Clientes</Link>
        </div>
      </nav>
      <Button onClick={handlePageToApp}>Use agora</Button>
    </Container>
  );
};

export default Header;
