import RSS from 'rss'
import { serverQueryContent } from '#content/server'
export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).sort({ date: -1 }).find()
  const blogPosts = docs.filter((doc) => doc?._path?.includes('/blog'))
  const feed = new RSS({
    title: 'My personal blog',
    site_url: 'https://link.su-pull.net',
    feed_url: `https://link.su-pull.net/rss.xml`
  })
  for (const doc of blogPosts) {
    feed.item({
      title: doc.title as string,
      url: `https://link.su-pull.net/${doc._path}`,
      guid: `https://link.su-pull.net/${doc._path}`,
      date: doc.date,
      description: doc.description
    })
  }
  const feedString = feed.xml({ indent: true })
  event.node.res.setHeader('content-type', 'text/xml')
  event.node.res.end(feedString)
})
