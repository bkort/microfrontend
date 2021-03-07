import React from 'react'

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props
    const scriptId = `micro-frontend-script-${name}`

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend()
      return
    }

    fetch(`${host}/assets-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        console.log(manifest)
        const script = document.createElement('script')
        script.id = scriptId
        script.crossOrigin = ''
        script.src = `${host}/${manifest['app.js']}`
        script.onload = this.renderMicroFrontend
        document.head.appendChild(script)
      })
  }

  componentWillUnmount() {
    console.log(this.props)
    const { name, window } = this.props

    window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`)
  }

  renderMicroFrontend() {
    console.log(this.props)
    const { name, window, history } = this.props

    window[`render${name}`](`${name}-container`, history)
  }

  render() {
    return <main id={`${this.props.name}-container`} />
  }
}

MicroFrontend.defaultProps = {
  document,
  window
}

export default MicroFrontend
