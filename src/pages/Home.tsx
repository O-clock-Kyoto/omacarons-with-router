import { useState } from "react"
import IMacaron from "../@types/macaron"
import Macaron from "../components/Macaron"

interface HomeProps {
  errorMessage: string
  isLoading: boolean
  macaronList: IMacaron[]
}

export default function Home({
  errorMessage,
  isLoading,
  macaronList,
}: HomeProps) {
  // STATE pour stocker la valeur de l'input filter search, l'affichage va s'adapter à chaque fois que la valeur change on va filtrer les macarons affichés
  // SSoT : le state est la seule source de vérité donc on veut que le state "pilote" l'input, on a un input controlé par le state
  const [searchString, setSearchString] = useState("")
  // attention si on "sort" le handler du JSX l'event n'est plus automatiquement typé donc il faut l'expliciter !
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    // on change le state, ce qui va changer la value puisque la value c'est ce qu'il y a dans le state
    // on va recuperer la chaine de caractère tapée par l'utilisateur dans l'event change
    const newText = event.currentTarget.value
    setSearchString(newText)
  }

  // on se sert de la vameur de searchString pour filtrer le tableau macaronList
  const filteredMacarons = macaronList.filter((macaron: IMacaron) => {
    // on return true si on garde la ligne dans le nouveau tableau
    // et false si on veut pas garder la ligne

    // est ce que la search string est inclue dans le nom du parfum
    return macaron.flavour.includes(searchString)
  })

  return (
    <>
      <form className="form">
        <input
          id="search-input"
          className="form__input"
          type="text"
          placeholder="search...."
          // controle en lecture, l'utilisateur "lit" le state dans l'input
          value={searchString}
          // controle en ecriture : quand l'utilisateur tape un caractère dans l'input on va ecrire ce caractère dans le state
          onChange={handleChange}
        />
      </form>
      <section className="main">
        {errorMessage && <p>{errorMessage}</p>}
        {isLoading && <div className="loader" />}
        {
          // avec map on fabrique un tableau d'element div JSX
          // à partir du tableau filtré par la search string, on n'affiche pas TOUS les macarons, on affiche que ceux qui sont dans le tableau filtré
          filteredMacarons.map((macaron: IMacaron) => {
            // on return la ligne du tableau généré par map: un element JSX div
            // on est obligé d'ajouter une prop "key" aux elements quand ils sont dans un tableau pour que React puisse les identifier
            // (attention on ne met pas l'index du tableau en key) !
            // on ajoute une prop à notre sous composant macarons, on l'apelle macaronToDisplay et en valeur on donne l'objet macaron à afficher
            return <Macaron key={macaron.id} macaronToDisplay={macaron} />
          })
        }
      </section>
    </>
  )
}
