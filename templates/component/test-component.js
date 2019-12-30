import React from 'react'

import {mount} from "enzyme";
import Root from "../../Root";
import ${NAME} from "../${NAME}";

let wrapped;
beforeEach(() => {
    wrapped = mount(<Root><${NAME}/></Root>); //More clear with component
});

afterEach(() => {
    wrapped.unmount();
});


it('should ', () => {

});
