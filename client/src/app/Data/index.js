import React from 'react'
import { Icon } from '@iconify/react';

export const topbar = [
    {
        path: '/',
        icon: <Icon icon="fa-solid:phone" />,
        phone: '0123456789',
        links: [
            {
                path: '/carrers',
                title: 'Careers at Danhamz',
            },
            {
                path: '/',
                title: 'Knowledge Bank',
            },
            {
                path: '/',
                title: 'News',
            },
            {
                path: '/',
                title: 'About',
            },
            {
                path: '/',
                title: 'Instant Valuation',
            },
            {
                path: '/',
                title: 'Contact us',
            },
            {
                path: '/',
                title: 'Report a Repair',
            },
        ],
    },
];

export const navbar = [
    {
        icon: <Icon icon="uiw:home" />,
        link: "/",
        title: "Home",
        lists: [
            {
                link: "/",
                title: "Lettings",
                type: "select",
                options: [
                    {
                        title: "Professionals",
                        link: "/",
                        icon: <Icon icon="healthicons:city-worker-outline" />,
                    },
                    {
                        title: "Students",
                        link: "/",
                        icon: <Icon icon="mdi:account-student-outline" />,
                    },
                    {
                        title: "Landlords",
                        link: "/",
                        icon: <Icon icon="healthicons:city-worker-outline" />,
                    },
                    {
                        title: "Refer A Friend",
                        link: "/",
                        icon: <Icon icon="fluent:chat-32-regular" />,
                    }
                ]
            },
            {
                link: "/",
                title: "Sales",
                type: "select",
                options: [
                    {
                        title: "Sellers",
                        link: "/",
                        icon: <Icon icon="uiw:home" />,
                    },
                    {
                        title: "Buyers",
                        link: "/",
                        icon: <Icon icon="gis:home" />,
                    },
                    {
                        title: "Investment Sales",
                        link: "/",
                        icon: <Icon icon="gis:home" />,
                    },
                    {
                        title: "Mortgages",
                        link: "/",
                        icon: <Icon icon="pepicons-pencil:key" />,
                    },
                    {
                        title: "Auctions",
                        link: "/",
                        icon: <Icon icon="mingcute:auction-line" />,
                    },
                    {
                        title: "Value My Property",
                        link: "/",
                        icon: <Icon icon="teenyicons:search-property-solid" />,
                    },
                    {
                        title: "Refer A Friend",
                        link: "/",
                        icon: <Icon icon="fluent:chat-32-regular" />,
                    },
                ]
            },
            {
                link: "/",
                title: "Invest",
                type: "select",
                options: [
                    {
                        title: "Overview",
                        link: "/",
                        icon: <Icon icon="bi:piggy-bank" />,
                    },
                    {
                        title: "Sourcing",
                        link: "/",
                        icon: <Icon icon="cil:search" />,
                    },
                    {
                        title: "Refubs",
                        link: "/",
                        icon: <Icon icon="solar:paint-roller-line-duotone" />,
                    },
                    {
                        title: "Developments",
                        link: "/",
                        icon: <Icon icon="et:tools" />,
                    },
                    {
                        title: "Invest In Leeds",
                        link: "/",
                        icon: <Icon icon="lets-icons:dimond-alt-light" />,
                    },
                    {
                        title: "Investment Sales",
                        link: "/",
                        icon: <Icon icon="uiw:home" />,
                    },
                    {
                        title: "Danhamz Investor Club",
                        link: "/",
                        icon: <Icon icon="uiw:home" />,
                    }
                ]
            },
            {
                link: "/",
                title: "Block",
                type: "select",
                options: [
                    {
                        title: "Block management",
                        link: "/",
                        icon: <Icon icon="mingcute:building-3-line" />,
                    },
                    {
                        title: "Case Studies",
                        link: "/",
                        icon: <Icon icon="octicon:pencil-24" />,
                    },
                    {
                        title: "Referral Scheme",
                        link: "/",
                        icon: <Icon icon="fluent:chat-32-regular" />,
                    }
                ]
            }
        ]
    }
]

// home page content

