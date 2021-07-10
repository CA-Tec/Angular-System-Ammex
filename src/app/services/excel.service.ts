import { Injectable } from '@angular/core';
import * as Excel from 'exceljs'
import * as fs from 'file-saver';



@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  generarExcel(dato){
    const title = "Relación de Proyectos"
    const header = [
      "Folio",
      "Nombre Proyecto",
      "Supervisor",
      "Fecha Inicio",
      "Fecha Termino",
      "Duración",
      "Transcurrido",
      "Producto",
      "Documentos",
      "Estatus",
      "Etapa"
    ];
    const data = dato;

    const fecha = new Date();
    const mes = fecha.getMonth()+1;
    const fechaCorta = fecha.getDate().toString()+'/' + mes.toString()+'/'+fecha.getFullYear().toString(); 
    const hora = fecha.getTime();

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet('Proyectos');

   // Add new row
let titleRow = worksheet.addRow([title]);

// Set font, size and style in title row.
titleRow.font = { name: 'Arial', family: 4, size: 16, bold: true };



//Add row with current date
let subTitleRow = worksheet.addRow(['Fecha : ' + fechaCorta]);
worksheet.addRow([]);

//Add Header Row
let headerRow = worksheet.addRow(header);

// Cell Style : Fill and Border
headerRow.eachCell((cell, number) => {
  cell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFFFFF00' },
    bgColor: { argb: 'FF0000FF' }
  }
  cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
});

// Add Data and Conditional Formatting
data.forEach(d => {
  let row = worksheet.addRow(d);
  let qty = row.getCell(5);
  let color = 'FF99FF99';
  if (+qty.value < 500) {
    color = 'FF9999'
  }

  qty.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: color }
  }
}

);

workbook.xlsx.writeBuffer().then((data) => {
  let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  fs.saveAs(blob,'ProyectoAmmex_'+fechaCorta+hora+'.xlsx');
})

  }

generarExcelSearch(busqueda){
  const title = "Relación de Proyectos"
  const header = [
    "Folio",
    "Nombre Proyecto",
    "Supervisor",
    "Fecha Inicio",
    "Fecha Termino",
    "Duración",
    "Transcurrido",
    "Producto",
    "Documentos",
    "Estatus",
    "Etapa"
  ];
  const data =busqueda;
console.log(data);
  const fecha = new Date();
  const mes = fecha.getMonth()+1;
  const fechaCorta = fecha.getDate().toString()+'/' + mes.toString()+'/'+fecha.getFullYear().toString(); 
  const hora = fecha.getTime();

  let workbook = new Excel.Workbook();
  let worksheet = workbook.addWorksheet('Proyectos');

 // Add new row
let titleRow = worksheet.addRow([title]);

// Set font, size and style in title row.
titleRow.font = { name: 'Arial', family: 4, size: 16, bold: true };



//Add row with current date
let subTitleRow = worksheet.addRow(['Fecha : ' + fechaCorta]);
worksheet.addRow([]);

//Add Header Row
let headerRow = worksheet.addRow(header);

// Cell Style : Fill and Border
headerRow.eachCell((cell, number) => {
cell.fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FFFFFF00' },
  bgColor: { argb: 'FF0000FF' }
}
cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
});

// Add Data and Conditional Formatting
data.forEach(d => {
  console.log(d);
let row = worksheet.addRow(d);
let qty = row.getCell(10);
let color = 'FF99FF99';
/*if (+qty.value < 500) {
  color = 'FF9999'
}

qty.fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: color }
}*/
}

);

workbook.xlsx.writeBuffer().then((data) => {
let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
fs.saveAs(blob,'ProyectoAmmex_'+fechaCorta+hora+'.xlsx');
})

}

}
