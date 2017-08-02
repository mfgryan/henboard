import React from "react";
import AddItem from "./AddItem";
import renderer from "react-test-renderer";

it("AddItem renders correctly", () => {
    const tree = renderer
        .create(
            <AddItem
                title="Todo"
                value=""
                showAddItem
                item="test"
                toggleAddItem={() => {}}
                changeValue={() => {}}
                addItem={() => {}}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
