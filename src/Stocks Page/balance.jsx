import React from "react";

function Balance(){
    return(
        <div className="downbar">
            <h1 className="balance">Balance</h1>
            <div className="amount"></div>
            <h2 className="invest">Invest</h2>
            <div className="money"></div>
            <h2 className="gain">Gain</h2>
            <div className="money"></div>
            <h2 className="loss">Loss</h2>
            <div className="money"></div>
        </div>
    );
}

export default Balance