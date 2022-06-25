const transform_elas = (courses) => {
    let result = [];
    for (let course of courses) {
        /*const persons = course.persons.map(x => {
            if (x && x.hasOwnProperty("name")) {
                return x.name;
            }
        });*/

        let prof_names = []
        for (let i in course.persons) {
            prof_names.push(course.persons[i]);
        }
        course['persons'] = prof_names;

        let keywords_list = []
        for (let i in course.keywords) {
            keywords_list.push(course.keywords[i]);
        }
        course['keywords'] = keywords_list;

        result.push(course);
    }

    return result;
}

module.exports = {
    transform_elas
}