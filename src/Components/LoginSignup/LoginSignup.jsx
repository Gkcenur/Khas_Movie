import React, { useState } from 'react'; 
import './LoginSignup.css';

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/mail.png';
import password_icon from '../Assets/padlock.png';
import arrow_icon from '../Assets/arrow.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [selectedUserRole, setSelectedUserRole] = useState(""); 
    const [showUserRoleOptions, setShowUserRoleOptions] = useState(false); 

    
    const toggleUserRoleOptions = () => {
        setShowUserRoleOptions(!showUserRoleOptions);
    };

    
    const handleUserRoleOptionClick = (role) => {
        setSelectedUserRole(role);
        setShowUserRoleOptions(false); 
    };

    return (
        <div className='container'>
            <button className="back-button" onClick={() => {/* Implement navigation logic here */}}>&lt;</button>
            <div className="header">
                <div className="text">{action}</div>
            </div>
            <div className="inputs">
                {action === "Login" ? 
                    <React.Fragment>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder='Email Id' />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password' />
                        </div>
                    </React.Fragment>
                    : 
                    <React.Fragment>
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder='Name'/>
                        </div>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder='Email Id' />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className="input" style={{ position: 'relative' }}> {/* New input field */}
                            <img src={arrow_icon} alt="" />
                            <input type="text" placeholder="User Role" value={selectedUserRole} readOnly onClick={toggleUserRoleOptions} />
                            {showUserRoleOptions && (
                                <div className="user-role-options" style={{ position: 'absolute', top: '100%', right: '0', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', borderRadius: '5px', padding: '10px' }}>
                                    <div onClick={() => handleUserRoleOptionClick("admin")}>Admin</div>
                                    <div onClick={() => handleUserRoleOptionClick("user")}>User</div>
                                </div>
                            )}
                        </div>
                    </React.Fragment>
                } 
            </div>
            <div className="forgot-password">Lost Password?<span> Click Here!</span></div>
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
            </div>
        </div>  
    )
}

export default LoginSignup;
