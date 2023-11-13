// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { useRouter } from 'next/navigation'
// import { toast } from '@/hooks/useToast'
// import { handleApiError } from '@/lib/handleApiError'
// import { postSuggestion } from '@/services/suggestion/suggestion'

// const useSuggestMutation = (toCardId: number, fromCardId: number) => {
//   const queryClient = useQueryClient()
//   const router = useRouter()

//   const queryKey = [toCardId, 'suggestions']
//   return useMutation({
//     mutationFn: postSuggestion,
//     onMutate: async () => {
//       // 롤백을 위한 이전 값 저장
//       const previousSuggestions = queryClient.getQueryData([
//         toCardId,
//         'suggestions',
//       ])

//       await queryClient.cancelQueries({ queryKey })

//       const updateSuggestions = previousSuggestions

//       //낙관적 업데이트
//       const indexToUpdate = previousSuggestions.findIndex(
//         (suggestion) => suggestion.cardId === fromCardId,
//       )
//       updateSuggestions[indexToUpdate].suggestionStatus = 'WAITING'
//       queryClient.setQueryData(queryKey, updateSuggestions)

//       return { previousSuggestions }
//     },
//     onError: (error, _, context) => {
//       queryClient.setQueryData(queryKey, context?.previousSuggestions)
//       const { shouldRedirect } = handleApiError(error)
//       if (shouldRedirect) {
//         router.push(shouldRedirect)
//       } else {
//         console.log(shouldRedirect, error)
//         toast({
//           title: '제안을 실패했습니다',
//           duration: 2000,
//         })
//       }
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey })
//     },
//   })
// }

// export default useSuggestMutation
