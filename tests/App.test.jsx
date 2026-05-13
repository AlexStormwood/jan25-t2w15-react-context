import { describe, expect, test } from "vitest";
import {page} from "vitest/browser";
import App from "../src/App";

describe("App component tests", () => {

	test("App should begin with count of 0", async () => {
		let screen = await page.render(<App />);

		expect(screen.getByText("Count is 0")).toBeTruthy();
	});

	test("App should increment the count number when button is clicked", async () => {
		let screen = await page.render(<App />);
		await expect.element(screen.getByText("Count is 0")).toBeInTheDocument();
		
		// await screen.getByRole('button', { name: 'Increment' }).click()
		
		await screen.getByText("Count is 0").click();
		await screen.getByText("Count is 1").click();
		await screen.getByText("Count is 2").click();

		await expect.element(screen.getByText("Count is 3")).toBeInTheDocument();

	});

});