import React from "react";

const BarsCard = () => {
  return (
    <div
      style={ {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
      } }
    >
      <div
        style={ {
          width: "33.33%",
          height: "700px",
          background: "url(./assets/BarsCard-1.png)",
          backgroundSize: "cover",
          color: "white",
          paddingLeft: "70px",
        } }
      >
        <div style={ { paddingTop: "400px" } }>
          <span
            style={ {
              fontSize: "80px",
              fontWeight: 700,
              fontFamily: "TT Trailers",
              textAlign: "center",
              width: "100%",
            } }
          >
            BARS
          </span>
          <br />
          <span style={ { fontSize: "20px", fontWeight: 300 } }>
            Lorem ipsum dolor sit amet.
            <br /> Text should be here
          </span>
        </div>
      </div>
      <div
        style={ {
          width: "33.33%",
          height: "700px",
          background: "url(./assets/BarsCard-2.png)",
          backgroundSize: "cover",
          color: "white",
          paddingLeft: "70px",
        } }
      >
        <div style={ { paddingTop: "400px" } }>
          <span
            style={ {
              fontSize: "80px",
              fontWeight: 700,
              fontFamily: "TT Trailers",
              textAlign: "center",
              width: "100%",
            } }
          >
            BEERS
          </span>
          <br />
          <span style={ { fontSize: "20px", fontWeight: 300 } }>
            Lorem Ipsum Dollor Dummy
            <br /> Text should be here
          </span>
        </div>
      </div>
      <div
        style={ {
          width: "33.33%",
          height: "700px",
          background: "url(./assets/BarsCard-3.png)",
          backgroundSize: "cover",
          color: "white",
          paddingLeft: "20px",
        } }
      >
        <div style={ { paddingTop: "400px" } }>
          <span
            style={ {
              fontSize: "80px",
              fontWeight: 700,
              fontFamily: "TT Trailers",
              textAlign: "center",
              width: "100%",
            } }
          >
            BREWERY
          </span>
          <br />
          <span style={ { fontSize: "20px", fontWeight: 300 } }>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deleniti.
            <br /> Text should be here
          </span>
        </div>
      </div>
    </div>
  );
};

export default BarsCard;
