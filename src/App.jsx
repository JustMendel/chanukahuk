import { useState } from 'react';
import { dateOptions } from './data/dateOptions';
import { useFilteredEvents } from './hooks/useFilteredEvents';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import EventsGrid from './components/EventsGrid';
import ScrollToTop from './components/ScrollToTop';
import { useScrollDirection } from './hooks/useScrollDirection';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(dateOptions[0]);
  const filteredEvents = useFilteredEvents(selectedDate);
  const { showScrollToTop } = useScrollDirection();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EventsGrid events={filteredEvents} />
      </main>
      <Footer />
      <ScrollToTop show={showScrollToTop} />
    </div>
  );
}