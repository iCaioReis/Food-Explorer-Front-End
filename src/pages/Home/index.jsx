import bannerImg from "../../assets/Banners/banner_img.png"

import { Container, Banner, SectionFood } from "./styles";

import { HorizontalMenu } from "../../components/HorizontalMenu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

export function Home(){
    const dishes = [
        { id: 2, name: "Prato 2" },
        { id: 3, name: "Prato 3" },
        { id: 4, name: "Prato 4" },
        { id: 5, name: "Prato 5" },
        { id: 6, name: "Prato 6" },
        { id: 7, name: "Prato 7" },
        { id: 8, name: "Prato 8" },
        // Adicione mais pratos conforme necessário
      ];

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
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </SectionFood>

            <HorizontalMenu items={dishes} itemsPerPage={4}/>

            <Footer/>
        </Container>
    );
}