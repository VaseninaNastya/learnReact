import React from "react";
import { Layout, Typography, Button } from "antd";
import s from "./Clock.module.css";

const { Title } = Typography;

class Clock extends React.PureComponent {
    state = {
        date: this.props.currentDate
    };
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {

        clearInterval(this.interval)
    }
    tick = () => {

        this.setState({
            date: new Date()

        })

    }
    render() {
        const { date } = this.state;


        return (
            <Title level={2}>
                Сейчас{date.toLocaleTimeString()}
            </Title>)
    }
}

export default Clock;