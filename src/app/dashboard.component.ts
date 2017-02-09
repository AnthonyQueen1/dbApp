import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './html/dashboard.component.html',
    styleUrls: [ './styles/dashboard.component.css']
})

export class DashboardComponent {
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