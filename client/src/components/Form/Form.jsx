import { useState } from "react";
import validator from './validation';
import styles from './Form.module.css';

const { div, form, styleLabel, input, styleButton, warning } = styles;


export default function Form({ login }) {
    const [userData, setUserData] = useState({
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({
        email:"",
        password:""
    });
    
    const handleChange = (e) => {
        setErrors(
            validator({
                ...userData,
                [e.target.name]: e.target.value
            })
        );
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    

    return (
    <div className={div}>
        <form className={form} onSubmit={()=>{login(userData)}}>
            <label>Email</label>
            <input
                type="text"
                name='email'
                placeholder='nombre@mail.com'
                onChange={handleChange}
                value={userData.email}
                className={errors.email && warning}
            />
            { errors.email ? <span className={warning}>{errors.email}</span>: undefined}
        
            <label>Password</label>
            <input
                type='password'
                name='password'
                placeholder='pass123'
                onChange={handleChange}
                value={userData.password}
                className={errors.password && warning}
            />
            { errors.password ? <span className={warning}>{errors.password}</span>: undefined}
            <button className={styleButton} type="submit">Submit</button>
        </form>
    </div>
    )
};
