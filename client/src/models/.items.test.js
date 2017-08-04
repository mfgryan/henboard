import items from "./items.js";

describe("items", () => {
    test("should be non falsy items", () => {
        expect(items).toBeTruthy();
    });

    test("non falsy fields", () => {
        expect(items.fields).toBeTruthy();
    });

    test("non falsy primaryKeys", () => {
        expect(items.primaryKeys).toBeTruthy();
    });

    test("getItem", () => {
        let state = { items: [{ project: "x", name: "foo" }] };
        expect(items.getItem(state, "x", "foo")).toEqual(state.items[0]);
    });

    test("getItemsBySprint", () => {
        let state = { items: [{ project: "x", week: "foo" }] };
        expect(items.getItemsBySprint(state, "x", "foo")).toEqual(state.items);
    });
});
