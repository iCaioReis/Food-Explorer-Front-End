import { IoIosArrowBack } from "react-icons/io";

import foodImg from "../../assets/image_food.png"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container, Content, Ingredients } from "./styles";

export function Dish() {
    return (
        <Container>
            <Header />
            <Content>
                <a href="" className="poppins_300_bold">
                    { <IoIosArrowBack/> }
                    {"Voltar"}
                </a>

                <div>
                    <img src={foodImg} alt="  " />

                    <div>
                        <h1 className="poppins_500_medium">Salada Ravanello</h1>
                        <p className="poppins_300_regular">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

                        <Ingredients>
                            <span className="poppins_100_medium">Alface</span>
                            <span className="poppins_100_medium">Cebola</span>
                            <span className="poppins_100_medium">Pão</span>
                        </Ingredients>
                    </div>
                </div>
            </Content>

            <Footer />
        </Container>
    )
}