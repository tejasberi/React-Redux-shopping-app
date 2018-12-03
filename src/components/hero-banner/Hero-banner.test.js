import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeroBanner from './Hero-Banner';

configure({ adapter: new Adapter() });

describe('<HeroBanner />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<HeroBanner />);
    })

    it('should render the header', () => {
        expect(component.contains(<h1>Plates</h1>)).toBe(true);
    })

    it('should render the left banner image', () => {
        expect(component.contains(<div className="col-3 left-banner"></div>)).toBe(true);
    })

    it('should render the right banner image', () => {
        expect(component.contains(<div className="col-3 right-banner"></div>)).toBe(true);
    })
});