'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

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

    // 지도 옵션 설정
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 2,
    };

    const map = new window.kakao.maps.Map(container, mapOption);
    const geocoder = new window.kakao.maps.services.Geocoder();

    // 주소로 좌표 검색
    geocoder.addressSearch(
      '서울시 서대문구 연세로 50-1, 연세대학교 의과대학 연세의생명연구원, 에비슨 의생명연구센터 508호',
      (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 마커 생성
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
          });

          const infowindow = new window.kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">HANLAB</div>',
          });
          infowindow.open(map, marker);
          map.setCenter(coords);
        }
      }
    );
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
        className='rounded-base relative h-[calc(100dvh-480px)] w-full overflow-hidden rounded-2xl bg-gray-100'
      >
        {children}
      </div>
    </div>
  );
};

export default KakaoMap;
