import Lottie from 'react-lottie-player'
import lottieJson from '/public/loading.json'

const InfiniteScrollLoading = () => (
  <Lottie
    loop
    animationData={lottieJson}
    play
    style={{
      width: '100%',
      height: '150px',
    }}
  />
)

export default InfiniteScrollLoading