export const rentContainer = [
    {
        noOfbeds: 'How many bedrooms do you need?',
        quantity:[
            {count: "1", value: "1"},
            {count: "2", value: "2"},
            {count: "3", value: "3"},
            {count: "4", value: "4"},
            {count: "5", value: "5"},
            {count: "6", value: "6"},
            {count: "7", value: "7"},
            {count: "8", value: "8"},
            {count: "9", value: "9"},
            {count: "10", value: "10"},
        ],
        container: [
            {
                title: "What is your budget?",
                type: "select",
                options: [
                    {
                        title: "No Preferences",
                    }, 
                    {
                        title: "Less than $1000",
                    }, {
                        title: "$1000 - $2000",
                    },{
                        title: "$2000 - $3000",
                    }
                ]
            },
            {
                title: "Location (tick all that apply)",
                type: "select",
                options: [
                    {
                        title: "No Preferences",
                    }, 
                    {
                        title: "Less than $1000",
                    }, {
                        title: "$1000 - $2000",
                    },{
                        title: "$2000 - $3000",
                    }
                ]
            }
        ]
    }
]

export const buyContainer = [
    {
        price: [
            {
                type: "select",
                options: [
                    {
                        title: "Min Price",
                    }, 
                    {
                        title: "Less than $1000",
                    }, {
                        title: "$1000 - $2000",
                    },
                    {
                        title: "$2000 - $3000",
                    },
                    {
                        title: "$2000 - $3000",
                    },
                    {
                        title: "$2000 - $3000",
                    },
                ]
            },
            {
                type: "select",
                options: [
                    {
                        title: "Max Price",
                    }, 
                    {
                        title: "Less than $1000",
                    }, {
                        title: "$1000 - $2000",
                    },{
                        title: "$2000 - $3000",
                    },
                    {
                        title: "$2000 - $3000",
                    },
                    {
                        title: "$2000 - $3000",
                    },
                ]
            }
        ],
        beds: [
            {
                type: "select",
                options: [
                    {count: "Min beds", value: "min"},
                    {count: "1", value: "1"},
                    {count: "2", value: "2"},
                    {count: "3", value: "3"},
                    {count: "4", value: "4"},
                    {count: "5", value: "5"},
                    {count: "6", value: "6"},
                    {count: "7", value: "7"},
                    {count: "8", value: "8"},
                    {count: "9", value: "9"},
                ]
            },
            {
                type: "select",
                options: [
                    {count: "Max beds", value: "Max"},
                    {count: "1", value: "1"},
                    {count: "2", value: "2"},
                    {count: "3", value: "3"},
                    {count: "4", value: "4"},
                    {count: "5", value: "5"},
                    {count: "6", value: "6"},
                    {count: "7", value: "7"},
                    {count: "8", value: "8"},
                    {count: "9", value: "9"},
                    {count: "10", value: "10"},
                ]
            }
        ],
        Type: [
            {
                type: "select",
                options: [
                    {title: "City Center"},
                    {title: "Organization"},
                    {title: "Parley"},
                    {title: "Armley"},
                ]
            },
            {
                type: "select",
                options: [
                    {title: "Home"},
                    {title: "Appartment"},
                    {title: "Bungalow"},
                    {title: "Cater"},
                    {title: "Combined"},
                ]
            }
        ]
    }
]

export const banner = [
    {
        title: "Danhamz is an award-winning estate & lettings agent in Leeds.",
        welcome: "Welcome to the Home of Property",
        info: "Previously known as Let Leeds, you can now call us Danhamz. Whether you’re a buyer, seller, tenant, landlord, investor or developer, our friendly team is here to help. We offer a range of property services that include Lettings, Sales & Block Management all under one roof.",
        para: "Couples, families, investors, buyers, and sellers all know they can depend on our highly experienced team to protect their best interests while finding the property that is just right for them. We are also big believers in value and specialise in helping our clients get the most from every pound they spend.",
    }
]

export const categories = [
    {
        img: "images/home.jpg",
        title: "Students",
        url: "/",
    },
    {
        img: "images/img1.jpg",
        title: "Professionals",
        url: "/",
    },
    {
        img: "images/img2.jpg",
        title: "Landlords",
        url: "/",
    },
    {
        img: "images/img3.jpg",
        title: "Investors",
        url: "/",
    },
    {
        img: "images/img4.jpg",
        title: "Sellers",
        url: "/",
    },
    {
        img: "images/img5.jpg",
        title: "Buyers",
        url: "/",
    },
    {
        img: "images/img6.jpg",
        title: "Block Management",
        url: "/",
    },
    {
        img: "images/img1.jpg",
        title: "Refer A Friend",
        url: "/",
    },
    {
        img: "images/img5.jpg",
        title: "About Us",
        url: "/",
    },

]

