import React, {useState,useEffect} from "react";
import { Link, Route, Routes } from "react-router-dom";
import RecordsReduxForm from "./recordsForm";
import RecordsReduxFormTest from "./recordsFormTest";
import cs from './table.module.css';
import { useForm } from "react-hook-form";
import logoDelete from './../../Img/img_188025.png';
import logoSave from './../../Img/Save.png'



function TableClient(props) {


    // React.useEffect(() => {
    //     const listener = (event) => {
    //         if (event.code === "Enter") {
    //           	// Where you submit the form
    //        		console.log("LearnShareIT form submit");
    //         }
    //     };
    //     document.addEventListener("keydown", listener);
    // }, []);

    const [isUpdateId, setIsUpdateId] = useState(0);
    const [isUpdateClient, setIsUpdateClient] = useState("");
    const [isId, setIsId] = useState(-1);
    const [isUpdateDate, setIsUpdateDate] = useState("");
    const [isUpdateTime, setIsUpdateTime] = useState("");

    const { register, handleSubmit, setValue } = useForm();
    
    const onClicDelite = (e,lineId) => {
       props.onDelete(lineId);    
    }

    const UpdateClic = (e,lineId, procedureName, comment, client, date, id, time) => {   // сохранение данных при выделение строки
        setIsUpdateId(prev=>prev=lineId);
        setIsUpdateDate(prev=>prev=date);
        setIsId(prev=>prev=id);
        setIsUpdateTime(prev=>prev=time);
        setValue("client", client);
        setValue("sevice", procedureName);
        setValue("coment", comment);
     }

     const UpdateOnBlur = () => {
        setIsId(prev=>prev=-1);
     }

     const UpdateRecrdse = (formData) => {  
        console.log(formData);
        // props.UpdateRecordse(formData,isUpdateDate, isUpdateId,isUpdateTime);
        // setIsUpdateDate(prev=>prev="");
        // setIsUpdateId(prev=>prev=0);
        // setIsId(prev=>prev=-1);
     }

     const getColorRow = (value)=>{
        if(value> 0) return cs.red
        
     }

    return (
        <div className={cs.tab}>
            <form onSubmit={handleSubmit(UpdateRecrdse)}>
            {props.client.map(c => 
            <div>                
                <span>
                    <table   key={c.Id} className={cs.tab_total}>
                    <tr className={getColorRow(c.lineId)}  onClick={(e)=>{UpdateClic(e,c.lineId, c.procedureName, c.comment, c.clientName, c.date, c.ID,c.time)}} onBlur={UpdateOnBlur}>
                        {c.ID!==isId? 
                            <>
                                <td className={cs.tdTime}>{c.time}</td>
                                <td className={cs.tdClient} >{c.clientName}</td>
                                <td className={cs.tdSevice} >{c.procedureName}</td>
                                <td className={cs.tdSevice} >{c.comment} </td>
                            </>
                            :
                            <>
                                <td className={cs.tdTime}>{c.time}</td>
                                <td className={cs.tdClient}><input {...register("client")} type="text"   className={cs.inputTable}/> </td>
                                <td className={cs.tdSevice}><input {...register("sevice")} type="text" className={cs.inputTable}/></td>
                                <td className={cs.tdSevice}><input {...register("coment")} type="text" className={cs.inputTable}/></td>
                                
                            </>
                        }
                        </tr>
                    </table>
                </span>
            </div>)} 
            <button></button>
            </form> 
        </div>
    )
}

export default TableClient;


//https://habr.com/ru/articles/746806/
// <form onSubmit={props.handleSubmit}> 
                            //     <lable></lable> 
                            //     <input {...register(`client.7.clientName`)}  name={"clientName"}  />
                            //     <input {...register("lastName")} name={"service"} />
                            //     <input name={"comment"} />
                            //     <button>Сохранить</button>
                            // </form> 
                            // <RecordsReduxForm onSubmit={UpdateRecrdse} records={c} />


                            // <FormProvider {...methods}>
                            //                 <RecordsReduxFormTest recordse={c} />  
                            //             <td>
                            //                 <button onClick={handleSubmit(UpdateRecrdse)}>
                            //                     <img src={logoSave} />
                            //                     </button>
                            //             </td>
                            // </FormProvider>