const unprocessableEntityError = (message) => {
    return {
        name: 'UnprocessableEntityError',
        message,
    };
};
const unauthorizedError = () => {
    return {
        name: 'UnauthorizedError',
        message: 'You must be signed in to continue',
    };
};
const invalidCredentialsError = () => {
    return {
        name: 'InvalidCredentialsError',
        message: 'Invalid email and/or password',
    };
};
const conflictError = (message) => {
    return {
        name: 'ConflictError',
        message,
    };
};
const notFoundError = (message) => {
    return {
        name: 'NotFoundError',
        message,
    };
};
export default { unprocessableEntityError, unauthorizedError, invalidCredentialsError, conflictError, notFoundError };
