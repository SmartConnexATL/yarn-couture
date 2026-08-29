'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  src: string;
  alt: string;
  caption: string;
}

export function Slideshow() {
  const slides: Slide[] = [
    { src: '/ycphotos/1000134249.jpg', alt: 'Handcrafted navy crochet cardigan', caption: 'Handcrafted with passion' },
    { src: '/ycphotos/1000134240.jpg', alt: 'Dyed dusty rose crochet halter', caption: 'Dyed with intention' },
    { src: '/ycphotos/1000134241.jpg', alt: 'Multi-colored purple and pink cardigan', caption: 'Crafted for makers' },
    { src: '/ycphotos/1000134242.jpg', alt: 'Sage green long cardigan', caption: 'Quality in every stitch' },
    { src: '/ycphotos/1000134243.jpg', alt: 'Green cardigan with open knit', caption: 'Uniquely yours' },
    { src: '/ycphotos/1000134244.jpg', alt: 'Sage cardigan with multicolor accents', caption: 'Thoughtful design' },
    { src: '/ycphotos/1000134245.jpg', alt: 'Green cardigan with navy and yellow details', caption: 'Made with care' },
    { src: '/ycphotos/1000134246.jpg', alt: 'Earthy tone knit sweater', caption: 'Artisan crafted' },
    { src: '/ycphotos/1000134247.jpg', alt: 'Tan and green crochet with botanical pattern', caption: 'Nature inspired' },
    { src: '/ycphotos/1000134248.jpg', alt: 'Coral red crochet top', caption: 'Vibrant expression' },
    { src: '/ycphotos/1000134250.jpg', alt: 'Navy cape back view', caption: 'Attention to detail' },
    { src: '/ycphotos/1000134286.jpg', alt: 'Wine and gold cardigan', caption: 'Elegant and timeless' },
    { src: '/ycphotos/1000134288.jpg', alt: 'Multi-color crochet shrug', caption: 'Wearable art' },
    { src: '/ycphotos/1000134290.jpg', alt: 'Red and gold knit dress', caption: 'Believe in quality' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const totalSlides = slides.length;

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-h2 font-bold text-foreground mb-3">Our Story</h2>
          <p className="text-body text-muted max-w-2xl mx-auto">
            Handcrafted with passion, dyed with intention, and designed for makers who believe in quality.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
          {/* Progress Bar */}
          <div
            className="absolute top-0 left-0 h-1 bg-primary z-20 transition-all duration-100"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />

          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-800 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 1280px) 100vw, 100vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <h3 className="text-h3 font-medium text-white mb-2">{slide.caption}</h3>
                <p className="text-small text-white/80">{index + 1} / {totalSlides}</p>
              </div>
            </div>
          ))}

          {/* Dots Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white w-7 rounded-sm'
                    : 'bg-white/40 hover:bg-white/60 w-2.5 rounded-full'
                } h-2.5`}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 text-white rounded-lg flex items-center justify-center transition-all text-lg font-bold"
              title="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 text-white rounded-lg flex items-center justify-center transition-all text-sm font-bold"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 text-white rounded-lg flex items-center justify-center transition-all text-lg font-bold"
              title="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
