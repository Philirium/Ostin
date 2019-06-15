import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialog,
    MatMenuModule,
    MatRippleModule,
    MatGridListModule,
    MatTabGroup,
    MatTabGroupBase,
    MatTabBodyPortal,
    MatTab,
    MatTabsModule,
    MatExpansionModule,
    MatTreeModule,
    
   
     } from '@angular/material';



     const material$ = [
      CommonModule,
      MatButtonModule, 
      MatCardModule,
      MatDialogModule,
      MatIconModule, 
      MatFormFieldModule,
      MatInputModule, 
      MatListModule,
      MatSidenavModule, 
      MatToolbarModule, 
      MatMenuModule,
      MatRippleModule,
      MatGridListModule,
      MatTabsModule,
      MatExpansionModule,
      MatCheckboxModule,
      MatTreeModule,
    
      

    ];
@NgModule({
  imports: [
    material$  
  
  ],
  exports: [
    material$
  ],

  declarations: [],
  providers: [
    MatDialog
  ]
})
export class MaterialModule { }