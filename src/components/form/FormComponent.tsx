import React from 'react';
import {useForm} from "react-hook-form";

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
        mode: "all"
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
                        {...register('username', {
                            required: true,
                            pattern: {
                                value: /\w+/,
                                message: 'Wrong name',
                            },
                        })}
                    />
                </label>

                <label>
                    <div>{errors.password && <span>{errors.password.message}</span>}</div>

                    <input
                        type="text"
                        {...register('password', {
                            required: true,
                            minLength: {
                                value: 3,
                                message: 'Password too short'
                            },
                            maxLength: {
                                value: 10,
                                message: 'Password too long'
                            }
                        })}
                    />
                </label>

                <label>
                    <div>{errors.age && <span>{errors.age.message}</span>}</div>
                    <input type="number" {...register('age', {
                        required: true,
                        valueAsNumber: true,
                        min: {value: 3, message: 'age too small'},
                        max: {value: 117, message: 'age too long'}
                    })}
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