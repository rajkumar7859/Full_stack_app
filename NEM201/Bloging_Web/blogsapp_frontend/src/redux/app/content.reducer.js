import { FAILUER_USERDATA, REQUEST_USERDATA, SUCCESS_USERDATA } from "./content.actiontype";

const initialData=
    {
        pageLoading:false,
        userPostData:[],
        error:false
    }

export const UserBlogDatareducer=(state=initialData ,({type,payload})=>{
    switch (type) {
        case REQUEST_USERDATA:{
            return {
                ...state,
                pageLoading:true,
                error:false
            };
        }
       case SUCCESS_USERDATA:{
        return {
            ...state,
            userPostData:payload,
            pageLoading:false,
            error:false
        };
       }
    case FAILUER_USERDATA:{
        return {
            ...state,
            pageLoading:false,
            error:true
        }
    }
        default:
            return state;
    }
})