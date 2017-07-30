import React from "react";
import Item from "./Item";
import renderer from "react-test-renderer";

it('Item renders correctly', () => {
    let item = {
        project: "henboard",  
        name: "test",  
        column: "todo",  
        value: "foo",  
        week: "01/01/01",  
        openInfo: false,  
        addItem: false
    }
    const tree = renderer.create(
        <Item draggable item={item} dragItem={() => {}} itemClicked={() => {}} removeItem={() => {}}>
            test
        </Item>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
