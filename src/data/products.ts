export const products = [
  {
    slug: "pos-management",
    name: "POS Management System",
    category: "Retail operations",
    description:
      "A faster, clearer way to manage sales, stock and daily store operations.",
    features: ["Smart checkout", "Live inventory", "Sales insights"],
    color: "mint",
  },
  {
    slug: "pharmacy-management",
    name: "Pharmacy Management System",
    category: "Healthcare",
    description:
      "Keep prescriptions, inventory and customer records organized in one place.",
    features: [
      "Expiry tracking",
      "Prescription records",
      "Supplier management",
    ],
    color: "lilac",
  },
  {
    slug: "salon-management",
    name: "Salon Management System",
    category: "Appointments",
    description:
      "Make bookings, team schedules and client relationships easier to manage.",
    features: ["Online bookings", "Staff calendar", "Client profiles"],
    color: "peach",
  },
  {
    slug: "inventory-management",
    name: "Inventory Management System",
    category: "Operations",
    description:
      "Understand what you have, where it is and when it needs replenishing.",
    features: ["Stock alerts", "Multi-location", "Purchase orders"],
    color: "blue",
  },
  {
    slug: "hotel-management",
    name: "Hotel Management System",
    category: "Hospitality",
    description:
      "Bring reservations, guest services and room operations together.",
    features: ["Reservations", "Room status", "Guest profiles"],
    color: "yellow",
  },
  {
    slug: "appointment-management",
    name: "Appointment Management System",
    category: "Scheduling",
    description:
      "Reduce back-and-forth and help customers book at a time that works.",
    features: ["Online scheduling", "Reminders", "Team availability"],
    color: "rose",
  },
] as const;
export type Product = (typeof products)[number];
