import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

function calculateScrollPercent(element: Element) {
  const { 
    scrollTop,
    scrollHeight,
    clientHeight,
  } = element;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent(document, 'scroll');
const progress: HTMLElement = document.querySelector('.progress-bar');

const progress$ = scroll$.pipe(
  map(<Document>({target}) => calculateScrollPercent(target.documentElement)),
);



progress$.subscribe(percent => {
    progress.style.width = `${percent}%`;
});

