import React from "react"

import CopyToClipboard from "react-copy-to-clipboard"

const CopyButton = (props) => {
  return (
    <CopyToClipboard text={props.text}>
      <div className='flex flex-row justify-center'>
        <button className='btn btn-primary btn-outline gap-2 mt-10 w-52'>
          <i class='bi bi-clipboard-check-fill' />
          Copy
        </button>
      </div>
    </CopyToClipboard>
  )
}

export default CopyButton
