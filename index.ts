import { interval } from 'rxjs';

interval(1000).subscribe(_ => console.log(_, `Hello World!`))
