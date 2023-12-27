import medusaRequest from "@lib/medusa-fetch"

const ModiWeekPage = async () => {
  const { collections } = await medusaRequest("GET", "/collections")
    .then((res) => res.body)
    .catch((err) => {
      throw err
    })

  return <div>ModiWeekPage</div>
}

export default ModiWeekPage
