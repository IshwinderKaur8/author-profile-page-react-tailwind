import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ActionBar from './components/ActionBar';
import TabsSection from './components/TabsSection';
import QuoteWidget from './components/QuoteWidget';
import ActivityFeed from './components/ActivityFeed'; // <--- This line is added at Step 3, Click 58
// No need for import './App.css'; unless you specifically added custom CSS there

function App() {
  const authorData = {
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example avatar
    displayName: 'Alex Rivers',
    handle: '@alex_writes',
    badges: [
      { name: 'Bestselling', tooltip: 'Author of multiple bestselling novels.' },
      { name: 'Mentor', tooltip: 'Provides guidance to emerging writers.' },
      { name: 'Editor\'s Pick', tooltip: 'Featured by the platform\'s editorial team.' }
    ],
    bio: `Alex Rivers is an award-winning author known for their captivating fantasy epics and insightful contemporary fiction. With a unique voice and a talent for creating richly detailed worlds, Alex has garnered a global readership. Their work often explores themes of courage, identity, and the intricate dance between destiny and free will. When not immersed in storytelling, Alex enjoys exploring ancient ruins, practicing calligraphy, and spending time with their literary cat, Whiskers.`,
    socialLinks: {
      twitter: 'https://twitter.com/alex_writes',
      linkedin: 'https://linkedin.com/in/alexriversauthor',
      github: '', // Empty if not available
      website: 'https://alexrivers.com'
    }
  };

  return (
    <div className="min-h-screen bg-light-off-white text-dark-grey p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader author={authorData} />
        <ActionBar />

        {/* Layout for Tabs Section and Sidebar Widgets */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <TabsSection />
          </div>
          <div className="lg:w-1/3">
            <QuoteWidget />
          </div>
        </div>

        <ActivityFeed /> {/* <--- This line is added at Step 3, Click 58 */}
      </div>
    </div>
  );
}

export default App;