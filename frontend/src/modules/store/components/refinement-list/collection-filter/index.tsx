import { StoreGetProductsParams } from "@medusajs/medusa"
import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { useCollections } from "medusa-react"
import { ChangeEvent, useEffect, useState } from "react"

type SortCollectionFilterProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
  onCollectionSelect: () => void
}

const CollectionFilter = ({
  refinementList,
  setRefinementList,
  onCollectionSelect, // Thêm prop mới
}: SortCollectionFilterProps) => {
  const { collections, isLoading } = useCollections()
  const [collectionId, setCollectionId] = useState<string | null>(null)
  useEffect(() => {
    // Cập nhật giá trị collectionId khi refinementList.collection_id thay đổi
    setCollectionId(
      refinementList.collection_id && refinementList.collection_id.length > 0
        ? refinementList.collection_id[0]
        : null
    )
  }, [refinementList.collection_id])

  if (!collections) {
    return null
  }

  const collectionMap = collections?.map((c) => ({
    value: c.id,
    label: c.title,
  }))

  const handleCollectionChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    setCollectionId(id)

    const newRefinementList = {
      ...refinementList,
      collection_id: [id],
    }
    setRefinementList(newRefinementList)
    if (onCollectionSelect) {
      onCollectionSelect()
    }
  }

  return (
    <FilterRadioGroup
      title="Collections"
      items={collectionMap}
      value={collectionId}
      handleChange={handleCollectionChange}
    />
  )
}

export default CollectionFilter
