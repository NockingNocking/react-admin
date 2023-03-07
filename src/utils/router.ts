/* eslint-disable @typescript-eslint/no-explicit-any */
export const autoHandleRoutes = (modules: any) => {
  const result: any = []
  Object.keys(modules).forEach((item) => {
    Object.keys(modules[item]).forEach((key: any) => {
      result.push(...modules[item][key])
    })
  })

  return result
}
