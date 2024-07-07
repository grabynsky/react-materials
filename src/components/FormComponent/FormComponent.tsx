import React, {FC} from 'react';
import styles from './FormComponent.model.css'
import {useForm} from "react-hook-form";

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
                </label>

                <label>Password:
                    <input
                        className={styles.labelForm}
                        type="text"
                        {...register('password', {
                            required: true,
                            minLength: {value: 5, message: 'Must be long'}

                        })}
                    />
                    {
                        errors.password && <div>{errors.password.message}</div>
                    }
                </label>

                {
                    errors.age && <div>{errors.age.message}</div>
                }

                <label>Age:
                    <input
                        className={styles.labelForm}
                        type='number'
                        {...register('age', {
                            required: true,
                            valueAsNumber: true,
                            min: {value: 1, message: 'age too small'},
                            max: {value: 132, message: 'age too big'}
                        })}
                    />
                </label>

                <button disabled={!isValid}>Send</button>

            </form>
        </div>
    );
};

export default FormComponent;