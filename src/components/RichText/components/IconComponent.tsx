import React from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { IconNode } from '@/components/RichText/nodes/IconNode'

export const IconComponent: React.FC<{ iconName: string }> = ({ iconName }) => {
  const [editor] = useLexicalComposerContext()

  return (
    <span style={{ fontSize: '1.2em', display: 'inline-block' }}>
      {/* Replace with actual icon logic or component */}
      {iconName}
    </span>
  )
}
