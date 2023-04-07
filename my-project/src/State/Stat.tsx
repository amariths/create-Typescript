import React from 'react'

type StatusProps = {
    status: string
}


function Stat(props: StatusProps) {

    let msg

    if(props.status === 'loading') {
        msg = 'laddar'
    } else if(props.status === 'success') {
        msg = 'sidan har gjort en fetch'
    }  else if(props.status === 'error') {
        msg = ' vi har ett error'
    }


  return (
    <div>
        {/*
      <h2>laddar...</h2>
      <h2>sidan har gjort en fetch</h2>
  <h2>error</h2>*/}
      <h2>status - {msg}</h2>
    </div>
  )
}

export default Stat
