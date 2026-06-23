import { List } from "immutable"

const initialState = {
  projects: new List(),
  blogPosts: new List(),
  socials: new List(),
  isFetchingProjects: false,
  isFetchingBlogPosts: false,
  isFetchingSocials: false
}

export default initialState
