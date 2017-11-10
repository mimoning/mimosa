import Rx from 'rxjs'

function radio (sources) {
  return {
    DOM: Rx.Observable.of(
      <div>This is a radio page</div>
    )
  }
}

export default radio
