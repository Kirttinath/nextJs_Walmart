import fetchProduct from "@/lib/fetchProduct";

type Props = {
  searchParams: {
    url: string;
  };
};
const productPage = async ({ searchParams: { url } }: Props) => {
  const product = await fetchProduct(url);
  console.log(product);

  return <div>Product</div>;
};

export default productPage;
