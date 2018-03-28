import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-learn-list',
  templateUrl: './learn-list.component.html',
  styleUrls: ['./learn-list.component.css']
})
export class LearnListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['number', 'name', 'action', 'object'];

  dataSource = new MatTableDataSource<MYNUMBER>();
  mynumbers: MYNUMBER[];

  loading: boolean;

  constructor(private http: HttpClient) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.loading = true;

    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 1000);
  }

  applyFilter(filterValue: string) {
    this.loading = true;
    setTimeout(() => {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        this.loading = false;
      }, 500);
  }

  rowClicked(row: any): void {
    console.log(row);
  }

  ngOnInit() {
    this.loading = true;

    setTimeout(() => {
      this.dataSource.data = NUMBER_LEARNING_DATA;
      this.loading = false;
    }, 1000);


  }
}

export interface MYNUMBER {
  number: number;
  name: string;
  action: string;
  object: string;
}

const NUMBER_LEARNING_DATA: MYNUMBER[] =
  [
    {
      'number': 1,
      'name': 'Orphan Annie',
      'action': 'dancing redhead',
      'object': 'Dance floor'
    },
    {
      'number': 2,
      'name': 'Omar Bradley',
      'action': 'Overlooking battlefield',
      'object': 'Binoculars'
    },
    {
      'number': 3,
      'name': 'Olds Cutlass',
      'action': 'peeling out',
      'object': 'Road'
    },
    {
      'number': 4,
      'name': 'Olivia Dabo',
      'action': 'Psycho smile',
      'object': 'Smile'
    },
    {
      'number': 5,
      'name': 'Omar Epps',
      'action': 'in dr scrubs',
      'object': 'Operating table'
    },
    {
      'number': 6,
      'name': 'Omar Shariff',
      'action': 'riding arabian horse',
      'object': 'Horse'
    },
    {
      'number': 7,
      'name': 'Oscar the Grouch',
      'action': 'muppet talking',
      'object': 'Trash can'
    },
    {
      'number': 8,
      'name': 'Oliver Hardy',
      'action': 'Hits Stan with at',
      'object': 'Hat'
    },
    {
      'number': 9,
      'name': 'Oliver North',
      'action': 'raising his hand being sworn in',
      'object': 'Witness stand'
    },
    {
      'number': 10,
      'name': 'Dudley Moore',
      'action': 'Watching girls on beach',
      'object': 'Beach'
    },
    {
      'number': 11,
      'name': 'Andre Aggasi',
      'action': 'Tennis serve',
      'object': 'Tennis court'
    },
    {
      'number': 12,
      'name': 'Albert Bell',
      'action': 'hitting baseball ',
      'object': 'Baseball bat'
    },
    {
      'number': 13,
      'name': 'A.C. Greene',
      'action': 'dunking bball',
      'object': 'Hoop'
    },
    {
      'number': 14,
      'name': 'Amy Degus',
      'action': 'Sitting on my lap kissing',
      'object': 'Lap'
    },
    {
      'number': 15,
      'name': 'Albert Einstein',
      'action': 'writing equation on chalkboard',
      'object': 'Chalkboard '
    },
    {
      'number': 16,
      'name': 'Adam Sandler',
      'action': 'golfing in Happy Gilmore',
      'object': 'Pond'
    },
    {
      'number': 17,
      'name': 'Andrew Goldberg',
      'action': 'Drawing on whiteboard',
      'object': 'Whiteboard'
    },
    {
      'number': 18,
      'name': 'Alfred Hitchcock',
      'action': 'Button pops on suit',
      'object': 'suit'
    },
    {
      'number': 19,
      'name': 'Alfred E Newman',
      'action': 'Smiles with old tooth',
      'object': 'Gold tooth'
    },
    {
      'number': 20,
      'name': 'Bobby Orr',
      'action': 'Slap shot',
      'object': 'Hockey rink'
    },
    {
      'number': 21,
      'name': 'Bryan Adams',
      'action': 'Singing',
      'object': 'Outside concert stage'
    },
    {
      'number': 22,
      'name': 'Bill Bixby',
      'action': 'Incredible hulking',
      'object': 'Ripped shirt'
    },
    {
      'number': 23,
      'name': 'Bill Curtiss',
      'action': 'Reporting',
      'object': 'Microphone'
    },
    {
      'number': 24,
      'name': 'Bo Derek',
      'action': 'Beach run braids swinging',
      'object': 'Braids'
    },
    {
      'number': 25,
      'name': 'Barbara Eden',
      'action': 'Genie blinking',
      'object': 'In bottle'
    },
    {
      'number': 26,
      'name': 'Bart Simpson',
      'action': 'Waving',
      'object': 'Waving hand'
    },
    {
      'number': 27,
      'name': 'Bill Gates',
      'action': 'rocking',
      'object': 'Chair'
    },
    {
      'number': 28,
      'name': 'Benny Hill',
      'action': 'fat guy running',
      'object': 'Plaid shorts'
    },
    {
      'number': 29,
      'name': 'Bridgette Neilsen',
      'action': 'swinging club',
      'object': 'Club'
    },
    {
      'number': 30,
      'name': 'Chris O�donnell',
      'action': 'ncis shooting pistol',
      'object': 'Gun'
    },
    {
      'number': 31,
      'name': 'Charles Atlas',
      'action': 'making muscles',
      'object': 'Muscles'
    },
    {
      'number': 32,
      'name': 'Charlie Brown',
      'action': 'falling down kicking football',
      'object': 'Football'
    },
    {
      'number': 33,
      'name': 'Charlie Chaplin',
      'action': 'Swinging cane',
      'object': 'Cane'
    },
    {
      'number': 34,
      'name': 'Charlie Daniels',
      'action': 'Playing fiddle',
      'object': 'Fiddle'
    },
    {
      'number': 35,
      'name': 'Clint Eastwood',
      'action': 'Dirty Harry shooting',
      'object': '45 magnum'
    },
    {
      'number': 36,
      'name': 'Claudia Schiffer',
      'action': 'Walking runway',
      'object': 'Runway'
    },
    {
      'number': 37,
      'name': 'Cary Grant',
      'action': 'leading man',
      'object': 'Black suit'
    },
    {
      'number': 38,
      'name': 'Charlton Heston',
      'action': 'Moses with staff',
      'object': 'Staff'
    },
    {
      'number': 39,
      'name': 'Chuck Norris',
      'action': 'Karate fighting',
      'object': 'Heavy bag'
    },
    {
      'number': 40,
      'name': 'Dominic Obrien',
      'action': 'Flipping cards',
      'object': 'Playing Cards deck'
    },
    {
      'number': 41,
      'name': 'Dan Ackroyd',
      'action': 'Ghostbusters',
      'object': 'Ghostbusters gun'
    },
    {
      'number': 42,
      'name': 'David Bowie',
      'action': 'singing china girl (video)',
      'object': 'Geisha'
    },
    {
      'number': 43,
      'name': 'David Copperfield',
      'action': 'Plane disappear',
      'object': 'Plane'
    },
    {
      'number': 44,
      'name': 'Donald Duck',
      'action': 'Quack',
      'object': 'Duck beak'
    },
    {
      'number': 45,
      'name': 'Dennis Eckersley',
      'action': 'Pitching',
      'object': 'Pitchers Mound'
    },
    {
      'number': 46,
      'name': 'Debbie Shaddon',
      'action': 'coding',
      'object': 'Laptop'
    },
    {
      'number': 47,
      'name': 'David Gergen',
      'action': 'Talking head',
      'object': 'Round table'
    },
    {
      'number': 48,
      'name': 'Dennis Hastert',
      'action': 'Hitting gavel',
      'object': 'In congress hall'
    },
    {
      'number': 49,
      'name': 'Debbie Norville',
      'action': 'Sitting behind desk',
      'object': 'Desk'
    },
    {
      'number': 50,
      'name': 'Edward Olmos',
      'action': 'Miami vice cop',
      'object': 'Designer suit'
    },
    {
      'number': 51,
      'name': 'Eddie Albert',
      'action': 'chasing pig',
      'object': 'Pig'
    },
    {
      'number': 52,
      'name': 'Ed Bradley',
      'action': '60 minutes stopwatch running',
      'object': 'Stopwatch'
    },
    {
      'number': 53,
      'name': 'Eric Clapton',
      'action': 'playing guitar',
      'object': 'Guitar'
    },
    {
      'number': 54,
      'name': 'Mr. Ed',
      'action': 'talking horse',
      'object': 'Horse'
    },
    {
      'number': 55,
      'name': 'Emillio Estevez',
      'action': 'playing hockey',
      'object': 'Goal net'
    },
    {
      'number': 56,
      'name': 'Edward Sissorhands',
      'action': 'clicking hands',
      'object': 'Scissors'
    },
    {
      'number': 57,
      'name': 'E.G. Marshall',
      'action': 'detective showing badge',
      'object': 'Badge'
    },
    {
      'number': 58,
      'name': 'Earnest Hemingway',
      'action': 'writing book',
      'object': 'Book'
    },
    {
      'number': 59,
      'name': 'Emperor Nero',
      'action': 'thumbs down',
      'object': 'Coliseum'
    },
    {
      'number': 60,
      'name': 'Shaq Oneil',
      'action': 'dunking shatters backboard',
      'object': 'Bball backboard'
    },
    {
      'number': 61,
      'name': 'Sam Adams',
      'action': 'beer bottle breaking',
      'object': 'Beer bottle'
    },
    {
      'number': 62,
      'name': 'Saundra Bernhardt',
      'action': 'comedienne',
      'object': 'Chair on stage'
    },
    {
      'number': 63,
      'name': 'Sean Connery',
      'action': '007 holding pistol',
      'object': 'Pistol'
    },
    {
      'number': 64,
      'name': 'Shannon Doherty',
      'action': 'witch doing spell',
      'object': 'Witch hat'
    },
    {
      'number': 65,
      'name': 'Shannon Elizabeth',
      'action': 'bathing suit',
      'object': 'Thong'
    },
    {
      'number': 66,
      'name': 'Sissy Spacek',
      'action': 'Bloody dance',
      'object': 'Blood on face'
    },
    {
      'number': 67,
      'name': 'Shauna Grant',
      'action': 'porn star',
      'object': 'Hooker heels'
    },
    {
      'number': 68,
      'name': 'Selma Hyeck',
      'action': 'show girl',
      'object': 'Cleavage'
    },
    {
      'number': 69,
      'name': 'Sam Nunn',
      'action': 'congress',
      'object': 'Lecturn'
    },
    {
      'number': 70,
      'name': 'George Orwell',
      'action': 'big brother head in apple video',
      'object': 'Big video screen'
    },
    {
      'number': 71,
      'name': 'Gabrielle Anwar',
      'action': 'Cocking Shotgun',
      'object': 'shotgun'
    },
    {
      'number': 72,
      'name': 'George Burns',
      'action': 'Smoking cigar',
      'object': 'Cigar'
    },
    {
      'number': 73,
      'name': 'George Carlin',
      'action': 'Stand up comedy',
      'object': 'Chair onstage'
    },
    {
      'number': 74,
      'name': 'George Duke',
      'action': 'Playing jazz piano',
      'object': 'Piano'
    },
    {
      'number': 75,
      'name': 'GE',
      'action': 'Lightbulb comes on',
      'object': 'Lightbulb'
    },
    {
      'number': 76,
      'name': 'George C Scott',
      'action': 'Patton riding in jeep',
      'object': 'Jeep'
    },
    {
      'number': 77,
      'name': 'Gloria Gaynor',
      'action': 'Pug singing I will survive',
      'object': 'Pug dog'
    },
    {
      'number': 78,
      'name': 'Gregory Hines',
      'action': 'tap dancing',
      'object': 'Tap shoes'
    },
    {
      'number': 79,
      'name': 'Greg Norman',
      'action': 'Golfing',
      'object': 'Golf course'
    },
    {
      'number': 80,
      'name': 'Hall and Oates',
      'action': 'singing duet',
      'object': 'On stage'
    },
    {
      'number': 81,
      'name': 'Hank Aaron',
      'action': 'home run over fence',
      'object': 'Baseball fence'
    },
    {
      'number': 82,
      'name': 'Halle Berry',
      'action': 'walking out of ocean in bikini',
      'object': 'Waves'
    },
    {
      'number': 83,
      'name': 'Harry Carry',
      'action': 'Yelling holy cow',
      'object': 'In broadcast booth'
    },
    {
      'number': 84,
      'name': 'Howard Dean',
      'action': 'Screaming at podium',
      'object': 'Podium'
    },
    {
      'number': 85,
      'name': 'Howard Eisley',
      'action': 'dribbling up court',
      'object': 'Basketball court'
    },
    {
      'number': 86,
      'name': 'Homer Simpson',
      'action': 'turning controls at nuclear plant',
      'object': 'Nuclear plant control panel'
    },
    {
      'number': 87,
      'name': 'Horace Grant',
      'action': 'block shot under basket',
      'object': 'Basketball court'
    },
    {
      'number': 88,
      'name': 'Holly Hunter',
      'action': 'short hottie',
      'object': 'In newsroom'
    },
    {
      'number': 89,
      'name': 'Heather Nauret',
      'action': 'reporter',
      'object': 'Anchor desk'
    },
    {
      'number': 90,
      'name': 'Neil Odonnel',
      'action': 'throwing pass',
      'object': 'Football field'
    },
    {
      'number': 91,
      'name': 'Neil Armstrong',
      'action': 'Walking on moon',
      'object': 'Moon'
    },
    {
      'number': 92,
      'name': 'Noel Bruns',
      'action': 'building project plan',
      'object': 'Conference table'
    },
    {
      'number': 93,
      'name': 'Nicolas Cage',
      'action': 'jamming shot in leg',
      'object': 'Needle'
    },
    {
      'number': 94,
      'name': 'Neil Diamond',
      'action': 'singing',
      'object': 'On stage'
    },
    {
      'number': 95,
      'name': 'Nicole Eggert',
      'action': 'bathing suit',
      'object': 'Lifeguard shack'
    },
    {
      'number': 96,
      'name': 'Nicolette Sheridan',
      'action': 'Blond',
      'object': 'Little black dress'
    },
    {
      'number': 97,
      'name': 'Norm Gragasin',
      'action': 'pulling network cables',
      'object': 'Cables'
    },
    {
      'number': 98,
      'name': 'Natasha Henstridge',
      'action': 'Species',
      'object': 'Alien popping out '
    },
    {
      'number': 99,
      'name': 'Naughty nighty',
      'action': 'Breasts swinging',
      'object': 'Night gown'
    },
    {
      'number': 100,
      'name': '',
      'action': '',
      'object': ''
    }
  ];


//   Study which consonants commonly correspond to which numbers. Each number is assigned a consonant based on some kind of recognizable relationship between the two:[2]
// 0 - z, s, soft c - 'z' is the first letter of zero. The others have a similar sound
// 1 - d, t - t has one downstroke d has as similar sound (some variants include th)
// 2 - n - n has two downstrokes.
// 3 - m - three downstrokes, also '3' looks like 'm' on its side
// 4 - r - last letter of four
// 5 - l - L is the Roman numeral for 50
//   6 - j, sh, ch, soft g - a script j has a lower loop / g is almost a 6 rolled around
// 7 - k, hard c, hard g, q, qu - capital K contains two sevens
// 8 - f, v - script f looks like a figure-8 (some variants include th)
// 9 - b, p - P is a mirror-image 9, b sounds similar

