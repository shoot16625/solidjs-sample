import { createSignal, onCleanup } from "solid-js";

// 1秒ごとにカウントするコンポーネント
export const CountingComponent = () => {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount((count) => count + 1), 1000);
  onCleanup(() => clearInterval(interval));
  return <div class="text-red-500">Count value is {count()}</div>;
};
