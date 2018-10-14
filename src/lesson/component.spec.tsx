import * as React from 'react'
import { render, shallow } from 'enzyme'

class Foo extends React.Component {
  render() {
    return <div>aa{this.props.a}
    </div>
  }
}

const propsBase = {
  a: "bar"
}

test('', () => {
  const wrapper = shallow(<Foo {...propsBase} />)

  expect(wrapper).toMatchSnapshot()
})
