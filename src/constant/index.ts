export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "dataPicker",
  SELECT = "select",
  SKELETON = "skeleton",
}
export const uploadFileConfig = {
  size: 1024 * 1024 * 5,
  format: [
    "application/pdf",
    "text/plain",
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
  ],
};
export const FeaturesList = [
  {
    id: 1,
    feature: "Highly Rated & Esteemed",
  },
  {
    id: 2,
    feature: "Trusted Professionals",
  },
  {
    id: 3,
    feature: "Insured & Bonded",
  },
  {
    id: 4,
    feature: "Quality Service",
  },
];
export const SuccessRequestsList = [
  {
    id: 1,
    title: "Project Done",
    total: 300,
    icon: "/assets/icons/done.svg",
  },
  {
    id: 2,
    title: "Problems solved",
    total: 1100,
    icon: "/assets/icons/solved.svg",
  },
  {
    id: 3,
    title: "Working hours",
    total: 2500,
    icon: "/assets/icons/working-hours.svg",
  },
];
export const OurServicesList = [
  {
    id: 1,
    title: "Pressure Washing",
    desc: "Removing dirt, algae, and lichen will restore your home's",
    icon: "/assets/icons/washing.svg",
    backImage: "/assets/images/pressure-washing.jpeg",
    content: `Restore Your Home’s Beauty: Is your home looking worn down? We specialize in removing dirt, algae, and lichen to rejuvenate your home's exterior and extend the life of its surfaces. From siding and eavestroughs to brick and soffits, our tailored pressure washing techniques ensure a safe, thorough clean, making your home look brand new.

Property Cleaning: Our industrial-grade pressure washers effectively eliminate grime from driveways, walkways, patios, and more, enhancing both appearance and durability.

Wood Cleaning: We carefully clean wooden decks, fences, and pergolas, removing dirt, algae, and peeling paint with precision.`,
    url: "/services/pressure-washing",
  },
  {
    id: 2,
    title: "Window Cleaning",
    desc: "Windows are the first impression to any commercial, retail, or office",
    icon: "/assets/icons/window-cleaning.svg",
    backImage: "/assets/images/window-cleaning.jpeg",
    url: "/services/window-cleaning",
    content: `Commercial Cleaning Services: Elevate your business's appearance with our specialized commercial cleaning services. We cater to office buildings, retail spaces, and industrial sites, ensuring every area is spotless. Our expert team handles everything from high-traffic floors to delicate surfaces, using industry-leading techniques for a thorough, safe clean. Impress your clients and maintain a professional environment with our customizable cleaning plans designed to meet your unique needs. Contact us today for a free, no-obligation quote tailored to your business.`,
  },
  {
    id: 3,
    title: "Commercial",
    desc: "Variety of cleaning services catered to offices, warehouses",
    icon: "/assets/icons/commerical.svg",
    backImage: "/assets/images/commercial-cleaning.jpeg",
    content: `EY Solution delivers top-tier janitorial services to offices across London, Ontario, and nearby regions, ensuring a spotless, healthy work environment. We cater to various sectors, including medical, financial, educational, and government offices. Our flexible and customizable cleaning plans are designed to meet the unique needs of each business, enhancing employee well-being and productivity. Services include regular cleaning schedules, washroom sanitization, carpet cleaning, window cleaning, and more. Contact us for a free, no-obligation quote and a tailored cleaning plan for your office.`,
    url: "/services/commercial",
  },
  {
    id: 4,
    title: "Restaurant",
    desc: "Keeping the cooking area clean is a tedious task",
    icon: "/assets/icons/restaurant.svg",
    backImage: "/assets/images/restaurant-cleaning.jpeg",
    content: `EY Solution specializes in restaurant cleaning, particularly for industrial kitchens where maintaining cleanliness can be challenging. We handle everything from exhaust fan cleaning to de-greasing, ensuring your kitchen remains spotless. Our services include scheduled cleanings, industrial appliance cleaning, and pressure washing, all tailored to your specific needs based on cooking processes, airflow, and other factors.

We offer a free, no-obligation quote. Contact us to schedule a walk-through of your restaurant, and we'll create a custom cleaning plan that fits your requirements perfectly.`,
    url: "/services/restaurant",
  },
  {
    id: 5,
    title: "Residential",
    desc: "Specializes in cleaning homes and domestic dwellings",
    icon: "/assets/icons/residential.svg",
    backImage: "/assets/images/residential-cleaning.jpeg",
    content: `EY Solutions understands the importance of maintaining a clean and safe home environment. Our specialized housekeeping services go beyond standard cleaning, offering tailored solutions that ensure your space shines. We provide comprehensive office cleaning services, including flexible scheduling (nightly, bi-weekly, weekly), washroom sanitizing, dusting, window and carpet cleaning, hard floor mopping, garbage removal, and common area disinfecting. Contact us for a free, no-obligation quote, and we’ll create a custom cleaning plan tailored to your needs after a thorough walkthrough of your space.`,
    url: "/services/residential",
  },
];
export const HowWorkList = [
  {
    id: 1,
    title: "Get Quote",
    icon: "/assets/icons/order.svg",
  },
  {
    id: 2,
    title: "We Clean",

    icon: "/assets/icons/cleaning.svg",
  },
  {
    id: 3,
    title: "You Relax",
    icon: "/assets/icons/relax.svg",
  },
];
export const ContactInformation = {
  address: "3525 EMILYCARR lane, London,ON, N6L 0H7",
  phone: "+1 (519) 701-7116",
  email: "info@eypro.ca",
};

