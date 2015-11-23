
export default function SimpleObserver() {

  let Callbacks = []

  let RegisterCallback = function (Callback) {
    Callbacks.push(Callback);
  }

  let RunCallbacks = function () {
    Callbacks.forEach(cb => {
      cb()
    })
  }
}
