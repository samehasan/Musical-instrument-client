import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";



const Category = () => {
    return (
        <section>
            <h1 className="mb-5 text-xl font-bold text-center">Instruments</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img className="w-full h-80 object-cover" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/505818/1024146/main-image" alt="" />
                    {/* <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3> */}
                </SwiperSlide>

                <SwiperSlide>
                <img className="w-full h-80 object-cover" src="https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                <img className="w-full h-80 object-cover" src="https://cdn.britannica.com/27/176327-050-67702AB2/Violin.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="w-full h-80 object-cover" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/505818/1024146/main-image" alt="" />
                    {/* <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3> */}
                </SwiperSlide>

                <SwiperSlide>
                <img className="w-full h-80 object-cover" src="https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                <img className="w-full h-80 object-cover" src="https://cdn.britannica.com/27/176327-050-67702AB2/Violin.jpg" alt="" />
                </SwiperSlide>
                
              
            </Swiper>
        </section>
    );
};

export default Category;