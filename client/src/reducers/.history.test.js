import { history, provideHistory } from "./history.js";
import * as actions from "../actions/history.js";

describe("history reducer", () => {
    test("should be non falsy history reducer", () => {
        expect(history).toBeTruthy();
    });

    test("initHistory", () => {
        let initialState = [];
        let input = [{ foo: "bar" }];
        let action = actions.initHistory(input);
        let expectedState = input;
        expect(history(initialState, action)).toEqual(expectedState);
    });

    test("pushChange", () => {
        let initialState = [{ project: "henboard", undo: [], redo: [] }];
        let input = {project: "henboard", keys: ["lane"], undo: "foo", redo: "bar"}
        let action = actions.pushChange(input);
        let expectedState = [{ project: "henboard", undo: [input], redo: [] }];
        expect(history(initialState, action)).toEqual(expectedState);
    });
    
    test("undo", () => {
        let obj = {project: "henboard", keys: ["lane"], undo: "foo", redo: "bar"}
        let initialState = [{ project: "henboard", undo: [obj], redo: [] }];
        let input = {project: "henboard"};
        let action = actions.undo(input);
        let expectedState = [{ project: "henboard", undo: [], redo: [obj] }];
        expect(history(initialState, action)).toEqual(expectedState);
    });
    
    test("redo", () => {
        let obj = {project: "henboard", keys: ["lane"], undo: "foo", redo: "bar"}
        let initialState = [{ project: "henboard", undo: [], redo: [obj] }];
        let input = {project: "henboard"};
        let action = actions.redo(input);
        let expectedState = [{ project: "henboard", undo: [obj], redo: [] }];
        expect(history(initialState, action)).toEqual(expectedState);
    });

    test("default ", () => {
        let initialState = [];
        let action = { type: "UNKNOWN_TYPE" };
        let expectedState = [];
        expect(history(initialState, action)).toEqual(expectedState);
    });
});

describe("provideHistory reducer", () => {
    test("should be non falsy provideHistory reducer", () => {
        expect(provideHistory).toBeTruthy();
    });

    test("updates", () => {
        let mockNext = jest.fn((state, action) => state);
        let initialState = {projects: [{project: "henboard", current: true}]};
        let key = "projects";
        let data = [{project: "henboard", current: false}];
        let action = actions.updates(key, data);
        let expectedState = {projects: [{project: "henboard", current: false}]};
        expect(provideHistory(mockNext)(initialState, action)).toEqual(expectedState);
        expect(mockNext.mock.calls.length).toBe(1);
        expect(mockNext.mock.calls[0][0]).toEqual(expectedState);
    });
    
    test("inserts", () => {
        let mockNext = jest.fn((state, action) => state);
        let initialState = {projects: [{project: "henboard", current: true}]};
        let key = "projects";
        let data = [{project: "x", current: false}];
        let action = actions.inserts(key, data);
        let expectedState = {projects: [{project: "henboard", current: true},
            {project: "x", current: false}]};
        expect(provideHistory(mockNext)(initialState, action)).toEqual(expectedState);
        expect(mockNext.mock.calls.length).toBe(1);
        expect(mockNext.mock.calls[0][0]).toEqual(expectedState);
    });
    
    test("removals", () => {
        let mockNext = jest.fn((state, action) => state);
        let initialState = {projects: [{project: "henboard", current: true}]};
        let key = "projects";
        let data = [{project: "henboard", current: true}];
        let action = actions.removals(key, data);
        let expectedState = {projects: []};
        expect(provideHistory(mockNext)(initialState, action)).toEqual(expectedState);
        expect(mockNext.mock.calls.length).toBe(1);
        expect(mockNext.mock.calls[0][0]).toEqual(expectedState);
    });

    test("default", () => {
        let mockNext = jest.fn((state, action) => state);
        let initialState = [];
        let action = {type: "UNKNOWN_TYPE"}
        let expectedState = initialState;
        expect(provideHistory(mockNext)(initialState, action)).toEqual(expectedState);
        expect(mockNext.mock.calls.length).toBe(1);
        expect(mockNext.mock.calls[0][0]).toEqual(expectedState);
    });
});
