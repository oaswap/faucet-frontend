export async function callRelayer(mainnetProvider, walletAddress) {
  console.log("ajksdfsad");
  if (!walletAddress) throw new Error(`Address cannot be empty`);
  const url = process.env.REACT_APP_RELAYER_URL;
  const request = { address: walletAddress };
  console.log(request);

  return fetch(url, {
    method: "POST",
    mode: 'cors',
    body: JSON.stringify(request),
    headers: { "Content-Type": "application/json" },
  });
}
