const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getDocs = (docs) => {
    return {
        totalItems: docs.totalDocs,
        content: docs.docs,
        totalPages: docs.totalPages,
        currentPage: docs.page - 1,
    };
}

module.exports = {
    getPagination,
    getDocs
}