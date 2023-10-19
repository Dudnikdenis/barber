import React,{useEffect, useState}from "react";
import cs from './table.module.css';
import TableClient from "./tableClient";
import { useParams } from "react-router-dom";
import { Link, useLocation} from "react-router-dom";
import ClientAddReduxForm from "./clientAddForm";


let TableHeader = (props) => {
    const location = useLocation();
    const { usName, usId } = location.state;

    // const AddClient = (formData) => {
    //     UpdateRecordse(formData, date, lineId);
        
    // }

    const UpdateRecordse = (formData, date, lineId, time) => {

        if(lineId ===-1)
        {
            //add
            let result = {
                "clientName": `${formData.clientName}`,
                "comment": `${formData.comment}`,
                "date": `${date}`,
                "lineId": "0",
                "procedureCost": "1000",
                "procedureDiscount": "10%",
                "procedureName": `${formData.service}`,
                "time": `${time}`,
                "userId": `${usId}`
            }
            props.addRecordsUser(usId, result,"01-01-2020", "02-01-2020");
        }
        else 
        {
            //update
            let result = {
                "lineId": `${lineId}`,
                "userId": `${usId}`,
                "date": `${date}`,
                "time": `${time}`,
                "clientName": `${formData.clientName}`,
                "procedureName": `${formData.service}`,
                "procedureCost": "1000",
                "procedureDiscount": "10%",
                "comment": `${formData.comment}`
            }
            props.updateRecordsUser(usId, lineId, result, "01-01-2020", "02-01-2020")
        }
    }
    //let date = new Date();
    //console.log(date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear());//+"-"+getMonth()+"-"+getFullYear()
    const onDelite = (lineId) => {
        props.deliteRecordsUser(usId, lineId, "01-01-2020", "02-01-2020");
        
     }
  
    useEffect( () => {
                 
        props.getClient(usId, "01-01-2020", "02-01-2020");
        
    },[usId]);

    return (
        <div className={cs.tab}>
            <span className={cs.span}>
                <Link className={cs.link} to="/">Главная страница </Link>
            </span>
            <span className={cs.span}>
                <Link className={cs.link} to="/users">Назад</Link>
            </span>
           <div>
                <div className={cs.user}>{usName}</div>
                {props.master.master.map(m=>
                <div>
                    <div className={cs.time}>{m.date}</div> 
                    {m.userRecords.length===0? "Нет записей": <TableClient UpdateRecordse={UpdateRecordse}
                     masterId={{usId:usId, usName:usName}} 
                     onDelete={onDelite}
                      client={m.userRecords} {...props}/>}
                </div>
                )
            }
            </div> 
            {/* <ClientAddReduxForm onSubmit={AddClient}></ClientAddReduxForm> */}
            
        </div>
        
    )
}

export default TableHeader;