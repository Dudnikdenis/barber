import React, {useState,useEffect} from "react";
import { Link, Route, Routes } from "react-router-dom";
import RecordsReduxForm from "./recordsForm";
import cs from './table.module.css';



function TableClient(props) {

    const [isUpdateId, setIsUpdateId] = useState(0);
    const [isId, setIsId] = useState(-1);
    const [isUpdateDate, setIsUpdateDate] = useState("");
    const [isUpdateTime, setIsUpdateTime] = useState("");
    const onClicDelite = (e,lineId) => {
       props.onDelete(lineId);    
    }

    const UpdateClic = (e,lineId, date,id, time) => {
        setIsUpdateId(prev=>prev=lineId);
        setIsUpdateDate(prev=>prev=date);
        setIsId(prev=>prev=id);
        setIsUpdateTime(prev=>prev=time)
     }

     const UpdateRecrdse = (formData) => {
        
        props.UpdateRecordse(formData,isUpdateDate, isUpdateId,isUpdateTime);
        setIsUpdateDate(prev=>prev="");
        setIsUpdateId(prev=>prev=0);
        setIsId(prev=>prev=-1);
     }

     const getColorRow = (value)=>{
        if(value> 0) return cs.red
        
     }

    return (
        <div className={cs.tab}>
            {props.client.map(c => 
            <div>                
                <span>
                        {c.ID!==isId? 
                            <table  key={c.Id} className={cs.tab_total}>
                            <tr className={getColorRow(c.lineId)} onClick={(e)=>{UpdateClic(e,c.lineId, c.date, c.ID,c.time)}}>
                                <td className={cs.tdTime}>{c.time}</td>
                                <td className={cs.tdClient}>{c.clientName}</td>
                                <td className={cs.tdSevice}>{c.procedureName}</td>
                                <td className={cs.tdSevice}>{c.comment} </td>
                                <button onClick = {e=>onClicDelite(e, c.lineId)}>Удалить</button>
                            </tr>
                            </table> 
                            :
                            <RecordsReduxForm onSubmit={UpdateRecrdse} records={c} />
                            }
                </span>
            </div>)}              
        </div>
        
    )
}

export default TableClient;