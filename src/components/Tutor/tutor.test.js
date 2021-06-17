import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Tutor from "./tutor";
import { findByText } from "@testing-library/react";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// Placeholder img renders.
// Placeholder ratings renders.
// Placeholder reviews renders.

//Image renders

describe("Contains text", () => {
  it("Contains text", () => {
    act(() => {
      render(<Tutor />, container);
    });
  });
});

//   describe('Contains placeholder review title', () => {
//     it('Contains Review title', () => {
//         act(() => {
//             render(<Tutor />, container);
//           });

//         expect(container.textContent).toContain("Review");

//     })
//   });

//   describe('Contains placeholder Rating title', () => {
//     it('Contains Rating title', () => {
//         act(() => {
//             render(<Tutor />, container);
//           });

//         expect(container.textContent).toContain("Rating");

//     })
//   });

// describe("Renders user data", () => {
//   it("renders user data", async () => {
//     const fakeData = [
//       {
//         id: "1",
//         name: "Jean-Claude Van Damme",
//         email: "fakeemail@fakeplace.com",
//         password: "fake password",
//         role: "T",
//         scoreA: "3",
//         scoreB: "4",
//         scoreC: "3",
//         reviews: "This is a great fake tutor, because he doesnt exist!",
//       },
//     ];

//     fetch.mockResponseOnce(JSON.stringify({ fakeData }));

//     // Use the asynchronous version of act to apply resolved promises
//     await act(async () => {
//       render(<Tutor />, container);
//     });

//     expect(container.textContent).toContain(fakeData.name);

//     // remove the mock to ensure tests are completely isolated
//     global.fetch.mockRestore();
//   });
// });
