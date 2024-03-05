export async function load({ fetch }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  if (res.ok) {
    const guides = await res.json();
    return { guides };
  } else {
    return {
      status: res.status,
      error: new Error("Could not fetch the guides"),
    };
  }
}
