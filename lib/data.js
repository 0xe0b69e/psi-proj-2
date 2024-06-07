import { faker } from "@faker-js/faker";

import { CalendarIcon, CheckboxIcon, DotsVerticalIcon, TrashIcon } from "@radix-ui/react-icons";
import { IoCash } from "react-icons/io5";
import { CircularButton } from "@/components/circular-button";

const now = new Date();
export const activity = [
  {
    date: new Date( now.getTime() - 27 * 60 * 1000 ),
    color: "#00ac69",
    name: "New order placed! Order #2912 has been successfully placed."
  },
  {
    date: new Date( now.getTime() - 58 * 60 * 1000 ),
    color: "#0061f2",
    name: "Your weekly report has been generated and is ready to view."
  },
  {
    date: new Date( now.getTime() - 2 * 60 * 60 * 1000 ),
    color: "#6900c7",
    name: "New user Valerie Luna has registered"
  },
  { date: new Date( now.setDate( now.getDate() - 1 ) ), color: "#f4a100", name: "Server activity monitor alert" },
  {
    date: new Date( now.setDate( now.getDate() - 1 ) ),
    color: "#00ac69",
    name: "New order placed! Order #2911 has been successfully placed."
  },
  {
    date: new Date( now.setDate( now.getDate() - 1 ) ),
    color: "#6900c7",
    name: "Details for Marketing and Planning Meeting have been updated."
  },
  {
    date: new Date( now.setDate( now.getDate() - 2 ) ),
    color: "#00ac69",
    name: "New order placed! Order #2910 has been successfully placed."
  },
];

export const reports = [
  {
    text: "Earnings (Monthly)",
    icon: <CalendarIcon />,
    color: "#0061f2",
    value: 40000,
    prefix: "$",
    footerText: "View Report",
    url: "#"
  },
  {
    text: "Earnings (Annual)",
    icon: <IoCash />,
    color: "#f4a100",
    value: 215000,
    prefix: "$",
    footerText: "View Report",
    url: "#"
  },
  {
    text: "Task Completion",
    icon: <CheckboxIcon />,
    color: "#00ac69",
    value: 24,
    footerText: "View Tasks",
    url: "#"
  },
  {
    text: "Pending Requests",
    icon: <CalendarIcon />,
    color: "#e81500",
    value: 17,
    footerText: "View Requests",
    url: "#"
  }
];

export const progress = [
  { name: "Server Migration", percentage: 20, color: "#e81500" },
  { name: "Sales Tracking", percentage: 40, color: "#f4a100" },
  { name: "Customer Database", percentage: 60, color: "#0061f2" },
  { name: "Payout Details", percentage: 80, color: "#00cfd5" },
  { name: "Account Setup", percentage: 100, color: "#00ac69" },
];

export const barChartData = [
  { label: "January", value: 5000 },
  { label: "February", value: 7000 },
  { label: "March", value: 8000 },
  { label: "April", value: 10000 },
  { label: "May", value: 12000 },
  { label: "June", value: 15000 },
];

export const lineChartData = [
  { label: "Jan", value: 0 },
  { label: "Feb", value: 10000 },
  { label: "Mar", value: 5000 },
  { label: "Apr", value: 15000 },
  { label: "May", value: 10000 },
  { label: "Jun", value: 20000 },
  { label: "Jul", value: 15000 },
  { label: "Aug", value: 25000 },
  { label: "Sep", value: 20000 },
  { label: "Oct", value: 30000 },
  { label: "Nov", value: 25000 },
  { label: "Dec", value: 35000 },
];

faker.seed( 123 ); // Always generate the same data
export const personnel = Array.from( { length: 57 }, () => ( {
  name: faker.person.firstName(),
  position: faker.person.jobTitle(),
  office: faker.location.city(),
  age: faker.number.int({ min: 18, max: 100 }),
  startDate: faker.date.past(),
  salary: faker.finance.amount({ symbol: "$", autoFormat: true }),
  status: faker.helpers.arrayElement(["Full-time", "Part-time", "Pending", "Contract"]),
  actions: (
    <div className="flex flex-row space-x-2 w-full h-full">
      <CircularButton className="w-7 h-7">
        <DotsVerticalIcon />
      </CircularButton>
      <CircularButton className="w-7 h-7">
        <TrashIcon />
      </CircularButton>
    </div>
  )
} ) );

export const people =  Array.from( { length: 6 }, () => ( {
  name: faker.person.fullName(),
  position: faker.person.jobTitle(),
  avatar: faker.image.avatar(),
}));