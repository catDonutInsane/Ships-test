import React from "react"
import type { itemType } from "../../types/types"
import { Link } from "react-router-dom"
import s from './PreviewCard.module.css'

export const PreviewCard:React.FC<itemType> = ({title,icons,level}) =>{

    return(
        <div className={s.wrapper}>
            <Link to={`/${title}`}><img src={icons.medium} alt="img" /></Link>
            <div><b>Название:</b> {title}</div>
            <div><b>Уровень:</b> {level} </div>
        </div>
    )
}