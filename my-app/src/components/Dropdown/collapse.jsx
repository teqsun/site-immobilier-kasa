import React, { useState } from "react"
import arrowb from "../../assets/images/arrow_back.png"

function Collapse(props) {
      const [contentVisible, setContentVisible] = useState(false)

      const arrowClick = () => {
            setContentVisible(!contentVisible)
      }

      return (
            <div className="wibloc">
                  <div className="flex-fiche-descri">
                        <div className="bloc-red-fiche flex-row">
                              <h4>{props.title}</h4>
                              <img
                                    className={`arrow-b ${
                                          contentVisible ? "active" : "inactive"
                                    }`}
                                    src={arrowb}
                                    alt="arrow-b"
                                    onClick={arrowClick}
                              />
                        </div>
                        <ul
                              className={`grey-fiche arrow-descritpion  ${
                                    contentVisible ? "active" : "inactive"
                              }`}
                        >
                              {Array.isArray(props.descri) ? (
                                    props.descri.map((equip) => {
                                          return <li key={equip}>{equip}</li>
                                    })
                              ) : (
                                    <li>{props.descri}</li>
                              )}
                        </ul>
                  </div>
            </div>
      )
}

export default Collapse
