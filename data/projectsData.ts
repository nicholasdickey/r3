interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Qwiket: Sport-savvy AI Chat and news monitor for fantasy sports and betting enthusiasts',
    description: `Slicing and dicing professional sports publications and indexing them by athletes' mentions.`,
    imgSrc: '/static/images/qwiket-screen.png',
    href: 'https://www.qwiket.com?utm_content=r3',
  },
  {
    title: 'American Outdoorsman',
    description: `News Digest for the outdoors life in America's Heartland.`,
    imgSrc: '/static/images/american-outdoorsman-screen.png',
    href: 'https://www.american-outdoorsman.news',
  },
  {
    title: 'NFL/NHL/MLB/NBA News Digest',
    description: `Sports News Digest for Twitter/X @qwiket_nfl, @qwiket_mlb, @qwiket_nba, @qwiket_nhl.`,
    imgSrc: '/static/images/x-screen.png',
    href: 'https://twitter.com/qwiket_nfl',
  },

  {
    title: 'Pentacostal Prayer App',
    description: `Free Pentacostal Prayer Web Application.`,
    imgSrc: '/static/images/prayer50-screen.png',
    href: 'https://www.pray50.com',
  },
]

export default projectsData
