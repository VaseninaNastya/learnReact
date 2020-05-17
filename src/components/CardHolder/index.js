import React from "react";
import s from "./CardHolder.module.css";




const CardHolder = ({ children}) => {

    return (
    <div className={s.CardHolder}>{children}</div>
    )
}

export default CardHolder;