export const AboutSliderList = [
  "/assets/images/cleaning-service-5.jpeg",
  "/assets/images/cleaning-service-6.jpeg",
  "/assets/images/cleaning-service-7.jpeg",
  "/assets/images/cleaning-service-8.jpeg",
  "/assets/images/cleaning-service-9.jpeg",
];
export const ClientsSliderList = [
  "/assets/images/client-1.png",
  "/assets/images/client-2.png",
  "/assets/images/client-3.png",
  "/assets/images/client-4.png",
  "/assets/images/client-5.png",
];
export const Testimonial = [
  {
    id: 1,
    name: "Emma Richards",
    desc: "I've been using EY Solution for over a year now, and I couldn't be happier with their services. As a working mom, finding time to keep the house spotless is nearly impossible. Their team is always punctual, friendly, and pays attention to every little detail. Coming home to a clean and fresh-smelling house after a long day at work is such a relief. I highly recommend them to anyone in need of reliable and thorough cleaning services!",
  },
  {
    id: 2,
    name: "Michael Thompson",
    desc: "EY Solution has exceeded my expectations in every way. I run a small business, and keeping the office clean is essential for productivity and making a good impression on clients. Their staff is professional, efficient, and always goes the extra mile to ensure everything is spotless. I appreciate their use of eco-friendly products, which is important to our company's values. Thank you for making our workspace enjoyable!",
  },
  {
    id: 3,
    name: "Samantha Lee",
    desc: "I recently hosted a big family gathering and needed a deep clean of my home beforehand. EY Solution came highly recommended by a friend, and now I know why. The team was incredibly thorough, cleaning areas I didn't even realize needed attention. They were respectful of my home and belongings, and the place looked immaculate by the time they were done. I will definitely be using their services again!",
  },
  {
    id: 4,
    name: "David King",
    desc: "As an apartment owner, I've tried several cleaning services over the years, but none have come close to the quality provided by EY Solution. Their cleaners are trustworthy, meticulous, and incredibly efficient. Booking appointments is easy, and their customer service is top-notch. It's such a pleasure to come home to a clean and organized space. Highly recommended!",
  },
  {
    id: 5,
    name: "Linda Morgan",
    desc: "I hired EY Solution for a post-renovation clean-up, and they did an outstanding job. The place was a mess with dust and debris everywhere, but their team transformed it into a pristine and welcoming home in just a few hours. They paid special attention to all the nooks and crannies and even cleaned the air vents and light fixtures. I'm so impressed with their work and will be calling them for regular cleaning services moving forward.",
  },
  {
    id: 6,
    name: "James Peterson",
    desc: "Choosing EY Solution for our weekly office cleaning has been one of the best decisions we've made. Their professionalism and attention to detail are unparalleled. The cleaners are friendly and always respect our work environment, ensuring minimal disruption during office hours. Our office has never looked better, and the improved cleanliness has definitely boosted employee morale. Thank you for your excellent service!",
  },
  {
    id: 7,
    name: "Olivia Stevens",
    desc: "I recently started using EY Solution for bi-weekly home cleaning, and I am absolutely delighted with their service. The team is always on time, well-prepared, and incredibly thorough. They listen to my specific requests and ensure everything is done to perfection. I also appreciate their commitment to using non-toxic cleaning products, which is great for my family's health and the environment. I can't recommend them enough!",
  },
];
