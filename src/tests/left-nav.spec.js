import React from 'react';
import { mount, configure } from 'enzyme';
import LeftNav from '../index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const items = [
    'About',
    'Services',
    'Clients',
    'Contact'
];

describe('Left Nav', () => {

    it('show list of menu items', () => {
        const leftNav = mount(<LeftNav items={items} />);

        for (let item of items) {
            expect(leftNav.html()).toContain(item);
        }
    })
});