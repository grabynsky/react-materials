import React, {FormEvent, useState} from 'react';

interface IFormType {
    username: string,
    password: string,
}

const FormComponent = () => {
    const [formState, setFormState] = useState<IFormType>({
        username: '',
        password: '',
    })

// ---------------------------------------------
//     const handlerUserName = (e: FormEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         const input = e.target as HTMLInputElement;
//         setFormState({...formState, username: input.value});
//         console.log(input.value)
//     };

    // ---------------------------------------------
    // const handlerPasswordName = (e: FormEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, password: input.value});
    //     console.log(input.value)
    // };
    // --------------------------------------------

    const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password,
        }
        console.log(user)
    };

    // ------------------------------------------------


    const handlerInputName = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        const input = e.target as HTMLInputElement;
        console.log(input.name)

        setFormState({...formState, [input.name]: input.value})

    };
    return (
        <main>
            <form onSubmit={handlerSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handlerInputName}/>
                <input type="text" name={'password'} value={formState.password} onChange={handlerInputName}/>

                <button>submit</button>
            </form>
        </main>
    );
};

export default FormComponent;