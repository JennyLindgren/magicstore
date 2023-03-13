import React from "react";
import "./searchresult.css";

// https://dummyjson.com/products

const Searchresult = (props) => {
  return (
    <div className="Searchresult">
      <h2>Searchresult</h2>
      {props.searchData.map((object) => {
        return (
          <div className="box" key={object.id}>
            <img src={object.images[0]}></img>
            <h4>{object.title}</h4>
            {object.price} kr
            <p>Mer information</p>
          </div>
        );
      })}
    </div>
    // <tr>
    //   <td>{props}</td>
    //   <td>{props}</td>
    //   <td>{props}</td>

    // </tr>
  );

  // return (
  //   <div className="Searchresult">
  //     <h2>Searchresult</h2>
  //     <br /> <br />
  //     {Object.map((object) => {
  //       return (
  //         <div className="box" key={object.produktnummer}>
  //           {object.name}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

export default Searchresult;
