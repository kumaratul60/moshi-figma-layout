import React from 'react'

const PartyCard = () => {
  return (
    <div style={ { width: "100%", display: "flex" } }>
      <div
        style={ {
          width: "25%",
          height: "430px",
          background: "url(./assets/BearPartyCard-1.png)",
          backgroundSize: "cover",
        } }
      ></div>
      <div
        style={ {
          width: "25%",
          height: "430px",
          background: "url(./assets/BearPartyCard-2.png)",
          backgroundSize: "cover",
        } }
      ></div>
      <div
        style={ {
          width: "25%",
          height: "430px",
          background: "url(./assets/BearPartyCard-3.png)",
          backgroundSize: "cover",
        } }
      ></div>
      <div
        style={ {
          width: "25%",
          height: "430px",
          background: "url(./assets/BearPartyCard-4.png)",
          backgroundSize: "cover",
        } }
      ></div>
    </div>

  )
}

export default PartyCard