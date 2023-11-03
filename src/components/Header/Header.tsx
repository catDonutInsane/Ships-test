import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {  sortingByNations } from "../../slice/reducer";
import { nations } from "../../types/nations.types";
import { classes } from "../../types/classes.type";
import { rank } from "../../types/rank.type";
import s from './Header.module.css'

export const Header = () =>{
    const dispatch = useAppDispatch()
    const [nations, setNation] = useState<nations>("All")
    const [rank, setRank] = useState<rank>("All")
    const [shipType, setShiptype] = useState<classes>("All")
    const data = useAppSelector(state=>state.reducer.data)
    
    useEffect(()=>{
        if(data){
            if(data.length>0){
                dispatch(sortingByNations({nations,rank,shipType}))
            }            
        }        
    },[nations,rank,shipType])
   
    return(
        <div className={s.wrapper}>
            Выберите нацию:
            <select onChange={(e)=> setNation(e.currentTarget.value as nations) }>
                <option >All</option>
                <option >Japan</option>
                <option >U.S.A.</option>
                <option >U.S.S.R.</option>
                <option >Germany</option>
                <option >U.K.</option>
                <option >France</option>
                <option >Pan-Asia</option>
                <option >Italy</option>
                <option >Commonwealth</option>
                <option >Pan-America</option>
                <option >Europe</option>
                <option >The Netherlands</option>
                <option >Spain</option>
            </select>
            Выберите класс корабля:
            <select onChange={e=>setShiptype(e.currentTarget.value as classes) }>
                <option >All</option>
                <option >Submarine</option>
                <option >Destroyer</option>
                <option >Cruiser</option>
                <option >Battleship</option>
                <option >Aircraft Carrier</option>
            </select>
            Выберите уровень корабля:
            <select onChange={e=> setRank(e.currentTarget.value as rank) }>
                <option >All</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
                <option >6</option>
                <option >7</option>
                <option >8</option>
                <option >9</option>
                <option >10</option>
                <option >11</option>
            </select>
        </div>
    )
}