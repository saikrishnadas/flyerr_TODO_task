import countdown from "countdown";
import { useEffect, useState } from "react";

export default function Countdown(props) {
  const dueDate = props.dueDate;
  const [timeSpan, setTimeSpan] = useState(countdown(dueDate));
  useEffect(() => {
    setInterval(() => {
      setTimeSpan(countdown(dueDate));
    }, 1000);
  });
  console.log(dueDate);
  return (
    <div className="flex">
      {timeSpan.years > 0 && <p className="mr-1">{timeSpan.years}d</p>}
      {timeSpan.months > 0 && <p className="mr-1">{timeSpan.months}d</p>}
      {timeSpan.days > 0 && <p className="mr-1">{timeSpan.days}d</p>}
      <p className="mr-1">{timeSpan.hours}h</p>
      <p className="mr-1">{timeSpan.minutes}m</p>
      <p className="mr-1">{timeSpan.seconds}s</p>
    </div>
  );
}
