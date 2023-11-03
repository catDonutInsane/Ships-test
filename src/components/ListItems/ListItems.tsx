import { useAppSelector } from '../../hooks/hooks'
import { PreviewCard } from '../PreviewCard/PreviewCard'
import s from './ListItems.module.css'
import { ScrollUpBtn } from '../ScrollUpButton/ScrollUpBtn'


export const ListItems = () =>{
const sortedData = useAppSelector(state=>state.reducer.sortedData)
const data = useAppSelector(state=>state.reducer.data)
const p = useAppSelector(state=>state.reducer.params)

    return(
        <div className={s.wrapper}>
            {p.nations==="All"&&p.rank==='All'&&p.shipType==='All'
                ?data?.map(i=><div key={i.title}><PreviewCard {...i}/></div>)
                :sortedData?.map(i=><div  key={i.title}><PreviewCard {...i}/></div>)}
                <ScrollUpBtn/>

        </div>
    )
}