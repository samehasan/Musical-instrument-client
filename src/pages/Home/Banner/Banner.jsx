import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <Carousel>
            <div>
               <img src="https://images.squarespace-cdn.com/content/5e5cd082c50ea102c52e5bb0/1607277497754-ZC0Z8NP16S7L4R2K6W59/bamboo-musical-instruments.jpg?format=1500w&content-type=image%2Fjpeg" alt="" />
            </div>
            <div>
            <img src="https://englishstudyonline.org/wp-content/uploads/2019/06/Musical-Instruments-1-1.jpg.webp" alt="" />
            </div>
            <div>
            <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/e0/2e/t-t-544-musical-instrument-flashcards_ver_3.jpg" alt="" />
            </div>
           
        </Carousel>
    );
};

export default Banner;