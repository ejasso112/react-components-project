import { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'

import stories from '../../stories'
import toJsxString from '../../utils/toJsxString'

SyntaxHighlighter.registerLanguage('jsx', jsx)

interface ComponentsProps {
  setTabs: (tabs: string[]) => void
}

const Components = ({ setTabs }: ComponentsProps) => {
  // Retrive Component Name from Path
  const getComponentName = useParams().componentName || 'button'
  const component = stories[getComponentName]

  useEffect(() => {
    setTabs(Object.keys(stories))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const componentMap = component.props?.map((item) => {
    const Component = item.jsx
    const codeSnippet = toJsxString(Component)
    const Tag = item.hierarchy == 1 ? 'h2' : item.hierarchy == 2 ? 'h3' : 'h4'

    return (
      <Fragment key={item.title}>
        <Tag>{item.title}</Tag>
        {item?.desc && <p>{item.desc}</p>}
        <div className='rcp-components__sample'>
          <Component />
        </div>

        <SyntaxHighlighter language='jsx' style={undefined} className='rcp-components__code' useInlineStyles={false} codeTagProps={{ style: {} }}>
          {codeSnippet}
        </SyntaxHighlighter>
      </Fragment>
    )
  })

  return (
    <div className='rcp-components'>
      <div className='rcp-components__content'>
        <h1>{component.default.component}</h1>
        <p className='desc'>{component.default.description}</p>
        {componentMap && componentMap}
      </div>
    </div>
  )
}

export default Components
