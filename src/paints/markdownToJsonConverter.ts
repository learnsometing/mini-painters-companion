import { readFile } from 'node:fs/promises'
import MarkdownIt from 'markdown-it'

export interface IMarkdownToJsonConverter {
  convertMdToJson: (fileName: string) => Promise<void>
}

export class MarkdownToJsonConverter implements IMarkdownToJsonConverter {
  constructor(protected markdownIt: MarkdownIt) {}

  readonly readMarkdownFromFile = async (fileName: string) => this.markdownIt.parse(readFile(fileName).toString(), {})

  convertMdToJson = async (fileName: string) => {
    try {
      const markdownParsed = await this.readMarkdownFromFile(fileName)
      console.log({ markdownParsed })
      // const onlyText = markdownParsed[4]!.children?.filter(child => child.type === 'text')
      // if (onlyText === undefined) throw new Error('WTF, NO MARKDOWN')

      // let onlyTextIdx = 0
      // const all = []
      // let row: Token[] = []
      // while (onlyTextIdx < onlyText.length!) {
      //   const token = onlyText[onlyTextIdx]

      //   if (token === undefined) continue

      //   if (token.content === '</tr>') {
      //     console.log('here')
      //     all.push(row)
      //     row = []
      //   }

      //   if (token.content !== '<tr>' && token.content !== '</tr>') {
      //     // @ts-ignore, not sure why prototype is diff
      //     row.push(token)
      //   }
      //   onlyTextIdx++
      //   console.log(onlyTextIdx)
      // }
      // console.log(all)
      // all.map(a => {
      //   a.reduce((acc, curr, idx) => {
      //     if (curr === undefined) return acc
      //     switch (idx) {
      //       case 0:
      //         return { name: curr.content.replace('<td>', '')
      //         break
      //       }
      //     }
      //   }, {})
      // })
    } catch (error) {
      console.error(error)
    }
  }
}
