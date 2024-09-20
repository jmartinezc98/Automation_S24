const { saveUserDataToExcel } = require('../utils/excelUtils');
module.exports = (on, config) => {
    on('task', {
        saveUserDataToExcel(userData) {
            return saveUserDataToExcel(userData);
        }
    });
};
