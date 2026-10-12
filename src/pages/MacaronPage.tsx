import { useParams } from "react-router"
import IMacaron from "../@types/macaron"

interface MacaronPageProps {
  getOneById: (id: number) => IMacaron | undefined
}

export default function MacaronPage({ getOneById }: MacaronPageProps) {
  const { macaronId } = useParams()

  const macaron = getOneById(Number(macaronId))

  return (
    <section>
      {macaron ? (
        <h1>
          Macaron numéro : {macaron.id} flavor : {macaron.flavour}
        </h1>
      ) : (
        <h1>Macaron not found</h1>
      )}
    </section>
  )
}