export const approach = [
    {
        title: "A fresh approach to sales",
        info: "If you are looking to sell a property in Leeds, then we’re here to make the whole process as smooth and stress-free as possible.",
        para: "Whether you are selling your home, or an investment property, our friendly team at Danhamz will be with you every step of the way, from initial valuation through to final completion.",
        video: "https://www.youtube.com/watch?v=lbqll5HUPog&pp=ygUMaG91c2UgZGVzaWdu",
    }
]

export const properties = [
            {
                img: "images/img1.jpg",
                tag: "Solt TCS",
                price: "$1000",
                location: "London Lovel park Heels 109",
                pics: [
                    {
                        icon: <Icon icon="ion:camera-outline" />,
                        quantity: "1",
                    }
                ],
                bed_rooms: "1 bedrooms",
                icon: <Icon icon="uil:bed" />,

            },
            {
                img: "images/img2.jpg",
                tag: "Solt TCS",
                price: "$1000",
                location: "London Lovel park Heels 109",
                pics: [
                    {
                        icon: <Icon icon="ion:camera-outline" />,
                        quantity: "1",
                    }
                ],
                bed_rooms: "2 bedrooms",
                icon: <Icon icon="uil:bed" />,

            },
            {
                img: "images/img3.jpg",
                tag: "Solt TCS",
                price: "$1000",
                location: "London Lovel park Heels 109",
                pics: [
                    {
                        icon: <Icon icon="ion:camera-outline" />,
                        quantity: "4",
                    }
                ],
                bed_rooms: "6 bedrooms",
                icon: <Icon icon="uil:bed" />,

            },
            {
                img: "images/img5.jpg",
                tag: "Solt TCS",
                price: "$1000",
                location: "London Lovel park Heels 109",
                pics: [
                    {
                        icon: <Icon icon="ion:camera-outline" />,
                        quantity: "1",
                    }
                ],
                bed_rooms: "1 bedrooms",
                icon: <Icon icon="uil:bed" />,

            },
]

export const ratings = [
    {
        icon: <Icon icon="uis:star" />,
        title: "“Three house viewings from ben”",
        para: "Joseph had been great throughout the process. Communication has been regular and consistent, and he’s gone above and beyond to…",
        name: "Patrik"
    },
    {
        icon: <Icon icon="uis:star" />,
        para: "Joseph had been great throughout the process. Communication has been regular and consistent, and he’s gone above and beyond to…",
        name: "Anonymous"
    },
    {
        icon: <Icon icon="uis:star" />,
        title: "“Three house viewings from ben”",
        para: "Joseph had been great throughout the process. Communication has been regular and consistent, and he’s gone above and beyond to…",
        name: "Victor"
    },
    {
        icon: <Icon icon="uis:star" />,
        title: "“Three house viewings from ben”",
        para: "Joseph had been great throughout the process. Communication has been regular and consistent, and he’s gone above and beyond to…",
        name: "Anonymous"
    },
    {
        icon: <Icon icon="uis:star" />,
        title: "“Three house viewings from ben”",
        para: "Joseph had been great throughout the process. Communication has been regular and consistent, and he’s gone above and beyond to…",
        name: "Patrik"
    },
    {
        icon: <Icon icon="uis:star" />,
        title: "“Three house viewings from ben”",
        name: "Anonymous"
    },
    {
        icon: <Icon icon="uis:star" />,
        title: "“Three house viewings from ben”",
        para: "Amazing letting agents. Joe was very helpful and professional, Chelsea answered our queries patiently. Thank you Danhamz",
        name: "Patrik"
    },
    {
        icon: <Icon icon="uis:star" />,
        title: "“Three house viewings from ben”",
        para: "Joseph had been great throughout the process. Communication has been regular and consistent, and he’s gone above and beyond to…",
        name: "Patrik"
    },
    {
        icon: <Icon icon="uis:star" />,
        title: "“Three house viewings from ben”",
        para: "Joseph had been great throughout the process. Communication has been regular and consistent, and he’s gone above and beyond to…",
        name: "Patrik"
    },{
        icon: <Icon icon="uis:star" />,
        title: "“Three house viewings from ben”",
        para: "Joseph had been great throughout the process. Communication has been regular and consistent, and he’s gone above and beyond to…",
        name: "Patrik"
    },
]

