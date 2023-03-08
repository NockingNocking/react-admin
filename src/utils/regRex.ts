export const checkUserName = (phone: string): boolean => {
  const phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
  if (phoneReg.test(phone)) {
    return true
  } else {
    return false
  }
}

export const checkUserPassword = (password: string) => {
  const passwordReg = /^(?=.*[a-z])(?=.*\d)[^]{8,16}$/
  if (passwordReg.test(password)) {
    return true
  } else {
    return false
  }
}
