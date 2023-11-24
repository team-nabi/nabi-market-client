import { useInfiniteQuery } from '@tanstack/react-query'
import {
  GetChatRoomListRes,
  getChatRoomList,
} from '@/services/chat-room/chatRoom'

export const useChatRoomsQuery = () => {
  return useInfiniteQuery({
    queryKey: ['chat-rooms'],
    queryFn: async ({ pageParam = undefined }) =>
      await getChatRoomList({
        cursorId: pageParam,
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage: GetChatRoomListRes) => {
      return lastPage.data.nextCursorId
    },
  })
}
