type Props = {
  searchParams: {
    url: string;
  };
};
const productPage = async ({ searchParams: { url } }: Props) => {
    const product = await fetchProduct(url);
  return <div>Product</div>;
};

export default productPage;
