import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import MentorLayout from '@/layouts/MentorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import projectsData from '@/data/projectsData'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <MentorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </MentorLayout>
    </>
  )
}
