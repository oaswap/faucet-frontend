export async function callRelayer(mainnetProvider, walletAddress) {
  if (!walletAddress) throw new Error(`Address cannot be empty`);
  const url = process.env.REACT_APP_RELAYER_URL;
  const request = { address: walletAddress };

  const handleErrors = response => {
    console.log("response", response);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(request),
    headers: { "Content-Type": "application/json" },
  })
    .then(handleErrors)
    .catch(error => console.log(error));
}
