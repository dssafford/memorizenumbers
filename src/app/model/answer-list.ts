export class AnswerList {
  Id: number;
  Question: number;
  Answer: number;
  Correct: boolean;
  Date_Added: string;

  constructor(Id: number, Question: number, Date_Added: string) {
    this.Id = Id;
    this.Question = Question;
    this.Date_Added = Date_Added;

  }
}
