import Image from 'next/image';

type GalleryCardProps = {
  src: string;
  title: string;
  date: string;
};

const GalleryCard = ({ src, title, date }: GalleryCardProps) => {
  return (
    <div className='group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl'>
      <div className='relative aspect-[4/3] w-full overflow-hidden bg-gray-100'>
        <Image
          src={src}
          alt={title}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>

      <div className='p-4 lg:p-6'>
        <h3 className='mb-2 line-clamp-2 text-[1.8rem] font-semibold text-gray-800 lg:text-[2rem]'>
          {title}
        </h3>
        <p className='text-[1.6rem] text-gray-500 lg:text-[1.8rem]'>{date}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
