import apiClient from "../apiClient"
import ApiEndPoint from "@/config/apiEndPoint"

const getItemInfo = async(itemId:string) =>{
    try {
        const res = await apiClient.get(ApiEndPoint.item(itemId));
        return res
    } catch (error) {
        console.error(error)
    }
    
}

export {getItemInfo}