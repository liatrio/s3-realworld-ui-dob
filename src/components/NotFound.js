import React from 'react'

function NotFound() {
  const text = {
    textAlign: 'center',
    fontSize: "72px"
  };
  const container = {
    height: "100vh",
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    background: "#74B666"
  };

  return (
    
      <div style={container}>
      <p style={text}>404</p>
      <p>Not sure what your looking for</p>
      </div>
      
  )
}

export default NotFound