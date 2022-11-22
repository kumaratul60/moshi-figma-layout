import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const Merchandise = () => {
  return (
    <div style={ { display: "flex", width: "100%", height: "100vh" } }>
      <div
        style={ {
          backgroundColor: "#CA9E67",
          width: "50%",
          height: "100vh",
          fontWeight: 700,
          color: "white",
        } }
      >
        <div
          style={ {
            position: "relative",
            top: "100px",
            left: "200px",
            width: "946px",
            height: "220px",

          } }
        >
          <span
            style={ {
              textTransform: "uppercase",
              fontSize: "60px",
              fontFamily: "PP Fraktion Sans",
            } }
          >
            Want To purchase <br />
            our merchandise
          </span>
        </div>
        <div
          style={ {
            width: "470px",
            height: "147px",
            position: "relative",
            left: "200px",
            top: "50px",
          } }
        >
          <span style={ { fontSize: "18px" } }>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </span>
        </div>
        <div style={ { position: "relative", left: "200px", top: "50px" } }>
          <button
            style={ {
              width: "155px",
              height: "36px",
              borderRadius: "33px",
              border: "1px solid black",
              background: "#141011",
              color: "white",
              display: "flex",
              alignItems: "center",
              cursor: "pointer"
            } }
          >
            <span style={ { paddingLeft: "20px", paddingRight: "10px" } }>SHOP NOW</span> <span><ArrowForwardIcon /></span>
          </button>
        </div>
      </div>
      <div
        style={ {
          width: "50%",
          height: "100vh",
          backgroundImage: "url(./assets/Rectangle-134.png)",
          backgroundColor: "#8B4513",

          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        } }
      >
        <div style={ {} }>
          <img src="./assets/cap.png" width={ "500px" } height={ "400px" } alt="" />
          <img src="./assets/toit-logo 1.png" width={ "130px" } style={ { position: "relative", right: 310, bottom: 100 } } alt="" />
        </div>
      </div>
    </div>
  );
};

export default Merchandise;

