import { useState } from "react";
import './join.css'
import axios from "axios";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../../Auth/Auth';


function Join() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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


    async function save(event) {
        event.preventDefault();
        try {
            await axios.post(`${BASE_URL}/api/member/join`, {
                name: name,
                email: email,
                password: password,
            }).then((response) => {
                console.log(response);
                if (response.data.message === "Success Login") {
                    setName('')
                    setEmail('')
                    setPassword('')
                    const myTimeout = setTimeout(() => {
                        navigate('/Thanks')
                    }, 500);
                } else if (response.data.message == "Email Already Exist") {
                    alert(response.data.message)
                } else {
                    alert(response.data.message)
                }
            }, fail => { console.error(fail); }
            );



        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="container-join">
            <div className="container-join-title"> Join with HealthWise</div>
            <div className="container-join-form">
                <form>
                    <div className="form-join form-join-name">
                        <label>Name</label>
                        <br />
                        <input
                            type="name"
                            id="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </div>
                    <div className="form-join form-join-email">
                        <label>Email</label>
                        <br />
                        <input
                            type="email"
                            id="name"
                            placeholder="Enter email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>
                    <div className="form-join form-join-password">
                        <label>Password</label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>
                    <div className='form-join join-button'><ColorButton variant="contained" size='large' onClick={save}> Join </ColorButton></div>
                </form>
            </div>
        </div>
    )

}

export default Join;