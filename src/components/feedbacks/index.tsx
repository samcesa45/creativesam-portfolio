'use client';
import { testimonials } from '@/constants';
import Image, { StaticImageData } from 'next/image';
import { styles } from '@/constants/styles';

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="bg-[#ff9301] dark:bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]">
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </div>
      </div>
      <div className="-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;

type Props = {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string | StaticImageData;
};
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: Props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay=""
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-blackmtext-[48px]">{`"`}</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div
          className="mt-7 flex justify-between items-center gap-1
        "
        >
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <Image
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  );
};
