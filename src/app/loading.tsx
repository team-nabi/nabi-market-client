'use client'

import Lottie from 'react-lottie-player'
import lottieJson from '/public/loading.json'

const Loading = () => {
  return (
    <div className="flex-1 w-full h-full text-center z-[100]">
      <div className="flex z-[100] flex-col items-center w-[320px] h-[360px] absolute top-0 left-1/2 translate-y-[50%] translate-x-[-50%] ">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <p className="font- text-[20px]">잠시만 기다려 주세요.</p>
      </div>
    </div>
  )
}

export default Loading
