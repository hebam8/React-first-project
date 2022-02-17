// import Progress from "./progress"
import React  from "react";
class Skills extends React.Component{
    constructor(){
        super();
      
    }
      skills = [
        { Name: "HTML", Digree: "90%" },
        { Name: "CSS", Digree: "70%" },
        { Name: "JS", Digree: "80%" },
        { Name: "Angular", Digree: "80%" },
        { Name: "MongDB", Digree: "90%" },
        { Name: "React", Digree: "90%" },
        { Name: "NodeJS", Digree: "85%" },
      ];
      render() {
        return (

          <>
          <div className="container ">
          <h2 className="text-center  my-5">Skills</h2>
          <p className="text-center">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
             
            <div className="container"> 
            <div className="row">
             <div  className="col col-12 col-md-6">
             <h4>My foucs</h4>
             <h4>UI/UX design </h4>
             <h4>Responsive design</h4>
             <h4>Web design </h4>
             <h4>Mobile app design</h4>
             </div>
             <div  className="col col-12 col-md-6">
             {this.skills.map((item) => {
              return (
                <div class="progress m-3">
                  <div
                    class="progress-bar progress-bar-striped bg-primary "
                    role="progressbar"
                    style={{width:item.Digree}}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {item.Name} {item.Digree}
                  </div>
                </div>
              );
            })}
            </div>
             </div>
            </div>
          
          </>
        );
      }
}
export default Skills;