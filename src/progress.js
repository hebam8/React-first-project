
import React from "react";
class Progress extends React.Component{
    constructor(props){
        super();

        
    }


    render(){
        return(
            <>
         <div class="progress">
          <div class="progress-bar w-75" role="progressbar" style={this.props} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
             
            </>
        )
    }
}
export default Progress;