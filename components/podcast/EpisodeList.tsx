// components/Episodes.tsx
import Carousel from '../podcast/Carousel';

// Sample episode data
const episodeData = [
  {
    id: '1',
    image: '/images/cover-1.png',
    title: 'Self-confidence'
  },
  {
    id: '2',
    image: '/images/cover-2.png',
    title: 'Perplexed Mind'
  },
  {
    id: '3',
    image: '/images/cover-3.png',
    title: 'Women\'s Rights'
  },
  {
    id: '4',
    image: '/images/cover-4.png',
    title: 'Social'
  },
  {
    id: '5',
    image: '/images/cover-5.png',
    title: 'Health'
  }
];

const Episodes = () => {
  return (
    <section className="py-12 px-4 md:px-10 bg-[#F7EDE8]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl m-3 md:text-4xl font-bold">Recent Episodes</h2>
        </div>
        
        <Carousel items={episodeData} autoplaySpeed={5000} />
      </div>
    </section>
  );
};

export default Episodes;