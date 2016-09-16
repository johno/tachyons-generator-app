import React, { Component } from 'react'
import generator from 'tachyons-generator'

class App extends Component {
  constructor (props) {
    super(props)
    const config = {
      typeScale: [
        10, 8, 1
      ],
      spacing: {
        root: 4,
        ratio: 1.5,
        steps: 6
      }
    }

    this.state = {
      config,
      other: generator(config).other(),
      colors: generator(config).colors(),
      spacing: generator(config).spacing(),
      typeScale: generator(config).typeScale()
    }
  }

  handleSpacing (key, val) {
    const newConfig = Object.assign({}, this.state.config)
    newConfig.spacing[key] = val

    this.setState({
      config: newConfig,
      spacing: generator(newConfig).spacing()
    })
  }

  handleTypeScale (i, val) {
    const newConfig = Object.assign({}, this.state.config)
    const newTypeScale = newConfig.typeScale

    newTypeScale[i] = val
    newConfig.typeScale = newTypeScale

    this.setState({
      config: newConfig,
      typeScale: generator(newConfig).typeScale()
    })
  }

  render () {
    const { typeScale, config, spacing } = this.state

    return (
      <div>
        <style>
          {typeScale}
          {spacing}
        </style>

        <span className='f1'>f1</span>
        <span className='f2'>f2</span>
        <span className='f3'>f3</span><br />
        <input value={config.typeScale[0]} onChange={e => this.handleTypeScale(0, e.target.value)} />
        <input value={config.typeScale[1]} onChange={e => this.handleTypeScale(1, e.target.value)} />
        <input value={config.typeScale[2]} onChange={e => this.handleTypeScale(2, e.target.value)} />
        <pre><code>{typeScale}</code></pre>

        <input value={config.spacing.steps} onChange={e => this.handleSpacing('steps', e.target.value)} />
        <input value={config.spacing.ratio} onChange={e => this.handleSpacing('ratio', e.target.value)} />
        <input value={config.spacing.root} onChange={e => this.handleSpacing('root', e.target.value)} />
        <pre><code>{spacing}</code></pre>
      </div>
    )
  }
}

export default App
