import reactElementToJSXString from 'react-element-to-jsx-string'

const toJsxString = (component: () => JSX.Element) => {
  const regexp = /(?<=>)\n( ?)+[^<]+\n( ?)+(?=<)/g

  let code = reactElementToJSXString(component(), { maxInlineAttributesLineLength: 120 })
    .split('\n')
    .filter((line) => !line.includes("{' '}"))
    .join('\n')

  console.log(code)
  const codeMatchesArr = code.match(regexp)

  codeMatchesArr?.forEach((element) => {
    code = code.replace(element, element.trim())
  })

  return code
}

export default toJsxString
