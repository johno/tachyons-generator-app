import React, { Component } from 'react'
import generator from 'tachyons-generator'

class App extends Component {
  constructor (props) {
    super(props)
    const config = {
      typeScale: [
        10, 8, 1
      ]
    }

    this.state = {
      config,
      other: generator(config).other(),
      colors: generator(config).colors(),
      spacing: generator(config).spacing(),
      typeScale: generator(config).typeScale()
    }
  }

  handleTypeScale (i, val) {
    const newConfig = this.state.config
    const newTypeScale = newConfig.typeScale
    newTypeScale[i] = parseInt(val)
    newConfig.typeScale = newTypeScale

    this.setState({
      config: newConfig,
      typeScale: generator(newConfig).typeScale()
    })
  }

  render () {
    const { typeScale, config } = this.state

    return (
      <div>
        <style>
          {typeScale}
        </style>
        <span className='f1'>f1</span>
        <span className='f2'>f2</span>
        <span className='f3'>f3</span><br />
        <input value={config.typeScale[0]} onChange={e => this.handleTypeScale(0, e.target.value)} />
        <input value={config.typeScale[1]} onChange={e => this.handleTypeScale(1, e.target.value)} />
        <input value={config.typeScale[2]} onChange={e => this.handleTypeScale(2, e.target.value)} />
        <pre><code>{typeScale}</code></pre>
      </div>
    )
  }
}

export default App
