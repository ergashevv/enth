import { NewsCard } from "@/components/News/NewsCard";
import { SearchFilter } from "@/components/News/NewsFilter";
import { Pagination } from "@/components/News/Pagination";

export default function NewsPage() {
  const newsData = [
    {
      title: "Calvin Klein: скидки до -50%!",
      description: "Выгодные предложения и эксклюзивные бонусы от известного бренда!",
      date: "20.02.2025",
      image: "/icons/news.png",
    },
    {
      title: "Новая коллекция весна-2025",
      description: "Свежие тренды и эксклюзивные модели от ведущих дизайнеров",
      date: "22.02.2025",
      image: "/icons/news.png",
    },
    {
      title: "Calvin Klein: скидки до -50%!",
      description: "Выгодные предложения и эксклюзивные бонусы от известного бренда!",
      date: "20.02.2025",
      image: "/icons/news.png",
    },
    {
      title: "Новая коллекция весна-2025",
      description: "Свежие тренды и эксклюзивные модели от ведущих дизайнеров",
      date: "22.02.2025",
      image: "/icons/news.png",
    },
    {
      title: "Calvin Klein: скидки до -50%!",
      description: "Выгодные предложения и эксклюзивные бонусы от известного бренда!",
      date: "20.02.2025",
      image: "/icons/news.png",
    },
    {
      title: "Новая коллекция весна-2025",
      description: "Свежие тренды и эксклюзивные модели от ведущих дизайнеров",
      date: "22.02.2025",
      image: "/icons/news.png",
    },
    {
      title: "Calvin Klein: скидки до -50%!",
      description: "Выгодные предложения и эксклюзивные бонусы от известного бренда!",
      date: "20.02.2025",
      image: "/icons/news.png",
    },
    {
      title: "Новая коллекция весна-2025",
      description: "Свежие тренды и эксклюзивные модели от ведущих дизайнеров",
      date: "22.02.2025",
      image: "/icons/news.png",
    },
  ];
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-8">
      <h1 className="font-montserrat font-bold text-[28px] sm:text-[36px] md:text-[50px] leading-[120%] text-[#0060AE] mb-8">
        Новости и акции
      </h1>
      <SearchFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {newsData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            description={item.description}
            date={item.date}
            image={item.image}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
}