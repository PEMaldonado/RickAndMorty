import { useSelector } from "react-redux"
import Card from "./Card"

export default function Favorites () {

    const favorites = useSelector(state => state.myFavorites)

    return(
    <div>
        {
         favorites.map(({id,name,status,species,gender,image}) => {
            return <Card 
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={name}
            image={image}
            />
         })
      }
    </div>
    )
}