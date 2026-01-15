'use client';

import Script from 'next/script';
import { useRef } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  children?: React.ReactNode;
}

const KakaoMap = ({ children }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
  const KAKAO_MAP_API_URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services&autoload=false`;

  const loadMap = () => {
    const container = mapRef.current;
    if (!container) return;

    // 에비슨 의생명연구센터 좌표
    const coords = new window.kakao.maps.LatLng(37.563982, 126.942502);

    // 지도 옵션 설정
    const mapOption = {
      center: coords,
      level: 2,
    };

    const map = new window.kakao.maps.Map(container, mapOption);

    // 마커 생성
    new window.kakao.maps.Marker({
      map: map,
      position: coords,
    });

    const content = `
      <div style="
        position: relative;
        left: 5px;
        bottom: 50px;
        background: white;
        padding: 12px 20px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-family: 'Pretendard', sans-serif;
      ">
        <div style="
          font-size: 15px;
          font-weight: 700;
          color: #0B2530;
          margin-bottom: 4px;
        ">HANLAB</div>
        <div style="
          font-size: 12px;
          color: #666;
        ">연세대학교 에비슨의생명연구센터</div>
        <div style="
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid white;
        "></div>
      </div>
    `;

    new window.kakao.maps.CustomOverlay({
      map: map,
      position: coords,
      content: content,
      yAnchor: 1,
    });
  };

  return (
    <div>
      <Script
        src={KAKAO_MAP_API_URL}
        strategy='afterInteractive'
        onReady={() => {
          if (window.kakao?.maps) {
            window.kakao.maps.load(loadMap);
          }
        }}
      />

      <div
        ref={mapRef}
        className='rounded-base relative h-[25rem] w-full overflow-hidden rounded-2xl bg-gray-100 lg:h-[calc(100dvh-480px)]'
      >
        {children}
      </div>
    </div>
  );
};

export default KakaoMap;
