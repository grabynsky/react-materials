import React, {FC} from 'react';
import styles from './FormComponent.model.css'
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../../validators/user.validator";

type Props = {
    username: string;
    password: string;
    age:number;
}

const FormComponent: FC = () => {

    let {formState: {errors, isValid},
        register ,
        handleSubmit
    } = useForm<Props>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    })

    const formSubmitCustomHandler = (data:Props) => {
            console.log(data)

    };
    return (
        <div>

            <form
                className={styles.form}
                onSubmit={handleSubmit(formSubmitCustomHandler)}
            >
                <label>User:
                    <input
                        className={styles.labelForm}
                        type="text"
                        {...register('username')}
                    />
                    {
                        errors.username && <div>{errors.username?.message}</div>
                    }
                </label>

                <label>Password:
                    <input
                        className={styles.labelForm}
                        type="text"
                        {...register('password')}
                    />
                    {
                        errors.password && <div>{errors.password?.message}</div>
                    }
                </label>

                {
                    errors.age && <div>{errors.age?.message}</div>
                }

                <label>Age:
                    <input
                        className={styles.labelForm}
                        type='number'
                        {...register('age')}
                    />
                </label>

                <button disabled={!isValid}>Send</button>

            </form>
        </div>
    );
};

export default FormComponent;