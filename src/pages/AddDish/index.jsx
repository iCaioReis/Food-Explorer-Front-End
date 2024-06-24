import { IoIosArrowBack } from "react-icons/io";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TextArea } from "../../components/TextArea";

import { Container, Content, Form, Ingredients } from "./styles";

export function AddDish() {
    return (
        <Container>
            <Header />

            <Content>

                <a href="" className="poppins_300_bold">
                    {<IoIosArrowBack />}
                    {"Voltar"}
                </a>

                <h1 className="poppins_400_medium">Adicionar Prato</h1>

                <Form>
                <div>
                    <Input placeholder="Selecione imagem" type="file" title="Imagem do prato"/>
                    <Input placeholder="Ex.: Salada Ceasar" title="Nome"/>
                    <Input placeholder="Refeição" title="Categoria"/>
                </div>

                <div>
                    <Ingredients>
                        <span>Alface</span>
                        <span>Alface</span>
                        <span>Alface</span>
                        <span>Alface</span>
                    </Ingredients>
                    <Input placeholder="R$ 00,00" title="Preço"/>
                </div>

                <TextArea
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    rows="5"
                />
                
                <Button title={"Salvar alterações"} type="subimit"/>
            </Form>

            </Content>

            <Footer />
        </Container>
    )
};