import React from "react";
import { useParams } from "react-router-dom";
import { GET_ALL } from "../../query/getAll";
import { useQuery } from "@apollo/client";
import { dataT } from "../../types/types";
import s from './ShipCard.module.css'

export const ShipCard =()=>{
    const {id} = useParams()
    const {data, loading, error} = useQuery<dataT>(GET_ALL)
    let ship = data?.vehicles.filter(i=>i.title===id)[0]
    return(
        <div className={s.wrapper}>{loading?"Loading Data...":  <div className={s.wrapper}>
            <img src={ship?.icons.large} alt="" />
            <div>
            <b>Описание:</b>
                <div className={s.description}>{ship?.description}</div>
                <div> <b>Уровень:</b> {ship?.level}</div>
                <div> <b>Страна:</b>{ship?.nation.title}</div>
                <img src={ship?.nation.icons.small} alt="" />
            </div>
            
        </div>}</div>
          
        
   
       
    )
}