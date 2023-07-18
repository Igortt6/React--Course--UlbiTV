// робота з номерами сторінок
// округлення сторінки в більшу сторону, для відображення постів на останній сторінці
export const getPagesCount = (totalCounts, limit) => {
    return Math.ceil(totalCounts / limit)
}