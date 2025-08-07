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
    <div className='relative flex h-dvh w-dvw items-center justify-center'>
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
        className='h-full w-full overflow-hidden lg:hidden'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className='flex h-full transition-transform duration-500 ease-out'
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className='relative h-full min-w-full'>
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
        className='absolute top-1/2 left-4 hidden h-[4rem] w-[4rem] -translate-y-1/2 cursor-pointer transition-transform duration-200 hover:scale-110 lg:block'
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
        className='absolute top-1/2 right-4 hidden h-[4rem] w-[4rem] -translate-y-1/2 cursor-pointer transition-transform duration-200 hover:scale-110 lg:block'
        onClick={() =>
          setCurrentImageIndex((currentImageIndex + 1) % images.length)
        }
      />

      {/* 인디케이터 점 */}
      <div className='absolute bottom-[2rem] left-1/2 flex -translate-x-1/2 gap-[1rem]'>
        {Array.from({ length: images.length }).map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-3 w-3 cursor-pointer rounded-full',
              index === currentImageIndex
                ? 'bg-main-white'
                : 'border-main-white border-[0.1rem] bg-transparent'
            )}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
