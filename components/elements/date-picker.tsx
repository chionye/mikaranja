/** @format */

import * as React from "react";
import { ChevronDownIcon, LucideCalendar, LucideCalendar1 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerComponent({
  label,
  onChange,
}: {
  label: string;
  onChange: (e: Date | string | undefined) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const handleOnChange = (value: Date | undefined) => {
    const formatDate = value?.toLocaleDateString();
    onChange(formatDate);
    setDate(value);
  };

  return (
    <div className='flex flex-col gap-3 w-full'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            id='date'
            className='w-full item-start font-normal'>
            <LucideCalendar1 />
            {date ? date.toLocaleDateString() : `Select ${label}`}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
          <Calendar
            mode='single'
            selected={date}
            captionLayout='dropdown'
            onSelect={(date) => {
              handleOnChange(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
