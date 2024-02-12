export const ucFirst = (str: string) => {
    if (!str) return str
    const trimmedStr = str.trim()
    return trimmedStr[0].toUpperCase() + trimmedStr.slice(1)
}