export const investors = [
    {
        title: "Investors in People",
        info: "In our industry, it’s the people that really make the difference. That’s why we firmly believe in supporting our staff to be the best they can be. Danhamz is a proud holder of the globally recognised Investors In People accreditation",
        img: "images/investor_logo.png",
    }
]

export const studentHomes = [
    {
        icon: <Icon icon="mdi:lightbulb-on-30" />,
        title: "All-inclusive student homes",
        img: "images/student.jpg",
        info: "Life as a student is busy and stressful enough, so choose an all-inclusive property from Danhamz to take all the hassle out of renting. We’ve got you covered with our DELUXE Bills Package. All Danhamz managed properties come with: Gas, Electric, Water, the best available 1GB Superfast Broadband, TV Licence and Contents Insurance (with £1,000 laptop cover). Don’t worry about things like rising energy prices or how to split the bills  – you simply pay the same thing every month and it’s all taken care of.  It’s a no brainer!",

    }
]

export const lettingProperties = [
    // icon, quantity, weekPrice, location, monthPrice, bedRooms, img, bed_icon, available, furnished_icon,furnished,bill_icon, bills, date
    {
        icon: <Icon icon="uil:bed" />,
        quantity: "1",
        weekPrice: "$1000",
        location: "London Lovel park Heels 109",
        monthPrice: "$1000",
        bedRooms: "1 bedrooms",
        img: "images/img1.jpg",
        bed_icon: <Icon icon="uil:bed" />,
        available: "Available",
        furnished_icon: <Icon icon="la:couch" />,
        furnished: "Furnished",
        bill_icon: <Icon icon="mdi:lightbulb-on-30" />,
        bills: "Bills Included",
        date: "01 Jul",
    },
    {
        icon: <Icon icon="uil:bed" />,
        quantity: "1",
        weekPrice: "$1000",
        location: "London Lovel park Heels 109",
        monthPrice: "$1000",
        bedRooms: "1 bedrooms",
        img: "images/img4.jpg",
        bed_icon: <Icon icon="uil:bed" />,
        available: "Available",
        furnished_icon: <Icon icon="la:couch" />,
        furnished: "Furnished",
        date: "01 Jul",
    },
    {
        icon: <Icon icon="uil:bed" />,
        quantity: "1",
        weekPrice: "$1000",
        location: "London Lovel park Heels 109",
        monthPrice: "$1000",
        bedRooms: "1 bedrooms",
        img: "images/img3.jpg",
        bed_icon: <Icon icon="uil:bed" />,
        available: "Available",
        furnished_icon: <Icon icon="la:couch" />,
        furnished: "Furnished",
        bill_icon: <Icon icon="mdi:lightbulb-on-30" />,
        bills: "Bills Included",
        date: "01 Jul",
    },
    {
        icon: <Icon icon="uil:bed" />,
        quantity: "1",
        weekPrice: "$1000",
        location: "London Lovel park Heels 109",
        monthPrice: "$1000",
        bedRooms: "1 bedrooms",
        img: "images/img1.jpg",
        bed_icon: <Icon icon="uil:bed" />,
        available: "Available",
        furnished_icon: <Icon icon="la:couch" />,
        furnished: "Furnished",
        date: "01 Jul",
    },

]


export const welcome = [
    {
        title: "Welcome to the Home of Property",
        info: "The housing stock in Leeds is large and varied. You will find homes to buy, let or buy-to-let here from every historical period of the last 200 years. Whether you’re looking for a terraced house, an interwar semi-detached home or a new postmodern detached house, Leeds is the place for you.",
        para: "Of course, finding the best properties to buy, let or invest in means partnering with estate agents that know the local market inside and out. That’s Danhamz to a T!",
        video: "https://www.youtube.com/watch?v=0Dg6VM6Lal8&pp=ygUFaG9tZXM%3D",
    }
]


