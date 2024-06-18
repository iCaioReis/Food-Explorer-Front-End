import { Container, Content } from "./styles";
import React, { useState } from "react";
import { Card } from "../Card";

import { GrPrevious, GrNext } from "react-icons/gr";

import foodImg from "../../assets/image_food.png"

export function HorizontalMenu({ items, title, ...rest }) {
    const itemsPerPage = 4;
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex + itemsPerPage < items.length) {
            setCurrentIndex(currentIndex + 1);
        }
        console.log(currentIndex)
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            console.log(currentIndex)
        }
    };

    const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

    return ( 
        <Container>
            <Content>
                <h1 className="poppins_400_medium">{title}</h1>

                <div className="gradient-left"/>
                <div className="gradient-right"/>
                
                <button className="nav-button-prev" onClick={handlePrev} disabled={currentIndex === 0}>
                    <GrPrevious size={40}/>
                </button>

                <div className="menu">
                    {
                        visibleItems.map(dish => {
                            return(
                                <Card
                                    name={dish.dish.name}
                                    description={dish.dish.description}
                                    price={dish.dish.price}
                                />
                            )
                        })
                    }
                </div>
                
                <button className="nav-button-next" onClick={handleNext} disabled={currentIndex + itemsPerPage >= items.length}>
                <GrNext size={40}/>
                </button>
            </Content>
        </Container>
    );

}