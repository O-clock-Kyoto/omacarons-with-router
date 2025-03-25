import macaronList from '../data/macarons';

// on importe le sous composant Macaron qui affiche un seul macaron
import Macaron from './Macaron';
import Footer from './Footer';

// COMPOSANT : un composant est une fonction qui return du JSX
// on met une majuscule au debut du nom de la fonction composant
function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">O'Macarons</h1>
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

      {/* on met le footer qui est dan sun sous composant */}
      <Footer nbMacarons={macaronList.length} />
    </div>
  );
}

// on pense à exporter le composant pour qu'il soit utilisable ailleurs
export default App;
