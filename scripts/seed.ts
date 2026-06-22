import { db } from "../src/lib/db";

const initialProjects = [
  {
    title: "Signature Stitch",
    description: "A premium E-commerce store for Men's wear.",
    tags: ["E-commerce", "Premium", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
    url: "https://signaturestitch.vercel.app/",
    sortOrder: 1,
  },
  {
    title: "Chohan's Style Hub",
    description:
      "A modern and sleek digital storefront tailored for fashion trends.",
    tags: ["Web Design", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    url: "https://chohan-s-style-hub.vercel.app",
    sortOrder: 2,
  },
  {
    title: "Khurram Tent Studio",
    description:
      "An elegant showcase for premium event and complete tent services.",
    tags: ["Portfolio", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
    url: "https://khurram-tent-studio.vercel.app",
    sortOrder: 3,
  },
  {
    title: "Batch Trade",
    description: "A dynamic B2B platform designed for seamless trade interactions.",
    tags: ["B2B", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    url: "https://batch-trade.vercel.app",
    sortOrder: 4,
  },
  {
    title: "Royal Dairy Life",
    description:
      "A fresh and engaging online presence for organic dairy products.",
    tags: ["Web", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80",
    url: "https://royaldairylife.vercel.app",
    sortOrder: 5,
  },
  {
    title: "Urban Bites Restaurant",
    description:
      "A sleek, modern restaurant website featuring online ordering, menu showcase with animations, and mobile-first responsive design.",
    tags: ["Web Design", "E-commerce", "Food"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    url: "#",
    sortOrder: 6,
  },
  {
    title: "ProLegal Consultants",
    description:
      "Professional law firm website with elegant typography, consultation booking system, and SEO-optimized content.",
    tags: ["Web Design", "SEO", "Professional"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    url: "#",
    sortOrder: 7,
  },
  {
    title: "FitZone Gym & Fitness",
    description:
      "Dynamic fitness center website with class schedules, membership plans, trainer profiles, and integrated payment.",
    tags: ["Web Design", "Marketing", "Fitness"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    url: "#",
    sortOrder: 8,
  },
];

async function main() {
  console.log("Seeding database...");

  const existingProjects = await db.project.count();
  if (existingProjects === 0) {
    await db.project.createMany({
      data: initialProjects.map((p) => ({
        ...p,
        tags: JSON.stringify(p.tags),
      })),
    });
    console.log(`Seeded ${initialProjects.length} projects`);
  } else {
    console.log(`Projects already exist (${existingProjects}), skipping`);
  }

  console.log("Seed complete!");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
