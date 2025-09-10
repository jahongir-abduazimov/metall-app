import React from "react";
import Container from "@/components/Container";
import Image from "next/image";

const CTA = ({ platforms = [] }) => {
  return (
    <section>
      <Container>
        <div className="bg-white shadow-lg border rounded-2xl p-6 md:p-10 flex items-center md:flex-row flex-col justify-between gap-10">
          <div className="max-w-[700px]">
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[120%]">
              Готовы начать?
            </h2>
            <p className="text-gray-600 text-[18px] mt-4">
              Присоединяйтесь к тысячам пользователей, которые уже улучшили свой
              рабочий процесс. Зарегистрируйтесь за секунды и откройте все
              возможности сервиса.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            {platforms.map((platform, index) => (
              <button
                key={platform.id || index}
                className="bg-black text-white border cursor-pointer rounded-lg px-3 sm:px-5 py-2 sm:py-3 font-semibold transition flex flex-col sm:flex-row sm:items-center sm:gap-3"
              >
                {platform.icon && (
                  <Image width={25} src={platform.icon} alt="ad" />
                )}
                <span>{platform.display_name}</span>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
