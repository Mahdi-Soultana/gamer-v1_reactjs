export async function normalFetch(url) {
  const res = await fetch(url)
    .then((resp) => resp.json())
    .catch((e) => {
      console.log("somehig wroooong wih your fetch Fn" + e);
    });

  return res;
}
