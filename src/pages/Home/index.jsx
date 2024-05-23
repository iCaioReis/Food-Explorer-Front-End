import bannerImg from "../../assets/Banners/banner_img.png"

import { Container, Banner, SectionFood } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card"

export function Home(){
    return(
        <Container>
            <Header/>
            <Banner>
                <img src={bannerImg} alt="" />
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </Banner>

            <SectionFood>
                <Card/>
            </SectionFood>

            <Footer/>
        </Container>
    );
}