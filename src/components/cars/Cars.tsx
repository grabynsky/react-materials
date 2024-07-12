import React, {FC, useEffect, useState} from 'react';
import {ICar} from "../../interfaces/carinterface";
import {carService} from "../../services/carService";
import Car from "../car/Car";

interface IProps{
    trigger: boolean
}

const Cars:FC<IProps> = ({trigger}) => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carService.getAll().then(({data})=> setCars(data))
    }, [trigger]);

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;