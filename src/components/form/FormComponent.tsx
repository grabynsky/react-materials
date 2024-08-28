import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "./validators/user.validator";
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";

interface IFormType {
    username: string,
    password: string,
    age: number,
}

const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormType>({
        mode: "all",
        resolver:joiResolver(userValidator)
    })

    const customHandler = (formdata: IFormType) => {
        console.log(formdata)
    };


    return (
        <main>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <div>{errors.username && <span>{errors.username.message}</span>}</div>

                    <input
                        type="text"
                        {...register('username')}
                    />
                </label>

                <label>
                    <div>{errors.password && <span>{errors.password.message}</span>}</div>

                    <input
                        type="text"
                        {...register('password')}
                    />
                </label>

                <label>
                    <div>{errors.age && <span>{errors.age.message}</span>}</div>
                    <input type="number" {...register('age')}
                    />
                </label>

                <div>
                    <button disabled={!isValid}>submit</button>
                </div>
            </form>
        </main>
    );
};

export default FormComponent;