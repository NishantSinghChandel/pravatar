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
    border: PropTypes.string,
    size: PropTypes.string,
    position: PropTypes.string,
    weight: PropTypes.string,
    initial: PropTypes.string
  }
  getInitials = name => {
    let initials = ''
    name.split(' ').map(subName => (initials = initials + subName[0]))
    return initials.toUpperCase()
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
    const { size } = this.props
    const { position } = this.props
    const { weight } = this.props
    const { initial } = this.props

    return (
      <div
        className={styles.pravatar}
        text={initial ? this.getInitials(text.trim()) : text}
        style={{
          color: `${textColor}`,
          backgroundImage: `url(${image})`,
          backgroundColor: `${bg}`,
          width: `${width}`,
          height: `${height}`,
          borderRadius: `${radius}`,
          fontSize: `${fontSize}`,
          border: `${border}`,
          backgroundPosition: `${position}`,
          backgroundSize: `${size}`,
          fontWeight: `${weight}`
        }}
      />
    )
  }
}
