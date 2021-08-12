import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss'],
})
export class SingleAppareilComponent {
  appareil: {
    id: number;
    name: string;
    status: string;
  };

  constructor(
    private appareilService: AppareilService,
    private route: ActivatedRoute
  ) {
    this.appareil = this.appareilService.getAppareilById(
      +this.route.snapshot.params['id']
    )!;
  }
}
