const transform_elas = (courses) => {
    let result = [];
    for (let course of courses) {
        const persons = course.persons.map(x => {
            if (x && x.hasOwnProperty("name")) {
                return x.name;
            }
        });
        course['prof_names'] = persons;
        result.push(course);
    }

    return result;
}

module.exports = {
    transform_elas
}