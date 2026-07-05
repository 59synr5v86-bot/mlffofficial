export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "liverpool-academy-stars-rise",
    title: "Liverpool academy stars rise as the next generation earns national attention",
    category: "Liverpool",
    date: "May 24, 2026",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Young Reds continue to impress as senior figures praise the talent coming through the ranks at Anfield.",
    content: [
      "Liverpool’s academy pipeline is once again drawing praise after a string of standout performances from the club’s emerging talents. Analysts and coaches alike say the current group has the balance of technical control, physical growth, and maturity needed to compete at the highest level.",
      "The pathway from Kirkby to the first team remains one of the most respected in European football, and the latest wave of players is being watched closely by supporters who see a bright future under the current coaching structure.",
      "With senior players setting the standard, these young prospects are learning quickly and building confidence with every appearance. The excitement around the next generation is now matching the optimism surrounding the first-team squad.",
    ],
  },
  {
    slug: "blockbuster-transfer-race",
    title: "Blockbuster transfer race heats up as elite midfielders enter the spotlight",
    category: "Transfers",
    date: "May 20, 2026",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Europe’s biggest clubs are monitoring a high-profile midfield market as the transfer window approaches.",
    content: [
      "A dramatic transfer window is shaping up as elite midfielders find themselves at the center of intense speculation. Clubs with title ambitions are assessing tactical fit, age profile, and long-term value before committing to major moves.",
      "The market has become more fluid in recent weeks, with several high-profile names stepping into the conversation. For many teams, the next signing could define the balance of a campaign before it even begins.",
      "Expectations are rising as scouts and executives work through the final details ahead of a highly competitive summer. The race for top talent is already producing the kind of headlines that dominate the football calendar.",
    ],
  },
  {
    slug: "world-cup-hosts-countdown",
    title: "World Cup hosts accelerate preparations as the tournament countdown begins",
    category: "World Cup",
    date: "May 16, 2026",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Host nations are finishing key infrastructure work as excitement builds around the global tournament.",
    content: [
      "With the tournament on the horizon, host nations are entering the final stretch of preparation. Stadium readiness, transport planning, and fan experience are all being tested as organizers aim for a smooth and memorable event.",
      "The international spotlight is also shifting toward player form, tournament squads, and the stories that will define the month-long spectacle. Every update is now being treated as a signal of what fans can expect on the biggest stage.",
      "As expectations grow, the event is increasingly framed as a showcase of football’s global reach and cultural energy. The countdown has become a real moment of anticipation rather than a distant promise.",
    ],
  },
  {
    slug: "anfield-legends-reflect",
    title: "Anfield legends revisit the glory days in a candid new feature",
    category: "Legends",
    date: "May 12, 2026",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Former icons recount the intensity, emotion, and unforgettable moments that shaped Anfield’s history.",
    content: [
      "The latest feature from the club’s archives brings together former stars who helped define some of Liverpool’s greatest chapters. Their stories capture the competition, emotion, and pressure that made those teams special.",
      "Each memory offers a deeper sense of why Anfield remains one of the most revered stadiums in world football. The energy of the crowd, the importance of rivals, and the pressure of expectation all shaped the legends who played there.",
      "These reflections also speak to the club’s enduring identity. For many supporters, the stories of the past continue to inspire the present and future of the team.",
    ],
  },
  {
    slug: "match-preview-title-battle",
    title: "Match Preview: the title race intensifies ahead of a colossal showdown",
    category: "Match Preview",
    date: "May 8, 2026",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "A pivotal fixture is approaching as top contenders look to seize momentum in the race for glory.",
    content: [
      "This weekend’s match carries major significance as rival sides place their ambitions on the line. The fixture is expected to influence the rhythm of the title race and could shift the balance of confidence across the league.",
      "Tactical discipline, defensive organization, and attacking quality will all be tested under the intensity of a high-pressure environment. Both teams know that a strong result could shape the narrative for weeks to come.",
      "Supporters will be watching closely for form, rotations, and the strategic choices that could decide the outcome. The occasion has the feel of a statement fixture from the opening whistle.",
    ],
  },
  {
    slug: "match-report-stunning-comeback",
    title: "Match Report: a stunning comeback sends supporters into delirium",
    category: "Match Report",
    date: "May 4, 2026",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "A dramatic second-half turnaround delivered one of the most memorable results of the season.",
    content: [
      "A dramatic second-half performance turned the match on its head and delivered one of the most celebrated results of the campaign. The response after halftime was energetic, intelligent, and decisive.",
      "The winning moments came from a combination of persistence, quality, and belief. Players who had been under pressure earlier in the contest helped shift the momentum with clear intent and smart execution.",
      "The final whistle brought relief and joy to supporters who had seen their team fight through adversity. It was a result that will be discussed for some time and remembered as a defining chapter of the season.",
    ],
  },
];
