import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  @Input() appareil = {
    id:0,
    name: '',
    status: '',
  };
  @Input() indexOfAppareil=0;

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {}

  getStatus() {
    return this.appareil.status;
  }

  getColor() {
    if (this.appareil.status === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil)
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil)
  }

}
