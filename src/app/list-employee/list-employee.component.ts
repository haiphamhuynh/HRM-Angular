import { Component, ContentChild, OnInit } from '@angular/core';
import { ListEmployee } from '../models/listEmployee.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from '../services/employee.service';
import { ViewChild } from '@angular/core'
import { NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {

  // @ViewChild(MatPaginator, {static :true}) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort!: MatSort;
  // @ContentChild(NgbPagination) pagination: NgbPagination;
  // @ViewChild(NgbPaginationModule, {static :true}) paginator: NgbPaginationModule;

  datas : ListEmployee[] = [];
  //datas :any
  dataMain: any;
  dataSearch : ListEmployee[] = [];
  array : ListEmployee[] = [];

  searchText: any;

  ranks: any;
  dataRanks: any;
  dataStatus: any;

  currentPage  = 1;
  collectionSize :number;
  pageSize = 10;


  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAll();
    this.getListRank();

  }

  getAll() {
    this.employeeService.getListEmployee().subscribe((res: any) => {
      this.datas = res;

      // this.total = res.meta.total;
      // for (let index = 0; index <= this.pageSize; index++) {
      //   this.datas.push(res[index])

      // }
      // this.datas = new MatTableDataSource<Element>(res);
      // console.log(this.datas.sort = this.sort);
      // this.datas.paginator = this.paginator;
      // this.datas.sort = this.sort;
      this.dataSearch = res;
      this.dataMain = res;
      this.array = res;
      // this.collectionSize = res.length;
      this.collectionSize = this.array.length;
      this.iterator();
    });
  }

  getListRank() {
    this.employeeService.getListRank().subscribe((res: any) => {
      this.ranks = res;
    });
  }

  type_rank(rank: any) {
    this.array = this.dataStatus ||  this.dataMain;
    this.array = this.array.filter((p) => p.rank == rank);
    this.dataRanks = this.array;
    this.iterator();
  }

  type_status(status: any) {
    this.array = this.dataRanks || this.dataMain;
    this.array = this.array.filter((p) => p.status == status);
    this.dataStatus = this.array;
    this.iterator();
  }

  removeFilter(e: any) {
    this.array = this.dataMain;
    this.dataRanks = this.array;
    this.dataStatus = this.array;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage) * this.pageSize;
    const start = (this.currentPage - 1) * this.pageSize;
    const part = this.array.slice(start, end);
    this.datas = part;
    this.collectionSize = this.array.length;
  }

  public handlePage() {

    //console.log(e.page);
    //this.pageSize = e.pageSize;
    this.iterator();
    //alert(this.currentPage);
  }

  filter(){
    this.array = [...this.dataSearch.filter(item => item.full_name.includes(this.searchText))];
    this.iterator();
  }

}
