import { render, shallow } from 'enzyme'
import { identity } from 'rambdax'
import * as React from 'react'
import { getInitialState } from '../_helpers/getInitialState'
import { Carrier } from './component'

const initialState = getInitialState()

const CurrentProps: Props = {
  dispatch: identity,
  store: initialState,
}

test('', () => {
  const wrapper = render(<Carrier {...CurrentProps} />)

  expect(wrapper.text()).toEqual('0')
})

test.skip('renders the message', () => {
  const wrapper = shallow(<Carrier {...CurrentProps} />)

  expect(wrapper).toMatchSnapshot()
  // wrapper.find('[name="toggle-preview"]').simulate('click');
  //     expect(wrapper).toMatchSnapshot();
})
