import { Link } from "react-router-dom"

import { IoMdHeartEmpty } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";

import { Button } from "../Button";

import { Container, Amount} from "./styles";

import foodImg from "../../assets/image_food.png"

export function Card(props){

    return(
        
        <Container>
            <img src={foodImg} alt="" />
            
            <IoMdHeartEmpty size={36}/>

            <h1 className="poppins_300_bold">{props.name}</h1>

            <p className="roboto_smaller_regular">{props.description}</p>

            <h2 className="roboto_biggest_regular">{props.price}</h2>

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