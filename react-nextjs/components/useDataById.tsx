import useSWR from "swr";

	// const { data, error } = useSWR({url}, fetcher);

const fetcher = (url: string) => fetch(url).then(r => r.json()).catch(err => console.log(err));

export default function useDataById(id: string) {
	const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/articles/id/${id}`;
	// const { data, error } = useSWR(`https://ut-medium.onrender.com/v1/articles/classification/${classification}`, fetcher);
	// const { data, error } = useSWR(`${process.env.BACKEND_URL}/v1/articles/id/${id}`, fetcher);
	const { data, error } = useSWR<Post>(url, fetcher);

	return { dataById: data, isLoading: !error && !data, isError: error };
}