export const toggleInfo = [
    {
        title: "Full range of property services",
        info: "We provide a full range of property services to landlords, tenants, buyers and sellers in Leeds. Our highly experienced team can help you to buy, sell, let or rent a property anywhere in the city and with our award-winning customer service, you know you are going to get the best deal possible whatever your needs may be.Rather than becoming fixated on churn, that is closing the deal regardless of the quality of the match, we take a more patient approach. We don’t try to force square pegs into round holes. We know that it’s better for everyone involved, including us and our reputation, if we take a little extra time and exert a little extra effort to make the ideal match. If you would like to take advantage of any of our property services in Leeds, get in touch with us today."
    },
    {
        title: "The best Letting Agent in Leeds",
        info: "We provide a full range of property services to landlords, tenants, buyers and sellers in Leeds. Our highly experienced team can help you to buy, sell, let or rent a property anywhere in the city and with our award-winning customer service, you know you are going to get the best deal possible whatever your needs may be.Rather than becoming fixated on churn, that is closing the deal regardless of the quality of the match, we take a more patient approach. We don’t try to force square pegs into round holes. We know that it’s better for everyone involved, including us and our reputation, if we take a little extra time and exert a little extra effort to make the ideal match. If you would like to take advantage of any of our property services in Leeds, get in touch with us today."
    },
    {
        title: "The besyt Estate Agent in Leeds",
        info: "We provide a full range of property services to landlords, tenants, buyers and sellers in Leeds. Our highly experienced team can help you to buy, sell, let or rent a property anywhere in the city and with our award-winning customer service, you know you are going to get the best deal possible whatever your needs may be.Rather than becoming fixated on churn, that is closing the deal regardless of the quality of the match, we take a more patient approach. We don’t try to force square pegs into round holes. We know that it’s better for everyone involved, including us and our reputation, if we take a little extra time and exert a little extra effort to make the ideal match. If you would like to take advantage of any of our property services in Leeds, get in touch with us today."
    },
    {
        title: "Block Management",
        info: "We provide a full range of property services to landlords, tenants, buyers and sellers in Leeds. Our highly experienced team can help you to buy, sell, let or rent a property anywhere in the city and with our award-winning customer service, you know you are going to get the best deal possible whatever your needs may be.Rather than becoming fixated on churn, that is closing the deal regardless of the quality of the match, we take a more patient approach. We don’t try to force square pegs into round holes. We know that it’s better for everyone involved, including us and our reputation, if we take a little extra time and exert a little extra effort to make the ideal match. If you would like to take advantage of any of our property services in Leeds, get in touch with us today."
    },
    {
        title: "Comprehensive property management",
        info: "We provide a full range of property services to landlords, tenants, buyers and sellers in Leeds. Our highly experienced team can help you to buy, sell, let or rent a property anywhere in the city and with our award-winning customer service, you know you are going to get the best deal possible whatever your needs may be.Rather than becoming fixated on churn, that is closing the deal regardless of the quality of the match, we take a more patient approach. We don’t try to force square pegs into round holes. We know that it’s better for everyone involved, including us and our reputation, if we take a little extra time and exert a little extra effort to make the ideal match. If you would like to take advantage of any of our property services in Leeds, get in touch with us today."
    },
]


export const news= [
    {
        img:"images/student.jpg",
        investment: "Investment",
        news: "Landlord News",
        date: '2017-12-3',
        title: "National Landlord News Summary Show and Description",
    },
    {
        img:"images/img6.jpg",
        news: "Company News",
        investment: "Investment",
        date: '2017-12-3',
        title: "Danhamz latest News Summary Show and Description",
    },
    {
        img:"images/img3.jpg",
        investment: "Investment",
        news: "Company News",
        date: '2017-12-3',
        title: "London we are coming!",
    },
]

