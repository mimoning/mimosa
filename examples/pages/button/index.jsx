import Rx from 'rxjs'

function button (sources) {
  return {
    DOM: Rx.Observable.of(<div>
      This is a button page!
    </div>)
  }
}

export default button
