import { menu } from "@/constants/menu";
import { FC } from "react";
import { MenuItem } from "@/components";

const MenuItems: FC = () => {
  return (
    <div className="md:w-[519px] min-h-[412px] mx-auto flex flex-col items-center mt-3 border border-tertiary">
      <div className="w-full h-10 bg-tertiary border border-tertiary">
        <p className="h-full text-primary font-primaryBold flex items-center justify-center">
          Menu Items
        </p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 bg-primary">
        {menu.map((item, index) => (
          <MenuItem
            key={item.name}
            name={item.name}
            image={item.image}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
