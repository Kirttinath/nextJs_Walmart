import fetchProduct from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

type Props = {
  searchParams: {
    url: string;
  };
};
const productPage = async ({ searchParams: { url } }: Props) => {
  const product = await fetchProduct(url);
  if (!product) return notFound();

  return (
    <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4">
        {product.images.map((image, i) => (
          <Image
            key={image}
            src={image}
            alt={product.title + "" + i}
            width={90}
            height={90}
            className="border rounded-sm"
          />
        ))}
      </div>
      <Carousel
        opts={{ loop: true }}
        className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx:20"
      >
        <CarouselContent>
          {product.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-2 realative">
                  <Image
                    key={image}
                    src={image}
                    alt={product.title + "" + i}
                    height={400}
                    width={400}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default productPage;
