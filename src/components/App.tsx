import macaronList from '../data/macarons';

// on importe le sous composant Macaron qui affiche un seul macaron
import Macaron from './Macaron';
import Footer from './Footer';

// import du style du composant App
import './App.scss';
import { useState } from 'react';

// COMPOSANT : un composant est une fonction qui return du JSX
// on met une majuscule au debut du nom de la fonction composant
function App() {
  // STATE qui pilote l'affichage de la classe app--dark dans app
  // mais Footer a besoin de isDark et setIDark car le bouton qui modifie le state est dans Footer
  // c'est un etat partagé car on fait passer sa valeur ou son setter à un sous composant
  const [isDark, setDark] = useState(false);

  return (
    <div className={isDark ? 'app app--dark' : 'app'}>
      <header className="header">
        <h1 className="header-title">O'Macarons</h1>
        {/* si on est en mode dark on veut ajouter un message */}
        {isDark && <p>On est en mode dark</p>}
      </header>
      <main className="main">
        {
          // avec map on fabrique un tableau d'element div JSX
          macaronList.map((macaron) => {
            // on doit return la ligne du tableau généré par map: un element JSX div
            // on est obligé d'ajouter une prop "key" aux elements quand ils sont dan sun tableau pour que React puisse les identifier (attention on ne met pas l'index du tableau en key)

            // on ajoute une props à notre sous composant macarons et on l'apelle macaronToDisplay
            return <Macaron key={macaron.id} macaronToDisplay={macaron} />;
          })
        }
      </main>

      <Footer
        /* on met le footer qui est dans un sous composant 
        on envoie à Footer : le nombre de macarons dans une props appelée nbMacarons et la valeur du state isDark dan sune props appelée isDark  et le setter dans une prop appelée setDark */
        nbMacarons={macaronList.length}
        isDark={isDark}
        setDark={setDark}
      />
    </div>
  );
}

// on pense à exporter le composant pour qu'il soit utilisable ailleurs
export default App;
