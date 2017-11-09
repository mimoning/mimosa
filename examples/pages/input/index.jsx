import Rx from 'rxjs'

export default function (sources) {
  return {
    DOM: Rx.Observable.of(
      <div>
        <h3>normal input</h3>
      </div>
    )
  }
}
