import GridOption from "@/Components/GridOption";
import beauty from "../public/beauty.webp";
import electronics from "../public/electronics.jpeg";
import flash from "../public/flash.jpeg";
import freeship from "../public/freeship.webp";
import gadgets from "../public/gadgets.jpeg";
import home from "../public/home.webp";
import matchday from "../public/matchday.jpeg";
import sport from "../public/sport.jpeg";
import sweet from "../public/sweet.webp";
import toys from "../public/toys.jpeg";
import wardrobe from "../public/wardrobe.webp";
export default function Home() {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOption
          title="Sweet gifts for less"
          image={sweet}
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption
          title="Shop Wardrobe"
          image={wardrobe}
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image={home}
          className="bg-pink-200  row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image={electronics}
          className="bg-yellow-100  h-64"
        />
        <GridOption
          title="Shop Toys"
          image={toys}
          className="bg-green-100  h-64 col-span-2"
        />
        <GridOption
          title="All you need for Match day"
          image={matchday}
          className="bg-red-100  col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          image={gadgets}
          className="bg-orange-100  h-64"
        />
        <GridOption
          title="Shop Beauty"
          image={beauty}
          className="bg-blue-100  h-64"
        />
        <GridOption
          title="Shop Sports"
          image={sport}
          className="bg-blue-100  h-64"
        />
        <GridOption
          title="Enjoy Free Shipping"
          image={freeship}
          className="bg-rose-100  h-64"
        />
        <GridOption
          title="Flash Deals"
          image={flash}
          className="bg-orange-200  h-64 col-span-2"
        />
      </div>
    </main>
  );
}
