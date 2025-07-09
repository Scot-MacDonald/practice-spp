import type { CollectionAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'
import type { News as BaseNews } from '../../../payload-types'

type NewsWithStatus = BaseNews & {
  _status?: string
}

export const revalidateNews: CollectionAfterChangeHook<NewsWithStatus> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/news/${doc.slug}`
    payload.logger.info(`Revalidating news at path: ${path}`)
    revalidatePath(path)
  }

  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/news/${previousDoc.slug}`
    payload.logger.info(`Revalidating old news at path: ${oldPath}`)
    revalidatePath(oldPath)
  }

  return doc
}
