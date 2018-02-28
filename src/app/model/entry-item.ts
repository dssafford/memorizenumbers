export class EntryItem {
  Id: number;
  Date_Added: any;
  A1: number;
  A2: number;
  A3: number;
  A4: number;
  A5: number;
  A6: number;
  A7: number;
  A8: number;
  A9: number;
  A10: number;
  A11: number;
  A12: number;

  constructor(Date_Added: string) {
    this.Date_Added = Date_Added;

  }
  public static createBlank(): EntryItem {
    return new EntryItem('');
  }
}
