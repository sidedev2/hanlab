type ResearchCardProps = {
  title: string;
  description: string;
};

const ResearchCard = ({ title, description }: ResearchCardProps) => {
  return (
    <div className='cursor-pointer rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl lg:h-150 lg:max-w-xl'>
      <h3 className='text-gray-353 mb-6 text-2xl leading-tight font-bold lg:text-4xl'>
        {title}
      </h3>
      <div className='mb-6 hidden h-px w-full bg-gray-200 lg:block'></div>

      <p className='text-xl leading-relaxed text-gray-600'>{description}</p>
    </div>
  );
};

export default ResearchCard;
