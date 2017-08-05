import React from "react";
import Item from "./Item";
import renderer from "react-test-renderer";

let item = {
    project: "henboard",
    name: "test",
    column: "todo",
    value: "foo",
    week: "01/01/01",
    openInfo: false,
    addItem: false
};

test("Item renders correctly no check", () => {
    const tree = renderer
        .create(
            <Item
                draggable
                item={item}
                dragItem={() => {}}
                itemClicked={() => {}}
                removeItem={() => {}}>
                <p>test</p>
            </Item>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

item.check = true;
test("Item renders correctly check", () => {
    const tree = renderer
        .create(
            <Item
                draggable
                item={item}
                dragItem={() => {}}
                itemClicked={() => {}}
                removeItem={() => {}}>
                <p>test</p>
            </Item>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
