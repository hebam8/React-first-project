import back2 from "./footer.webp"
import React from "react";
import Button from "./Button";
import  "./Herosection.css"
class HeroSection extends React.Component{
  constructor(){
      super();
      this.state={
        
      }
  }

render(){
    return(
        <>
        <div className="container ">
        <img className="hero-img" src={back2}></img>
        <div className="row  justify-content-center" >
        <h1 className="text-center">Heba Mansour</h1>
        <h3 className="text-center ">Full stack MEARN develpment</h3>
        <Button  type="button" className="btn btn-primary " title="CONTACT ME"></Button>
        </div>
        </div>
        <br></br>
        <div className="container ">
        <div className="row  justify-content-center">
        <h2 className="text-center">About Me</h2>
        <p className="text-center"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <Button title="Downlod Resume" className="btn btn-primary "  ></Button>
        </div>
        </div>
       
        </>
    )
}

}

export default HeroSection;