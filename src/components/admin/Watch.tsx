import { useState, useEffect } from "react";

type IranTimeParts = {
  weekday?: string;
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
  second?: string;
  dayPeriod?: string;
};
const months: Record<string, string> = {
  "01": "فروردین",
  "02": "اردیبهشت",
  "03": "خرداد",
  "04": "تیر",
  "05": "مرداد",
  "06": "شهریور",
  "07": "مهر",
  "08": "آبان",
  "09": "آذر",
  "10": "دی",
  "11": "بهمن",
  "12": "اسفند",
};

export default function Watch() {
  const [parts, setParts] = useState<IranTimeParts>({});

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("fa-IR", {
        timeZone: "Asia/Tehran",
        year: "numeric",
        month: "long",
        day: "2-digit",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      // formatToParts returns an array like:
      // [{type:'weekday', value:'دوشنبه'}, {type:'year', value:'۱۴۰۳'}, ...]
      const result = {};
      formatter.formatToParts(now).forEach(({ type, value }) => {
        if (type !== "literal") {
          (result as Record<string, string>)[type] = value;
        }
      });

      setParts(result);
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex *:text-xs  *:md:text-sm  *:text-green py-1 gap-x-2" dir="rtl">
      <div className="flex gap-x-2">
        <span>{parts.weekday}</span>
        <span>{parts.day}</span>
        <span>{parts.month}</span>
        <span>{parts.year}</span>
      </div>
      <div>-</div>

      <span>
        {parts.hour}:{parts.minute}:<span>{parts.second}</span>
      </span>
    </div>
  );
}
