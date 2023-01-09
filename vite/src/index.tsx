import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

import { Header } from "./header";
import { FibonacciComponent } from "./fibonacci";
import { RepeatingComponent } from "./repeat";
import "./index.css";

// 1秒ごとにカウントするコンポーネント
const CountingComponent = () => {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount((count) => count + 1), 1000);
  onCleanup(() => clearInterval(interval));
  return <div class="text-red-500">Count value is {count()}</div>;
};

const App = () => {
  return (
    <>
      <Header />
      <CountingComponent />
      <FibonacciComponent />
      <RepeatingComponent />
    </>
  );
};

render(() => <App />, document.getElementById("root"));
