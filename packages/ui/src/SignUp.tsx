import { useState } from "react";
export const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event: any) => {
        setPassword(event.target.value);
    };

    return (
        <div style={{ width: 400, height: 500, border: '1px solid black', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, marginLeft: 100 }}>
            <div className="text-green-800 text-2xl">Sign Up</div>
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} style={{ border: '3px solid green', height: 40, width: 300 }}></input>
            <input type="text" placeholder="Email" value={password} onChange={handleEmailChange} style={{ border: '3px solid green', height: 40, width: 300 }}></input>
            <input type="password" placeholder="Password" style={{ border: '3px solid green', height: 40, width: 300 }}></input>
            <button type="button" style={{ background: 'green', borderRadius: 100, height: 40, width: 300 }}
              onClick={async() => {
                props.onClick(username,password)
              }}
            >
                Submit
            </button>
        </div>
    );
}