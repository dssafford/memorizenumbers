
export class Quiz {
  id: number;
  score: number;
  numberOfQuestions: number;
  date_added: Date;
  comments: string;

  answers: Answer[];

  constructor() {}
}

export class QuizSingle {
  id: number;
  question: number;
  answer: string;
  is_correct: boolean;
  date_added: Date;
  comments: string;

  constructor() {}
}

export class QuizRandomSingle {
  id: number;
  question: string;
  answer: string;
  is_correct: boolean;
  date_added: Date;
  comments: string;

  constructor() {}
}

export class Answer {
  id: number;
  question: number;
  answer: number;
  correct: boolean;
  comments: string;
}

export class WrongAnswer {
  question: number;
  answer: string;
}

export class WrongRandomAnswer {
  question: string;
  answer: string;
}
