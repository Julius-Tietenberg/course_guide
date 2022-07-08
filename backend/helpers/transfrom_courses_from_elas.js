const {transformDescription} = require("./course_helper");

function getRatingArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

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

        const description = course.description;
        delete course.description;

        course['description'] = transformDescription(description, "Description:", "Learning Targets:");
        course['targets'] = transformDescription(description, "Learning Targets:", "Literature:");
        course['literature'] = transformDescription(description, "Literature:", "Pre-Qualifications:");
        course['preQualification'] = transformDescription(description, "Pre-Qualifications:", "Info Link:");
        course['infoLink'] = transformDescription(description,"Info Link:", "Notice:");
        course['notice'] = transformDescription(description,"Notice:", "§$%");

        course['rating'] = getRatingArbitrary(1,6)
        result.push(course);
    }

    return result;
}

module.exports = {
    transform_elas
}