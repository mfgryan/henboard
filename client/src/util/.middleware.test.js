import { logger, validate } from "./middleware.js";

describe("logger", () => {
    test("should have truthy logger", () => {
        expect(logger).toBeTruthy();
    });

    const create = () => {
        const store = {
            getState: jest.fn(() => ({})),
            dispatch: jest.fn()
        };
        const next = jest.fn();

        const invoke = action => logger(store)(next)(action);

        return { store, next, invoke };
    };

    test("should pass through the action", () => {
        const { next, invoke } = create();
        const action = { type: "TEST" };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    });
});

describe("validate", () => {
    test("should have truthy validate", () => {
        expect(validate).toBeTruthy();
    });

    const create = () => {
        const store = {
            getState: jest.fn(() => ({})),
            dispatch: jest.fn()
        };
        const next = jest.fn();

        const invoke = action => validate(store)(next)(action);

        return { store, next, invoke };
    };

    test("should have passed through the action", () => {
        const { next, invoke } = create();
        const action = { type: "TEST" };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    });
});
