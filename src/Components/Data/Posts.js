// Mock post data for Instagram-like feed

export const posts = [
  {
    id: "1",
    user: {
      id: 101,
      username: "travel_with_amy",
      profile_pic: "/assets/pic1.jpg"
    },
    image: "/assets/one.jpg",
    caption: "Living my best life in Santorini 💙 #travel #greece",
    likes: 1284,
    comments: [
      { user: "wanderlust_guy", comment: "This view is unreal! 😍" },
      { user: "globetrotter_mia", comment: "Adding this to my bucket list!" }
    ],
    timestamp: "2025-11-04T08:30:00Z"
  },
  {
    id: "2",
    user: {
      id: 102,
      username: "foodie_diaries",
      profile_pic: "/assets/pic2.jpg"
    },
    image: "/assets/two.webp",
    caption: "Paneer tikka with mint chutney 🤤🔥 #foodporn #indianfood",
    likes: 987,
    comments: [
      { user: "chef_kunal", comment: "Perfectly grilled paneer 👌" },
      { user: "veglover_21", comment: "Now I'm hungry 😂" }
    ],
    timestamp: "2025-11-03T18:45:00Z"
  },
  {
    id: "3",
    user: {
      id: 103,
      username: "code_with_rahul",
      profile_pic: "/assets/pic3.jpg"
    },
    image: "/assets/three.jpg",
    caption: "Late-night coding sessions ☕💻 #developerlife #reactjs #coding",
    likes: 546,
    comments: [
      { user: "tech_guru", comment: "Same bro 😂☕" },
      { user: "frontend_queen", comment: "React + coffee = magic ✨" }
    ],
    timestamp: "2025-11-02T23:00:00Z"
  },
  {
    id: "4",
    user: {
      id: 104,
      username: "fit_with_sara",
      profile_pic: "/assets/pic4.jpg"
    },
    image: "/assets/four.jpg",
    caption: "Morning workouts hit different 💪 #fitness #motivation",
    likes: 2034,
    comments: [
      { user: "james_fit", comment: "You're an inspiration 🔥" },
      { user: "emily_runs", comment: "Love this energy!" }
    ],
    timestamp: "2025-11-01T08:50:00Z"
  },
  {
    id: "5",
    user: {
      id: 105,
      username: "art_by_lucas",
      profile_pic: "/assets/pic5.jpg"
    },
    image: "/assets/five.jpg",
    caption: "A splash of colors 🎨 #art #painting #creativity",
    likes: 765,
    comments: [
      { user: "creative_soul", comment: "This is stunning!" },
      { user: "artlover99", comment: "Teach me how to paint like this 😍" }
    ],
    timestamp: "2025-10-30T14:30:00Z"
  }
];