export const footer = [
    {
        title: "Get in touch",
        Links: [
            {icon: <Icon icon="ic:baseline-email" />, title: "contact@danhamz.co.uk", url:"http://www.danhamz.co.uk"},
            {icon: <Icon icon="fa-solid:phone" />, title: "0113 230 90000", url:"http://www.danhamz.co.uk"},
            {icon: <Icon icon="mdi:location" />, title: "Home Of Property", url:"http://www.danhamz.co.uk"},
            
        ],
        find: "Find us on social media",
        social: [
            {icon: <Icon icon="devicon:facebook" />, title: "Danhamz", url:"http://www.danhamz.co.uk"},
            {icon: <Icon icon="devicon:facebook" />, title: "Danhamz on Facebook", url:"http://www.danhamz.com"},
            {icon: <Icon icon="mdi:instagram" />, title: "@danhamz_sales", url:"http://www.danhamz.com.au"},
            {icon: <Icon icon="logos:twitter" />, title: "Follow us on Twitter", url:""},
            {icon: <Icon icon="ri:linkedin-fill" />, title: "Connect on LinkedIn", url:""},
        ]
    },
    {
        title: "Customer links",
        Links: [
            {title: "Estate Agents in leeds", url:""},
            {title: "Block Property Management Leeds", url:""},
            {title: "Students Accomodation Leeds", url:""},
            {title: "Letting Agents Pudsey", url:""},
            {title: "Estate Agent Services", url:""},
            {title: "Property Resource Leeds", url:""},
            {title: "Property Development leeds", url:""},
            {title: "Danhamz Investor Club", url:""},
            {title: "Report A Repair", url:""},
            {title: "Areas Covered", url:""},
            {title: "Careers at Danhamz", url:""},
        ]
    },
    {
        title: "Legal Policies",
        Links: [
            {title: "Terms", url: ""},
            {title: "Privacy Policy", url: ""},
            {title: "Client Money Handling", url: ""},
            {title: "Sitemap", url: ""},
            {title: "Our Fees", url: ""},
            {title: "Complaints", url: ""},
        ]
    },
    {
        logo: "images/investor_logo.png",
        Links: [
            {title: "Home of Property Ltd trading as Danhamz"},
            {title: "Registered in England, Company Number 6804475."},
            {title: "Danhamz Horsforth is accredited by PropertyMark."},
            {title: "VAT Number 323 659 887. ICO Number Z2040400."},
            {title: "Home of Property Ltd trading as"},
            {title: "Danhamz Horsforth is accredited by PropertyMark."},
            {title: "Danhamz is accredited by SafeAgent with accreditation number A6303."},
        ]
    }

]

// home page content


export const carrerBanner = [
    {
        title: "Carrers at Danhamz",
        img: "images/people-grid.webp"
    }
]

export const teams = [
    {
        title: "Join the team",
        info: "Danhamz offers a platform for Yorkshire’s most driven, creative and passionate property people to come together, grow, have fun and make an impact. Our people are at the heart of everything we do, working together to achieve a common goal and deliver the best customer experience at every turn.",
        para: "Our ethos is ‘every move matters’, because we take pride in everything that we do. With a hugely successful team of over 30 people across three branches, our team values are what drive us forward. Filled with fun, laughter and passion, we strive to create the best team in the industry",
        img: "images/quote.png"
    }
]

export const doings = [
    {
        title: "Danhamz Lettings",
        info: "Helping find the right tenants for your properties",
        para: "Danhamz is an award-winning Letting Agent in Leeds that provides a complete 360° service for Landlords, helping them to maximise their investment. Our long established  Lettings Team manages over 2,000 happy student and professional tenants.",
        question: "Letting a property in Leeds?",
        desc: "Student, HMO and Professional Tenant Find",
        icon: "tick ka ixom",
    },
    {
        title: "Danhamz Sales",
        info: "Helping homeowners in Leeds to buy and sell their homes.",
        para: "Our fresh, flexible and friendly approach to sales means you get the customer service you deserve, while our top-notch marketing will make your property stand out from the crowd Danhamz’s friendly expert Estate Agents provide a seamless sales service from start to finish",
        question: "Selling your home?",
        desc: "Residential Sales",
    },
    {
        title: "Danhamz Investments",
        info: "Helping landlords invest in BTL property across Leeds.",
        para: "Danhamz Investments provides a turnkey solution for investors looking to take advantage of investing in Buy to Let property in Leeds. We’ll source the right property, spec and handle any works to optimise the investment, and then let and manage it for you, wherever in the world you are based.",
        question: "Read more about Danhamz Investments",
        desc: "Property Sourcing",
    },
    {
        title: "Danhamz Block Management",
        info: "Hands-on asset management tailored to you.",
        para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
        question: "Read more about Danhamz Block Management",
        desc: "Block Management",
    },
]

export const benefits = [
    {
        title: "The Cherry On Top",
        img: "images/benefits.png",
    }
]

