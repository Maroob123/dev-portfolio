import React from 'react';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [testimonials, setTestimonials] = useState([]);
  // const [brands, setBrands] = useState([]);

  // const handleClick = (index) => {
  //   setCurrentIndex(index);
  // };

  // useEffect(() => {
  //   const query = '*[_type == "testimonials"]';
  //   const brandsQuery = '*[_type == "brands"]';

  //   client.fetch(query).then((data) => {
  //     setTestimonials(data);
  //   });

  //   client.fetch(brandsQuery).then((data) => {
  //     setBrands(data);
  //   });
  // }, []);

  return (
    // <>
    //   {testimonials.length && (
    //     <>
    //       <div className="app__testimonial-item app__flex">
    //         <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
    //         <div className="app__testimonial-content">
    //           <p className="p-text">{testimonials[currentIndex].feedback}</p>
    //           <div>
    //             <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
    //             <h5 className="p-text">{testimonials[currentIndex].company}</h5>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="app__testimonial-btns app__flex">
    //         <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
    //           <HiChevronLeft />
    //         </div>

    //         <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
    //           <HiChevronRight />
    //         </div>
    //       </div>
    //     </>
    //   )}

    //   <div className="app__testimonial-brands app__flex">
    //     {brands.map((brand) => (
    //       <motion.div
    //         whileInView={{ opacity: [0, 1] }}
    //         transition={{ duration: 0.5, type: 'tween' }}
    //         key={brand._id}
    //       >
    //         <img src={urlFor(brand.imgUrl)} alt={brand.name} />
    //       </motion.div>
    //     ))}
    //   </div>
    // </>
    <>
    <h2 className="head-text">I occasionally take on <br /> <span>freelance</span> opportunities.</h2>

      <div className="app__profiles">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-itemk"
            key="short_quote"
          >
            {/* <img src={urlFor(about.imgUrl)} alt="short_quote" /> */}
            <h2 className="bold-text" style={{ marginTop: 20, textAlign:'center' }}>
              Have an exciting project where you need some help? Send me over a message, and <a href="#contact">let's chat</a>.
            </h2>
            {/* <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p> */}
          </motion.div>
      </div>
      </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
