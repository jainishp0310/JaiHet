"use client";

import { RomanticEvent } from "@/lib/events";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { CSSProperties, ComponentProps, useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const ICONS: Record<RomanticEvent['tag'], React.ElementType> = {
  Anniversary: () => <span className="text-3xl -mt-1">🎉</span>,
  Birthday: (props: ComponentProps<"svg">) => <Heart {...props} />,
  "Special Date": (props: ComponentProps<"svg">) => <Heart {...props} fill="currentColor" />,
};

const TimeUnit = ({ value, label }: { value?: number; label: string }) => (
  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-accent/20 min-w-[70px] sm:min-w-[80px] transition-all duration-300">
    <p className="font-headline text-4xl sm:text-5xl font-bold tabular-nums text-primary">
      {String(value || 0).padStart(2, "0")}
    </p>
    <span className="text-xs text-muted-foreground uppercase tracking-wider">
      {label}
    </span>
  </div>
);

export default function CountdownCard({
  event,
  style,
}: {
  event: RomanticEvent;
  style?: CSSProperties;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [isFinished, setIsFinished] = useState(false);
  
  const EventIcon = ICONS[event.tag];

  const targetDate = useMemo(() => new Date(event.date), [event.date]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setIsFinished(true);
      return {};
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <Card
        className="w-full max-w-md animate-in fade-in-0 zoom-in-95 duration-500 fill-mode-backwards"
        style={style}
      >
        <CardHeader>
          <div className="flex items-center gap-3">
            <EventIcon className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">{event.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {isFinished ? (
            <div className="text-center py-8">
              <h2 className="text-3xl font-bold font-headline text-primary">
                The day is here!
              </h2>
              <p className="text-muted-foreground mt-2">Happy {event.tag}!</p>
            </div>
          ) : (
            <div className="flex justify-around gap-2 text-center">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Badge variant="outline" className="border-accent text-accent-foreground">{event.tag}</Badge>
        </CardFooter>
      </Card>
    </>
  );
}
