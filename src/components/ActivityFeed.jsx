import React from 'react';
import ActivityFeedItem from './ActivityFeedItem';

const ActivityFeed = () => {
  // Dummy data for activity feed
  const activities = [
    { id: 1, type: 'fork', message: 'Forked "A New Beginning" from @storyteller_X', timestamp: '5 minutes ago' },
    { id: 2, type: 'badge', message: 'Earned the "Narrative Innovator" badge!', timestamp: '1 hour ago' },
    { id: 3, type: 'comment', message: 'Commented on "The Silent City" by @urban_scribe', timestamp: '3 hours ago' },
    { id: 4, type: 'upload', message: 'Uploaded a new story: "Whispers of the Ancient Realm"', timestamp: '1 day ago' },
    { id: 5, type: 'star', message: 'Starred "The Cosmic Wanderer" by @galaxy_writer', timestamp: '2 days ago' },
    { id: 6, type: 'merge', message: 'Merged changes into "Project Phoenix"', timestamp: '4 days ago' }, // Assuming 'merge' type
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold text-dark-grey mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map(activity => (
          <ActivityFeedItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;