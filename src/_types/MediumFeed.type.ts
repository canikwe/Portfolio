export interface MediumFeed {
  items: MediumFeedItem[]
  feed: MediumFeedMeta
  status: string
}

export interface MediumFeedItem {
  title: string
  pubDate: string
  link: string
  guid: string
  categories: string[]
  content: string
  thumbnail: string
}

interface MediumFeedMeta {
  url: string
  title: string
  link: string
}
