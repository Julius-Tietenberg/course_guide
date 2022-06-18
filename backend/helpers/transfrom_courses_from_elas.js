const transform_elas = (courses) => {
    let result = [];
    for (let course of courses) {
        result.push(
            {
                "title": course['Title'],
                "link": course['Link'],
                "catalog": course['catalog'],
                "type": course['Type'],
                "sws": Number(course['SWS']),
                "expected_participants": Number(course['Erwartete Teilnehmer']),
                "max_participants": Number(course['Max. Teilnehmer']),
                "credit": course['Credits'],
                "language": course['Language'],
                "description": course['Description'],
                "times_manual": course['Times_manual'],
                "location": course['Location'],
                "exam": course['Exam'],
                "prof_name": null // course['Title']
            }
        );
    }

    return result;
}

module.exports = {
    transform_elas
}