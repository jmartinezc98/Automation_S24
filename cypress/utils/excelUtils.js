// utils/excelUtils.js
const ExcelJS = require('exceljs');
const path = require('path');

async function saveUserDataToExcel(userData) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('User Data');

    worksheet.columns = [
        { header: 'First Name', key: 'firstName', width: 30 },
        { header: 'Last Name', key: 'lastName', width: 30 },
        { header: 'Document Number', key: 'documentNumber', width: 30 },
        { header: 'Email', key: 'email', width: 30 },
        { header: 'Password', key: 'password', width: 30 }
    ];

    worksheet.addRow(userData);

    const filePath = path.join(__dirname, 'userData.xlsx');
    await workbook.xlsx.writeFile(filePath);
}

module.exports = { saveUserDataToExcel };
