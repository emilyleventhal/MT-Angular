import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule, MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { ScenarioComponent } from './scenario/scenario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissingLetterComponent } from './missing-letter/missing-letter.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatementComponent } from './statement/statement.component';
import { QuestionComponent } from './question/question.component';
import { SessionComponent } from './session/session.component';
import { ApiService} from './api.service';
import { HttpClientModule} from '@angular/common/http';
import { StepComponent } from './step/step.component';
import { PageComponent } from './page/page.component';
import { ControlConditionComponent } from './control-condition/control-condition.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ThoughtbubbleComponent } from './thoughtbubble/thoughtbubble.component';
import { HighlightComponent } from './highlight/highlight.component';
import { TrainingComponent } from './training/training.component';
import { BulletListComponent } from './bullet-list/bullet-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SessionIndicatorBarComponent } from './session-indicator-bar/session-indicator-bar.component';
import { StepIndicatorBarComponent } from './step-indicator-bar/step-indicator-bar.component';
import { SessionIndicatorComponent } from './session-indicator/session-indicator.component';
import { HomeComponent } from './home/home.component';
import { SessionWarningComponent } from './session-warning/session-warning.component';
import { FillInTheBlankComponent } from './fill-in-the-blank/fill-in-the-blank.component';
import { TrainingScoreComponent } from './training-score/training-score.component';
import { TrainingScoreTestviewComponent } from './training-score-testview/training-score-testview.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { FinalScoreComponent } from './final-score/final-score.component';
import { FinalScoreTestviewComponent } from './final-score-testview/final-score-testview.component';
import { CountdownComponent } from './countdown/countdown.component';
import { SliderComponent } from './slider/slider.component';
import { RandomNonPreviousStatementComponent } from './random-non-previous-statement/random-non-previous-statement.component';
import { MultiEntryComponent } from './multi-entry/multi-entry.component';
import { RecognitionRatingsComponent } from './recognition-ratings/recognition-ratings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'training/:session', component: TrainingComponent },
  { path: 'control', component: ControlConditionComponent },
  { path: 'control/:session', component: ControlConditionComponent },
  { path: 'scoreTest', component: TrainingScoreTestviewComponent },
  { path: 'finalScoreTest', component: FinalScoreTestviewComponent },
  { path: 'recognition', component: RecognitionRatingsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BulletListComponent,
    ControlConditionComponent,
    FillInTheBlankComponent,
    HighlightComponent,
    HomeComponent,
    MissingLetterComponent,
    PageComponent,
    ProgressBarComponent,
    QuestionComponent,
    ScenarioComponent,
    SessionComponent,
    SessionIndicatorComponent,
    SessionIndicatorBarComponent,
    StatementComponent,
    StepComponent,
    StepIndicatorBarComponent,
    ThoughtbubbleComponent,
    TrainingComponent,
    SessionWarningComponent,
    TrainingScoreComponent,
    TrainingScoreTestviewComponent,
    FinalScoreComponent,
    FinalScoreTestviewComponent,
    CountdownComponent,
    SliderComponent,
    RandomNonPreviousStatementComponent,
    MultiEntryComponent,
    RecognitionRatingsComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatToolbarModule,
    ReactiveFormsModule,
    NgxGaugeModule,
    MatSliderModule
  ],
  providers: [
    ApiService,
    SessionComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [FillInTheBlankComponent]
})
export class AppModule { }
