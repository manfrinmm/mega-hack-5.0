import Image from "next/image";
import React from "react";

import { Container, Content, Options } from "./styles";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <section>
          <img src="/logo.svg" alt="nome do nosso app" />
          <Image src="/name-white.svg" width={193} height={43} />
        </section>
        <Options>
          <section>
            <div>
              <FaFacebookSquare size={24} />
              <p>Facebook</p>
            </div>
            <div>
              <FaTwitterSquare size={24} />
              <p>Twitter</p>
            </div>
          </section>

          <section>
            <div>
              <FaGithubSquare size={24} />
              <p>Github</p>
            </div>
            <div>
              <FaLinkedin size={24} />
              <p>LinkedIn</p>
            </div>
          </section>
        </Options>
      </Content>
    </Container>
  );
};

export default Footer;
