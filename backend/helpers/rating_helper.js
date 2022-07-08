function calculateK(user_stars_value, course_stars_value) {
    const value = (user_stars_value + course_stars_value) / 2;
    return value;
}

const getAvgStars = (ratingMessageStars, courseStars, full_rating) => {
    const stars =  {
        teacher: calculateK(ratingMessageStars.hasOwnProperty('teacher')  ? ratingMessageStars.teacher : 0,
            courseStars.hasOwnProperty('teacher')  ? courseStars.teacher : 0
            ),
        learning: calculateK(ratingMessageStars.hasOwnProperty('learning')  ? ratingMessageStars.learning : 0,
            courseStars.hasOwnProperty('learning')  ? courseStars.learning : 0
        ),
        workload: calculateK(ratingMessageStars.hasOwnProperty('workload')  ? ratingMessageStars.workload : 0,
            courseStars.hasOwnProperty('workload')  ? courseStars.workload : 0
        ),
        difficulty: calculateK(ratingMessageStars.hasOwnProperty('difficulty')  ? ratingMessageStars.difficulty : 0,
            courseStars.hasOwnProperty('difficulty')  ? courseStars.difficulty : 0
        ),
    }

    let result = 0;
    for (const [key, value] of Object.entries(ratingMessageStars)) {
        result += value;
    }
    const avg = result / 4;
    let total_rating = (avg + full_rating) / 2;

    if (total_rating >= 10) {
        total_rating = 10;
    }

    return {
        stars,
        total_rating
    };
}

module.exports = {
    getAvgStars
}