const Sequelize = require('sequelize')

const errorHandler = error => {
    let result = '';
    if (error instanceof Sequelize.DatabaseError) {
        result = error.original.message
    } else if (error instanceof Sequelize.TimeoutError) {
        result = 'Request Timeout'
    } else if (error instanceof Sequelize.ConnectionError) {
        result = 'Connection Lost'
    } else if (error instanceof Sequelize.ValidationError) {
        result = 'Validation Error'
    } else if (error instanceof Sequelize.ForeignKeyConstraintError) {
        result = 'Foreign Key Error'
    } else {
        result = 'Something went wrong'
    }
    return result;
};

module.exports = errorHandler;