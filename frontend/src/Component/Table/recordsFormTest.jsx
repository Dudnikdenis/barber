import React from "react";
import { Controller, useFormContext } from "react-hook-form"
import cs from './table.module.css';

const RecordsReduxFormTest = (props) => {

    const { control } = useFormContext();
    //const { user: { name, suname }, userIndex } = props
    return (

        <div >
            <Controller
                name="name"
                control={control}
                render={({ field: { value, onChange } }) => (<>
                        <td className={cs.tdTime}>{props.recordse.time}</td>
                        <td className={cs.tdClient}><input className={cs.inputTable} value={props.recordse.clientName} onChange={onChange}></input> </td>
                        <td className={cs.tdSevice}><input className={cs.inputTable} value={props.recordse.procedureName} onChange={onChange}></input></td>
                        <td className={cs.tdSevice}><input className={cs.inputTable} value={props.recordse.procedureName} onChange={onChange}></input></td>
                    
                    
                </>
                    
                )}
            />
      </div>
// ID: 1
// ​
// clientName: "Сергей"
// ​
// comment: "Предупредить за 30 мин"
// ​
// date: "01-01-2020"
// ​
// lineId: "1"
// ​
// procedureCost: "1000"
// ​
// procedureDiscount: "10%"
// ​
// procedureName: "Ногти"
// ​
// time: "08:30"
// ​
// userId: "1"

            // <form onSubmit={props.handleSubmit}> 
            //     <lable></lable> 
            //     <input   name={"clientName"}  />
            //     <input {...props.register("lastName")} name={"service"} />
            //     <input name={"comment"} />
            //     <button>Сохранить</button>
            // </form> 
    )
}

export default RecordsReduxFormTest;
