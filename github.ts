async function getRepos() {
  const json = await fetch(`https://api.alternative.me/fng/?limit=1`).then(
    (res) => res.json()
  )
  const item = json.data[0]
  console.log(`${item.value_classification}: ${item.value}`)
}
