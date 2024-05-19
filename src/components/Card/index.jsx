import { IoMdHeartEmpty } from "react-icons/io";

import { Button } from "../Button";

import { Container } from "./styles";


export function Card({img: Img, title: Title, description: Description, price: Price}){
    return(
        <Container>
            {Img && <Img/>}
            <IoMdHeartEmpty size={36}/>
            {Title && <Title/>}
            {Description && <Description/>}
            {Price && <Price/>}

            <button>-</button>
            <h2>01</h2>
            <button>+</button>

            <Button title={"incluir"}/>

        </Container>
        
    )
}