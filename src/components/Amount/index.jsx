import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";

export function Amount() {
    return (
        <Container>
            <button><FiMinus size={20} /></button>
            <h2>01</h2>
            <button><FiPlus size={20} /></button>
        </Container>
    )
}