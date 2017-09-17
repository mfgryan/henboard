import user from "./user.js";
import store from "./store.js";
import models from "../models/models";

let u = user(store, models.keys);

describe("user", () => {
    test("non falsy", () => {
    });
});
