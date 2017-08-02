import React from "react";
import Selector from "./Selector";
import renderer from "react-test-renderer";

it("Selector renders correctly", () => {
    let items = [
        {
            week: "01/01/01"
        }
    ];
    const tree = renderer
        .create(
            <Selector
                title="foo"
                items={items}
                addItemTitle="bar"
                itemKey="week"
                itemClicked={() => {}}>
                test
            </Selector>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
