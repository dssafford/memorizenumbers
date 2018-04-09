// export class Quiz {
//   id: number;
//   score: number;
//   numberOfQuestions: number;
//   date_added: string;
//   comments: string;
//
//   constructor() {}
// }
export class Quiz {
  id: number;
  score: number;
  numberOfQuestions: number;
  date_added: Date;
  comments: string;

  answers: Answer[];

  constructor() {}
}


export class Answer {
  id: number;
  question: number;
  answer: number;
  correct: boolean;
  comments: string;
}
