import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

// import { MatMomentDateModule } from '@angular/material-moment-adapter';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    /* angular material*/

    // MatMomentDateModule,

    Material.MatCheckboxModule,
    // Material.MatDatepicker,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatInputModule,
    Material.MatAutocompleteModule,
    // Material.MatDatepickerModule,
    Material.MatFormFieldModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatSliderModule,
    Material.MatSlideToggleModule,
    Material. MatMenuModule,
    Material.MatSidenavModule,
    Material.MatToolbarModule,
    Material.MatListModule,
    Material.MatGridListModule,
    Material.MatCardModule,
    Material.MatStepperModule,
    Material.MatTabsModule,
    Material.MatExpansionModule,
    Material.MatButtonToggleModule,
    Material.MatChipsModule,
    Material.MatIconModule,
    Material.MatProgressSpinnerModule,
    Material.MatProgressBarModule,
    Material.MatDialogModule,
    Material.MatTooltipModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
  ],
  exports: [

    // MatMomentDateModule,

    Material.MatNativeDateModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatInputModule,
    Material.MatAutocompleteModule,
   // ,
    Material.MatFormFieldModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatSliderModule,
    Material.MatSlideToggleModule,
    Material. MatMenuModule,
    Material.MatSidenavModule,
    Material.MatToolbarModule,
    Material.MatListModule,
    Material.MatGridListModule,
    Material.MatCardModule,
    Material.MatStepperModule,
    Material.MatTabsModule,
    Material.MatExpansionModule,
    Material.MatButtonToggleModule,
    Material.MatChipsModule,
    Material.MatIconModule,
    Material.MatProgressSpinnerModule,
    Material.MatProgressBarModule,
    Material.MatDialogModule,
    Material.MatTooltipModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
  ]
})
export class MaterialModule { }
