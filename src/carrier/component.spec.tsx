import { render, shallow } from 'enzyme'
import * as React from 'react'
import { Carrier } from './component'
const MESSAGE = 'foo'

const initialState: Store = {
  ready: false,
  randomFlag: false,
  textToSpeechFlag: false,
  points: 0,
  logged: false,
  name: 'LearningMeme',
  fromLanguage: 'DE',
  toLanguage: 'EN',
  instructions: ''
}

const CurrentProps: Props = {
  dispatch: x => { },
  store: initialState,
}



test('', () => {
  const wrapper = render(<Carrier {...CurrentProps} />)

  expect(wrapper.text()).toEqual(`0`)
})

test.skip('renders the message', () => {
  const wrapper = shallow(<Carrier {...CurrentProps} />)

  expect(wrapper).toMatchSnapshot()
  // wrapper.find('[name="toggle-preview"]').simulate('click');
  //     expect(wrapper).toMatchSnapshot();
})