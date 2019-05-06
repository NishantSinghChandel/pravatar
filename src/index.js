import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    bg: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    radius: PropTypes.string,
    fontSize: PropTypes.string
  }

  render() {
    const { text } = this.props
    const { bg } = this.props
    const { width } = this.props
    const { height } = this.props
    const { radius } = this.props
    const { fontSize } = this.props

    return (
      <div
        className={styles.pravatar}
        text={text}
        style={{
          backgroundImage: `url(${bg})`,
          width: `${width}`,
          height: `${height}`,
          borderRadius: `${radius}`,
          fontSize: `${fontSize}`
        }}
      />
    )
  }
}
