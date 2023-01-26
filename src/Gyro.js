import React from 'react'
import useGyroscope from 'react-hook-gyroscope'

function Gyro() {
  const gyroscope = useGyroscope()

  return !gyroscope.error ? (
    <ul>
      <li>X: {gyroscope.x}</li>
      <li>Y: {gyroscope.y}</li>
      <li>Z: {gyroscope.z}</li>
    </ul>
  ) : (
    <p>No gyroscope, sorry.</p>
  )
}
export default Gyro;