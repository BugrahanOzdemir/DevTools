import React from "react"

import CopyToClipboard from "react-copy-to-clipboard"

const CopyButton = (props) => {
  let btnClass = `btn btn-primary btn-outline gap-2 w-52 ${props.className}`
  return (
    <CopyToClipboard text={props.text}>
      <div className='flex flex-row justify-center'>
        <button className={btnClass}>
          <i class='bi bi-clipboard-check-fill' />
          Copy
        </button>
      </div>
    </CopyToClipboard>
  )
}

export default CopyButton
