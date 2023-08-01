import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TableModule} from 'primeng/table';
import {MatCheckboxModule} from '@angular/material/checkbox'

import { MatFormFieldModule } from '@angular/material/form-field';
import { ShortenPipe } from 'src/app/pipes/shorten.pipe';
import { LazyImageDirective } from '../directives/lazy-image.directive';




@NgModule({
  declarations: [ShortenPipe, 
    LazyImageDirective
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    Ng2SearchPipeModule,
    TableModule,
    MatSelectModule,
    MatCheckboxModule,
    ShortenPipe,
    LazyImageDirective
  ]
})
export class SharedModule { }
