'use client';

import React, { useState, useEffect, useRef } from 'react';

const SLIDES = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/insya1/1653/650.jpg',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/insya2/1653/650.jpg',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/insya3/1653/650.jpg',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/insya4/1653/650.jpg',
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/insya5/1653/650.jpg',
  },
];

const Announcements: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 15000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    startTimer();
  };

  const prev = () => goTo(current === 0 ? SLIDES.length - 1 : current - 1);
  const next = () => goTo((current + 1) % SLIDES.length);

  return (
    <section className="py-24 bg-bgLight">
      <div className="max-w-7xl mx-auto px-6 font-arabic">
        <div className="relative">
          <div className="w-full overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${current * 100}%)` }}
            >
              {SLIDES.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <img
                    src={slide.image}
                    alt=""
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '1653 / 650' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-softAccent/20 text-darkAccent flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-softAccent/20 text-darkAccent flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current
                    ? 'bg-primary w-8'
                    : 'bg-softAccent/30 hover:bg-softAccent/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;