import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r => r.json()).catch(err => console.log(err));

export default function GetData<T>(endpoint: string) {
	// const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/classification/all`;
	const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`;
	const {data, error} = useSWR<T>(url, fetcher);

	return {data: data, isLoading: !error && !data, isError: error};
}