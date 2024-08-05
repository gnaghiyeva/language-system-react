import React, { useEffect, useRef, useState } from 'react'
import authCSS from '../../styles/auth.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignIn = () => {
    const { t, i18n } = useTranslation();

    const email = useRef();
    const password = useRef();

    const [showHome, setShowHome] = useState(false)
    const [show, setShow] = useState(false)

    const localSignUp = localStorage.getItem("signUp")
    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")
    const navigate = useNavigate();
    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }

        if (localEmail) {
            setShow(true)
        }
    }, [localSignUp, localEmail])

    const handleSignIn = (e) => {
        e.preventDefault();
        const inputEmail = email.current.value;
        const inputPassword = password.current.value;
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
    
        if (inputEmail === storedEmail && inputPassword === storedPassword) {
            localStorage.setItem("isAdmin", "true");
            localStorage.setItem("loggedIn", "true"); // Giriş yapıldığını belirtir
            navigate('/admin');
        } else {
            alert("Please enter valid credentials.");
        }
    };
    

    return (
        <section className={authCSS.form_section}>
            <div className={authCSS.form_container}>
                <article className={authCSS.form_article}>
                    <h1>{t('Login')}</h1>
                </article>
                <form onSubmit={handleSignIn}>
                    <div className={authCSS.form_input}>
                        <TextField
                            id="standard-search"
                            label={t("Enter email")}
                            type="search"
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
                        <Button type="submit" variant="outlined">{t('Login')}</Button>
                    </div>
                    <div className={authCSS.signup_text}>
                        <Link to='/admin/register'>{t('or Sign Up')}</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignIn
