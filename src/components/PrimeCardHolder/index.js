import React from "react";
import s from "./PrimeCardHolder.module.css";
import Card from "../Card";


class PrimeCardHolder extends React.Component{


    render(){
        const {children} = this.props;

        return (
            <div className={s.PrimeCardHolder}>{children}</div>
            

        );

            
        
    }
}
/*
updateData = (value) => {
    this.setState({ name: value })
}*/




    export default PrimeCardHolder;




