// https://stackoverflow.com/questions/10530175/find-substring-using-starting-and-ending-word-in-a-string-and-substrings-indexes

const transformDescription = (str, start, end = "§$%") => {
    const startIndex = str.indexOf(start);

    if (end == "§$%") {
        return str.substring(startIndex + start.length)
    }

    const endIndex = str.indexOf(end, startIndex);
    if (startIndex !=-1 && endIndex !=-1 &&  endIndex  > startIndex )
        return str.substring(startIndex + start.length + 1, endIndex )
}

module.exports = {
    transformDescription
}