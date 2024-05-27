import React from "react";
import './LoginForm.css';
import { FaPhone, FaLock} from "react-icons/fa";

const LoginForm = () =>{
    return(
        <div className="wrapper">
            <form action="">
                 <h1>Welcome</h1>
                 <h5>Vui lòng đăng nhập để tiếp tục</h5>
                 <div className="input-box">
                    <input type="tel" placeholder="Số điện thoại của bạn" required />
                    <FaPhone className="icon" />
                 </div>

                 <div className="remember-forgot">Nhận OTP qua SMS</div>

                 <button  type="submit" ><a href="http://localhost:3001/">SMS</a></button>

            </form>
        </div>
    );
};

export default LoginForm