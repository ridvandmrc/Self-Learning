### MobX

- Simple, scalable state management
- Write minimalistic boilerplate code that capture out intent.
- Effortless optimal rendering

### Quick Example

- we are approaching the state as **class**

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

// Model the application state.
class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();

// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }) => (
  <button onClick={() => timer.reset()}>
    Seconds passed: {timer.secondsPassed}
  </button>
));

ReactDOM.render(<TimerView timer={myTimer} />, document.body);

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  myTimer.increase();
}, 1000);
```

- The **observer** wrapper around the **TimeView** React component will automatically detect that rendering depends on the
  ** timer.seconsPassed** observable.
