import Slider from "../components/Slider/slideshow"
import React, { useEffect, useState } from "react"

import { logementsList } from "../datas/logementlist"
import { useParams } from "react-router-dom"
import Tag from "../components/MotCles/tag"
import Collapse from "../components/Dropdown/collapse"
import star from "../assets/images/star.png"
import starActive from "../assets/images/starActive.png"
import Error from '../pages/404';
function FicheLogement() {
      const param = useParams()
      const [logement, setLogement] = useState(
            logementsList.find((obj) => {
                  return obj.id === param.id
            })
      )

      // on check l'id de la page actuelle 
      useEffect(() => {
            const foundLogement = logementsList.find((c) => c.id === param.id);
        
            setLogement(foundLogement);
          }, []);

      //  const starFulls = Array(5).fill(starActive)
      const starEmptys = Array(5).fill(star)
      const starFulls = Array(5).fill(starActive)

      //On check si l'id de la page actuelle correspond
      //Si ce n'est pas le cas on redirige vers la page d'erreur
      if (!logement) {
            return <Error />;
          }


      return (
            <div>
                  <div>
                        <Slider photos={logement["des photos"]} />
                  </div>

                  <div className="flex-descri-globale">
                        <div className="marg-descri">
                              <h2 className="marg-descri">{logement.title}</h2>
                              <h5 className="marg-descri">
                                    {logement.location}
                              </h5>
                              <div className=" flex-row">
                                    <Tag tags={logement["Mots clés"]} />
                              </div>
                        </div>
                        <div className="flex-row-media">
                              <div className="flex-descri-droite">
                                    <div className="flex-row ">
                                          <h5 className="marg-r">
                                                {logement.héberger.nom}
                                          </h5>
                                          <img
                                                className="rond-gris"
                                                src={logement.héberger.image}
                                                alt=""
                                          />
                                    </div>
                              </div>
                              <div className="stars">
                                    {starFulls
                                          .slice(5 - logement.note)
                                          .map((starFull, i) => {
                                                return (
                                                      <img
                                                            key={i}
                                                            className="marg-l"
                                                            src={starFull}
                                                            alt=""
                                                      />
                                                )
                                          })}
                                    {starEmptys
                                          .slice(logement.note)
                                          .map((starEmpty, i) => {
                                                return (
                                                      <img
                                                            key={i}
                                                            className="marg-l"
                                                            src={starEmpty}
                                                            alt=""
                                                      />
                                                )
                                          })}
                              </div>
                        </div>
                  </div>
                  <div className="descri-fiche">
                        <Collapse
                              descri={logement.description}
                              title="Déscription"
                        />
                        <Collapse
                              descri={logement.équipements}
                              title="Équipements"
                        />
                  </div>
            </div>
      )
}

export default FicheLogement
