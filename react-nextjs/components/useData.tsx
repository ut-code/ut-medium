import useSWR from "swr";

	// const { data, error } = useSWR({url}, fetcher);

interface Article {
	id: number;
	title: string;
	author: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	userId: string;
	classification: string;
}


// const url: string = `${process.env.BACKEND_URL}/v1/articles`;

const fetcher = (url: string) => fetch(url).then(r => r.json()).catch(err => console.log(err));

export default function useData() {
	const url= `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/articles`;
	// const { data, error } = useSWR(`https://ut-medium.onrender.com/v1/articles/classification/${classification}`, fetcher);
	const { data, error } = useSWR<Article[]>(url, fetcher);
	// const { data, error } = useSWR(`${process.env.BACKEND_URL}/v1/articles`, fetcher);

	return { data: data, isLoading: !error && !data, isError: error };
}