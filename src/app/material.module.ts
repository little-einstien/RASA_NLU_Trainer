import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
    MatAutocompleteModule,MatGridListModule,MatDividerModule,MatListModule,MatCardModule,MatIconModule,MatExpansionModule
  ],
  exports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
    MatAutocompleteModule,MatGridListModule,MatDividerModule,MatListModule,MatCardModule,MatIconModule,MatExpansionModule
  ]
})
export class MaterialModule { }
