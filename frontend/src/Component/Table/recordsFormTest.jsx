import React from "react";
import { Controller, useFormContext } from "react-hook-form"

const RecordsReduxFormTest = (props) => {

    const { control } = useFormContext();
    const { user: { name, suname }, userIndex } = props
    return (

        <div className="card">
            <span>Пользователь</span>
            <Controller
                name="name"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <input></input>
                )}
            />
            <Controller
                name="suname"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <input></input>
                )}
            />
      </div>


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
