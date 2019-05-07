import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    bg: PropTypes.string,
    image: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    radius: PropTypes.string,
    fontSize: PropTypes.string,
    textColor: PropTypes.string,
    border: PropTypes.string
  }

  render() {
    const { text } = this.props
    const { bg } = this.props
    const { image } = this.props
    const { width } = this.props
    const { height } = this.props
    const { radius } = this.props
    const { fontSize } = this.props
    const { textColor } = this.props
    const { border } = this.props

    return (
      <div
        className={styles.pravatar}
        text={text}
        style={{
          color: `${textColor}`,
          backgroundImage: `url(${image})`,
          backgroundColor: `${bg}`,
          width: `${width}`,
          height: `${height}`,
          borderRadius: `${radius}`,
          fontSize: `${fontSize}`,
          border: `${border}`
        }}
      />
    )
  }
}
