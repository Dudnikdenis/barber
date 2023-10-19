import React from "react";
import { useForm } from "react-hook-form";
import cs from './table.module.css';


const RecordsReduxForm = (props) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            clientName: props.records.clientName,
            service: props.records.procedureName,
            comment: props.records.comment,
        },
      });

    const submit = (formData) =>{
        props.Update(formData);
    }

    const blur = () =>{
        props.UpdateOnBlur();
    }

    return (
            <form onSubmit={handleSubmit(submit)}> 
                <table className={cs.tab_total}>
                    <tr onBlur={blur}>
                        <td className={cs.tdTimeForm}>{props.records.time}</td>
                        <td><input className={cs.tdClientForm} {...register("clientName")}  type="text" /></td>
                        <td><input className={cs.tdSeviceForm} {...register("service")}  type="text" /></td>
                        <td><input className={cs.tdSeviceForm} {...register("comment")}  type="text" /></td>
                    </tr>
                </table>
                <button className={cs.but}>Сохранить</button>
            </form> 
    )
}

export default RecordsReduxForm;