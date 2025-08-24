import { useQuery } from "@tanstack/react-query";

export default function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  if (isLoading) return <p className="text-center">Loading posts...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <button onClick={refetch} className="bg-blue-600 text-white px-4 py-1 rounded">
          Refresh
        </button>
      </div>
      <ul className="space-y-2">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-3 rounded shadow">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
