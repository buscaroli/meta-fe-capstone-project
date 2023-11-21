import React from 'react'
import { useNavigate } from 'react-router-dom'

function ReserveButton({ show }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/reserve')
  }
  return (
    <button
      style={{
        backgroundColor: '#F4CE14',
        borderRadius: '16px',
        gridColumn: '3/5',
        gridRow: '7/8',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        borderStyle: 'none',
      }}
      onClick={handleClick}
    >
      Reserve a Table
    </button>
  )
}

export default ReserveButton
