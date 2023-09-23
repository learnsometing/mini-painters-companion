import MarkdownIt from 'markdown-it'
import { IMarkdownToJsonConverter, MarkdownToJsonConverter } from './markdownToJsonConverter'

export type JsonDictionary = { [k in string]: string }

export const createJsonFileName = (fileName: string) => fileName.replaceAll('md', 'json')
export const createJsonDictionary = async (
  converter: IMarkdownToJsonConverter,
  fileNames: string[]
): Promise<JsonDictionary> => {
  const markdownAsJson = await Promise.all(fileNames.map(fileName => converter.convertMdToJson(fileName)))
  return markdownAsJson.reduce((acc, json, idx) => {
    const fileName = fileNames[idx]

    if (fileName === undefined) throw new Error('WTF, NO FILE NAME!!')

    const jsonFileName = createJsonFileName(fileName)
    return { ...acc, [jsonFileName]: json }
  }, {})
}

export const main = async () => {
  const PAINT_FILES = ['./md/citadel.md']

  const markdownIt = new MarkdownIt()
  const markdownToJsonConverter = new MarkdownToJsonConverter(markdownIt)

  const paintFilesJsonDictionary = await createJsonDictionary(markdownToJsonConverter, PAINT_FILES)
  return paintFilesJsonDictionary
}

main()
