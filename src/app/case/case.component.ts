import { CaseService } from './case.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ICase } from './case.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})

export class CaseComponent {
  cases: ICase;
  columnsToDisplay = ['Nom', 'Obs', 'Dept', 'Classe', 'MaJ'];

  constructor(private caseService: CaseService) {
    this.caseService.getCases().subscribe(data => this.cases = data);
  }

  ngOnInit(){
  }

}
