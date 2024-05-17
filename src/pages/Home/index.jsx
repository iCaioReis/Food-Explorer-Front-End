import bannerImg from "../../assets/Banners/banner_img.png"

import { Container, Banner } from "./styles";

import { Header } from "../../components/Header";

export function Home(){
    return(
        <Container>
            <Header/>
            <Banner>
                <img src={bannerImg} alt="" />
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </Banner>
            <Banner>
                <img src={bannerImg} alt="" />
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </Banner>
            <Banner>
                <img src={bannerImg} alt="" />
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </Banner>
        </Container>
    );
}