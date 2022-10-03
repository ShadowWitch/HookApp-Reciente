import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

    useEffect(() => {
        const onMoveMaus = ({x, y}) => {
            // const coords = {x, y}
            setCoords({x, y})
        }
       window.addEventListener('mousemove', onMoveMaus)

      return () => {
        // console.log('Message Unmonunted');
        window.removeEventListener('mousemove', onMoveMaus) // Remover el Listener del maus
      }
    }, [])
    
    return (
        <>
            <h3>Usuario ya existe.</h3>
            {
                JSON.stringify(coords)
            }
        </>
    )
}
