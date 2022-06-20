const transform_elas = (courses) => {
    let result = [];
    for (let course of courses) {
        result.push(
            {
                "title": course['name'],
                "link": course['url'],
                "catalog": course['catalog'],
                "type": course['Type'],
                "sws": Number(course['sws']),
                "expected_participants": Number(course['Erwartete Teilnehmer']),
                "max_participants": Number(course['Max. Teilnehmer']),
                "credit": course['Credits'],
                "language": course['Language'],
                "description": course['Description'],
                "times_manual": course['Times_manual'],
                "location": course['Location'],
                "exam": course['Exam'],
                "prof_name": null,

                "name": course['name'],
                "url": course['url'],
                "subject_type": course['subject_type'],
                "semester": course['semester'],
                "sws": course['sws'],
                "longtext": course['longtext'],
                "shorttext": course['shorttext'],
                "language": course['language'],
                "days": null

            }
        );
    }

    return result;
}

module.exports = {
    transform_elas
}