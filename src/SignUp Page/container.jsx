import React from "react";

function Container(){
    return(
        <div className="container">
            <div className="log">
                <h1 className="account">Have an account<span className="mark">?</span></h1>
                <button className="login">Log In</button>
            </div>
            <div className="sign">
                <h1 className="noaccount">Start a <span className="new">new</span> account</h1>
                <button className="signin">Sign In
                </button>
            </div>

        </div>
    );
}

export default Container