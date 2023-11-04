import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

export type GetItems = {
  category: string[]
  priceRange: string
  name: string
  status: string[]
  size: number
  cursorId: number
}

const getItems = async ({
  category,
  priceRange,
  name,
  status,
  size,
  cursorId,
}: GetItems) => {
  const response = await apiClient.get(ApiEndPoint.items(cursorId))
  return response.json()
}

const getItemInfo = async(itemId:string) =>{
        const response = await apiClient.get(ApiEndPoint.item(itemId))
        return response    
}

export { getItems, getItemInfo }
