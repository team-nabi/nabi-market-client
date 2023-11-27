'use client'

import Lottie from 'react-lottie-player'
import lottieJson from '../../public/loading.json'

const Loading = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="flex flex-col items-center w-[320px] h-[360px] absolute left-1/2 translate-y-[50%] translate-x-[-50%] ">
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
