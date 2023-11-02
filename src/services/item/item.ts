import apiClient from "../apiClient"
import ApiEndPoint from "@/config/apiEndPoint"

const getItemInfo = async(itemId:string) =>{
        const response = await apiClient.get(ApiEndPoint.item(itemId))
        return response    
}

export {getItemInfo}