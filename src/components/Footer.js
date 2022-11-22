import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const Footer = () => {
  return (
    <>
      <div
        id="footer"
        style={ {
          width: "100%",
          height: "100vh",
          background: "url(./assets/FooterImage-1.png)",
          backgroundColor: "#121011",
          backgroundSize: "cover",
        } }
      >
        <div
          style={ {
            textAlign: "center",
            color: "#F8E32D",
            paddingTop: "30px",
            width: "100%",
            height: "12%",
          } }
        >
          <a href="#mainBody" style={ { textDecoration: "none" } }>
            <span>
              <img src="./assets/ArrowUpward.png" alt="" />
              <br />
            </span>
            <span style={ { fontSize: "20px", color: "white" } }>TOP</span>
          </a>
        </div>

        <div
          style={ {
            display: "flex",
            width: "100%",
            height: "50%",
            backgroundColor: "",
          } }
        >
          <div
            style={ {
              width: "50%",
              height: "100%",
              color: "#DC9696",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer"

            } }
          >
            <span
              style={ {
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
                lineHeight: "190%",
                paddingLeft: "50px",
              } }
            >
              <ArrowForwardIcon />
              ABOUT
            </span>
            <span
              style={ {
                display: "flex",
                fontSize: "20px",
                lineHeight: "190%",
                alignItems: "center",
                paddingLeft: "50px",
              } }
            >
              <ArrowForwardIcon />
              BEERS
            </span>
            <span
              style={ {
                display: "flex",
                fontSize: "20px",
                lineHeight: "190%",
                alignItems: "center",
                paddingLeft: "50px",
              } }
            >
              <ArrowForwardIcon />
              FOOD
            </span>
            <span
              style={ {
                display: "flex",
                fontSize: "20px",
                lineHeight: "190%",
                alignItems: "center",
                paddingLeft: "50px",
              } }
            >
              <ArrowForwardIcon />
              SHOP
            </span>
            <span
              style={ {
                display: "flex",
                fontSize: "20px",
                lineHeight: "190%",
                alignItems: "center",
                paddingLeft: "50px",
              } }
            >
              <ArrowForwardIcon />
              CONTACT
            </span>
            <span
              style={ {
                paddingTop: "80px",
                fontSize: "18px",
                paddingLeft: "50px",
              } }
            >
              &#169; Copyright 2021
            </span>

            <img
              src="./assets/Vector 43.png"
              width={ "100%" }
              height={ "150px" }
              style={ { paddingTop: "105px" } } alt=""
            />
          </div>
          <div
            style={ {
              width: "50%",
              height: "100%",
            } }
          >
            <div
              style={ {
                color: "#DC9696",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "400px",
              } }
            >
              <span
                style={ {
                  width: "200px",
                  fontSize: "20px",
                  height: "167px",
                } }
              >
                298, 100 Ft Rd, Indira Nagar II Stage, Bengaluru 560038
                Karnataka
              </span>
              <span style={ { fontSize: "20px" } }>+91 90197 13388</span>
              <span style={ { fontSize: "20px", paddingTop: "15px" } }>
                toitblr@toit.in
              </span>
              <span style={ { fontSize: "18px", paddingTop: "40px" } }>
                All Rights Reserved
              </span>
            </div>

            <img
              src="./assets/Vector 44.png"
              width={ "100%" }
              height={ "150px" }
              style={ { paddingTop: "100px" } } alt=""
            />
          </div>

        </div>
        <div style={ { textAlign: "center", width: "100%", marginBottom: "150px" } }>
          <img src="./assets/FooterImage.png" width={ "350px" } height={ "220px" } alt="" />
        </div>

      </div>
    </>
  );
};

export default Footer;
