import { createSignal, createMemo } from "solid-js";

const fibonacci = (num: number): number => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

export const FibonacciComponent = () => {
  const [count, setCount] = createSignal(1);
  const fib = createMemo(() => {
    console.log("Calculating Fibonacci");
    return fibonacci(count());
  });

  return (
    <>
      <button
        class="btn bg-red-900 hover:bg-red-500 hover:scale-110 duration-1000"
        onClick={() => setCount(count() + 1)}
      >
        FibonacciCount: {count()}
      </button>
      <div>
        1. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        2. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        3. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        4. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
    </>
  );
};
