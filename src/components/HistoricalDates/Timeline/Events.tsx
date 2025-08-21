import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Event } from './Event';
import { Category } from '../../../types/timeline';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface EventsProps {
  currentCategory: Category | null;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
    },
  },
};

export const Events = ({ currentCategory }: EventsProps) => {
  if (
    !currentCategory ||
    !currentCategory.events ||
    currentCategory.events.length === 0
  ) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentCategory.id}
        className="events"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: '.events__nav--next',
            prevEl: '.events__nav--prev',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 25,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
          className="events__slider"
        >
          {currentCategory.events.map((event, i) => (
            <SwiperSlide key={i}>
              <Event year={event.year} title={event.title} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="events__navigation">
          <button className="events__nav events__nav--prev">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 1L2 6L7 11" stroke="#3877EE" strokeWidth="2" />
            </svg>
          </button>
          <button className="events__nav events__nav--next">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
