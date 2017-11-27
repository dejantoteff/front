import { render, shallow } from 'enzyme'
// import renderer from 'react-test-renderer';
import * as React from 'react'
import { Main } from './component'
const MESSAGE = 'foo'

const initialState: MainInitialState = {
  mainFoo: MESSAGE,
}

const Props: MainProps = {
  dispatch: x => { },
  mainStore: initialState,
}



test('', () => {
  const wrapper = render(<Main {...Props} />)

  expect(wrapper.text()).toEqual(`main_${MESSAGE}`)
})

test('renders the message', () => {
  const wrapper = shallow(<Main {...Props} />)

  expect(wrapper).toMatchSnapshot()
  // wrapper.find('[name="toggle-preview"]').simulate('click');

  //     expect(wrapper).toMatchSnapshot();
})
