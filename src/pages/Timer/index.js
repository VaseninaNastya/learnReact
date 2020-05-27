import React from "react";
import { Layout, Typography, Button } from "antd";
import Clock from '../../components/Clock';
import s from "./Timer.module.css";

const { Content } = Layout;
const { Title } = Typography;

class TimerPage extends React.Component {
    state = {
        showTimer: true,
    }

    handleToggClock = () => {
        this.setState(({ showTimer }) => {
            return {
                showTimer: !showTimer,
            }
        })
    }
    render(){
        const{showTimer} = this.state;
        console.log("какой стейт", this.state.showTimer);
        
        return(
            <Layout>
                <Content>
                    <div clssName={s.root}>
                        <Button
                            type="primary"
                            onClick={this.handleToggClock}>
                                Вкл/Выкл
                        </Button>
                        {showTimer &&<Clock currentDate={new Date()}/>}
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default TimerPage;