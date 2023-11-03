import { ShipCard } from "../components/ShipCard/ShipCard"
import { ListItems } from "../components/ListItems/ListItems"

export const routeList:Iroute[] = [
    {
        path: '/:id',
        element: <ShipCard/>
    },
    {
        path: '/',
        element: <ListItems/>
    }
]

interface Iroute  {
    path:string,
    element :JSX.Element
}