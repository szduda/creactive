export const getStorageValue = (key: string) => {
  // getting stored value
  const saved = localStorage.getItem(key)
  if (!saved) return null
  return JSON.parse(saved)
}

export const storageScope = <T>(key: string, defaultValue: T) => {
  const _value = getStorageValue(key) || defaultValue
  const setValue = value => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('localStorage error:', error)
    }
  }

  return [_value, setValue] as [T, (arg: T) => void]
}
