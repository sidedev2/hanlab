import { SubHeader, GalleryCard } from '@/components';
import { galleryData } from '@/constants/galleryData';

const Page = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-start'>
        <SubHeader title='Gallery' />
      </div>
      <div className='mx-8 my-8 lg:mx-30 lg:my-16'>
        <div className='grid grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-15'>
          {galleryData.map((item) => (
            <GalleryCard
              key={item.id}
              src={item.src}
              title={item.title}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
