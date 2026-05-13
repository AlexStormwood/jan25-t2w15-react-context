import { expect, test } from "vitest";
import {page} from "vitest/browser";
import HomePage from "../src/pages/HomePage";


// test("test description", callback);
test("HomePage renders 'Home Page' text", async () => {
	const screen = await page.render(<HomePage />);

	await expect.element(screen.getByText("Home Page")).toBeVisible();

});