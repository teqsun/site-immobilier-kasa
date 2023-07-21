import Banner from '../components/Banner/banner';
import CardLogements from '../components/DataAnnonces/logements';
import React, { useState } from 'react';
import {logementsList} from '../datas/logementlist'


function Home() {
      const [logements] = useState(logementsList)

      return (
            <div className="">
                  <Banner />
                  <div className="conteneur-card">
                        <div className="flex-logements">
                              {logements.map((logement) => (
                                    <CardLogements
                                          key={logement.id}
                                          logement={logement}
                                    />
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default Home