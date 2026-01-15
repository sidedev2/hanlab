type AboutCardProps = {
  label: string;
  paragraphs: string[];
  variant?: 'primary' | 'secondary';
};

const AboutCard = ({
  label,
  paragraphs,
  variant = 'primary',
}: AboutCardProps) => {
  const badgeStyle =
    variant === 'primary'
      ? 'bg-blue-530 text-white'
      : 'bg-blue-2fe/40 text-blue-530';

  return (
    <div className='rounded-2xl border border-gray-100 bg-white p-10 shadow-lg'>
      <div className={`${badgeStyle} mb-6 inline-block rounded-full px-4 py-2`}>
        <span className='text-[1.4rem] font-semibold'>{label}</span>
      </div>
      {paragraphs.map((text, index) => (
        <p
          key={index}
          className={`text-gray-600 text-[1.6rem] leading-[2.8rem] ${index > 0 ? 'mt-6' : ''}`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default AboutCard;
