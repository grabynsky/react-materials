import React, {FC} from 'react';
import styles from './FormComponent.model.css'
import {useForm} from "react-hook-form";

type Props = {
    username: string;
    password: string;
    age:number;
}

const FormComponent: FC = () => {

    let {
        register ,
        handleSubmit
    } = useForm<Props>()

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
                        {...register('password')}
                    />
                </label>

                <label>Age:
                    <input
                        className={styles.labelForm}
                        type='number'
                        {...register('age')}
                    />
                </label>

                <button>Send</button>

            </form>
        </div>
    );
};

export default FormComponent;