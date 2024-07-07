import React, {FC, FormEvent, useState} from 'react';
import styles from './FormComponent.model.css'

type Props = {
    username: string;
    password: string;

}

const FormComponent: FC = () => {

    const [formState, setFormState] = useState<Props>({
        username: 'User name',
        password: 'password',
    })


    const handlerSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password,
        }
        console.log(user);
    };

    const handlerInputChange = (event: FormEvent<HTMLInputElement>) => {
        let input = event.target as HTMLInputElement;
        setFormState({
            ...formState,
            [input.name]: input.value,
        })
    };
    return (
        <div>
            <form className={styles.form} onSubmit={handlerSubmit}>
                <label>User:
                    <input
                        className={styles.labelForm}
                        type="text"
                        name={'username'}
                        value={formState.username}
                        onInput={handlerInputChange}
                    />
                </label>

                <label>Password:
                    <input
                        className={styles.labelForm}
                        type="text"
                        name={'password'}
                        value={formState.password}
                        onInput={handlerInputChange}
                    />
                </label>

                <button>Send</button>

            </form>
        </div>
    );
};

export default FormComponent;