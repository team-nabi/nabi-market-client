const getValueByKey = (obj: any, key: any) => {
  const info = obj.find(
    (element: { key: string; value: string }) => element.key === key,
  )
  return info?.value
}

export { getValueByKey }
