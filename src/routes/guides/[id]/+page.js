export async function load({ fetch, params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (res.ok) {
    const guide = await res.json();
    return { guide };
  } else {
    return {
      status: res.status,
      error: new Error("Could not fetch the guide"),
    };
  }
}
