import type { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync } from 'fs'
import Markdoc from '@markdoc/markdoc'
import path from 'path'
const { nodes } = require('@markdoc/markdoc')

function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === 'string') {
    return attributes.id
  }
  return children
    .filter((child) => typeof child === 'string')
    .join(' ')
    .replace(/[?]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

const rawText = readFileSync(path.join('pages/api/docs/installation.md'), 'utf-8')
const ast = Markdoc.parse(rawText)

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const config = {
    tags: {
      callout: {
        render: 'Callout',
        children: ['paragraph', 'tag', 'list'],
        attributes: {
          type: {
            type: String,
            default: 'note',
            matches: ['check', 'error', 'note', 'warning'],
          },
        },
      },
    },
    nodes: {
      heading: {
        ...nodes.heading,
        transform(node, config) {
          const base = nodes.heading.transform(node, config)
          base.attributes.id = generateID(base.children, base.attributes)
          return base
        },
      },
    },
    variables: {},
  }
  const content = Markdoc.transform(ast, config)
  res.status(200).json(content)
}
