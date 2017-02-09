import { Component, OnInit } from '@angular/core';

import { TableService } from './table.service';
import { Tuple }        from './tuple';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './html/app.component.html',
    styleUrls: ['./styles/app.component.css']
})

export class AppComponent {
    title = 'Data Babes';
}
