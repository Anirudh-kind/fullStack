const constants = {
    VALIDATION_ERROR: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};

const ErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(statusCode).json({ title: 'VALIDATION_ERROR', message: err.message, stackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.status(statusCode).json({ title: 'UNAUTHORIZED', message: err.message, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.status(statusCode).json({ title: 'FORBIDDEN', message: err.message, stackTrace: err.stack });
            break;
        case constants.NOT_FOUND:
            res.status(statusCode).json({ title: 'NOT_FOUND', message: err.message, stackTrace: err.stack });
            break;
        case constants.SERVER_ERROR:
            res.status(statusCode).json({ title: 'SERVER_ERROR', message: err.message, stackTrace: err.stack });
            break;
        default:
            console.error(`Unexpected error status code: ${statusCode}`.bgRed);
            res.status(500).json({ title: 'INTERNAL_SERVER_ERROR', message: 'An unexpected error occurred.', stackTrace: err.stack });
            break;
    }
};

export const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
};


export default ErrorHandler;
