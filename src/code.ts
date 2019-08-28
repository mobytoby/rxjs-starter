import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

function calculateScrollPercent(element) {
  const { 
    scrollTop,
    scrollHeight,
    clientHeight,
  } = element;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

document.body.style.visibility = 'visible';

//streams 
const scroll$ = fromEvent(document, 'scroll');
const progress: HTMLElement = document.querySelector('.progress-bar');

const progress$ = scroll$.pipe(
  // percent progress value
//   map(x => x)
  // window.pageYOffset
  map(<Document>({target}) => calculateScrollPercent(target.documentElement)),
);



progress$.subscribe(percent => {
    console.log(percent);
    progress.style.width = `${percent}%`;

});

