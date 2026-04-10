import { getGalleryItems } from '@/api/gallary';
import { SubHeader, GalleryCard } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: '한현호 교수 연구실 갤러리. 연구실 활동 및 행사 사진.',
};

const Page = async () => {
  const items = await getGalleryItems();

  return (
    <div className='min-h-screen'>
      <div className='flex flex-col items-center justify-start'>
        <SubHeader title='Gallery' />
      </div>
      <div className='mx-8 my-8 lg:mx-30 lg:my-16'>
        <div className='grid grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-15'>
          {items.map((item) => (
            <GalleryCard
              key={item.id}
              src={item.src ?? ''}
              title={item.title ?? ''}
              date={item.date ?? ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
