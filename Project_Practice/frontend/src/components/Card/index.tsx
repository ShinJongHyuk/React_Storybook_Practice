'use client'
import React from "react";
import { CardBody, CardTitle, CardImg, CardSale, CardContent } from "./Card.styled";

const Card = (props:any) => {
    return (
        <CardBody {...props}>
            <CardContent {...props}>
            <CardImg src={props.src}/>
            </CardContent>
            <CardSale>50%</CardSale>

            <CardTitle>
                {props.title}
            </CardTitle>
        </CardBody>
    )
}

export default Card