import { render, shallow } from 'enzyme'
import { identity } from 'rambdax'
import * as React from 'react'
import { getInitialState } from '../../_helpers/getInitialState'
import { Carrier } from './component'

const initialState = getInitialState()

const CurrentProps: Props = {
  dispatch: identity,
  store: initialState,
}

test.skip('', () => {
  const wrapper = render(<Carrier {...CurrentProps} />)

  expect(
    wrapper.text(),
  ).toEqual('0')
})

test.skip('renders the message', () => {
  expect(
    shallow(<Carrier {...CurrentProps} />),
  ).toMatchSnapshot()
  // wrapper.find('[name="toggle-preview"]').simulate('click');
  //     expect(wrapper).toMatchSnapshot();
})
