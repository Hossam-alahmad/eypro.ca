import HeadingSection from "@/src/components/HeadingSection";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const OurLandscapingServicesList = [
    {
        id: 1,
        title: "Concrete",
        desc: "It is integral to a landscaping project, providing both functional and decorative elements",
        icon: "/assets/icons/residential.svg",
        backImage: "/assets/images/landscaping-5.png",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    Enhance Your Property’s Appeal: Is your outdoor space
                    lacking structure or style? We specialize in custom concrete
                    landscaping solutions that add durability and elegance to
                    your property. From decorative walkways and patios to strong
                    retaining walls and driveways, our concrete work brings both
                    form and function to your outdoor environment.
                </p>

                <p className="text-lg leading-relaxed">
                    Our experienced team uses high-quality materials and precise
                    techniques to craft clean, long-lasting concrete surfaces.
                    Whether it's a new installation or a renovation, we design
                    with care and build with confidence to match your unique
                    space and style.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Comprehensive Concrete Landscaping Services
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Concrete Patios & Walkways:</strong> Create
                            stylish, functional paths and entertainment areas.
                        </li>
                        <li>
                            <strong>Driveways & Parking Pads:</strong> Durable,
                            weather-resistant concrete solutions built to last.
                        </li>
                        <li>
                            <strong>Retaining Walls:</strong> Add structure and
                            prevent erosion with expertly crafted concrete
                            walls.
                        </li>
                        <li>
                            <strong>Stairs & Steps:</strong> Safe and sleek
                            access points designed for comfort and stability.
                        </li>
                        <li>
                            <strong>Custom Concrete Features:</strong> From
                            decorative borders to planters, enhance your
                            landscape with detail.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    Choosing EY Solution means working with a skilled team
                    committed to high standards, structural integrity, and
                    visual appeal. We blend craftsmanship with innovation to
                    transform your property using durable, weather-resistant
                    materials that stand the test of time.
                </p>

                <p className="text-lg leading-relaxed">
                    Discover the power of concrete to reshape and elevate your
                    landscape. Let us bring solid design and dependable results
                    to every corner of your outdoor space.
                </p>
            </section>
        ),
        url: "/landscaping/services/concrete",
    },
    {
        id: 2,
        title: "Landscaping",
        desc: "Transform your outdoor space with expert landscaping, blending beauty and function for a stunning result",
        icon: "/assets/icons/residential.svg",
        backImage: "/assets/images/landscaping-2.jpg",
        url: "/landscaping/services/landscaping",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    Transform your outdoor space with expert landscaping,
                    blending beauty and function for a stunning result, catering
                    to the diverse needs and preferences of the customers.
                </p>

                <p className="text-lg leading-relaxed">
                    Our experienced team uses high-quality materials and precise
                    techniques to craft clean, long-lasting concrete surfaces.
                    Whether it's a new installation or a renovation, we design
                    with care and build with confidence to match your unique
                    space and style.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Comprehensive Concrete Landscaping Services
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Concrete Patios & Walkways:</strong> Create
                            stylish, functional paths and entertainment areas.
                        </li>
                        <li>
                            <strong>Driveways & Parking Pads:</strong> Durable,
                            weather-resistant concrete solutions built to last.
                        </li>
                        <li>
                            <strong>Retaining Walls:</strong> Add structure and
                            prevent erosion with expertly crafted concrete
                            walls.
                        </li>
                        <li>
                            <strong>Stairs & Steps:</strong> Safe and sleek
                            access points designed for comfort and stability.
                        </li>
                        <li>
                            <strong>Custom Concrete Features:</strong> From
                            decorative borders to planters, enhance your
                            landscape with detail.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    Choosing EY Solution means working with a skilled team
                    committed to high standards, structural integrity, and
                    visual appeal. We blend craftsmanship with innovation to
                    transform your property using durable, weather-resistant
                    materials that stand the test of time.
                </p>

                <p className="text-lg leading-relaxed">
                    Discover the power of concrete to reshape and elevate your
                    landscape. Let us bring solid design and dependable results
                    to every corner of your outdoor space.
                </p>
            </section>
        ),
    },
    {
        id: 3,
        title: "Interlocking",
        desc: "The installation and maintenance of interlocking pavers or bricks",
        icon: "/assets/icons/residential.svg",
        backImage: "/assets/images/landscaping-6.jpg",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    Enhance Curb Appeal with Interlocking: Looking to elevate
                    the style and durability of your outdoor surfaces? EY
                    Solution offers expert interlocking services that combine
                    beauty, function, and long-lasting performance. From
                    driveways to patios, our custom designs add value and
                    sophistication to your property.
                </p>

                <p className="text-lg leading-relaxed">
                    Our skilled team uses high-quality pavers and precise
                    installation techniques to create surfaces that are not only
                    visually appealing but also built to withstand weather and
                    heavy use. Whether you prefer modern designs or classic
                    patterns, we tailor every project to suit your taste and
                    space.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Interlocking Services
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Driveway Interlocking:</strong> Durable and
                            elegant solutions that withstand vehicle traffic and
                            harsh climates.
                        </li>
                        <li>
                            <strong>Patio & Walkway Paving:</strong> Customized
                            designs that create welcoming outdoor living areas.
                        </li>
                        <li>
                            <strong>Poolside Interlocking:</strong> Safe,
                            slip-resistant, and beautiful surfaces for pool
                            surroundings.
                        </li>
                        <li>
                            <strong>Garden Borders & Edging:</strong> Define
                            landscaping with attractive, low-maintenance
                            finishes.
                        </li>
                        <li>
                            <strong>Repair & Re-leveling:</strong> Restore and
                            maintain existing interlock to its original
                            condition.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    We take pride in delivering interlocking projects that blend
                    craftsmanship with creativity. At EY Solution, every
                    installation is handled with attention to drainage,
                    foundation, and aesthetics—ensuring your outdoor space looks
                    stunning and performs perfectly.
                </p>

                <p className="text-lg leading-relaxed">
                    Choose EY Solution for reliable, professional interlocking
                    services in London, Ontario. Let’s build something beautiful
                    that lasts.
                </p>
            </section>
        ),
        url: "/landscaping/services/interlocking",
    },
    {
        id: 4,
        title: "Sod Installation Grading",
        desc: "Expert sod installation and grading for a lush",
        icon: "/assets/icons/residential.svg",
        backImage: "/assets/images/landscaping-7.jpg",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    Achieve a lush, green lawn instantly with our professional
                    sod installation and grading services. At EY Solution, we
                    specialize in transforming uneven, patchy, or damaged
                    landscapes into smooth, vibrant, and healthy lawns using
                    premium sod and expert leveling techniques.
                </p>

                <p className="text-lg leading-relaxed">
                    Our experienced team ensures proper soil preparation,
                    precise grading for optimal drainage, and meticulous sod
                    placement for long-lasting results. Whether you're starting
                    a new lawn or replacing an old one, we deliver reliable
                    service that enhances curb appeal and increases your
                    property’s value.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Sod & Grading Services
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Site Evaluation & Grading:</strong> We level
                            your land and adjust slopes to ensure proper water
                            flow and prevent pooling.
                        </li>
                        <li>
                            <strong>Sod Installation:</strong> Fresh,
                            high-quality sod laid with precision for instant
                            greenery and a seamless finish.
                        </li>
                        <li>
                            <strong>Soil Preparation:</strong> We test and
                            enrich your soil to support healthy root development
                            and long-term growth.
                        </li>
                        <li>
                            <strong>Lawn Restoration:</strong> Remove dead grass
                            and weeds, regrade, and replace with fresh sod for a
                            complete makeover.
                        </li>
                        <li>
                            <strong>New Construction Lawns:</strong> Ideal for
                            new homes or commercial spaces needing a
                            professionally graded and sodded lawn.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    We understand that proper grading is essential to the
                    longevity and appearance of your lawn. That’s why we use
                    modern equipment and proven techniques to deliver a solid
                    foundation and a flawless finish.
                </p>

                <p className="text-lg leading-relaxed">
                    Let EY Solution help you achieve a vibrant, even, and
                    low-maintenance lawn with our expert sod and grading
                    services—tailored for the unique conditions of London,
                    Ontario.
                </p>
            </section>
        ),
        url: "/landscaping/services/sod-installation-grading",
    },
    {
        id: 5,
        title: "Fencing And Decking",
        desc: "Enhance your outdoor space with our custom fencing and decking solutions",
        icon: "/assets/icons/residential.svg",
        backImage: "/assets/images/landscaping-8.jpg",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    Enhance your outdoor living space with professionally
                    crafted fencing and decking solutions by EY Solution.
                    Whether you're looking for privacy, security, or an inviting
                    space to entertain, we design and build durable, stylish,
                    and functional outdoor structures tailored to your
                    property’s layout and aesthetic.
                </p>

                <p className="text-lg leading-relaxed">
                    From pressure-treated wood to composite materials, our
                    skilled team uses only high-quality materials and precision
                    craftsmanship to deliver long-lasting results. We work
                    closely with homeowners and businesses across London,
                    Ontario, to create outdoor spaces that are both beautiful
                    and practical.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Fencing & Decking Services
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Custom Deck Construction:</strong> Build
                            stunning wooden or composite decks that expand your
                            living space and add value to your home.
                        </li>
                        <li>
                            <strong>Privacy Fencing:</strong> Choose from a
                            variety of styles and materials to increase privacy
                            and define your outdoor area.
                        </li>
                        <li>
                            <strong>Fence Repair & Replacement:</strong> We fix
                            broken panels, leaning posts, and outdated fencing
                            for improved safety and appearance.
                        </li>
                        <li>
                            <strong>Decorative Railings & Pergolas:</strong> Add
                            architectural interest and shade with custom-built
                            additions to your deck or yard.
                        </li>
                        <li>
                            <strong>Staining & Sealing:</strong> Protect your
                            investment with professional staining and sealing to
                            extend the life of wood surfaces.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    At EY Solution, we’re committed to delivering outdoor
                    solutions that are built to last. Every fence and deck we
                    build is a reflection of our attention to detail,
                    craftsmanship, and understanding of local building codes and
                    conditions.
                </p>

                <p className="text-lg leading-relaxed">
                    Turn your backyard into a private retreat or a space for
                    entertaining. Let us help you create the perfect fence and
                    deck combination to suit your lifestyle and elevate your
                    property.
                </p>
            </section>
        ),
        url: "/landscaping/services/fencing-and-decking",
    },
    {
        id: 6,
        title: "Residential And Commercial Maintenance",
        desc: "Expert maintenance for residential and commercial spaces",
        icon: "/assets/icons/residential.svg",
        backImage: "/assets/images/landscaping-3.jpg",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    At EY Solution, we provide comprehensive landscaping
                    maintenance services designed to keep your residential or
                    commercial property looking pristine year-round. Our expert
                    team focuses on regular care and attention to detail,
                    ensuring your outdoor spaces remain healthy, vibrant, and
                    welcoming.
                </p>

                <p className="text-lg leading-relaxed">
                    From lawn mowing and pruning to seasonal cleanups and
                    irrigation system management, we tailor our maintenance
                    plans to meet the unique needs of your property. Whether you
                    own a cozy home garden or manage a large commercial
                    landscape, our reliable services help protect and enhance
                    your investment.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Maintenance Services
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Lawn Care & Mowing:</strong> Consistent
                            cutting, edging, and fertilization to maintain
                            healthy grass.
                        </li>
                        <li>
                            <strong>Tree & Shrub Pruning:</strong> Shaping and
                            trimming for plant health and aesthetic appeal.
                        </li>
                        <li>
                            <strong>Seasonal Cleanups:</strong> Leaf removal,
                            debris clearing, and preparing your landscape for
                            changing seasons.
                        </li>
                        <li>
                            <strong>Irrigation System Management:</strong>{" "}
                            Installation, repair, and seasonal adjustments to
                            ensure efficient watering.
                        </li>
                        <li>
                            <strong>Weed Control & Mulching:</strong> Keeping
                            beds clean and plants thriving by controlling weeds
                            and applying fresh mulch.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    Our team uses environmentally friendly practices and
                    industry-leading equipment to provide maintenance services
                    that not only beautify your property but also promote
                    sustainability and long-term health of your landscape.
                </p>

                <p className="text-lg leading-relaxed">
                    Whether you require scheduled maintenance for your
                    commercial property or ongoing care for your residential
                    garden, EY Solution is your trusted partner in landscaping
                    excellence in London, Ontario.
                </p>
            </section>
        ),
        url: "/landscaping/services/residential-and-commercial-maintenance",
    },
    {
        id: 7,
        title: "Snow Removal",
        desc: "Our snow removal services provide prompt and reliable solutions",
        icon: "/assets/icons/residential.svg",
        backImage: "/assets/images/landscaping-9.jpg",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    When winter hits London, Ontario, EY Solution is ready to
                    keep your property safe and accessible with our reliable
                    snow removal services. We understand that timely and
                    efficient snow clearing is crucial to preventing accidents
                    and ensuring smooth operations for both residential and
                    commercial properties.
                </p>

                <p className="text-lg leading-relaxed">
                    Our professional team uses advanced equipment and proven
                    techniques to clear driveways, sidewalks, parking lots, and
                    entrances quickly and thoroughly. Whether it's light
                    snowfall or heavy accumulation, we tailor our approach to
                    meet your specific needs and schedule.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Snow Removal Services
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Driveway & Sidewalk Clearing:</strong> Keep
                            walkways and access points safe and free of snow and
                            ice.
                        </li>
                        <li>
                            <strong>Parking Lot Plowing:</strong> Efficient
                            removal to maximize parking space and ensure smooth
                            traffic flow.
                        </li>
                        <li>
                            <strong>Salting & De-Icing:</strong> Prevent
                            slippery surfaces with environmentally safe ice melt
                            applications.
                        </li>
                        <li>
                            <strong>Emergency Snow Removal:</strong> Rapid
                            response services to handle unexpected heavy
                            snowfalls.
                        </li>
                        <li>
                            <strong>Seasonal Contracts:</strong> Scheduled
                            maintenance agreements for worry-free snow
                            management all winter long.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    Trust EY Solution to provide safe, dependable, and timely
                    snow removal that protects your property, employees, and
                    visitors. Our commitment to quality and customer
                    satisfaction makes us the preferred snow removal partner in
                    London, Ontario.
                </p>

                <p className="text-lg leading-relaxed">
                    Contact us today to learn more about how our snow removal
                    services can keep your property clear and safe throughout
                    the winter season.
                </p>
            </section>
        ),
        url: "/landscaping/services/snow-removal",
    },
    {
        id: 8,
        title: "Artificial grass",
        desc: "Our artificial grass installation offers a lush, low-maintenance lawn solution",
        icon: "/assets/icons/residential.svg",
        backImage: "/assets/images/landscaping-10.jpg",
        content: (
            <section className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
                <p className="text-lg leading-relaxed">
                    EY Solution offers high-quality artificial grass
                    installation and maintenance services that bring the beauty
                    of a lush green lawn without the hassle of watering, mowing,
                    or fertilizing. Perfect for both residential and commercial
                    properties, artificial turf provides a durable,
                    low-maintenance, and year-round green solution.
                </p>

                <p className="text-lg leading-relaxed">
                    Our expert team ensures precise installation, preparing your
                    surface properly for a smooth, natural look that lasts.
                    Whether you want a backyard makeover, a playground surface,
                    or commercial landscaping enhancement, artificial grass is
                    an eco-friendly choice that saves time, water, and
                    resources.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Our Artificial Grass Services
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-800">
                        <li>
                            <strong>Professional Installation:</strong> Site
                            preparation, leveling, and turf laying for a
                            flawless finish.
                        </li>
                        <li>
                            <strong>
                                Residential & Commercial Applications:
                            </strong>{" "}
                            Lawns, playgrounds, sports fields, patios, and more.
                        </li>
                        <li>
                            <strong>Maintenance & Repairs:</strong> Cleaning,
                            brushing, and fixing wear spots to keep turf looking
                            fresh.
                        </li>
                        <li>
                            <strong>Eco-Friendly Benefits:</strong> Water
                            conservation, no pesticides, and reduced carbon
                            footprint.
                        </li>
                        <li>
                            <strong>Custom Designs:</strong> Tailored layouts
                            and edging to match your unique landscaping needs.
                        </li>
                    </ul>
                </div>

                <p className="text-lg leading-relaxed">
                    Choose EY Solution for durable, beautiful artificial grass
                    solutions that enhance curb appeal and provide a
                    comfortable, evergreen outdoor space without the upkeep of
                    natural lawns.
                </p>

                <p className="text-lg leading-relaxed">
                    Transform your property with our artificial grass expertise
                    and enjoy a green, maintenance-free lawn all year long.
                </p>
            </section>
        ),
        url: "/landscaping/services/artificial-grass",
    },
];
export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ title: string }>;
}): Promise<Metadata> => {
    const title = (await params).title;

    const service = OurLandscapingServicesList.find(
        c => c.title.toLocaleLowerCase() === title.replaceAll("-", " ")
    );

    return {
        title: service?.title,
        description: service?.desc,
        openGraph: {
            title,
            description: service?.desc,
        },
        twitter: {
            title,
            description: service?.desc,
        },
    };
};

const page = async ({ params }: { params: Promise<{ title: string }> }) => {
    const title = (await params).title;

    const service = OurLandscapingServicesList.find(
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
                            {title.replaceAll("-", " ")}
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
