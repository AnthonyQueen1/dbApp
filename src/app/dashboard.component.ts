import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { TableService } from './table.service';


@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './html/dashboard.component.html',
    styleUrls: [ './styles/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    constructor(private tableService: TableService, private router: Router) {}
    tablelist: String[];
    selectedright: String;
    selectedleft: String;
    bothselected: boolean;
    error_msg: String;

    getTableList(): void {
        this.tableService
                .getTableList()
                .then(tablist => this.tablelist = tablist)
                .catch(e => {
                    console.log(e);
                    this.error_msg = "ERROR: error loading tables";
                });
    }

    ngOnInit(): void {
        this.getTableList();
    }

    onSelectRight(tab: String): void {
        this.selectedright = tab;
    }

    onSelectLeft(tab: String): void {
        this.selectedleft = tab;
    }

    join(): void {
        this.router.navigate(['/query', this.selectedleft+'-join-'+this.selectedright]);
    }

    queries = [
        {
            desc: "List department(s) with minimum number of employees",
            url: "min-employees"
        },
        {
            desc: "List department(s) with maximum ratio of average female salaries to average men salaries ",
            url: "max-female-avg"
        },
        {
            desc: "List manager(s) who holds office for the longest duration",
            url: "longest-duration"
        },
        {
            desc: "For each department, list number of employees born in each decade and their average salaries",
            url: "num-in-decade"
        },
        {
            desc: "List employees, who are female, born before Jan 1, 1990, makes more than 80K annually and hold a manager position",
            url: "female-80k-jan"
        }
    ]
}