import React from "react";
// import "./portfolio.css"
class Portfolio extends React.Component {
  constructor() {
    super();
  }
  arr = [
    "Web Desgin",
    "HTML",
    "CSS",
    "ANgular",
    "React",
    "NodeJS",
  ];
  render() {
    return (
        <>
            <div className="row my-3">
                <h2 className="text-center">Portfolio</h2>
            </div>
        <div className="container my-3">
        <div className="row  justify-content-center">
          <div className="row row-cols-4">
            {this.arr.map((item) => {
              return <div className="col m-4 p-5 bg-primary text-dark text-center fw-bold">{item}</div>;
            })}
          </div>
        </div>
        </div>
        ;
      </>
    );
  }
}
export default Portfolio;































// import React from "react";
// // import "./Herosection.css"
// class Protofolio extends React.Component{
//     constructor(){
//         super(); 
//     }
//     arr = [
//         "Web Desgin",
//         "HTML",
//         "CSS",
//         "ANgular",
//         "React",
//         "NodeJS",
//       ];


//     render() {
//         return (
//             <>
//                 <div className="row my-3 ">
//                     <h2 className="text-center"> Portfolio</h2>
//                 </div>
//             <div className="container my-3">
//               <div className="row row-cols-4">
//                 {this.arr.map((item) => {
//                   return <div className="col m-4 p-5 bg-dark text-dark text-center fw-bold">{item}</div>;
//                 })}
//               </div>
//             </div>
//             ;
//           </>
//         );
//       }
// }
// export default Protofolio;


  
