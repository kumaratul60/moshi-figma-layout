import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const About = () => {
  return (
    <>
      <div
        style={ {
          display: "flex",
          width: "100%",
          height: "100vh",
          backgroundImage: "url(./assets/About.png)",
          backgroundColor: "#121011",
          mixBlendMode: "soft-light",

        } }
      >
        <div style={ { height: "100vh", width: "50%" } }>
          <div style={ { paddingLeft: "80px", paddingTop: "80px" } }>
            <span
              style={ {
                fontSize: "18px",
                color: "white",
                fontFamily: "PP Fraktion Sans",
                fontWeight: 700,
                lineHeight: "27px",
                textTransform: "uppercase",
              } }
            >
              About us
            </span>
          </div>
          <div style={ { paddingLeft: "80px" } }>
            <span
              style={ {
                fontSize: "70px",
                fontFamily: "PP Fraktion Sans",
                fontWeight: 700,
                color: "white",
                textTransform: "uppercase",
              } }
            >
              We are Toit.
              <br /> You should be too…
            </span>
          </div>
          <div style={ { width: "427px", paddingLeft: "80px" } }>
            <span style={ { color: "#E0E0E0", fontSize: "20px" } }>
              Toit is a brew pub, brewing a revolutionary culture. We started
              out as a sweet little Bengaluru brewing culture with the promise
              of some bodacious brews, fabulous foods and a supreme brew-pub
              experience
            </span>
          </div>
          <div
            style={ {
              paddingLeft: "80px",
              color: "#CA9E67",
              fontSize: "18px",
              fontWeight: 700,
              paddingTop: "30px",
            } }
          >
            <span style={ { display: "flex" } }>EXPLORE <ArrowForwardIcon style={ { paddingLeft: "10px" } } /></span>
          </div>
        </div>
        <div style={ { width: "50%" } }>
          <img
            src="./assets/AboutImage.png"
            height={ "400px" }
            style={ {
              marginTop: "120px",
              backgroundColor: "#CA9E67",
              opacity: 0.5,
              marginBottom: "50px",
            } } alt=""
          />
          <br />
          <span style={ { fontSize: "20px", fontWeight: 700, color: "white" } }>
            TOIT BREWERY
          </span>
        </div>
      </div>
      <div
        style={ { width: "100%", textAlign: "center", background: "#121011" } }
      >
        <img
          src="./assets/Skunk_Illustraion.png"
          width={ "150px" }
          height={ "150px" }
          style={ {
            backgroundColor: "yellow",
            borderRadius: "50%",
            marginTop: "20px",
          } } alt=""
        />
      </div>
      <div
        style={ {
          width: "100%",
          background: "url(./assets/AboutImage-2.png)",
          backgroundColor: "black",
          height: "100vh",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "space-between",
        } }
      >
        <div>
          <img src="./assets/AboutImage-4.png" width={ "250px" } height={ "450px" } alt="" />
        </div>
        <div style={ { textAlign: "center" } }>
          <span style={ { fontSize: "50px", fontWeight: 700, color: "white" } }>
            COME BY. EVERYTHING TWICE.
          </span>
          <br />
          <span><img src="./assets/Love.png" height={ "184px" } style={ { paddingTop: "50px" } } alt="" /></span>
        </div>
        <div style={ { paddingTop: "100px" } }>
          <img src="./assets/AboutImage-5.png" width={ "350px" } height={ "450px" } alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
