import Container from "@/components/Container";
import Image from "next/image";

const Intro = ({ data, platforms = [] }) => {
  return (
    <section className="bg-[url('/intro-bg.png')] bg-cover bg-center bg-no-repeat w-full">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen pb-[70px] pt-[100px] gap-10 md:gap-6">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight md:leading-[120%] text-white text-center sm:text-start">
              {data?.title}
            </h1>
            <p className="text-white/70 text-base sm:text-lg md:text-xl mt-4 md:mt-6 text-center sm:text-start">
              {data?.message}
            </p>
            <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] md:hidden flex items-center justify-center mx-auto mt-10">
              {data?.image && (
                <Image
                  width={400}
                  height={400}
                  src={data.image}
                  alt="Поставка, продажа и покупка металлов и сплавов - профессиональные услуги"
                  priority
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              )}
            </div>
            <div>
              <p className="text-white text-base sm:text-lg mt-8 md:mt-10 mb-3">
                Скачайте наше приложение уже сегодня!
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
                {platforms.map((platform, index) => (
                  <button
                    key={platform.id || index}
                    className="bg-white cursor-pointer text-black rounded-lg px-5 py-3 font-semibold hover:bg-gray-200 transition inline-flex items-center justify-center gap-3"
                  >
                    {platform.icon && (
                      <Image width={25} src={platform.icon} alt="ad" />
                    )}
                    <span>{platform.display_name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] hidden md:flex items-center justify-center">
            <Image
              width={400}
              height={400}
              src={data.image}
              alt="Поставка, продажа и покупка металлов и сплавов - профессиональные услуги"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
