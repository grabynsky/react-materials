import React, {FC} from 'react';
import {ICar} from "../../interfaces/carinterface";

interface IProps {
    car: ICar
}
const Car: FC<IProps> = ({car}) => {
    const {id, year, price, brand}= car
    return (
        <div>
            <div>id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
        </div>
    );
};

export default Car;