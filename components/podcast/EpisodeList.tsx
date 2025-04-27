import type { NextPage } from 'next';
import Carousel from './Curousel';

import image1 from '../../public/images/cover-1.png';
import image2 from '../../public/images/cover-2.png';
import image3 from '../../public/images/cover-3.png';
import image4 from '../../public/images/cover-4.png';
import image5 from '../../public/images/cover-4.png';

const EpisodeList: NextPage = () => {
  const images = [
    image1.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
  ];

  return (
    <div>
      <Carousel images={images} interval={4000} />
    </div>
  );
};

export default EpisodeList;