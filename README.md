# round-count

A lightweight countdown component for React.

## Installation

You can install the package using npm:

```bash
npm install round-count
```

Or with yarn:

```bash
yarn add round-count
```

## Demo
![](https://github.com/u4saif/round-count/blob/0a80f8a4c17457501da05ccef98f4a74d979627b/sample.gif)

You can view a live demo of the `round-count` component [here](https://codesandbox.io/p/sandbox/magical-fast-mlxh22).

## Usage

Here is a simple example of how to use the `round-count` component in your React application:

```jsx
import { Count } from "round-count";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Count time={30} width={220} />
    </div>
  );
}


export default App;
```

## Props

The `CountdownButton` component accepts the following props:

| Prop          | Type     | Description                              |
|---------------|----------|------------------------------------------|
| `time` | `number`    | The initial countdown time in seconds.   |
| `width`  | `number`   | Circle Radius   |

## License

This project is licensed under the MIT License.

