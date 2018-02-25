export class EntryItem {
  Id: number;
  Date_Added: any;
  Project: string;
  Version: string;
  Comments: string;
  Is_Active: string;

  constructor(Id: number, Date_Added: string, Project: string, Version: string, Comments: string,
              Is_Active: string) {

    this.Id = Id;
    this.Date_Added = Date_Added;
    this.Project = Project;
    this.Version = Version;
    this.Comments = Comments;
    this.Is_Active = Is_Active;
  }
  public static createBlank(): EntryItem {
    return new EntryItem(-1, '', '', '', '', 'true' );
  }
}
