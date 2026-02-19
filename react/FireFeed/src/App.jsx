import "./App.css";
import StoryCard from "./component/StoryCard";

export const stories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31", 
    title: "This form of mental exercise may cut dementia risk for decades",
    source: "NPR",
    sourceIcon: "https://www.npr.org/favicon.ico",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    title:
      "Indian University Faces Backlash for Claiming Chinese Robotdog As Own at AI Summit",
    source: "BBC",
    sourceIcon: "https://www.bbc.com/favicon.ico",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74", 
    title: "Why Don't Humans Have Tails?",
    source: "The Conversation",
    sourceIcon: "https://images.theconversation.com/favicon.ico",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf",
    title:
      "Why Writer Arundhati Roy's Cult Classic Film Is Still Relevant In India",
    source: "BBC",
    sourceIcon: "https://www.bbc.com/favicon.ico",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
    title: "How People Pleasing Parents Raise Anxious, Approval-Seeking Adults",
    source: "India Today",
    sourceIcon: "https://www.indiatoday.in/favicon.ico",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe", 
    title:
      "If Someone Is Always Late, Is It Time Blindness, or Are They Just Being Rude?",
    source: "The Associated Press",
    sourceIcon: "https://apnews.com/favicon.ico",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#1C1B22] p-8">
      <h2 className="text-white text-xl font-bold mb-6">
        Thought-provoking stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            title={story.title}
            image={story.image}
            source={story.source}
            icon={story.sourceIcon}
          />
        ))}
      </div>
    </div>
  );
}
export default App;