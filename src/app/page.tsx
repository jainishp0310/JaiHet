import CountdownCard from '@/components/countdown-card';
import { events } from '@/lib/events';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="text-center mb-12 animate-in fade-in duration-1000">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
          Heartbeat Countdown
        </h1>
        <p className="text-muted-foreground mt-4 text-lg max-w-md mx-auto">
          You are my sun, my moon, and all my stars.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {events.map((event, index) => (
          <CountdownCard
            key={event.id}
            event={event}
            style={{ animationDelay: `${index * 150}ms` }}
          />
        ))}
      </div>
    </main>
  );
}
