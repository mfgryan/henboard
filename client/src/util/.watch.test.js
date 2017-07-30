import watch from "./watch.js";
import { createStore } from "redux";
import rootReducer from "../reducers/index.js";
import * as actions from "../actions/projects.js";

describe("watch function", () => {
    test("should return non falsy watch object", () => {
        expect(watch).toBeTruthy();
    });

    test("should return non falsy createStore object", () => {
        expect(createStore).toBeTruthy();
    });

    test("should return non falsy rootReducer object", () => {
        expect(rootReducer).toBeTruthy();
    });

    test("should return non falsy actions object", () => {
        expect(actions).toBeTruthy();
    });

    const store = createStore(rootReducer);

    test("should not not call the mockCallback", () => {
        let mockCallback = jest.fn();
        watch(store, ["projects"], mockCallback);
        store.dispatch({ type: "TEST", foo: "bar" });
        expect(mockCallback.mock.calls.length).toBe(0);
    });

    describe("mock callback called", () => {
        let mockCallback = jest.fn();
        watch(store, ["projects"], mockCallback);
        let action = actions.initProjects([
            { project: "henboard", current: false }
        ]);

        let beforeObject = store.getState().projects;
        store.dispatch(action);
        let afterObject = store.getState().projects;

        test("should call the mockCallback once", () => {
            expect(mockCallback.mock.calls.length).toBe(1);
        });

        // first index is which call, second is which argument,
        // third is accessing the index if the argument is an array
        test("should call the mockCallback containing projects key as first arg", () => {
            expect(mockCallback.mock.calls[0][0]).toContain("projects");
        });

        test("should call the mockCallback containing beforeObj as second arg", () => {
            expect(mockCallback.mock.calls[0][1][0]).toEqual(beforeObject);
        });

        test("should call the mockCallback containing afterObj as third arg", () => {
            expect(mockCallback.mock.calls[0][2][0]).toEqual(afterObject);
        });
    });
});
