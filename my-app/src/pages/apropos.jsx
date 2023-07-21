import React, { useState } from "react"
import Collapse from "../components/Dropdown/collapse"
import fond from "../assets/images/fond2.png"

function Apropos() {
      function AboutContents() {
            const contents = [
                  {
                        id: 1,
                        title: "Fiabilité",
                        texte: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
                  },
                  {
                        id: 2,
                        title: "Respect",
                        texte: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
                  },
                  {
                        id: 3,
                        title: "Service",
                        texte: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
                  },
                  {
                        id: 4,
                        title: "Sécurité",
                        texte: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes.`,
                  },
            ]
            return contents
      }

      const contents = AboutContents()

      return (
            <div>
                  <div className="banner">
                        <img
                              className="img-banner"
                              src={fond}
                              alt="fond-source-2"
                        />
                  </div>
                  <div className="bloc-about">
                        {contents.map((content) => {
                              return (
                                    <Collapse
                                          key={content.id}
                                          descri={content.texte}
                                          title={content.title}
                                    />
                              )
                        })}
                  </div>
            </div>
      )
}

export default Apropos
