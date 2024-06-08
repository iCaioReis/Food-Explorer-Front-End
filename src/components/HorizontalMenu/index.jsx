import { Container, Content } from "./styles";
import React, { useState } from "react";
import { Card } from "../Card";

import foodImg from "../../assets/image_food.png"

export function HorizontalMenu({ items, itemsPerPage = 4, title, ...rest }) {
    

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
                <h1>{title}</h1>

                <button className="nav-button" onClick={handlePrev} disabled={currentIndex === 0}>{"<"}</button>

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
                
                    {/*
                    {visibleItems.map((item, index) => (
                        <div key={index} className="menu-item">
                            {item.name}
                        </div>
                    ))}
                    */}
                </div>
                <button className="nav-button" onClick={handleNext} disabled={currentIndex + itemsPerPage >= items.length}>{">"}</button>
            </Content>
        </Container>
    );

}