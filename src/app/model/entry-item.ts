export class EntryItem {
  Id: number;
  Date_Added: any;
  Project: string;
  File_Directory: string;
  Machine: string;
  Technology: string;
  Version: string;
  Comments: string;
  Is_Active: string;

  constructor(Id: number, Date_Added: string, Project: string, File_Directory: string, Machine: string,
              Technology: string, Version: string, Comments: string,
              Is_Active: string) {

    this.Id = Id;
    this.Date_Added = Date_Added;
    this.Project = Project;
    this.File_Directory = File_Directory;
    this.Machine = Machine;
    this.Technology = Technology;
    this.Version = Version;
    this.Comments = Comments;
    this.Is_Active = Is_Active;
  }
  public static createBlank(): EntryItem {
    return new EntryItem(-1, '', '', '', '',
      '', '', '', 'true');
  }
}
