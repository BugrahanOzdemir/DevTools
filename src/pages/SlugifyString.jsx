import React, { useState } from "react"

import ToolTitle from "../ui/ToolTitle"
import CopyButton from "../ui/CopyButton"

const SlugifyString = () => {
  const [slugifyText, setSlugifyText] = useState()

  const slugify = (event) => {
    let inputText = event.target.value

    inputText = inputText.toLowerCase().replace(/ /g, "-")
    setSlugifyText(inputText)
  }

  return (
    <div className='ml-64'>
      <ToolTitle
        title='Slugify String'
        subtitle='Make a string url, filename and id safe.'
      />

      <div className='grid justify-center gap-10'>
        <textarea
          onChange={slugify}
          id='regularText'
          placeholder='My File Path'
          className='bg-[#3333] px-1.5 py-2 text-lg focus:textarea-primary transition-colrs duration-500'
          cols='100'
          rows='1'
        />

        <textarea
          value={slugifyText}
          id='stringfyText'
          placeholder='my-file-path'
          className='bg-[#3333] px-1.5 py-2 text-lg focus:textarea-primary transition-colrs duration-500'
          cols='100'
          rows='1'
          disabled
        />

        <CopyButton className='mt-[-1rem]' text={slugifyText} />
      </div>
    </div>
  )
}

export default SlugifyString
