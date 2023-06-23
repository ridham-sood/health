import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { doLogin, savingSession } from "../../Auth/Auth";
import "./login.css"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { BASE_URL } from '../../Auth/Auth';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
            await axios.post(`${BASE_URL}/api/member/login`, {
                email: email,
                password: password
            }).then((response) => {
                console.log(response);

                if (response.data.message === "Email Not Exists") {
                    alert("Email Not Exists");
                } else if (response.data.message === "Login Success") {
                    doLogin(response.data.message)
                    savingSession(response.data.sessionDTO)
                    navigate("/health")
                } else {
                    alert(response.data.message)
                }
            }, fail => { console.error(fail); }
            )

        } catch (error) {
            console.log(error);
        }
    }

    const ColorButton = styled(Button)(() => ({
        color: "#afc1de",
        backgroundColor: "#a35424",
        fontWeight: '700',
        borderRadius: '1px',
        fontSize: '20px',


        '&:hover': {
            color: "#afc1de",
            backgroundColor: '#081406'
        },
    }));

    return (
        <div className="container-login">
            <div className="login-title">
                Login Page
            </div>
            <form className="login-form">
                <div className="form-input">
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
                </div>
                <div className="form-input">
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />
                </div>
                <div className='form-login-button'><ColorButton variant="contained" size='large' onClick={login}> Login </ColorButton></div>
            </form>
        </div>
    )


}

export default Login;

