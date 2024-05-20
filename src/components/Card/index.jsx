import { IoMdHeartEmpty } from "react-icons/io";

import { Button } from "../Button";

import { Container, Amount} from "./styles";

import foodImg from "../../assets/image_food.png"

export function Card({img: Img, title: Title, description: Description, price: Price}){

    return(
        <Container>
            
            <img src={foodImg} alt="" />
            {Img && <Img/>}
            
            <IoMdHeartEmpty size={36}/>

            {Title && <Title/>}

            <h1 className="poppins_300_bold">Spaguetti Gambe</h1>

            {Description && <Description/>}

            <p>Massa fresca com camarões e pesto. </p>

            {Price && <Price/>}

            <h2>R$ 79,97</h2>

            <div>
                <Amount>
                    <button>-</button>
                    <h2>01</h2>
                    <button>+</button>
                </Amount>

                <Button title={"incluir"}/>
            </div>
            

            

        </Container>
        
    )
}