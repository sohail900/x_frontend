export function capitalizedName(name: string) {
    const convertToArray = name.split(' ')
    const firstName =
        convertToArray[0].charAt(0).toUpperCase() + convertToArray[0].slice(1)
    if (convertToArray[1] !== undefined) {
        const lastName =
            convertToArray[1].charAt(0).toUpperCase() +
            convertToArray[1].slice(1)
        return { firstName, lastName }
    }
    return { firstName, lastName: 'X' }
}
