import React, { useEffect, useRef, useState } from 'react';
import authCSS from '../../styles/auth.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const SignUp = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();

    const [showHome, setShowHome] = useState(false);
    const [show, setShow] = useState(false);
    const localSignUp = localStorage.getItem("signUp");
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    const localName = localStorage.getItem("name");

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
            window.location.reload();
        }
    };

    return (
        <section className={authCSS.form_section}>
        <div className={authCSS.form_container}>
            <article className={authCSS.form_article}>
                <h1>Register</h1>
            </article>
            <form >
                <div className={authCSS.form_input}>
                    <TextField
                        id="standard-search"
                        label="Enter email"
                        type="search"
                        variant="standard"
                        ref={email}
                        fullWidth
                    />
                </div>
                <br />
                <div className={authCSS.form_input}>
                    <TextField
                        id="standard-search"
                        label="Enter Name"
                        type="search"
                        variant="standard"
                        ref={name}
                        fullWidth
                    />
                </div>
                <br/>
                <div className={authCSS.form_input}>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        ref={password}
                        fullWidth
                    />
                </div>

                
                <br />

                <div className={authCSS.button_container}>
                  
                    <Button type="submit" variant="outlined" onClick={handleClick}>REGISTER</Button>
                </div>
                
            </form>
        </div>
    </section>
    );
};

export default SignUp;



<div>
<form>
    <div className="form-group">
        <label htmlFor="exampleInputName">Name</label>
        <input type="text" className="form-control" id="exampleInputName" placeholder="Enter name" ref={name} />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" ref={email} />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={password} />
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
</div>


