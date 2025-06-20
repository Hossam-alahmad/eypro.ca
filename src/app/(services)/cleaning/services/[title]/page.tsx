import HeadingSection from "@/src/components/HeadingSection";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ title: string }>;
}): Promise<Metadata> => {
    const title = (await params).title;

    const service = OurCleaningServicesList.find(
        c => c.title.toLocaleLowerCase() === title.replaceAll("-", " ")
    );

    return {
        title: service?.title,
        description: service?.desc,
        openGraph: {
            title,
            images: ["twitter-image.png?3ecc57bb282d1dc9"],
            description: service?.desc,
        },
        twitter: {
            title,
            images: ["twitter-image.png?3ecc57bb282d1dc9"],
            description: service?.desc,
        },
    };
};
export const OurCleaningServicesList = [
    {
        id: 1,
        title: "Pressure Washing",
        desc: "Removing dirt, algae, and lichen will restore your home's",
        icon: "/assets/icons/washing.svg",
        backImage: "/assets/images/pressure-washing.jpeg",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    Restore Your Home’s Beauty: Is your home looking worn down?
                    We specialize in removing dirt, algae, and lichen to
                    rejuvenate your home's exterior and extend the life of its
                    surfaces. From siding and eavestroughs to brick and soffits,
                    our tailored pressure washing techniques ensure a safe,
                    thorough clean, making your home look brand new. Property
                    Cleaning: Our industrial-grade pressure washers effectively
                    eliminate grime from driveways, walkways, patios, and more,
                    enhancing both appearance and durability. Wood Cleaning: We
                    carefully clean wooden decks, fences, and pergolas, removing
                    dirt, algae, and peeling paint with precision.
                </p>

                <p className="text-lg leading-relaxed">
                    Our professional team uses eco-friendly cleaning solutions
                    combined with industry-standard techniques to ensure
                    spotless, streak-free windows every time. From residential
                    homes to commercial high-rises, we tailor our approach to
                    meet your specific needs.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Comprehensive Services
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Driveway & Sidewalk Cleaning:</strong>{" "}
                            Remove oil stains, dirt, and algae buildup.
                        </li>
                        <li>
                            <strong>Deck & Patio Restoration:</strong> Revive
                            wood and concrete surfaces for a fresh look.
                        </li>
                        <li>
                            <strong>Building & Siding Cleaning:</strong> Remove
                            mildew, mold, and weather stains safely.
                        </li>
                        <li>
                            <strong>Fence & Garage Cleaning:</strong> Keep
                            fences and garage doors looking new.
                        </li>
                        <li>
                            <strong>Commercial Property Maintenance:</strong>{" "}
                            Scheduled cleanings to maintain a professional
                            appearance.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    Choosing us means you get a trusted team committed to
                    excellence, safety, and environmental responsibility. We use
                    biodegradable products and adhere to strict safety protocols
                    to protect your property and our team.
                </p>

                <p className="text-lg leading-relaxed">
                    Experience the difference of professionally cleaned windows
                    that brighten your space and elevate your view. Let us bring
                    clarity and brilliance back to your windows with our
                    reliable, affordable service.
                </p>
            </section>
        ),
        url: "/cleaning/services/pressure-washing",
    },
    {
        id: 2,
        title: "Window Cleaning",
        desc: "Windows are the first impression to any commercial, retail, or office",
        icon: "/assets/icons/window-cleaning.svg",
        backImage: "/assets/images/window-cleaning.jpeg",
        url: "/cleaning/services/window-cleaning",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    Keeping your windows clean is more than just aesthetics—it
                    improves your environment by letting in natural light and
                    enhancing your property's curb appeal. We specialize in
                    delivering meticulous window cleaning that restores clarity
                    and shine to all types of windows.
                </p>

                <p className="text-lg leading-relaxed">
                    Our professional team uses eco-friendly cleaning solutions
                    combined with industry-standard techniques to ensure
                    spotless, streak-free windows every time. From residential
                    homes to commercial high-rises, we tailor our approach to
                    meet your specific needs.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Comprehensive Services
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Residential Window Cleaning:</strong>{" "}
                            Interior and exterior glass, frames, and sills.
                        </li>
                        <li>
                            <strong>Commercial & Office Buildings:</strong>{" "}
                            Scheduled cleanings to keep your business looking
                            professional.
                        </li>
                        <li>
                            <strong>High-Rise & Multi-Story Windows:</strong>{" "}
                            Certified experts equipped for safety and
                            efficiency.
                        </li>
                        <li>
                            <strong>Screen & Frame Maintenance:</strong>{" "}
                            Thorough cleaning beyond the glass.
                        </li>
                        <li>
                            <strong>Post-Construction Window Cleaning:</strong>{" "}
                            Removal of construction residue and stickers.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    Choosing us means you get a trusted team committed to
                    excellence, safety, and environmental responsibility. We use
                    biodegradable products and adhere to strict safety protocols
                    to protect your property and our team.
                </p>

                <p className="text-lg leading-relaxed">
                    Experience the difference of professionally cleaned windows
                    that brighten your space and elevate your view. Let us bring
                    clarity and brilliance back to your windows with our
                    reliable, affordable service.
                </p>
            </section>
        ),
    },
    // {
    //     id: 3,
    //     title: "Commercial",
    //     desc: "Variety of cleaning services catered to offices, warehouses",
    //     icon: "/assets/icons/commerical.svg",
    //     backImage: "/assets/images/commercial-cleaning.jpeg",
    //     content: (
    //         <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
    //             <p className="text-lg leading-relaxed">
    //                 A clean and well-maintained commercial space promotes
    //                 productivity, professionalism, and safety. Our commercial
    //                 cleaning services are designed to meet the unique needs of
    //                 businesses, offices, retail spaces, and industrial
    //                 facilities. We deliver reliable and thorough cleaning that
    //                 creates a welcoming environment for your employees and
    //                 customers.
    //             </p>

    //             <p className="text-lg leading-relaxed">
    //                 Using industry-leading equipment and environmentally
    //                 friendly products, our experienced team ensures every area
    //                 of your commercial property is spotless and hygienic.
    //                 Flexible scheduling options allow minimal disruption to your
    //                 operations.
    //             </p>

    //             <div className="bg-primary/10 rounded-lg p-6">
    //                 <h2 className="text-2xl font-semibold text-primary mb-4">
    //                     Our Commercial Cleaning Services Include
    //                 </h2>
    //                 <ul className="list-disc list-inside space-y-3 text-gray-800">
    //                     <li>
    //                         <strong>Office Cleaning:</strong> Dusting,
    //                         vacuuming, trash removal, desk sanitization, and
    //                         restroom maintenance.
    //                     </li>
    //                     <li>
    //                         <strong>Retail Spaces:</strong> Floor care, glass
    //                         cleaning, shelf dusting, and restroom upkeep.
    //                     </li>
    //                     <li>
    //                         <strong>Industrial Cleaning:</strong> Warehouse
    //                         sweeping, machinery cleaning, and debris removal.
    //                     </li>
    //                     <li>
    //                         <strong>Floor & Carpet Care:</strong> Scrubbing,
    //                         waxing, carpet vacuuming, and stain removal.
    //                     </li>
    //                     <li>
    //                         <strong>Window & Glass Cleaning:</strong> Interior
    //                         and exterior cleaning of windows and glass surfaces.
    //                     </li>
    //                     <li>
    //                         <strong>Post-Construction & Event Cleaning:</strong>{" "}
    //                         Thorough cleanup after building projects or
    //                         corporate events.
    //                     </li>
    //                 </ul>
    //             </div>

    //             <p className="text-lg leading-relaxed">
    //                 Choosing us means you get a trusted team committed to
    //                 excellence, safety, and environmental responsibility. We use
    //                 biodegradable products and adhere to strict safety protocols
    //                 to protect your property and our team.
    //             </p>

    //             <p className="text-lg leading-relaxed">
    //                 Experience the difference of professionally cleaned windows
    //                 that brighten your space and elevate your view. Let us bring
    //                 clarity and brilliance back to your windows with our
    //                 reliable, affordable service.
    //             </p>
    //         </section>
    //     ),
    //     url: "/cleaning/services/commercial",
    // },
    {
        id: 4,
        title: "Restaurant",
        desc: "Keeping the cooking area clean is a tedious task",
        icon: "/assets/icons/restaurant.svg",
        backImage: "/assets/images/restaurant-cleaning.jpeg",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    Maintaining a spotless and sanitary environment is essential
                    for every restaurant. Cleanliness is not just about
                    appearances — it directly impacts food safety, customer
                    satisfaction, and compliance with health regulations. Our
                    comprehensive restaurant cleaning services ensure your
                    entire space, from the kitchen to dining areas, meets the
                    highest standards of hygiene.
                </p>

                <p className="text-lg leading-relaxed">
                    We use EPA-approved disinfectants and eco-friendly cleaning
                    products, combined with expert techniques, to deliver a safe
                    and healthy environment for your staff and guests. Whether
                    you require daily cleaning or periodic deep cleans, our
                    flexible service plans can be tailored to your restaurant’s
                    needs.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Restaurant Cleaning Services Include
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Dining Area Cleaning:</strong> Tables,
                            chairs, floors, walls, windows, and décor cleaned
                            thoroughly.
                        </li>
                        <li>
                            <strong>Kitchen & Food Prep Cleaning:</strong>{" "}
                            Grease removal, surface sanitization, and hygiene
                            maintenance.
                        </li>
                        <li>
                            <strong>Restroom Sanitation:</strong> Deep cleaning
                            of toilets, sinks, floors, and mirrors with supply
                            replenishment.
                        </li>
                        <li>
                            <strong>Ventilation & Exhaust Cleaning:</strong>{" "}
                            Prevent fire hazards and improve air quality by
                            cleaning vents and hoods.
                        </li>
                        <li>
                            <strong>Floor & Carpet Care:</strong> Scrubbing,
                            stain removal, and sanitizing hard floors and
                            carpets.
                        </li>
                        <li>
                            <strong>Trash & Waste Management:</strong> Keeping
                            waste areas clean, odor-free, and pest-resistant.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    Choosing us means you get a trusted team committed to
                    excellence, safety, and environmental responsibility. We use
                    biodegradable products and adhere to strict safety protocols
                    to protect your property and our team.
                </p>

                <p className="text-lg leading-relaxed">
                    Experience the difference of professionally cleaned windows
                    that brighten your space and elevate your view. Let us bring
                    clarity and brilliance back to your windows with our
                    reliable, affordable service.
                </p>
            </section>
        ),
        url: "/cleaning/services/restaurant",
    },
    {
        id: 5,
        title: "Residential",
        desc: "Specializes in cleaning homes and domestic dwellings",
        icon: "/assets/icons/residential.svg",
        backImage: "/assets/images/residential-cleaning.jpeg",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    A clean home is a happy home. Our professional residential
                    cleaning services help you maintain a fresh, healthy, and
                    comfortable living environment. Whether you need regular
                    housekeeping or a deep seasonal clean, our trained team is
                    here to deliver spotless results.
                </p>

                <p className="text-lg leading-relaxed">
                    We use safe, eco-friendly products and proven cleaning
                    techniques to thoroughly clean every corner of your home,
                    ensuring your family enjoys a hygienic and inviting space.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Residential Cleaning Services Include
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>General Housekeeping:</strong> Dusting,
                            vacuuming, sweeping, mopping, and surface cleaning
                            throughout your home.
                        </li>
                        <li>
                            <strong>Kitchen Cleaning:</strong> Sanitizing
                            countertops, sinks, appliances, cabinets, and
                            floors.
                        </li>
                        <li>
                            <strong>Bathroom Cleaning:</strong> Deep cleaning
                            and disinfecting toilets, showers, tubs, sinks,
                            mirrors, and floors.
                        </li>
                        <li>
                            <strong>Bedroom & Living Areas:</strong> Bed making,
                            furniture dusting, vacuuming carpets, and organizing
                            spaces.
                        </li>
                        <li>
                            <strong>Window & Glass Cleaning:</strong>{" "}
                            Streak-free cleaning of windows, glass doors, and
                            mirrors.
                        </li>
                        <li>
                            <strong>Specialized Deep Cleaning:</strong> Carpet
                            shampooing, upholstery cleaning, and post-event
                            cleaning upon request.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    Choosing us means you get a trusted team committed to
                    excellence, safety, and environmental responsibility. We use
                    biodegradable products and adhere to strict safety protocols
                    to protect your property and our team.
                </p>

                <p className="text-lg leading-relaxed">
                    Experience the difference of professionally cleaned windows
                    that brighten your space and elevate your view. Let us bring
                    clarity and brilliance back to your windows with our
                    reliable, affordable service.
                </p>
            </section>
        ),
        url: "/cleaning/services/residential",
    },
];

const page = async ({ params }: { params: Promise<{ title: string }> }) => {
    const title = (await params).title;

    const service = OurCleaningServicesList.find(
        c => c.title.toLocaleLowerCase() === title.replaceAll("-", " ")
    );

    if (!service) return notFound();
    return (
        <div>
            {/* Hero Section */}
            <div className="container mx-auto">
                <section className="relative h-72 md:h-96 w-full overflow-hidden rounded-xl">
                    <img
                        src={service.backImage}
                        alt={service.title}
                        className="w-full h-full object-cover brightness-75"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <HeadingSection className="text-4xl capitalize md:text-6xl font-extrabold text-white drop-shadow-lg px-4 text-center max-w-4xl">
                            {title.replace("-", " ")}
                        </HeadingSection>
                    </div>
                </section>

                {/* Content Section */}
                {service.content}
            </div>
        </div>
    );
};

export default page;
