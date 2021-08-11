import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TableModule} from 'primeng/table';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ShortenPipe } from 'src/app/pipes/shorten.pipe';


@NgModule({
  declarations: [ShortenPipe],
  imports: [
    CommonModule,
    
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    Ng2SearchPipeModule,
    TableModule,
    MatSelectModule,
    ShortenPipe
  ]
})
export class SharedModule { }
