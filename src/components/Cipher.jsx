import '../styles/Cipher.css'
import {useState} from "react";
import axios from "axios";

function Cipher() {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");


    const handleEncrypt = async () => {
        try {
            const response = await axios.post('http://192.168.0.11:8080/api/cipher/encrypt',
                null,
                {params: {input: text},
            });

            console.log(response.data);
            setResult(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDecrypt = async () => {
        try {
            const response = await axios.post('http://192.168.0.11:8080/api/cipher/decrypt',
                null,
                {
                    params: {encryptedInput: text},
                });

            console.log(response.data);
            setResult(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here"
            />

            <button onClick={handleEncrypt}>Encrypt</button>
            <button onClick={handleDecrypt}>Decrypt</button>

            <p>Result: {result}</p>

        </div>
    )
}

export default Cipher;