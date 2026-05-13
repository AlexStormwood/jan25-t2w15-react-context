import { describe, expect, test } from "vitest";
import {page} from "vitest/browser";
import App from "../src/App";

describe("App component tests", () => {

	test("App should begin with count of 0", async () => {
		let screen = await page.render(<App />);

		expect(screen.getByText("Count is 0")).toBeTruthy();
	});

	test.skip("App should incremenet the count number when button is clicked", async () => {

	});

});