import apiClient from "../apiClient"
import ApiEndPoint from "@/config/apiEndPoint"

const getItemInfo = async(itemId:string) =>{
    const res = await apiClient.get(ApiEndPoint.item(itemId))
    return res
}

export {getItemInfo}