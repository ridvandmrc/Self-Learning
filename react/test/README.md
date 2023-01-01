## React Testing Library

- Some testing example in [here](https://github.com/ridvandmrc/react-test)

* React testing library builds on top of **DOM Testing Library** by adding APIs for working with React components.

```bash
npm install --save-dev @testing-library/react
```

## Quickstart

- For the minimal start, we are importing **render** method to render component
- to reach DOM element, we are using **screen** from **@testing-library/react**

### Render Element that will test

```tsx
import { render, screen } from "@testing-library/react";
import Component from "./ComponentToRender";

test("should render successfully", () => {
  render(<Component />); // it will render the component
  const element = screen.getByText("react");
  expect(element).not.null();
});
```

### Having more clean flow

- If we want to have clean flow, we should define our test more informative
- In order to do that, we should use **describe**

```tsx
import { render, screen } from "@testing-library/react";
import Component from "./ComponentToRender";

describe("Test <ComponentToRender />", () => {
  it("Should render successfully", () => {
    render(<Component />); // it will render the component
    const element = screen.getByText("react");
    expect(element).not.null();
  });
});
```

### fireEvent the Button

- Sometimes we have to click button or type something in input
- or fire, any event to element

```tsx
import { render, screen } from "@testing-library/react";
import Component from "./ComponentToRender";

describe("Test <ComponentToRender />", () => {
  it("Should render successfully", () => {
    render(<Component />);
    const button = screen.getByTestId("button-test-id");
    fireEvent.click(button);

    // select input and type

    const input = screen.getByTestId("input-test-id");
    fireEvent.change(input, { target: { value: "test string" } });
  });
});
```

### Integrate to Store or BrowserRoute

- Sometimes we are using redux or router, before running the test cases
  we have to use this provider
- in order achive the test cases, we need to import these component

```tsx
import { render, screen } from "@testing-library/react";
import Component from "./ComponentToRender";

const TestProvider = () => <Provider store={store}>{children}</Provider>;

describe("Test <ComponentToRender />", () => {
  it("Should render successfully", () => {
    render(
      <TestProvider>
        {" "}
        {/* used test provider */}
        <Component />
      </TestProvider>
    );
    const button = screen.getByTestId("button-test-id");
    fireEvent.click(button);
  });
});
```

### Proceed async operation

- In react, there are a lot of async operation or sometimes we are waiting to open something
- In this case we have to wait the element until render

```tsx
import { render, screen } from "@testing-library/react";
import Component from "./ComponentToRender";

const TestProvider = () => <Provider store={store}>{children}</Provider>;

describe("Test <ComponentToRender />", async () => {
  it("Should render successfully", () => {
    render(
      <TestProvider>
        {" "}
        {/* used test provider */}
        <Component />
      </TestProvider>
    );
    const button = screen.getByTestId("button-test-id");
    fireEvent.click(button);

    const modal = await screen.findByTestId("modal-test-id");
    expect(modal).toBeDefined();
  });
});
```

### Before and After Each

- We want to do samething before all test cases or after test cases

* as an example, mocking endpoint, define a function

```tsx
import { render, screen } from "@testing-library/react";
import Component from "./ComponentToRender";

const TestProvider = () => <Provider store={store}>{children}</Provider>;

describe("Test <ComponentToRender />", async () => {
  /* beforeAll */
  beforeEach(() => {
    jest.mock("library", () => doingSometing);
  });

  /* afterAll */
  afterEach(() => {
    jest.mock("library", () => doingSometing);
  });

  it("Should render successfully", () => {
    render(
      <TestProvider>
        {/* used test provider */}
        <Component />
      </TestProvider>
    );
    const button = screen.getByTestId("button-test-id");
    fireEvent.click(button);

    const modal = await screen.findByTestId("modal-test-id");
    expect(modal).toBeDefined();
  });
});
```

### User Event

- User event is provide more advanced actions for us such as click, ctrl + click, dblClick or file upload.

```tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("click", () => {
  render(
    <div>
      <label htmlFor="checkbox">Check</label>
      <input id="checkbox" type="checkbox" />
    </div>
  );

  userEvent.click(screen.getByText("Check"));
  expect(screen.getByLabelText("Check")).toBeChecked();

  // userEvent.click(elem, {ctrlKey: true, shiftKey: true})
  // userEvent.dblClick(element)
  // userEvent.upload(element, file)
});
```

### Mocking Request

- when we make backend call, we have to mock this request to make the test work correctly
- in order to achive this, we can mock axios method

```tsx
beforeEach(() => {
  jest.spyOn(userService, "getAll").mockImplementation(
    () =>
      new Promise((res) =>
        res({
          data: [{ id: 0, name: "ridvan", username: "demirci" }],
        } as any)
      )
  );
});
```

### Mocking Library

- some cases we need to mock some library function,
- in this case we are able to **use jest.mock**

```tsx
import { render } from "@testing-library/react";
import React from "react";
import App from "./";

jest.mock("./child1", () => ({ Child1: () => "mocked child1" }));
jest.mock("./child2", () => ({ Child2: () => "mocked child2" }));

describe("67636326", () => {
  it("should pass", () => {
    const { container } = render(<App />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        mocked child1
        mocked child2
      </div>
    `);
  });
});
```

### Setup.ts

- some case needs to initial configuration
- we can do it in setup.js
- we need to define this (setup.js) to jest configuration

```tsx

```
