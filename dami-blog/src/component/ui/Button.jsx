import React from "react";

function Button() {
    const buttonStyle = {
        margin: "15px 0",
        padding: "8px 16px",
        fontSize: "16px",
        borderWidth: "1px",
        borderRadius: "8px",
        cursor: "pointer",
    };
  
    return <button style={buttonStyle}>{"글 작성"}</button>;
}

export default Button;