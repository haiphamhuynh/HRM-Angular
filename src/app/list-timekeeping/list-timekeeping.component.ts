import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import * as XLSX from 'xlsx';
import { ListTimekeeping } from '../models/listTimekeeping.model';
import { Timekeeping } from '../models/timekeeping.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list-timekeeping',
  templateUrl: './list-timekeeping.component.html',
  styleUrls: ['./list-timekeeping.component.css'],
})
export class ListTimekeepingComponent implements OnInit {
  datas: ListTimekeeping[] = [];
  searchText: any;
  dataSearch: ListTimekeeping[] = [];
  title = 'Danh sách chấm công';
  month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  monthData: any;
  workTimeData: any;
  dataMain: ListTimekeeping[] = [];
  year: any;
  yearData: any;

  currentPage = 1;
  collectionSize: number;
  pageSize = 10;
  array: ListTimekeeping[] = [];

  fileName = "Samplesheet.xlsx"

  // filter_timework: any;
  // filter_month: any;
  // filter_year: any;

  // type_month : any;


  ExcelData: any = new Timekeeping();
  newExcelData: any;
  dropdownText(): any {
    return;
  }
  constructor(
    private employeeService: EmployeeService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.getListYear();
  }

  getListYear() {
    this.employeeService.getListYear().subscribe((res: any) => {
      this.year = res.years;
    });
  }

  getAll() {
    this.employeeService.getTimekeeping().subscribe((res: any) => {
      this.datas = res;
      this.dataSearch = res;
      this.dataMain = res;
      this.array = res;
      this.collectionSize = this.array.length;
      this.iterator();
    });
  }

  type_month(month: any) {
    this.array = this.workTimeData || this.yearData || this.dataMain;
    this.array = this.array.filter((p) => p.month == month);
    this.monthData = this.array;
    this.iterator();

  }

  type_timeWork(x: number, y: number) {
    this.array = this.monthData || this.yearData || this.dataMain;
    this.array = this.array.filter(
      (p) => p.total_time >= x && p.total_time < y
    );
    this.workTimeData = this.array;
    this.iterator();
  }

  type_year(year: any) {
    this.array = this.monthData || this.workTimeData || this.dataMain;
    this.array = this.array.filter((p) => p.year == year);
    this.yearData = this.array;
    this.iterator();
  }

  removeFilter(e: any) {
    this.array = this.dataMain;
    this.workTimeData = this.array;
    this.monthData = this.array;
    this.yearData = this.array;
    this.iterator();
  }

  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
    };
  }

  inputExcel() {
    let data = [];
    for (let index = 0; index < this.ExcelData.length; index++) {
      const element = this.ExcelData[index];
      data.push(element);
    }

    this.employeeService.postTimekeeping(this.ExcelData).subscribe((res) => {
      //subscribe đọc dữ liệu
      // console.log(res);
      alert('Import Excel successfully');
      this.Router.navigateByUrl('/list-timekeeping');
    });
  }

  exportexcel(){
    let element = document.getElementById('table-excel');
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }

  private iterator() {
    const end = this.currentPage * this.pageSize;
    const start = (this.currentPage - 1) * this.pageSize;
    const part = this.array.slice(start, end);
    this.datas = part;
    this.collectionSize = this.array.length;
  }

  public handlePage() {
    this.iterator();
  }

  filter() {
    this.array = [
      ...this.dataSearch.filter((item) =>
        item.full_name.includes(this.searchText)
      ),
    ];
    this.iterator();
  }

  // submit_filter() {
  //   console.log(this.filter_month);
  //   console.log(this.filter_year);
  //   this.array = this.dataMain.filter(item => (item.month == this.filter_month));
  //   this.iterator();
  // }
}
