import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Button, Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <Image src="/logo.svg" width={77} height={73} />
        <Image src="/name.svg" width={174} height={34} />
      </header>
      <nav>
        <Link href="#product">Nosso Produto</Link>
        <Link href="#why-us">Por que nos escolher</Link>
        <Link href="#comments">Nossos Clientes</Link>
      </nav>
      <Button>Use agora</Button>
    </Container>
  );
};

export default Header;
