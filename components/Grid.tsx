"use client";

import { getGridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const Grid = () => {
  const { isFrench } = useLanguage();
  const gridItems = getGridItems(isFrench);

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
