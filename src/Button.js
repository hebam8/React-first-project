import React from "react";
class Button extends React.Component{
  constructor(props){
      super()
  }

  render(){
      return(
          <>
          <button  className={this.props.className} > {this.props.title}</button>
          
          </>
      )
  }
}

export default Button;