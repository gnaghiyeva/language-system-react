import React, { useEffect, useRef, useState } from 'react';
import authCSS from '../../styles/auth.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const [showHome, setShowHome] = useState(false);
    const [show, setShow] = useState(false);
    const localSignUp = localStorage.getItem("signUp");
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    const localName = localStorage.getItem("name");

    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true);
        }

        if (localEmail) {
            setShow(true);
        }
    }, []);

    const handleClick = (event) => {
        event.preventDefault();
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("signUp", email.current.value);
            localStorage.setItem("isAdmin", "true");
            alert("Account created successfully!");
            // window.location.reload();
            navigate('/admin/login')
        }
    };

    return (
        <section className={authCSS.form_section}>
        <div className={authCSS.form_container}>
            <article className={authCSS.form_article}>
                <h1>{t('REGISTER')}</h1>
            </article>
            <form >
                
                <div className={authCSS.form_input}>
                    <TextField
                        id="standard-search"
                        label={t("Enter name")}
                        type="search"
                        variant="standard"
                        inputRef={name}
                        fullWidth
                    />
                </div>
                <br/>

                <div className={authCSS.form_input}>
                    <TextField
                        id="standard-search"
                        label={t("Enter email")}
                        type="text"
                        variant="standard"
                        inputRef={email}
                        fullWidth
                    />
                </div>
                <br />

                
                <div className={authCSS.form_input}>
                    <TextField
                        id="standard-password-input"
                        label={t("Enter Password")}
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        inputRef={password}
                        fullWidth
                    />
                </div>

                
                <br />

                <div className={authCSS.button_container}>
                    <Button type="submit" variant="outlined" onClick={handleClick}>{t('REGISTER')}</Button>
                </div>
                
            </form>
        </div>
    </section>
    );
};

export default SignUp;