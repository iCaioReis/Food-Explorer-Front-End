import { IoMdHeartEmpty } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";

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

            <p className="roboto_smaller_regular">Massa fresca com camarões e pesto. </p>

            {Price && <Price/>}

            <h2 className="roboto_biggest_regular">R$ 79,97</h2>

            <div>
                <Amount>
                    <button><FiMinus size={20}/></button>
                    <h2>01</h2>
                    <button><FiPlus size={20}/></button>
                </Amount>

                <Button title={"incluir"}/>
            </div>
            

            

        </Container>
        
    )
}