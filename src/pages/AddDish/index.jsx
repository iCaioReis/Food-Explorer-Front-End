import { IoIosArrowBack } from "react-icons/io";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TextArea } from "../../components/TextArea";

import { Container } from "./styles";


export function AddDish(){
    return(
        <Container>
            <Header/>

            <a href="" className="poppins_300_bold">
                {<IoIosArrowBack />}
                {"Voltar"}
            </a>

            <div>
                <Input placeholder="Selecione imagem" type="file"/>
                <Input placeholder="Ex.: Salada Ceasar"/>
                <Input placeholder="Refeição"/>
            </div>

            <div>
                <Input placeholder="R$ 00,00"/>
            </div>

            <TextArea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                rows="4"
            />
            

            <Footer/>
        </Container>
    )
};