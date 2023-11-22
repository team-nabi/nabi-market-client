export const getQueryParams = (paramsObject: any) => {
  const params = new URLSearchParams()

  for (const [key, value] of Object.entries(paramsObject)) {
    if (value) {
      params.append(key, value.toString())
    }
  }

  return params.toString()
}
