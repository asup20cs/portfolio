import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ashutosh",
  DESCRIPTION: "Personal website of Ashutosh Khanal Upadhyay",
  AUTHOR: "Ashutosh Khanal Upadhyay",
}

// Work Page
export const ABOUT: Page = {
  TITLE: "About Me",
  DESCRIPTION: "Something about me",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  {
    TEXT:"About Me",
    HREF:"/about"
  }
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "uashutoshk@yahoo.com",
    HREF: "mailto:uashutoshk@yahoo.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "asup20cs",
    HREF: "https://github.com/asup20cs"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Ashutosh Khanal Upadhyay",
    HREF: "https://www.linkedin.com/in/ashutosh-khanal-upadhyay-0742831bb/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "uashutoshk",
    HREF: "https://twitter.com/uashutoshk",
  },
]

