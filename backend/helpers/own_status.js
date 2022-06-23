const ownStatusCode = {
    ok: 200,
    created: 201,
    accepted: 202,
    non_authorized: 203,
    no_content: 204,
    reset_content: 205,
    bad_request: 404,
    unauthorized: 401, // request user authentication
    forbidden: 403,
    not_found: 404,
    method_not_allowed: 405,
    not_acceptable: 406,
    register_fail: { message: "username/email was already used" }
}

module.exports = {
    ownStatusCode
}

// https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html