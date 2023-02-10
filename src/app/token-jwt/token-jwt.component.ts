import { Component, } from '@angular/core';
import { TurnTokenService } from '../services/turn-token.service';
import { TurnComponent } from '../turn/turn.component';

@Component({
  selector: 'app-token-jwt',
  templateUrl: './token-jwt.component.html',
  styleUrls: ['./token-jwt.component.css']
})
export class TokenJWTComponent {
  arrTurnToken : any = [];
  constructor(private tk : TurnTokenService){};
  ngOnInit(): void {
    this.arrTurnToken = this.tk.arrToken;
    // console.log(this.arrTurnToken);

  }


}
