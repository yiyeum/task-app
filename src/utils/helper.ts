/**
 * return randonly generatated
 * pastel color hsl
 */
export const getPastelColor = (): string => {
    return "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' +
        (85 + 10 * Math.random()) + '%)'
}

/**
 * return capitalized string
 * @param text Text to be capitalized
 */
export const getCapitalizedString = (text: string): string => {
    return text.trim().charAt(0).toUpperCase() + text.trim().slice(1)
}
