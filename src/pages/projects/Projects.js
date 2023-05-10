import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal"; 
import { BiCheckboxSquare } from "react-icons/bi";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import RegistrationForm from "../../components/form/RegisterForm";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                {/* <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p> */}
                <RegistrationForm theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
    
        {/* <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div> */}
        <Fade bottom duration={2000} distance="40px">
          <PricingTable  highlightColor='#1976D2'>
            <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
              <PricingDetail> <b>15</b> projects</PricingDetail>
              <PricingDetail> <b>5 GB</b> storage</PricingDetail>
              <PricingDetail> <b>5</b> users</PricingDetail>
              <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
            </PricingSlot>
            <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
                <PricingDetail> <b>35</b> projects</PricingDetail>
                <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                <PricingDetail> <b>Time tracking</b></PricingDetail>
            </PricingSlot>
            <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
                <PricingDetail> <b>100</b> projects</PricingDetail>
                <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                <PricingDetail> <b>Time tracking</b></PricingDetail>
            </PricingSlot>
            <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
                <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
                <PricingDetail> <b>75 GB</b> storage</PricingDetail>
                <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                <PricingDetail> <b>Time tracking</b></PricingDetail>
            </PricingSlot>
        </PricingTable>
      </Fade>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
