import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    templateUrl: './warning-alert.component.html',
    styles: [`
        p {
            background-color: lightpink;
            padding: 20px;
            border: 1px solid red;
        }
    `]
})
export class WarningAlertComponent {

}