import React from "react";
import { Controller, useFormContext } from "react-hook-form"

const RecordsReduxFormTest = (props) => {

    const { control } = useFormContext();
    //const { user: { name, suname }, userIndex } = props
    return (

        <div >
            <span>{props.recordse.time}</span>
            <Controller
                name="name"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <input value={props.recordse.clientName} onChange={onChange}></input> //props.recordse.clientName
                )}
            />
            <Controller
                name="suname"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <input value={props.recordse.procedureName} onChange={onChange}></input>
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
