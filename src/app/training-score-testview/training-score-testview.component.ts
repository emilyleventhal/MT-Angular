import { Component, OnInit } from '@angular/core';
import {Round} from '../round';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-training-score-testview',
  templateUrl: './training-score-testview.component.html',
  styleUrls: ['./training-score-testview.component.scss']
})
export class TrainingScoreTestviewComponent implements OnInit {

  numScenarios = 10;
  numCorrect = 5;
  round: Round;

  constructor(private api: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.createTestRound();
  }

  setScenarioCount(event: any) { // without type info
    this.numScenarios = Number(event.target.value);
    this.createTestRound();
  }

  setCorrectCount(event: any) { // without type info
    this.numCorrect = Number(event.target.value);
    this.createTestRound();
  }


  createTestRound() {
    // Pull the training from the api, split it into a series of rounds
    this.api.getTrainingCSV('firstSession').subscribe(scenarios => {
      this.round = new Round(scenarios.slice(0, this.numScenarios));

      // mark the rounds as complete with the given number of correct answers.
      let count = 0;
      let correct = true;
      while (count <= this.numScenarios) {
        correct = false;
        if (count <= this.numCorrect) {
          correct = true;
        }
        this.round.next(correct);
        count++;
      }
    });

  }
}
