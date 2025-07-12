import React, { useState } from 'react';
import TabButton from './TabButton';
import StoryCard from './StoryCard';
import FollowerAvatar from './FollowerAvatar';
import CommentItem from './CommentItem';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('stories'); // Default active tab

  // Dummy Data for Tabs
  const stories = [
    { id: 1, title: 'The Whispering Pines', excerpt: 'A thrilling mystery set in a secluded forest where ancient secrets unfold with every rustle of leaves...', forks: 120, stars: 560 },
    { id: 2, title: 'Echoes of Tomorrow', excerpt: 'A dystopian saga exploring humanity\'s last stand against an encroaching technological singularity...', forks: 85, stars: 410 },
    { id: 3, title: 'Crimson Tide', excerpt: 'A historical fiction novel detailing the harrowing journey of a young sailor during the golden age of piracy...', forks: 95, stars: 380 },
    { id: 4, title: 'Starlight Symphony', excerpt: 'A heartwarming tale of an aspiring musician who finds inspiration in the celestial melodies of the night sky...', forks: 60, stars: 290 },
  ];

  const forkedStories = [
    { id: 101, title: 'Beyond the Horizon (Forked)', excerpt: 'An alternate ending to a classic space opera, exploring unforeseen consequences...', forks: 30, stars: 150 },
    { id: 102, title: 'The Rogue AI\'s Redemption (Chapter 3 Fork)', excerpt: 'A fan-contributed chapter continuing the story of a sentient AI seeking humanity...', forks: 15, stars: 75 },
  ];

  const starredStories = [
    { id: 201, title: 'Chronicles of Eldoria: Book One', excerpt: 'Epic fantasy with dragons and magic.', forks: 200, stars: 1200 },
    { id: 202, title: 'The Last Alchemist', excerpt: 'A journey through a steampunk world.', forks: 90, stars: 600 },
  ];

  const followers = [
    { id: 1, name: 'Jane Doe', avatar: 'https://via.placeholder.com/50/FF5733/FFFFFF?text=JD', bio: 'Lover of fantasy and sci-fi. Aspiring writer.' },
    { id: 2, name: 'John Smith', avatar: 'https://via.placeholder.com/50/33FF57/FFFFFF?text=JS', bio: ' Avid reader and literary critic.' },
    { id: 3, name: 'Emily White', avatar: 'https://via.placeholder.com/50/3357FF/FFFFFF?text=EW', bio: 'Enjoys historical fiction.' },
    { id: 4, name: 'Chris Green', avatar: 'https://via.placeholder.com/50/FFFF33/000000?text=CG', bio: 'Into dark academia and thrillers.' },
  ];

  const comments = [
    { id: 1, author: 'ReaderOne', avatar: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=R1', content: 'Loved "The Whispering Pines"! The ending was unexpected.', timestamp: '5 hours ago' },
    { id: 2, author: 'Bookworm22', avatar: 'https://via.placeholder.com/40/00FF00/FFFFFF?text=B2', content: 'Your world-building in "Echoes of Tomorrow" is phenomenal.', timestamp: '1 day ago' },
    { id: 3, author: 'LiteraryLover', avatar: 'https://via.placeholder.com/40/0000FF/FFFFFF?text=LL', content: 'Just finished Crimson Tide, an absolute masterpiece.', timestamp: '3 days ago' },
  ];


  const renderTabContent = () => {
    switch (activeTab) {
      case 'stories':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        );
      case 'forks':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {forkedStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        );
      case 'stars':
        return (
          <div className="space-y-4">
            {starredStories.map(story => (
              <StoryCard key={story.id} story={story} /> // Re-using StoryCard for liked/bookmarked stories
            ))}
          </div>
        );
      case 'followers':
        return (
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {followers.map(follower => (
              <FollowerAvatar key={follower.id} follower={follower} />
            ))}
          </div>
        );
      case 'comments':
        return (
          <div className="space-y-4">
            {comments.map(comment => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-6 p-4">
      <div className="flex border-b border-gray-200 overflow-x-auto">
        <TabButton
          label="Stories"
          isActive={activeTab === 'stories'}
          onClick={() => setActiveTab('stories')}
        />
        <TabButton
          label="Forks"
          isActive={activeTab === 'forks'}
          onClick={() => setActiveTab('forks')}
        />
        <TabButton
          label="Stars"
          isActive={activeTab === 'stars'}
          onClick={() => setActiveTab('stars')}
        />
        <TabButton
          label="Followers"
          isActive={activeTab === 'followers'}
          onClick={() => setActiveTab('followers')}
        />
        <TabButton
          label="Comments"
          isActive={activeTab === 'comments'}
          onClick={() => setActiveTab('comments')}
        />
      </div>

      <div className="p-4 pt-6"> {/* Padding for content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabsSection;