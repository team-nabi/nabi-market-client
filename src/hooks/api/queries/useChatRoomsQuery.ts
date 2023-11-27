import { useInfiniteQuery } from '@tanstack/react-query'
import { LIST_STALE_TIME } from '@/constants/staleTime'
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
    staleTime: LIST_STALE_TIME,
  })
}
