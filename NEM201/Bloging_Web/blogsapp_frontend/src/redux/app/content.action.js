import { REQUEST_USERDATA, SUCCESS_USERDATA } from "./content.actiontype"
import axios from "axios";

export const getUserBlogData=(payload)=> async(dispatch)=>{
   
    await dispatch({type:REQUEST_USERDATA})
    try {
        const data= axios.get('mongodb://127.0.0.1:27017/BlogContent')
        await dispatch({type:SUCCESS_USERDATA})
        console.log(data);
        return data
    } catch (error) {
        console.log("Apis error ");
    }

}