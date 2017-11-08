import Rx from 'rxjs'

import { Button } from '#'

function button (sources) {
  return {
    DOM: Rx.Observable.of(
      <div>
        <h3>normal button</h3>
        <Button style={{'margin-right': '10px'}}>ghost</Button>
        <Button style={{'margin-right': '10px'}} type="green">green</Button>
        <Button style={{'margin-right': '10px'}} type="red">red</Button>
        <Button style={{'margin-right': '10px'}} type="yellow">yellow</Button>
        <Button style={{'margin-right': '10px'}} type="blue">blue</Button>
        <Button style={{'margin-right': '10px'}} type="orange">orange</Button>
        <h3>disabled button</h3>
        <Button disabled="true">disabled</Button>
        <h3>small button</h3>
        <Button size="sm" style={{'margin-right': '10px'}}>small</Button>
        <Button size="sm" style={{'margin-right': '10px'}} type="green">green</Button>
        <Button size="sm" style={{'margin-right': '10px'}} type="red">red</Button>
        <Button size="sm" style={{'margin-right': '10px'}} type="yellow">yellow</Button>
        <Button size="sm" style={{'margin-right': '10px'}} type="blue">blue</Button>
        <Button size="sm" style={{'margin-right': '10px'}} type="orange">orange</Button>
        <Button size="sm" style={{'margin-right': '10px'}} disabled type="orange">disabled</Button>
      </div>
    )
  }
}

export default button
