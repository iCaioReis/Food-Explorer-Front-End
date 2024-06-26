import bannerImg from "../../assets/Banners/banner_img.png"

import { Container, Banner, SectionFood, Menus } from "./styles";

import { HorizontalMenu } from "../../components/HorizontalMenu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import foodImg from "../../assets/image_food.png"

export function Home() {
    const dishes = [
        {
            id: 2,
            dish:
            {
                name: "Prato 2",
                description: "Teste",
                price: 79.97,
                img: foodImg
            }
        },
        {
            id: 3,
            dish:
            {
                name: "Prato 3",
                description: "Teste",
                price: 79.97,
                img: foodImg
            }
        },
        {
            id: 4,
            dish:
            {
                name: "Prato 4",
                description: "Teste",
                price: 79.97,
                img: foodImg
            }
        },
        {
            id: 5,
            dish:
            {
                name: "Prato 5",
                description: "Teste",
                price: 79.97,
                img: foodImg
            }
        },
        {
            id: 6,
            dish:
            {
                name: "Prato 6",
                description: "Teste",
                price: 79.97,
                img: foodImg
            }
        },
        {
            id: 7,
            dish:
            {
                name: "Prato 7",
                description: "Teste",
                price: 79.97,
                img: foodImg
            }
        },
        {
            id: 8,
            dish:
            {
                name: "Prato 8",
                description: "Teste",
                price: 79.97,
                img: foodImg
            }
        },
        // Adicione mais pratos conforme necessário
    ];

    return (
        <Container>
            <Header />
            <Banner>
                <img src={bannerImg} alt="" />
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </Banner>

            <Menus >
                <HorizontalMenu items={dishes} title={"Refeições"}/>
                <HorizontalMenu items={dishes} title={"Sobremesas"}/>
                <HorizontalMenu items={dishes} title={"Bebidas"}/>
            </Menus>

            <Footer />
        </Container>
    );
}