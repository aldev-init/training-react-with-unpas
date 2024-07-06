import styles from '../assets/css/loginpage.module.css';
import InputField from "../components/InputField.jsx";
import {useState} from "react";
import CustomStateButton from "../components/CustomStateButton.jsx";

function LoginPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [regisUsername, setRegisUsername] = useState("");
    const [regisPassword, setRegisPassword] = useState("");

    return (
        <div className={styles.pageContainer}>
            <div className={styles.loginContainer}>
                <InputField
                    inputType={'text'}
                    placeHolder={'Masukan Username...'}
                    inputState={[username, setUsername]}
                />
                <InputField
                    inputType={'password'}
                    placeHolder={'Masukan Password...'}
                    inputState={[password, setPassword]}
                />
                <CustomStateButton
                    placeHolder={'Login'}
                    buttonState={[username, setUsername]}
                    actionButton={(name) => {
                        console.log(`Welcome ${name}`);
                    }}
                />
            </div>
            <div className={styles.registerContainer}>
                <InputField
                    inputType={'text'}
                    placeHolder={'Masukan Username...'}
                    inputState={[regisUsername, setRegisUsername]}
                />
                <InputField
                    inputType={'password'}
                    placeHolder={'Masukan Password...'}
                    inputState={[regisPassword, setRegisPassword]}
                />
                <CustomStateButton
                    placeHolder={'Register'}
                    buttonState={[regisUsername, setRegisUsername]}
                    actionButton={(name) => {
                        console.log(`Registering Success ${name}`);
                    }}
                />
            </div>
        </div>
    );
}

export default LoginPage;