import { clientAPI, userAPI } from "../API/api";

//const тип action = "тип action"; пример action
const ADD_CLIENT = "ADD_CLIENT"; 
const UPDATE_TIME = "UPDATE_TIME"; 
const UPDATE_CLIENT_NAME = "UPDATE_CLIENT_NAME"; 
const UPDATE_SERVICE = "UPDATE_SERVICE";
const UPDATE_COMMENT = "UPDATE_COMMENT";
const SET_CLIENT = "SET_CLIENT";
const SET_IS_DID_MOUNT = "SET_IS_DID_MOUNT"
const DELITE_CLIENT = "DELITE_CLIENT"

let initialState = {
    master:[],
    workTime:["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30"]
    
};

let masterReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type){
        case SET_CLIENT: 
        
        stateCopy = {...state,master:[]};
        let Idrecordse = 0;
        for (let i = 0;i<action.master.length;i++){
            let recordseIndex = 0;
            
            for(let j=0;j<stateCopy.workTime.length;j++){
                let time = !!action.master[i].userRecords[recordseIndex];
                console.log(time&& action.master[i].userRecords[recordseIndex].time===state.workTime[j]);
                if(stateCopy.master[i]===undefined){
                    stateCopy.master.push({
                        userId: action.master[i].userId,
                        userName: action.master[i].userName,
                        date: action.master[i].date,
                        userRecords: []
                    });

                    if(time&& action.master[i].userRecords[recordseIndex].time===state.workTime[j])
                    {
                        stateCopy.master[i].userRecords.push({
                                "ID": Idrecordse,
                                "lineId": `${action.master[i].userRecords[recordseIndex].lineId}`,
                                "userId": `${action.master[i].userRecords[recordseIndex].userId}`,
                                "date": `${action.master[i].userRecords[recordseIndex].date}`,
                                "time": `${action.master[i].userRecords[recordseIndex].time}`,
                                "clientName": `${action.master[i].userRecords[recordseIndex].clientName}`,
                                "procedureName": `${action.master[i].userRecords[recordseIndex].procedureName}`,
                                "procedureCost": `${action.master[i].userRecords[recordseIndex].procedureCost}`,
                                "procedureDiscount": `${action.master[i].userRecords[recordseIndex].procedureDiscount}`,
                                "comment": `${action.master[i].userRecords[recordseIndex].comment}`
                            });
                            Idrecordse++;
                            if(action.master[i].userRecords.length>=recordseIndex){
                                recordseIndex++;
                            }
                    }
                    else
                    {
                        stateCopy.master[i].userRecords.push({
                            "ID": Idrecordse,
                            "lineId": -1,
                            "userId": `${stateCopy.master[i].userId}`,
                            "date": `${stateCopy.master[i].date}`,
                            "time": `${state.workTime[j]}`,
                            "clientName": "",
                            "procedureName": "",
                            "procedureCost": "",
                            "procedureDiscount": "%",
                            "comment": ""
                        });
                        Idrecordse++;
                    }
                }
                else if(time&& action.master[i].userRecords[recordseIndex].time===state.workTime[j])
                    {
                        stateCopy.master[i].userRecords.push({
                                "ID": Idrecordse,
                                "lineId": `${action.master[i].userRecords[recordseIndex].lineId}`,
                                "userId": `${action.master[i].userRecords[recordseIndex].userId}`,
                                "date": `${action.master[i].userRecords[recordseIndex].date}`,
                                "time": `${action.master[i].userRecords[recordseIndex].time}`,
                                "clientName": `${action.master[i].userRecords[recordseIndex].clientName}`,
                                "procedureName": `${action.master[i].userRecords[recordseIndex].procedureName}`,
                                "procedureCost": `${action.master[i].userRecords[recordseIndex].procedureCost}`,
                                "procedureDiscount": `${action.master[i].userRecords[recordseIndex].procedureDiscount}`,
                                "comment": `${action.master[i].userRecords[recordseIndex].comment}`
                            });
                            Idrecordse++;
                            if(action.master[i].userRecords.length>=recordseIndex){
                                recordseIndex++;
                            }
                    }
                    else
                    {
                        stateCopy.master[i].userRecords.push({
                            "ID": Idrecordse,
                            "lineId": -1,
                            "userId": `${stateCopy.master[i].userId}`,
                            "date": `${stateCopy.master[i].date}`,
                            "time": `${state.workTime[j]}`,
                            "clientName": "",
                            "procedureName": "",
                            "procedureCost": "",
                            "procedureDiscount": "%",
                            "comment": ""
                        });
                        Idrecordse++;
                    }
            }
        }
        action.master = [];
        return stateCopy;


        // console.log(state.master.toString() !== action.master.toString());
        //     if(state.master.toString() !== action.master.toString())
        //     {
        //         stateCopy = {...state};
        //         stateCopy.master = [...state.master, ...action.master];
        //         for (let i = 0;i<stateCopy.master.length;i++){
        //             stateCopy.master[i].userRecords = [ ...action.master[i].userRecords]
        //         }
        //         return stateCopy;
              
        //     }
        //     else return {...state};

        default: 
            return state
    }
};

// export const название-диспатча = (параметр) => ({type: название action, параметр}); пример dispatch или добавляем thunk
export const AddClientCreator = (newClient,masterId) => ({type: ADD_CLIENT, newClient,masterId});
export const SetClientCreator = (master) => ({type:SET_CLIENT,master});
//export const DeliteClientCreator = (i) => ({type:DELITE_CLIENT,i})
export const getClient = (id, startDate, endDate) => {   // Thunk
    return (dispatch) => {
        //dispatch(DeliteClientCreator());
        clientAPI.GetClient(id, startDate, endDate).then(response => {
        dispatch (SetClientCreator(response))
      });
    };
}

export const deliteRecordsUser = (id, lineId, startDate, endDate) => { //id,, startDate, endDate
    return (dispatch) => {
        clientAPI.DeliteRecordsUser(lineId).then(response=>{
            if(response==="NO_CONTENT")
            {
                clientAPI.GetClient(id, startDate, endDate).then(response => {
                    dispatch (SetClientCreator(response))});
            }
        });
        
    };
}

export const addRecordsUser= (userId, records, startDate, endDate) => { 
    return (dispatch) => {
       // dispatch(DeliteClientCreator());
        clientAPI.recordsUser(userId, records).then(response => {
            if(response==="OK")
            {
                clientAPI.GetClient(userId, startDate, endDate).then(response => {
                        dispatch (SetClientCreator(response))});
            }
          });
    };
}

export const updateRecordsUser = (userId, lineId, records, startDate, endDate) => { 
    return (dispatch) => {
        //dispatch(DeliteClientCreator());
        clientAPI.UpdateRecordsUser(lineId, records).then(response=>{
            if(response==="OK")
            {
                clientAPI.GetClient(userId, startDate, endDate).then(response => {
                    dispatch (SetClientCreator(response))});
            }
        });
    };
}

export default masterReducer;
