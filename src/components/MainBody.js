import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const MainBody = () => {
  return (
    <>
      <div className="wrapper">
        <div
          id="mainBody"
          style={ {
            width: "100%",
            height: "100vh",
            backgroundImage: "url(./assets/BodyImage.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",

          } }
        >

          <div
            style={ {
              display: "flex",
              justifyContent: "space-between",
              height: "100px",
              cursor: "pointer"
            } }
          >
            <div
              style={ {
                color: "white",
                paddingLeft: "110px",
                //   height: "100px",
                paddingTop: "40px",
                fontSize: "18px",
              } }
            >
              <span style={ { display: "flex", color: "white" } }>
                <span
                  style={ {
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#FFA54F",
                    borderRadius: "50%",
                  } }
                >
                  <MenuRoundedIcon
                    style={ { color: "black" } }
                  />
                </span>
                <span style={ { paddingLeft: "10px", fontWeight: 700 } }> Menu</span>

              </span>
            </div>
            <div style={ { paddingTop: "20px", marginLeft: "270px" } }>
              <img src="./assets/toit-logo 1.png" alt="" />
            </div>

            <div
              style={ {
                display: "flex",
                color: "white",
                paddingTop: "40px",
                fontSize: "15px",
                fontWeight: 700
              } }
            >
              <span style={ { paddingRight: "20px" } }>KUDIX</span>
              <span style={ { paddingRight: "20px" } }>RESERVATION</span>
              <span style={ { paddingRight: "20px" } }>BREWERY TOUR</span>
              <span
                style={ {
                  border: "1px solid white",
                  height: "25px",
                  width: "140px",
                  padding: "0px 10px",
                  marginRight: "40px",
                  display: "flex",
                } }
              >
                FIND MY BEER <span style={ { paddingLeft: "10px" } }><img src="./assets/Vector.png" alt="" /></span>
              </span>
            </div>
          </div>
          <div
            style={ {
              textAlign: "center",
              fontFamily: "TT Trailers",
              paddingTop: "100px",
              fontStyle: "normal",
            } }
          >
            <span
              style={ { fontSize: "150px", fontWeight: 900, lineHeight: "90.69%" } }
            >
              TOIT
            </span>
            <br />
            <span
              style={ { fontSize: "150px", fontWeight: 900, lineHeight: "73.69%" } }
            >
              BEER
            </span>
          </div>
          <div style={ { textAlign: "center", width: "100%", paddingTop: "45px" } } >
            <a href="#footer" style={ { textDecoration: "none", color: "white" } }>
              <span style={ { textAlign: "center" } }><img src="./assets/Arrow 5.png" alt="" /></span><br />
              <span >Scroll Down</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
