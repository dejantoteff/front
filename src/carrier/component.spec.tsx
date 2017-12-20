import { render, shallow } from 'enzyme'
import { identity } from 'rambdax'
import * as React from 'react'
import { Carrier } from './component'

const initialState: Store = {
  fromLanguage: 'DE',
  instructions: '',
  logged: false,
  name: 'LearningMeme',
  points: 0,
  randomFlag: false,
  ready: false,
  textToSpeechFlag: false,
  toLanguage: 'EN',
}

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
