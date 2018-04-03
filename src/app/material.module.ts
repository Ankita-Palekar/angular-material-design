import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';

@NgModule({
    imports : [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule],
    exports : [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule]
})

export class MaterialModule {
    
}