import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/carinterface";
import {carService} from "../../services/carService";
import {ISetState} from "../../types/resType";

interface IProps{
    setTrigger: ISetState<boolean>
}

const CarForm: FC<IProps> = ({setTrigger}) => {
    const {register, handleSubmit, reset} = useForm<ICar>()

    const save: SubmitHandler<ICar> = async (car)=>{
        await carService.create(car)
        setTrigger(prevState => !prevState)
        reset()

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>

            <button>Save</button>
        </form>
    );
};

export default CarForm;