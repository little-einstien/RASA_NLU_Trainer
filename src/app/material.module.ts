import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list'
@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
    MatAutocompleteModule,MatGridListModule
  ],
  exports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
    MatAutocompleteModule,MatGridListModule
  ]
})
export class MaterialModule { }
