import fetchSearch from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    q: string;
  };
};
async function SearchPage({ searchParams: { q } }: Props) {
  //? Fetch Result
  const results = await fetchSearch(q);
  console.log(results);

  return <div>Searchpage</div>;
}

export default SearchPage;