export const ourTeam = [
    {
        title: "Meet the Team",
        info: "Everyone at Danhamz has an important part of play in making it such a brilliant place to work.",
        team: [
            {
                img: "images/emp1.jpg",
                name: "Abi",
                title: "Commercial Director",
            },
            {
                img: "images/emp3.jpg",
                name: "Christian Bale",
                title: "Model",
            },
            {
                img: "images/emp4.jpg",
                name: "Hannah White",
                title: "Human Resource Manager",
            },
            {
                img: "images/emp5.jpg",
                name: "Zao Ch",
                title: "Technical Recruiter",
            },
            {
                img: "images/emp6.jpg",
                name: "James Bond",
                title: "Martial Arts",
            },
            {
                img: "images/emp7.jpg",
                name: "Chris Bond",
                title: "Singer",
            },
            {
                img: "images/emp8.jpg",
                name: "Pitt Bull",
                title: "Musician",
            },
            {
                img: "images/emp9.jpg",
                name: "Aylis Al",
                title: "Tel correspond",
            },
            {
                img: "images/emp10.jpg",
                name: "Mia Zyan",
                title: "Research Engineer",
            },
            {
                img: "images/emp11.jpg",
                name: "Ray wong",
                title: "Software Engineer",
            },
        ]
    }
]

export const investInPeople = [
    {
        img: "images/invest.png",
        title: "Investors in People",
        info: "In our industry, it’s the people that really make the difference. That’s why we firmly believe in supporting our staff to be the very best they can be. We have worked very hard as a business to achieve the world-renowned Investors in People accreditation, and we are very proud of it too!Growing the best team is one of our core business goals and the award is recognition of our commitment to making Danhamz a great place to work. It acknowledges how we choose to run the business and our continual investment in the training, development and engagement of our highly valued team.",
    }
]

export const workAtDanhamz = [
    {
        title: "What’s it really like to work at Danhamz?",
        info: [
            {
                title: "Doing things differently",
                info: "There’s no place like home, and we are the Home of Property after all! At HOP, we like to do things a little bit differently. Enough of the suits and ties and awkward goodbyes, we are a family and together we laugh, celebrate and succeed.",
                title2: "We are always on the lookout for like-minded people to drive our business forward and see HOP continue to grow.",
                para: "Whether you have tonnes of property experience or are new to the industry, we are sure to have a role available for people who share our enthusiasm. We look for those who love dealing with people, thrive on solving problems and enjoy providing celebrity service. With thorough training, heaps of benefits and our commitment to Investors in People, HOP is a vibrant, exciting and positive place to work.",
                video: "https://www.youtube.com/watch?v=QcjR3sx94hg",
            },
        ]
    }
]

export const scope = [
    {
        video: "https://www.youtube.com/watch?v=QcjR3sx94hg",
        title: "Get the inside scoop",
        info: "According to our quarterly staff survey, 92% of staff members would recommend HOP as a great place to work! But don’t just take our word for it, we asked our staff about what it’s really like working at HOP.",

    }
]

export const staff = [
    {
                name: "Cris' Story",
                info: "During my time at HOP, I’ve seen the company grow substantially and it’s been fantastic to play a part in that. After originally starting as Branch Manager of our Pudsey Branch back in 2015, I stepped up to General Manager as the business expanded before becoming Commerical Director. I have worked in the property industry for a number of years. When I returned from travelling in my early 20s, I knew I wanted to be involved in this exciting industry and I didn’t mind starting at the bottom of the ladder. I accepted my first property job as an inventory clerk for a leading agency in Leeds City Centre and went from there! Before joining HOP, I was looking for a company that shared my excitement for new technology and entrepreneurialism. Happily, I found that here and I’ve been on an exciting journey ever since. You’d be hard pressed to find a better property company to work for than HOP. I love the culture, which is something which is very important to me. It’s always difficult to put into words but I think “forward-thinking, hard-working, trustworthy and open to change” sums it up. If this sounds like you, why not get in touch and send us a copy of your CV? We’re always on the lookout for talented people that share our values.",
                img: "images/emp5.jpg",
    }
]

