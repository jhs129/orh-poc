import { useState, useEffect } from "react";
import { getDefaultContent } from "./logo-carousel.content";
import Image from "next/image";
import ArrowNav from "./arrow-nav";


function LogoCarousel(props) {
  let content = props.slides;
  if (!props.slides) {
    content = getDefaultContent();
  }

  const [slides, setSlides] = useState([]);
  const [slideCount, setSlideCount] = useState(4);

  useEffect(() => {
    const updateSlideCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) { // Tailwind's default breakpoint for 'sm'
        setSlideCount(1);
      } else if (screenWidth >= 480 && screenWidth <= 1024) { // Custom breakpoint for 'md'
        setSlideCount(4);
      } else {
        setSlideCount(5);
      }
    };

    updateSlideCount();
    window.addEventListener('resize', updateSlideCount);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateSlideCount);
  }, []); 

  useEffect(() => {
    setSlides(content.slice(0, slideCount));
  }, [slideCount]);

    const shiftSlides = (direction) => {
      setSlides((prevSlides) => {
        let newIndex;
        if (direction === 'forward') {
          newIndex = (content.indexOf(prevSlides[prevSlides.length - 1]) + 1) % content.length;
          return [...prevSlides.slice(1), content[newIndex]];
        } else {
          const firstItemIndex = content.indexOf(prevSlides[0]) - 1;
          newIndex = firstItemIndex < 0 ? content.length - 1 : firstItemIndex;
          return [content[newIndex], ...prevSlides.slice(0, prevSlides.length - 1)];
        }
      });
    };


  const length = slides.length;

  
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='flex flex-row items-center py-8'>
      <div className="flex flex-row mx-auto">
      <a className="my-auto" onClick={() => shiftSlides('reverse')}><ArrowNav height = '60' width = '60' lineWidth='1' circleColor = '#CF4B08' arrowColor = '#FFF' iconType = 'reverse'/></a>
      <div className='flex flex-col md:flex-row space-x-4 h-48'>
        {slides.map((slide, index) => (
          <Image src={slide.image} alt={slide.alt} key={index} width={200} height={200} />
        ))}
      </div>
      <a className='my-auto' onClick={() => shiftSlides('forward')}><ArrowNav height = '60' width = '60' lineWidth='1' circleColor = '#CF4B08' arrowColor = '#FFF' iconType = 'forward'/></a>
          </div>
    </section>
  );
}

export default LogoCarousel;
