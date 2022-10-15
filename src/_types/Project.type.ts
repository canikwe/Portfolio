export interface Project {
  id: number
  title: string
  description: string
  featureImg: string
  secondaryImgs: string[]
  tagLine: string
  demo: string
  frontendRepo: string
  backendRepo: string
  tags: string[]
  github?: string
  link?: string
  thumbnail?: string
  tech?: string[]
}
