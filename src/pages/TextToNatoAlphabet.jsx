import React, { useState } from "react"

import ToolTitle from "../ui/ToolTitle"
import CopyButton from "../ui/CopyButton"
import Input from "../ui/Input"

import { natoAlphabet } from "../services/text-to-nato-alphabet/nato-alphabet-constans"

const TextToNatoAlphabet = () => {
  const [regText, setRegText] = useState()
  const [outputVisible, setOutputVisible] = useState(false)

  const handleRegInput = (event) => {
    if (event.target.value.trim().length !== 0) {
      setOutputVisible(true)
      setRegText(textToNatoAlphabet(event.target.value))
    } else {
      setOutputVisible(false)
    }
  }

  const getLetterPositionInAlphabet = (letter) => {
    return letter.toLowerCase().charCodeAt(0) - "a".charCodeAt(0)
  }

  const textToNatoAlphabet = (text) => {
    return text
      .split("")
      .map((char) => {
        const alphabetIndex = getLetterPositionInAlphabet(char)
        const natoWord = natoAlphabet[alphabetIndex]
        return natoWord ?? char
      })
      .join(" ")
  }

  return (
    <div className='ml-64'>
      <ToolTitle
        title='Text To NATO Alphabet'
        subtitle='Transform text into NATO phonetic alphabet for oral transmission.'
      />

      <div className='flex flex-row justify-center'>
        <div className='form-control w-full'>
          <label htmlFor='input-text' className='py-1.5'>
            Your text to convert to NATO phonetic alphabet
          </label>

          <Input
            onChange={handleRegInput}
            id='input-text'
            type='text'
            placeholder='Type your text'
          />
        </div>
      </div>

      {outputVisible && (
        <div>
          <div className='outputArea bg-neutral p-8 mt-10'>
            <p className='break-all'> {regText} </p>
          </div>

          <CopyButton text={regText} className='mt-10' />
        </div>
      )}
    </div>
  )
}

export default TextToNatoAlphabet
