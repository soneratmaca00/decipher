import {DEPOSITCHANGE} from '../actions/actionTypes'


const initState = {
    deposit:''
}


const rootReducer = (state=initState,action) =>{
    console.log(action)
    switch (action.type) {
        case DEPOSITCHANGE:
            console.log('actionpayload ',action.payload)
            return  {...state,deposit:action.payload}
        default:
            return state
    }
}


export default rootReducer