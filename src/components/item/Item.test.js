import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Item from './Item';
import CurrencyFormat from 'react-currency-format';
import AddToCartBtn from '../add-to-cart-btn/Add-to-cart-btn';

configure({ adapter: new Adapter() });

describe('<Item />', () => {

    let component;

    beforeEach(() => {
        component = shallow(<Item product />);
        component.setProps({
            product:
            {
                title: 'Blue Stripe Stoneware Plate',
                brand: 'Kiriko',
                price: 40,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.',
                image: 'blue-stripe-stoneware-plate.jpg'
            }
        })
    })

    it('should contain the add to cart button', () => {
        expect(component.find(AddToCartBtn)).toHaveLength(1);
    });

    it('should render the brand name', () => {
        expect(component.find('.brand').text()).toEqual('Kiriko');
    })

    it('should render the title', () => {
        expect(component.find('.title').text()).toEqual('Blue Stripe Stoneware Plate');
    })

});