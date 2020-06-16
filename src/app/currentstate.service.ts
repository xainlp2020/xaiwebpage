import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentstateService {

  constructor() { }

  currentSentenceId: number;
  currentRuleId: number;

  setCurrentSentence(id: number) {
    this.currentSentenceId = id;
  }

  setCurrentRule(id: number) {
    this.currentRuleId = id;
  }

  private subject = new Subject<any>();

  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

}
