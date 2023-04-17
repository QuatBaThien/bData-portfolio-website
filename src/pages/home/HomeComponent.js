import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Messenger from "../../components/messengerChat/Messenger"
import TopButton from "../../components/topButton/TopButton";
// import MessengerCustomerChat from 'react-messenger-customer-chat';

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
        <Messenger theme={this.props.theme}/>,
      </div>
    );
  }
}

export default Home;
