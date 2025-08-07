'use client';

import { cn } from '@/util/cn';
import NextImage from 'next/image';
import { PropsWithChildren, useState } from 'react';

const ImageCarousel = ({ children }: PropsWithChildren) => {
  const images = ['/assets/hanlab_main.png', '/assets/hanlab_main2.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
    if (isRightSwipe) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }

    // 터치 값 초기화
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className='relative flex justify-center items-center w-dvw h-dvh'>
      {/* children이 있다면 children을 렌더링 */}
      {children}
      {/* lg 이상: opacity 방식 */}
      <div className='hidden lg:contents'>
        {images.map((image, index) => (
          <NextImage
            key={index}
            src={image}
            alt={`Hanlab Main Image ${index + 1}`}
            fill
            className={`-z-10 object-cover transition-opacity duration-700 ease-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* lg 미만: 터치 슬라이드 방식 */}
      <div
        className='lg:hidden w-full h-full overflow-hidden'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className='flex h-full transition-transform duration-500 ease-out'
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className='relative min-w-full h-full'>
              <NextImage
                src={image}
                alt={`Hanlab Main Image ${index + 1}`}
                fill
                unoptimized={true}
                quality={100}
                className='-z-10 object-cover'
              />
            </div>
          ))}
        </div>
      </div>

      {/* 이전/다음 버튼 (lg 이상에서만) */}
      <NextImage
        src='/assets/prev.svg'
        alt='Previous Image'
        className='absolute hidden lg:block w-[4rem] h-[4rem] left-4 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-200'
        width={40}
        height={40}
        onClick={() =>
          setCurrentImageIndex(
            (currentImageIndex - 1 + images.length) % images.length
          )
        }
      />
      <NextImage
        src='/assets/next.svg'
        alt='Next Image'
        width={40}
        height={40}
        className='absolute hidden lg:block w-[4rem] h-[4rem] right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-200'
        onClick={() =>
          setCurrentImageIndex((currentImageIndex + 1) % images.length)
        }
      />

      {/* 인디케이터 점 */}
      <div className='flex gap-[1rem] absolute bottom-[2rem] left-1/2 -translate-x-1/2'>
        {Array.from({ length: images.length }).map((_, index) => (
          <button
            key={index}
            className={cn(
              ' w-3 h-3  rounded-full cursor-pointer',
              index === currentImageIndex
                ? 'bg-main-white '
                : 'bg-transparent border-[0.1rem] border-main-white'
            )}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
