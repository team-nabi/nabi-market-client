import apiClient from "../apiClient"
import ApiEndPoint from "@/config/apiEndPoint"

const getItemInfo = async(itemId:string) =>{
    console.log(itemId)
        const response = await apiClient.get(ApiEndPoint.item(itemId), { next: { revalidate: 10 } },
        {
          'Content-Type': 'application/json',
        }
        )
        return response    
}

export {getItemInfo}