const chats = [
  {
    id: 1,
    username: "travel_with_amy",
    profile_pic: "https://randomuser.me/api/portraits/women/65.jpg",
    last_message: "Just reached Bali! 🌴",
    time: "5m",
    messages: [
      { from: "me", text: "Have a safe trip!", time: "9:20 AM" },
      { from: "travel_with_amy", text: "Just reached Bali! 🌴", time: "9:25 AM" }
    ]
  },
  {
    id: 2,
    username: "tech_guru_raj",
    profile_pic: "https://randomuser.me/api/portraits/men/45.jpg",
    last_message: "React 19 is so smooth!",
    time: "10m",
    messages: [
      { from: "tech_guru_raj", text: "React 19 is so smooth!", time: "9:10 AM" },
      { from: "me", text: "Yeah! Hooks got even better.", time: "9:12 AM" }
    ]
  },
  {
    id: 3,
    username: "foodie_diaries",
    profile_pic: "https://randomuser.me/api/portraits/women/30.jpg",
    last_message: "The sushi was amazing 🍣",
    time: "22m",
    messages: [
      { from: "me", text: "How was dinner?", time: "8:30 AM" },
      { from: "foodie_diaries", text: "The sushi was amazing 🍣", time: "8:40 AM" }
    ]
  },
  {
    id: 4,
    username: "fit_with_aarav",
    profile_pic: "https://randomuser.me/api/portraits/men/25.jpg",
    last_message: "Morning workout done ✅",
    time: "35m",
    messages: [
      { from: "fit_with_aarav", text: "Morning workout done ✅", time: "8:05 AM" },
      { from: "me", text: "Nice! Keep it up 💪", time: "8:07 AM" }
    ]
  },
  {
    id: 5,
    username: "artsy_alina",
    profile_pic: "https://randomuser.me/api/portraits/women/12.jpg",
    last_message: "Just finished my painting 🎨",
    time: "50m",
    messages: [
      { from: "me", text: "Show me your new artwork!", time: "7:30 AM" },
      { from: "artsy_alina", text: "Just finished my painting 🎨", time: "7:40 AM" }
    ]
  },
  {
    id: 6,
    username: "gamer_sam",
    profile_pic: "https://randomuser.me/api/portraits/men/50.jpg",
    last_message: "You online tonight?",
    time: "1h",
    messages: [
      { from: "gamer_sam", text: "You online tonight?", time: "7:10 AM" },
      { from: "me", text: "Of course! Let's play 🚀", time: "7:15 AM" }
    ]
  },
  {
    id: 7,
    username: "nature_clicks",
    profile_pic: "https://randomuser.me/api/portraits/women/43.jpg",
    last_message: "Captured a rainbow today 🌈",
    time: "1h",
    messages: [
      { from: "me", text: "Your photos always amaze me!", time: "7:00 AM" },
      { from: "nature_clicks", text: "Captured a rainbow today 🌈", time: "7:05 AM" }
    ]
  },
  {
    id: 8,
    username: "chef_krishna",
    profile_pic: "https://randomuser.me/api/portraits/men/22.jpg",
    last_message: "Try my new recipe 😋",
    time: "2h",
    messages: [
      { from: "chef_krishna", text: "Try my new recipe 😋", time: "6:40 AM" },
      { from: "me", text: "Looks delicious!", time: "6:42 AM" }
    ]
  },
  {
    id: 9,
    username: "travel_with_lee",
    profile_pic: "https://randomuser.me/api/portraits/men/12.jpg",
    last_message: "Next stop: Tokyo ✈️",
    time: "2h",
    messages: [
      { from: "me", text: "Your travel stories are goals 😍", time: "6:00 AM" },
      { from: "travel_with_lee", text: "Next stop: Tokyo ✈️", time: "6:10 AM" }
    ]
  },
  {
    id: 10,
    username: "makeup_byleah",
    profile_pic: "https://randomuser.me/api/portraits/women/25.jpg",
    last_message: "New tutorial out 💄",
    time: "3h",
    messages: [
      { from: "me", text: "Can't wait to see it!", time: "5:30 AM" },
      { from: "makeup_byleah", text: "New tutorial out 💄", time: "5:35 AM" }
    ]
  },
  {
    id: 11,
    username: "coding_with_anu",
    profile_pic: "https://randomuser.me/api/portraits/women/66.jpg",
    last_message: "Fixed that React bug! 🧠",
    time: "3h",
    messages: [
      { from: "me", text: "You're unstoppable!", time: "5:00 AM" },
      { from: "coding_with_anu", text: "Fixed that React bug! 🧠", time: "5:05 AM" }
    ]
  },
  {
    id: 12,
    username: "fashion_niha",
    profile_pic: "https://randomuser.me/api/portraits/women/47.jpg",
    last_message: "New outfit drop tomorrow 👗",
    time: "4h",
    messages: [
      { from: "fashion_niha", text: "New outfit drop tomorrow 👗", time: "4:15 AM" },
      { from: "me", text: "Can’t wait!", time: "4:18 AM" }
    ]
  },
  {
    id: 13,
    username: "crypto_rahul",
    profile_pic: "https://randomuser.me/api/portraits/men/32.jpg",
    last_message: "BTC just crossed 100K 😱",
    time: "5h",
    messages: [
      { from: "me", text: "No way!", time: "3:45 AM" },
      { from: "crypto_rahul", text: "BTC just crossed 100K 😱", time: "3:47 AM" }
    ]
  },
  {
    id: 14,
    username: "music_by_kiran",
    profile_pic: "https://randomuser.me/api/portraits/men/15.jpg",
    last_message: "New beat uploaded 🎧",
    time: "6h",
    messages: [
      { from: "music_by_kiran", text: "New beat uploaded 🎧", time: "2:20 AM" },
      { from: "me", text: "Dropping fire again 🔥", time: "2:25 AM" }
    ]
  },
  {
    id: 15,
    username: "photography_with_ria",
    profile_pic: "https://randomuser.me/api/portraits/women/34.jpg",
    last_message: "New sunset click 🌅",
    time: "7h",
    messages: [
      { from: "me", text: "Post it soon!", time: "1:40 AM" },
      { from: "photography_with_ria", text: "New sunset click 🌅", time: "1:45 AM" }
    ]
  },
  {
    id: 16,
    username: "booklover_isha",
    profile_pic: "https://randomuser.me/api/portraits/women/18.jpg",
    last_message: "Finished 'The Alchemist' 📚",
    time: "8h",
    messages: [
      { from: "booklover_isha", text: "Finished 'The Alchemist' 📚", time: "12:20 AM" },
      { from: "me", text: "It’s such a classic!", time: "12:25 AM" }
    ]
  },
  {
    id: 17,
    username: "designs_by_tanvi",
    profile_pic: "https://randomuser.me/api/portraits/women/52.jpg",
    last_message: "New logo design done 🖌️",
    time: "10h",
    messages: [
      { from: "me", text: "Send me a preview?", time: "10:20 PM" },
      { from: "designs_by_tanvi", text: "New logo design done 🖌️", time: "10:25 PM" }
    ]
  },
  {
    id: 18,
    username: "petlover_adi",
    profile_pic: "https://randomuser.me/api/portraits/men/60.jpg",
    last_message: "Bruno learned a new trick 🐶",
    time: "12h",
    messages: [
      { from: "petlover_adi", text: "Bruno learned a new trick 🐶", time: "8:00 PM" },
      { from: "me", text: "Aww, that’s adorable!", time: "8:05 PM" }
    ]
  },
  {
    id: 19,
    username: "travel_with_nina",
    profile_pic: "https://randomuser.me/api/portraits/women/42.jpg",
    last_message: "Paris is magical ✨",
    time: "15h",
    messages: [
      { from: "me", text: "Enjoy your trip!", time: "5:00 PM" },
      { from: "travel_with_nina", text: "Paris is magical ✨", time: "5:10 PM" }
    ]
  },
  {
    id: 20,
    username: "sports_with_vik",
    profile_pic: "https://randomuser.me/api/portraits/men/28.jpg",
    last_message: "Team India won again 🏏",
    time: "1d",
    messages: [
      { from: "sports_with_vik", text: "Team India won again 🏏", time: "9:30 AM" },
      { from: "me", text: "What a match!", time: "9:32 AM" }
    ]
  }
];

export default chats;
