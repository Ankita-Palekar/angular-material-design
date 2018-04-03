import {Component} from '@angular/core';

@Component({
    selector: 'main-panel',
    templateUrl: './main-panel.component.html'
})

export class MainPanelComponent{
    constructor(){
        console.log('this component is initialised')
    }
}