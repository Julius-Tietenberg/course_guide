const getAvgStars = (ratingMessageStars, allRatingValue) => {
    let result = 0;
    for (const [key, value] of Object.entries(ratingMessageStars)) {
        result += value;
    }
    const avg = result / 4;
    let final = (avg + allRatingValue) / 2;

    if (final >= 10) {
        final = 10;
    }
    return final;
}

module.exports = {
    getAvgStars
}