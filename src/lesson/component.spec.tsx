import * as React from 'react'
import { render, shallow } from 'enzyme'

interface I{
  a: string
}

class Foo extends React.Component<I> {
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