export const roles = [
    {
        title: "Typical Roles at HOP",
        info: "We are always on the lookout for talented like-minded people to drive our business forward.  Individuals who have a passion for property, love dealing with people, thrive on solving problems and enjoy providing celebrity service. If you like what you see and think you have what it takes, have a look over some of the typical job positions we regularly recruit for.",
        role: [
            {
                title: "Lettings Administrator",
                info: "As a Lettings Administrator you will be the Branch linchpin in charge of ensuring tenants move into their homes happily and smoothly.",
                desc : "You will be a great organiser and communicator.",
            },
            {
                title: "Lettings or Sales Valuer",
                info: "As a Lettings or Sales Valuer you will be utilising your property knowledge to provide Landlords and Homeowners an accurate valuation for their property and achieving them the best outcome.",
                desc : "You'll demonstrate a real passion for property and indepth knowledge of the local market.",
            },
            {
                title: "Property Manager",
                info: "As a Property Manager you will be responsible for ensuring our Tenants and Landlords are happy whilst living in their home for the duration of their Tenancy.",
                desc : "You will have a good technical knowledge of property as well as great empathy and impeccable customer service skills.  ",
            },
            {
                title: "Sales or Lettings Negotiator",
                info: "You will be in charge of matching the right Tenants and Buyers to their perfect home, dealing with property viewings and negotiating offers.",
                desc : "You will be a great communicator and a whizz at organising yourself, as well as others",
            },
        ]
    }
]

export const recruitment = [
            {
                img: "images/emp9.jpg",
                title :" Application Review",
                info: "Each application is reviewed individually by the management team. Remember, it’s not always about the person with the most experience. We are looking for hard working people that share our passion and values."
            },
            // {
            //     img: "images/emp1.jpg",
            //     title :"Telephone Chat",
            //     info: "Once we have looked over your application, we will call you for a laid back, casual chat and to arrange an interview. There is no pressure at this stage, it’s just great way for us to get a better idea of what you’re looking for and to arrange a suitable time for us to meet.",
            // },
            // {
            //     img: "images/emp4.jpg",
            //     title: "Zoom Interview or First Stage Interview",
            //     info: "The first stage interview will be hosted either face to face or via Zoom. This allows us to put a face to a name and to find out a little bit more about you and your experience. There will be a mix of general interview questions and competency based questions. We will also do a quick fire round of 5 questions. There is no right or wrong answer here, this just helps us to get a feel for you and your personality. This is a great time for applicants to ask questions and learn as much as possible about"
            // },
            // {
            //     img: "images/emp6.jpg",
            //     title: "Second Interview",
            //     info: "Should you be successful following the first stage interview, we will invite you to our head office for a second stage interview. This interview will likely be with a manager and director and will involve further standard interview and competency based questions. We will also touch on your expectations and what you hope to achieve from this role. Our team here are all lovely so there is no need to feel nervous or under pressure. Remember to just be yourself!"
            // },
            // {
            //     img: "images/emp8.jpg",
            //     title: "Job Offer",
            //     info: "Congratulations! If you are a successful candidate, our team will discuss their thoughts and a proposal will be put together. You will then receive a call to wish you congratulations and offer you the job. A formal job offer will be sent to you by email and a start date will be discussed. Once all has been agreed a contract and any further details will be sent out to you."
            // },
]

export const history = [
    {
        title: "The History of HOP",
        info : "At HOP, we now have over 30 staff members working from one of our three branches, Pudsey, Horsforth and Leeds City Centre, and are excited to continue our growth across Leeds, and beyond, in all our departments. Opening our third branch and HOP hub (during the pandemic!) is typical of our commitment to growth. The launch of the new branch, and new Sales division, has been met with great success as we continue to expanding team and the kinds of services that we offer customers.",
        img: "images/main.jpg",
    }
]

export const interested = [
    {
        title: "Interested in joining the team?",
        info: "Visit our careers page to view all our current vacancies and apply directly. If you don’t see a current vacancy, but have a great attitude, dedication to excellent customer service and are keen to succeed, then send a covering letter to our management team and we’ll be in touch.",

    }
]

export const vacancies = [
    {
        title: "Current Vacancies",
        posts: [
            {
                title: "Property Manager",
                info: "At HOP, we now have over 30 staff members working from one of our three branches, Pudsey, Horsforth and Leeds City Centre, and are excited to continue our growth across Leeds, and beyond, in all our departments. Opening our third branch and HOP hub (during the pandemic!) is typical of our commitment to growth. The launch of the new branch, and new Sales division, has been met with great success as we continue to expanding team and the kinds of services that we offer customers."
            },
            {
                title: "Resident House Manager",
                info: "At HOP, we now have over 30 staff members working from one of our three branches, Pudsey, Horsforth and Leeds City Centre, and are excited to continue our growth across Leeds, and beyond, in all our departments. Opening our third branch and HOP hub (during the pandemic!) is typical of our commitment to growth. The launch of the new branch, and new Sales division, has been met with great success as we continue to expanding team and the kinds of services that we offer customers."
            },
        ]
    }
]