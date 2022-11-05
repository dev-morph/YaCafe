import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/map.module.scss'

function Map() {
  let kakaoMap: any
  const [onloaded, setOnloaded] = useState(false)
  const aniArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  // router를 통해 전달되는 query로 어떤 category를 보고자 하는지 판단하고, e.g. around, study, etc...
  // 지도에서 원하는 정보를 출력해주자.

  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`

    document.head.appendChild(mapScript)

    mapScript.addEventListener('load', () => {
      setOnloaded(true)
    })
  }, [])

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao?.maps.load(() => {
        const mapContainer = document.getElementById('map')
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            37.56499921342743,
            126.95961459111493
          ), // 지도의 중심좌표
          level: 5, // 지도의 확대 레벨
          draggable: true,
        }
        kakaoMap = new window.kakao.maps.Map(mapContainer, mapOption)
      })
    }
    onLoadKakaoMap()
  }, [onloaded])

  useEffect(() => {
    ;(function recur(i: number) {
      if (i < 5) {
        setTimeout(() => {
          console.log('i is', i)
          i++
          recur(i)
        }, 1000)
      }
    })(0)
  }, [])

  function getCoordinates() {
    // const position = window.kakao.maps.getCenter();
    console.log('position', kakaoMap.getCenter())
    return
  }

  return (
    <>
      <div id="map" className="w-full h-full"></div>
      <div className={styles.animation__wrapper}>
        {aniArray.map((el) => {
          return <div key={el} className={styles.items}></div>
        })}
      </div>
    </>
  )
}

export default Map
