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
                path: '/knowledge-bank',
                title: 'Knowledge Bank',
            },
            {
                path: '/news',
                title: 'News',
            },
            {
                path: '/about',
                title: 'About',
            },
            {
                path: '/instant-valuation',
                title: 'Instant Valuation',
            },
            {
                path: '/contact',
                title: 'Contact us',
            },
            {
                path: '/report',
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
                        link: "/professionals",
                        icon: <Icon icon="healthicons:city-worker-outline" />,
                    },
                    {
                        title: "Students",
                        link: "/students",
                        icon: <Icon icon="mdi:account-student-outline" />,
                    },
                    {
                        title: "Landlords",
                        link: "/landlords",
                        icon: <Icon icon="healthicons:city-worker-outline" />,
                    },
                    {
                        title: "Let OR Sell",
                        link: "/let-or-sell",
                        icon: <Icon icon="pepicons-pencil:key" />,
                    },
                    {
                        title: "Refer A Friend",
                        link: "/refer-a-friend",
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
        // bg_color, title, info, img, title_color, info_color, button, btn_text, btn_bg, url, icon
        icon: <Icon icon="mdi:lightbulb-on-30" />,
        title: "All-inclusive student homes",
        img: "images/student.jpg",
        info: "Life as a student is busy and stressful enough, so choose an all-inclusive property from Danhamz to take all the hassle out of renting. We’ve got you covered with our DELUXE Bills Package. All Danhamz managed properties come with: Gas, Electric, Water, the best available 1GB Superfast Broadband, TV Licence and Contents Insurance (with £1,000 laptop cover). Don’t worry about things like rising energy prices or how to split the bills  – you simply pay the same thing every month and it’s all taken care of.  It’s a no brainer!",
        button: "Get Started",
        btn_bg: "bg-pink-300",
        url: "/",
        title_color: "text-blue-950",
        info_color: "text-gray-800",
        bg_color: "bg-white",
        btn_text: "text-white",


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
        img:"images/stu_img3.jpg",
        investment: "Investment",
        news: "Landlord News",
        date: '2017-12-3',
        title: "National Landlord News Summary Show and Description",
    },
    {
        img:"images/stu_img.png",
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
        button: "Read more about our IIP Accrediation",
        btn_bg: "bg-pink-300",
        url: "/",
        title_color: "text-blue-950",
        info_color: "text-gray-800",
        bg_color: "bg-gray-200",
        btn_text: "text-white",
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
                title :" Application Review",
                info: [
                   { 
                    img: "images/emp9.jpg",
                    para: "Each application is reviewed individually by the management team. Remember, it’s not always about the person with the most experience. We are looking for hard working people that share our passion and values."
                },
                ],
            },
            {
                title :"Telephone Chat",
                info: [
                    {
                img: "images/emp1.jpg",
                para: "Once we have looked over your application, we will call you for a laid back, casual chat and to arrange an interview. There is no pressure at this stage, it’s just great way for us to get a better idea of what you’re looking for and to arrange a suitable time for us to meet.",
            },
        ],
            },
            {
                title: "Zoom Interview or First Stage Interview",
                info: [
                    { 
                img: "images/emp4.jpg",
                para: "The first stage interview will be hosted either face to face or via Zoom. This allows us to put a face to a name and to find out a little bit more about you and your experience. There will be a mix of general interview questions and competency based questions. We will also do a quick fire round of 5 questions. There is no right or wrong answer here, this just helps us to get a feel for you and your personality. This is a great time for applicants to ask questions and learn as much as possible about"
            },
        ],
            },
            {
                title: "Second Interview",
                info: [
                    { 
                img: "images/emp6.jpg",
                para: "Should you be successful following the first stage interview, we will invite you to our head office for a second stage interview. This interview will likely be with a manager and director and will involve further standard interview and competency based questions. We will also touch on your expectations and what you hope to achieve from this role. Our team here are all lovely so there is no need to feel nervous or under pressure. Remember to just be yourself!"
            },
        ],
            },
            {
                title: "Job Offer",
                info: [
                    { 
                img: "images/emp8.jpg",
                para: "Congratulations! If you are a successful candidate, our team will discuss their thoughts and a proposal will be put together. You will then receive a call to wish you congratulations and offer you the job. A formal job offer will be sent to you by email and a start date will be discussed. Once all has been agreed a contract and any further details will be sent out to you."
            },
        ],
            },
]

export const history = [
    {
        title: "The History of HOP",
        info : "At HOP, we now have over 30 staff members working from one of our three branches, Pudsey, Horsforth and Leeds City Centre, and are excited to continue our growth across Leeds, and beyond, in all our departments. Opening our third branch and HOP hub (during the pandemic!) is typical of our commitment to growth. The launch of the new branch, and new Sales division, has been met with great success as we continue to expanding team and the kinds of services that we offer customers.",
        img: "images/main.jpg",
        button: "Read more about our story",
        btn_bg: "bg-pink-300",
        url: "/",
        title_color: "text-blue-950",
        info_color: "text-gray-800",
        bg_color: "bg-gray-200",
        btn_text: "text-white",
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
            title: "Property Manager",
            info: "At HOP, we now have over 30 staff members working from one of our three branches, Pudsey, Horsforth and Leeds City Centre, and are excited to continue our growth across Leeds, and beyond, in all our departments. Opening our third branch and HOP hub (during the pandemic!) is typical of our commitment to growth. The launch of the new branch, and new Sales division, has been met with great success as we continue to expanding team and the kinds of services that we offer customers."
        },
        {
            title: "Resident House Manager",
            info: "At HOP, we now have over 30 staff members working from one of our three branches, Pudsey, Horsforth and Leeds City Centre, and are excited to continue our growth across Leeds, and beyond, in all our departments. Opening our third branch and HOP hub (during the pandemic!) is typical of our commitment to growth. The launch of the new branch, and new Sales division, has been met with great success as we continue to expanding team and the kinds of services that we offer customers."
        },
]


// knowlewdge bank page
export const catagories = [
  {
    title: "Choose a Category...",
    option: [
      // Area Guides
      {
        url: "",
        title: "Choose a Category...",
      },
      {
        url: "",
        title: "Area Guides",
      },
      {
        url: "",
        title: "Downloads",
      },
      {
        url: "",
        title: "Fees",
      },
      {
        url: "",
        title: "General",
      },
      {
        url: "",
        title: "Landlord",
      },
      {
        url: "",
        title: "Professional",
      },
      {
        url: "",
        title: "Refubs",
      },
      {
        url: "",
        title: "Sales",
      },
      {
        url: "",
        title: "Students",
      },
    ]
  }
]

export const catagoryCard = [
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    bg: "bg-purple-950",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
 },
 {
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  bg: "bg-purple-950",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  bg: "bg-purple-950",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  bg: "bg-purple-950",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},  {
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},

]

export const newsCategory = [
    {
        title: "Choose a Category...",
        option: [
          // Area Guides
          {
            url: "",
            title: "Choose a Category...",
          },
          {
            url: "",
            title: "Block Management",
          },
          {
            url: "",
            title: "Company News",
          },
          {
            url: "",
            title: "Investments",
          },
          {
            url: "",
            title: "Landlord News",
          },
          {
            url: "",
            title: "Professionals",
          },
          {
            url: "",
            title: "Sales",
          },
          {
            url: "",
            title: "Sales & Letting Reports",
          },
          {
            url: "",
            title: "Students",
          },
        ]
      }
]
export const allNews= [
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
// knowlewdge bank page


// about page
export const about_award = [
    {
        // img, info, title, button, bg_color, url, title_color, info_color, btn_bg, btn_text
        title:"An Award-Winning Agent",
        info: "At HOP,  we offer Sales, Lettings, Block Management and Investments all under one roof, to deliver a completely holistic property service. Whether you are looking rent, buy, sell, invest or have an entire block of apartments to take care of, our friendly experts are here to help.",
        img: "images/awards.png",
        button: "Get in touch",
        bg_color: "bg-purple-500",
        url: "#",
        title_color: "text-white",
        info_color: "text-white",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",
    }
]

export const about_story = [
    {
        // bg_color, title, info, img, title_color, info_color, button, btn_text, btn_bg, url // 
        title: "Our Story",
        info: "In 2009, we started out as a ‘Let Leeds’ a pure lettings agency offering property management across Leeds. From the outset, our goal was to offer a more dynamic and innovative service to the tenants and landlords of Leeds. At the start, Let Leeds was the perfect name for us and we soon became the leading independent Letting Agency in Leeds. Over time, we expanded our offering and the name ‘Let Leeds’ no longer embodied everything we do. In 2020, we changed our name to HOP, which stands for the Home of Property.  As HOP, we bringing that same fresh and personal approach we’re renowned for across a wider range of property services to customers in Leeds and beyond. As HOP, we also now offer Sales and Block Management, and Investments alongside our award-winning Lettings service.0 Creating happy homes is still at the heart of our business. Whether it’s a property to rent, a home to buy, an investment to purchase, or ensuring the efficient management of a block, every move matters to HOP.",
        img: "images/coffee.jpg",
        bg_color: "bg-gray-200",
        title_color: "text-blue-950",
        info_color: "text-gray-900",
        button: "Learn More",
        btn_text: "text-white",
        btn_bg: "bg-pink-300",
    }
]

export const partnerBanner = [
    {
        img: "images/logo1.svg",
    },
    {
        img: "images/logo2.svg",
    },
    {
        img: "images/logo3.svg",
    },
    {
        img: "images/logo4.svg",
    },
    {
        img: "images/logo5.svg",
    },
]

export const letting_awards = [
    {
        img: "images/awards1.jpg",
        title: "2015: Best Single Northern Office – Gold",
        info: "The judges commented that “Let Leeds is positive and helpful and works to ethical and stringent standards. There is a real urge to demonstrate a dynamic, innovative approach and they are very vocal in wanting to shake the market up.”",
    },
    {
        img: "images/awards2.jpg",
        title: "2014: Northern Letting Agent of the Year - Silver",
        info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
    },
    {
        img: "images/awards3.jpg",
        title: "2013: Yorkshire & Humber ESTAS Award – Gold",
        info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
    },
    {
        img: "images/awards4.jpg",
        title: "2016: Best Small Northern Lettings Agency of the Year - Silver",
        info: "The judges commented that “Let Leeds is positive and helpful and works to ethical and stringent standards. There is a real urge to demonstrate a dynamic, innovative approach and they are very vocal in wanting to shake the market up.”",
    },
    {
        img: "images/awards5.jpg",
        title: "2012: Best Northern Single Letting Agency - Silver",
        info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
    },
    {
        img: "images/awards6.jpg",
        title: "2013: Sunday Times Letting Agency of the Year, Northern Office - Gold",
        info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
    },
    {
        img: "images/awards1.jpg",
        title: "2015: Best Single Northern Office – Gold",
        info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
    },
    {
        img: "images/awards4.jpg",
        title: "2014: Northern Letting Agent of the Year - Silver",
        info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
    },
    {
        img: "images/awards1.jpg",
        title: "2015: Best Single Northern Office – Gold",
        info: "The judges commented that “Let Leeds is positive and helpful and works to ethical and stringent standards. There is a real urge to demonstrate a dynamic, innovative approach and they are very vocal in wanting to shake the market up.”",
    },
    {
        img: "images/awards2.jpg",
        title: "2014: Northern Letting Agent of the Year - Silver",
        info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
    },
    {
        img: "images/awards3.jpg",
        title: "2013: Yorkshire & Humber ESTAS Award – Gold",
        info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
    },
]
// about page


// instant valuation page
export const instantValuation = [
    {
        img: "images/bg-valu.jpg",
        title: "Danhamz",
        online: "Free Instant Online Valuation",
        info: "Enter the property postcode below to receive your instant online valuation from HOP. One of our team will then be in touch to arrange a full market appraisal.",
        icon: <Icon icon="mdi:location" />,
        location: "Find Address",
        address: {
            type: "input",
        },
        choose: [
            {
                noOfbeds: 'How many bedrooms do you need?',
                quantity:[
                    {count: "Number Of Bedrooms", value: ""},
                    {count: "Studio", value: "Studio"},
                    {count: "1", value: "1"},
                    {count: "2", value: "2"},
                    {count: "3", value: "3"},
                    {count: "4", value: "4"},
                    {count: "5", value: "5"},
                    {count: "6", value: "6"},
                ],
            },
            {
                noOfbeds: 'Property Type',
                quantity:[
                    {count: "Property Type", value: ""},
                    {count: "Flat", value: "Flat"},
                    {count: "Terraced House", value: "Terraced House"},
                    {count: "Semi Detatched House", value: "Semi Detatched House"},
                    {count: "Detatched House", value: "Detatched House"},
                    {count: "Detatched Bunglow", value: "Detatched Bunglow"},
                    
                ],
            },             
        ],
        typeOfval: [
            {
                noOfbeds: 'Type of Valuation',
                quantity:[
                    {count: "Type of Valuation", value: ""},
                    {count: "Sales And Letting Valuation", value: "Sales And Letting Valuation"},
                    {count: "Sales Valuation", value: "Sales Valuation"},
                    {count: "Lettings Valuation", value: "Lettings Valuation"},
                    {count: "Detatched House", value: "Detatched House"},
                    {count: "Detatched Bunglow", value: "Detatched Bunglow"},
                ],
            }, 
        ]

    }
]

export const timings = [
    {
        title: "Leeds",
        info: [
            {
                icon: <Icon icon="iconoir:phone" />,
                title: "0311 0211 0990"
            },
            {
                icon: <Icon icon="mdi:location" />,
                title: "Coburg House, St Andrews Court, Leeds, LS3 1JY",
            }
        ],
        detail: [
            {
                title: 'Opening Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                    {
                        day: 'Friday',
                        time: "9:00am - 4:30pm",
                    },
                    {
                        day: 'Saturday',
                        time: "9:00am - 1:30pm",
                    }
                ]
            },
            {
                title: 'Viewing Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                    {
                        day: 'Friday',
                        time: "9:00am - 4:30pm",
                    },
                    {
                        day: 'Saturday',
                        time: "9:00am - 1:30pm",
                    }
                ]
            },
        ]
    },
]

export const timings2= [
    {
        title: "Horsforth",
        info: [
            {
                icon: <Icon icon="iconoir:phone" />,
                title: "0311 0211 0990"
            },
            {
                icon: <Icon icon="mdi:location" />,
                title: "Coburg House, St Andrews Court, Leeds, LS3 1JY",
            }
        ],
        detail: [
            {
                title: 'Opening Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                    {
                        day: 'Friday',
                        time: "9:00am - 4:30pm",
                    },
                    {
                        day: 'Saturday',
                        time: "9:00am - 1:30pm",
                    }
                ]
            },
            {
                title: 'Viewing Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                    {
                        day: 'Friday',
                        time: "9:00am - 4:30pm",
                    },
                    {
                        day: 'Saturday',
                        time: "9:00am - 1:30pm",
                    }
                ]
            },
        ]
    },
]

export const timings3 = [
    {
        title: "HOP Investments",
        info: [
            {
                icon: <Icon icon="iconoir:phone" />,
                title: "0311 0211 0990"
            },
            {
                icon: <Icon icon="mdi:location" />,
                title: "Coburg House, St Andrews Court, Leeds, LS3 1JY",
            }
        ],
        detail: [
            {
                title: 'Opening Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                ]
            },
        ]
    },
]

export const timings4 = [
    {
        title: "HOP Block Management",
        info: [
            {
                icon: <Icon icon="iconoir:phone" />,
                title: "0311 0211 0990"
            },
            {
                icon: <Icon icon="mdi:location" />,
                title: "Coburg House, St Andrews Court, Leeds, LS3 1JY",
            }
        ],
        detail: [
            {
                title: 'Opening Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                ]
            },
        ]
    }
]

export const getInTouch = [
    {
        title:"Get in touch",
        info: "If you’re looking to rent Leeds property, we’re dedicated to making moving simple, for all types of accommodation Leeds has to offer. As your local online Letting Agents Leeds, we’re dedicated to making moving simple; this includes online property search, personal viewings, online application, bond payment and credit checking with acceptance usually within 24 hours. HOP decided it was time Leeds experienced a fresh approach to lettings, offering simple and personal letting agent services for Leeds Student Accommodation and Professional Accommodation Leeds. Our belief is based on giving tenants the chance to move into their perfect home simply, quickly and affordably.",
        img: "images/Get_contact.gif",
    }
]
// instant valuation page

// report page
export const report_nav = [
    {
        title:"Need to report a repair?",
        info: "Use our 24 hour automated system.",
        img: "images/clock1.png",
        info2: "At HOP, we operate a fully automated online reporting system for property repairs and maintenance.",
        para: "To help us to help you as quickly as possible, HOP operates a fully automated online reporting system for repairs and maintenance that is available around the clock, 24 hours a day. Our online system enables us to diagnose your problems, log and diarise maintenance, fully monitor our contractors, and swiftly get the right contractors out to you. You can even upload photos of your problem to help our Contractors assess what they might need to bring with them to fix the issue. Until a request is logged online, we cannot send anyone out to deal with the issue. Once you have logged your issue, we’ll be in touch to discuss the next steps and, if required, arrange for a contractor to come out and see you.",
    }
]

export const report_article = [
    {
        title: "We are committed to providing a quick, trustworthy and reliable maintenance service.",
        info: "It’s really important that you use our online portal to log any issues you might have that involve maintenance and repairs, because we can only handle requests once they are logged in the system. Logging maintenance requests via our portal means that repairs and issues are likely to be dealt with more quickly than those that are reported by telephone or by email. All emergencies should also be reported in the portal too.",
        info2: "If you have an out of hours emergency, simply log your issue in the usual way and you will also find out of hours contact numbers to call. You can also just call our main office number on 0113 320 2000, which has a recorded message out of hours with numbers of our emergency maintenance contacts, The system allows us to communicate between the Landlord and the Contractor and means that we can diagnose your problems, log and diarise maintenance, get the right Contractors out to you quickly and also monitor the Contractors to ensure they do a good job.",
    },
    {
        title: "We promise to respond as swiftly as we can to your maintenance requests.",
        info: "We only use a handful of trusted contractors to do repairs and they prioritise the urgency of the work and will respond accordingly. Here’s an idea of the timeframes that they will aim to work to wherever possible:",
        img: "images/data-table.png",
        info2: "Please note: we cannot agree to the above timescales unless the maintenance request has been logged online first. If our contractors are unable to complete the job within the agreed timescales above, please report this to your Property Manager immediately. It may be that major works need quoting for and boiler replacements could take longer due to ordering parts.",
    }
]

export const report_section = [
            {
                title: "If there has been a break-in at the property, be sure to ring the police on 999.",
            },
            {
                title: "If you lose power or water, then please contact your utility provider in the first instance.",
            },
            {
                title: "If there has been a break-in at the property, be sure to ring the police on 999.",
            },
            {
                title: "If you smell gas, ring the National Grid on 0800 111 999.",
            },
            {
                title: "If you are calling out of hours and the office is closed, we have pre-recorded emergency details for you to follow. Just call the usual office number:  0113 320 2000",
            },
]

// report page


// login page

export const login = [
    {
        name: "email",
        label: "Email Address",
        placeholder: "Email address",
        type: "email",
        icon: <Icon icon="ic:round-email" />,
        rules : {
            required: 'Email is required',
            pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
            }
        }
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "password",
        icon: <Icon icon="ic:outline-lock" />,
        rules : {
            required: 'Password is required',
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: 'please enter a strong password',
            }
        }
    }
]

// login page

export const signup_content = [
    {
        title: "So what is PropertyFile?",
        info: "PropertyFile is an online platform designed to keep you informed & updated on your properties whether you’re selling, letting or renting.",
        content: [
            {
                img: "images/rent_img.png",
                title: "Landlords",
                info: "Managing your account has never been easier. Track payments, statements and invoices. Follow maintenance job progress. Find out key tenancy related information on your properties.",
            },
            {
                img: "images/key_img.png",
                title: "Tenants",
                info: "Managing your account has never been easier. Track payments, statements and invoices. Follow maintenance job progress. Find out key tenancy related information on your properties.",
            },
        ]
    }
]


export const download_app = [
    {
        title: "Download our tenant app",
        info: "Our tenant app keeps you notified throughout your tenancy with notifications for important events. Also report problems at your property and track their progress.",
        img: "images/timeline.jpg",
    }
]
// signup page

// professional-page
export const pr_nav = [
    {
        title:"Professional Letting Agents Leeds",
        info:"Let’s find a home for you to love.",
    }
]

export const pr_banner= [
    {
        title:"Welcome to the Home of Property",
        info: "At HOP, we have a growing portfolio of quality accommodation across Leeds including West Leeds, North Leeds and Leeds City Centre.  Take a look at our hand-picked properties and let’s find a home for you to love.",
        bg_color: "bg-purple-950",
        title_color: "text-white",
        info_color: "text-white",
    }
]

export const aBit = [
    {
        title:"A bit about HOP",
        info: "Creating happy homes is at the heart of our business and we love nothing more than matching professional tenants with their perfect homes. That means getting to know you, and your requirements, when you call. Whether you are looking for somewhere you can bring your fourlegged friend or somewhere near your favourite bars and shops, we’ll help you find a place that is right for you. Previously known as Let Leeds, HOP is a vibrant company growing in reputation, we decided it was time to set up a web-based letting agency, dedicated to Leeds, dedicated to quick and affordable lettings. In particular, we deal with West and North Leeds and can offer professional accommodation in: Leeds City Centre, Alwoodley, Armley, Bramley, Burley, Burley Park, Chapel Allerton, Farsley, Headingley, Hyde Park, Kirkstall, Meanwood, Pudsey, Rodley, Stanningley.",
        img: "images/pr_img1.jpg",
        button: "Property Search",
        url: "/property-search",
        bg_color: "bg-white",
        title_color: "text-purple-950",
        info_color: "text-gray-800",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
    },
]

export const families = [
    {
        title:"Rental for families",
        info: "At HOP,  we offer a growing portfolio of Family Houses and Accommodation across Leeds. If you are looking for somewhere with a garden to exercise little legs, or want to find a place close to the best schools in the area, we have a selection of hand-picked professional properties perfect for families",
        img: "images/pr_img2.jpg",
        button: "Find out more",
        url: "/find-out-more",
        bg_color: "bg-white",
        title_color: "text-purple-950",
        info_color: "text-gray-800",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",

    },
]

export const young_pr = [
    {
        title:"Rental for Young Professionals",
        info: "Creating happy homes is at the heart of our business and we love nothing more than matching professional tenants with their perfect homes. That means getting to know you, and your requirements, when you call. Whether you are looking for somewhere you can bring your fourlegged friend or somewhere near your favourite bars and shops, we’ll help you find a place that is right for you. Previously known as Let Leeds, HOP is a vibrant company growing in reputation, we decided it was time to set up a web-based letting agency, dedicated to Leeds, dedicated to quick and affordable lettings. In particular, we deal with West and North Leeds and can offer professional accommodation in: Leeds City Centre, Alwoodley, Armley, Bramley, Burley, Burley Park, Chapel Allerton, Farsley, Headingley, Hyde Park, Kirkstall, Meanwood, Pudsey, Rodley, Stanningley.",
        img: "images/pr_img9.jpg",
        button: "Property Search",
        url: "/property-search",
        bg_color: "bg-gray-300",
        title_color: "text-purple-950",
        info_color: "text-gray-800",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",
    },
]

export const area_guide = [
    {
        title:"Area Guides",
        info: "To help you select the area that you want to live in, we have put together some area guides detailing what each area has to offer.",
        img: "images/pr_img3.jpg",
        button: "View our Area Guides",
        url: "/property-search",
        bg_color: "bg-[#6665a9]",
        title_color: "text-white",
        info_color: "text-white",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",
    },
]

export const repair_report = [
    {
        title:"Report a Repair",
        info: "Once you’re in the property, you can contact us if you ever have any problems with your property and if you need to report a repair, or have a maintenance issue, you can simply log a request on our specialist online portal.You can report a maintenance issue at any time using our round-the-clock repair portal. We promise to get on the case within 24 hours. Sometimes we may need to conduct major repair works which may take some time, but usually we aim to get minor issues resolved within 48 hours.",
        img: "images/phone1.jpg",
        button: "Report a Repair",
        url: "/report-a-repair",
        bg_color: "bg-gray-200",
        title_color: "text-purple-950",
        info_color: "text-gray-800",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",
    },
]

export const simple_process = [
    {
        title :" Step 1: Look at our properties",
        info: [
           { 
            img: "images/pr_img4.jpg",
            para: "Find properties that fit your criteria using our Property Search. You can also keep an eye on our social media feeds and you’ll find all our properties listed on the major property portals including Rightmove and OnTheMarket."
        },
        ],
    },
    {
        title :"Step 2: Contact us",
        info: [
            {
        img: "images/pr_img5.jpg",
        para: "All of our properties have Virtual Tours so you can explore them online. Once you have found a property you like the look of, contact us to discuss the property and your requirements in more detail and we can book you an in-person viewing.  Simply call us or submitting a ‘Book Viewing’ request, and one of our friendly team will get back to you.",
    },
],
    },
    {
        title: "Step 3: Online Application",
        info: [
            { 
        img: "images/pr_img6.jpg",
        para: "Once you’ve chosen your perfect property, our Lettings Administrator will take you through the application process step by step. Much of the process can be completely very simply online."
    },
],
    },
    {
        title: "Step 4: Holding Deposit",
        info: [
            { 
        img: "images/pr_img7.jpg",
        para: "To reserve your favourite property for 7 days while the Application Process is in progress, we take a Holding Deposit, which will go towards the full deposit  once the Tenancy Agreement is completed."
    },
],
    },
    {
        title: "Step 5: Tenancy Agreement",
        info: [
            { 
        img: "images/pr_img8.jpg",
        para: "Congratulations! If you are a successful candidate, our team will discuss their thoughts and a proposal will be put together. You will then receive a call to wish you congratulations and offer you the job. A formal job offer will be sent to you by email and a start date will be discussed. Once all has been agreed a contract and any further details will be sent out to you."
    },
],
    },
]

export const professionalCard = [
    {
      title: "PROFESSIONAL, STUDENT",
      featured: "Featured",
      bg: "bg-purple-950",
      title2: "Tenant Handbook 2023",
      info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
   },
   {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    bg: "bg-purple-950",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    bg: "bg-purple-950",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    bg: "bg-purple-950",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  ]

  export const tenantNews= [
    {
        img:"images/tenant_news1.jpg",
        investment: "Investment",
        news: "Landlord News",
        date: '2017-12-3',
        title: "National Landlord News Summary Show and Description",
    },
    {
        img:"images/tenant_news2.jpg",
        news: "Company News",
        investment: "Investment",
        date: '2017-12-3',
        title: "Danhamz latest News Summary Show and Description",
    },
    {
        img:"images/tenant_news3.jpg",
        investment: "Investment",
        news: "Company News",
        date: '2017-12-3',
        title: "London we are coming!",
    },
]
// professional-page

// student-page
export const stu_nav = [
    {
        title:"All-inclusive student accommodation in Leeds.",
        img:"images/stu_img.png",
        button: "Join The Danhamz List for Property Alerts",
        btn_bg:"bg-purple-950",
        btn_color:"text-white",
        title_color:"text-purple-950",
        btn_text: "text-white"
    }
]

export const student_search = [
    {
        img: "images/stu_img2.jpg",
        title: "Start your search here",
        info: "If you are looking for a place of your own, a room in a houseshare or somewhere for you and all your housemates to call home, we can help. Pop in your criteria below to start the search for your all-inclusive student property with HOP or hit ‘Advanced Search’ for even more options.",
    }
]

export const stu_accommodation = [
    {
        title: "All-inclusive Student Accommodation",
        icon: <Icon icon="mdi:lightbulb-on-outline" />,
        info: "Life as a student is busy and stressful enough, so choose an all-inclusive property from HOP to take all the hassle out of renting. Fancy an all-inclusive tenancy? We’ve got you covered! All HOP 3+ bedroom managed properties come with our ESSENTIALS bills package included: Gas, Electric, Water & Broadband. For a more hassle-free way to rent, our clever bills package means that you simply pay the same thing every month and it’s all taken care of.  It’s a no brainer!",
        img: "images/stu_img3.jpg",
        title_color: "text-purple-950",
        info_color: "text-gray-900",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",
        button:"Find out more"
    }
]

export const quick_search = [
    {title: "View all 1 beds", url: "/",  value: "1 bed"},
    {title: "View all 2 beds", url: "/",  value: "2 bed"},
    {title: "View all 3 beds", url: "/",  value: "3 bed"},
    {title: "View all 4 beds", url: "/",  value: "4 bed"},
    {title: "View all 5 beds", url: "/",  value: "5 bed"},
    {title: "View all 6 beds", url: "/",  value: "6 bed"},
    {title: "View all 7 beds", url: "/",  value: "7 bed"},
    {title: "View all 7+ beds", url: "/",  value: "8 bed"},
    {title: "View all", url: "/",  value: "9 bed"},
    {title: "Advanced Property Search", url: "/",  value: "10 bed"},
]

export const smart_rent = [
    {
        video: "https://youtu.be/B_JVGLIGmuw",
        mainTitle: "A smarter way to rent",
        infos: [
            {
                title :"Amazing places",
                info: "From 1 bed apartments to 10 bedroom shared houses in all the most popular student areas in Leeds, you’ll have plenty of choice when it comes to finding your next student home.",
            
            },
            {
                title:"Online viewings & applications",
                info:"Your next home is just a scroll away! Browse our selection of handpicked homes in our property search and take a Virtual Tour of your favourites. You can also follow us on social for the latest listings and complete your application online once you’ve found ‘the one’."
            },
            {
                title: "All-inclusive",
                info:"All 3+ bedroom HOP managed properties come with bills included, so all your essentials are covered in one simple payment with your rent. Our ESSENTIALS bills package covers your Gas, Electric, Water & the all-important Broadband.",
            }
        ]
        
    }
]

export const property_loc = [
    {title: "Properties in Headlingly", url: "/Headlingly",  value: "Headlingly"},
    {title: "Properties in Hyde Park", url: "/Park",  value: "Park"},
    {title: "Properties in Woodhouse", url: "/Woodhouse",  value: "Woodhouse"},
    {title: "Properties in Burley", url: "/Burley",  value: "Burley"},
    {title: "Properties in All Student Properties", url: "/student-properties",  value: "student-properties"},
]

export const danhamzList = [
    {
        img: "images/stu_img4.png",
        title: "Join The Danhamz List",
        info: "Be the first in line for the best properties for 2024 by signing up to our student mailing list. There are loads of ways to find your new home with HOP. Scroll through our social media channels, browse our website or take a look around on the major property portals and you’ll find our listings there too. You can also get properties right to your inbox by joining our HOP List mailing list and we’ll send you our ‘Hot Properties’ emails",
        title_color: "text-purple-950",
        info_color: "text-gray-900",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",
        button:"Join the list for property alerts",
        url: "/"
    }
]

export const reasons = [
    {
        title: "All-inclusive homes",
        number:1,
        info: "All our HOP student properties can be all-inclusive, which means you don’t have to worry about bills. We take care of it all for you so you can enjoy a stress-free student renting experience.",
    },
    {
        title: "Essential Bills Covered",
        number:2,
        info: "We’ve got you covered. with 3-bedrooms or more, then our ESSENTIALS Bills Package is included as standard. That’s Gas, Electric, Water & Broadband – all sorted with your rent!",
    },
    {
        title: "No Fees",
        number:3,
        info: "There are no signing fees to pay when you rent with us.",
    },
    {
        title: "We know the market",
        number:4,
        info: "We know the student market inside out and have been doing this for well over a decade, so you know you are in safe hands. Plus we are Unipol Code Accredited too!",
    },
    {
        title: "24/7 reporting",
        number:5,
        info: "If you need anything once you are in the property, we have a handy online repair portal for 24/7 reporting.",
    },
]

export const abit_about = [
    {
        title: "A bit about HOP",
        info: "We’re old hands when it comes to matching students to their ultimate accommodation. First as Let Leeds and now as HOP, we have been leading the way in lettings since 2009. Nothing gives us more of a fuzzy feeling inside than helping students find their perfect match. From the get-go, we have been determined to provide an innovative service for young people who are searching for student accommodation in Leeds. Our motto is ‘Every Move Matters’ and it’s an ethos that captures how we feel about everything we do here at HOP.  From start to finish, we aim to offer every student a truly top notch and personal experience. We’ve even won a number of awards for our customer service and have received heaps of positive reviews on Feefo and Google from happy landlords and tenants. We could let that kind of thing go to our collective heads, but that’s not the way we operate at HOP. In our minds, if customers are happier with us than they have been with any other agency, that just means we’re doing our job. Our friendly team – many of whom were once students themselves – are here to help you find the home that is right for you. Rest assured that we will go the extra mile to find, not just any available rental, but the perfect location that matches your budget, academic needs and safety considerations.",
        img: 'images/stu_img5.png',
        title_color: "text-purple-950",
        info_color: "text-gray-900",
        bg_color: "bg-white",
       
    }
]

export const our_process = [
    {
      title: "Step 1: Start the search",
      info: [
        {
          img: "images/stu_img6.png",
          para: "Search our available student accommodation. Whether you’d prefer to browse our website, check out Rightmove or scroll through our social channels, the first step in finding your perfect student home is to take a look at our properties and see what takes your fancy. Click here for our property search or we can also send our hottest picks straight to your inbox, just register your details here.",
        },
      ],
    },
    {
      title: "Step 2: Call us to arrange a viewing",
      info: [
        {
          img: "images/stu_img7.png",
          para: "Call us to arrange a viewing Give us a call to book in a viewing and we can match you to other suitable properties at the same time. All our staff are super friendly and will take you through the options available to you, just give the Leeds Team a call on 0113 322 9324. We’ve invested in high tech cameras and virtual tour technology so you can fully explore the property online without even leaving home.",
        },
      ],
    },
    {
      title: "Step 3: Viewings",
      info: [
        {
          img: "images/stu_img8.png",
          para: "Viewings All our properties have virtual tours, meaning you are free to explore your potential new homes from the comfort of your sofa! If you would prefer to view in person, give us a call or click ‘book a viewing’ on your fave property to arrange an appointment and we’ll book you in. Our viewings take place with our knowledgeable student property experts who will meet you at the property, show you round and can give you the low-down on all you need to know.",
        },
      ],
    },
    {
      title: "Step 4: Reserve the property",
      info: [
        {
          img: "images/stu_img9.png",
          para: "Reserve the propertyFallen in love with your dream student home?We’ll fill out a Pre-Tenancy Agreement with you, which details key information regarding the Tenancy.  In addition, we’ll take a Holding Deposit to take it off the market, this is usually one week’s rent.You will then have 15 days to complete your application or it goes back on the market! Holding Deposit will go towards your Deposit and transferred to a deposit account upon signing the Tenancy Agreement.",
        },
      ],
    },
    {
      title: "Step 5: Complete your application",
      info: [
        {
          img: "images/stu_img10.png",
          para: "Complete your application Completing your application is easy using the HOP Online Application. Fill in the details and submit the required documents – all electronically! You can even do it from your phone. These details will form part of the final Tenancy Agreement that you and your housemates will need to sign at the end of the process.",
        },
      ],
    },
    {
      title: "Step 6: Guarantor paperwork",
      info: [
        {
          img: "images/stu_img11.png",
          para: "Guarantor paperwork As a Student you will require a Guarantor who will guarantee that you will pay your rent for the duration of the Tenancy. If for some reason, you don’t pay your rent, then the Guarantor will be liable for it. A Guarantor is usually a parent or guardian earning over £25,000 p/a. As you complete your HOP Online Application with their details, the Guarantor will be emailed a link to fill in their information too and upload the relevant documents online. The Guarantor will then be referenced and credit checked as part of the application process.",
        },
      ],
    },
    {
      title: "Step 7: The property is yours!",
      info: [
        {
          img: "images/stu_img12.png",
          para: "The property is yours! Once the application, paperwork and referencing is complete, the final Tenancy Agreement will be sent electronically to all parties to sign. Once signed, we’ll check everything is as it should be, countersign it, and the balance of the Deposit becomes due. The final, signed Tenancy Agreement will be issued with prescribed information automatically, once completed. You’ll then need to pay the remainder of your Deposit. The Holding Deposit carries forward to become part of your deposit, and the whole thing is held by the TDS (Tenancy Deposit Scheme), which holds it securely throughout your Tenancy.",
        },
      ],
    },
    {
      title: "Step 8: Pay first month's rent",
      info: [
        {
          img: "images/stu_img13.jpg",
          para: "Pay first month’s rent As it will state in your Tenancy Agreement, 14 days before your Tenancy start date, you’ll need to pay your first rent instalment and arrange key collection dates with the HOP team. It’s important you set up a standing order to pay the initial rent payment by this deadline, as we can’t release keys until these funds are cleared. On a joint tenancy, where you are sharing with housemates, all parties will need to have paid their first rent instalment in full before the keys can be released to anyone in the group.",
        },
      ],
    },
    {
      title: "Step 9: Move in a day!",
      info: [
        {
          img: "images/stu_img14.jpg",
          para: "Move in day! Book an appointment with the team to collect your keys and Tenancy Pack either on, or a few days after, your Tenancy start date (usually around the 1st July for students). Don’t forget that you will need to bring your passport/ID with you so we can release the keys. Then you can move in to your perfect pad and set about making it your new home!",
        },
      ],
    },
  ];

  export const thingsToremember = [
    {
        title: "Things to Remember on Move-In Day",
        info: "When it’s time to move into your student accommodation in Leeds, of course you’ll be keen to start experiencing student life in Leeds and really see what the city has to offer. However, there are a few things you have to consider on move-in da Firstly, you’ll need to collect your keys from the HOP office. Remember to bring your ID with you as we’ll be giving all sets of keys to the nominated tenant that comes into the office. Each tenant should have their own set, and we recommend testing each of these You’ll then be given a photographic inventory – listing everything in the property and showing the condition it’s in. Please take this seriously. You have the option to respond if anything in the inventory isn’t accurate Our last tip is to test your appliances. You should ensure this is done as soon as possible as, after 14 days, you will be liable for anything that is faulty",
        img: "images/stu_img13.jpg",
        title_color: "text-purple-950",
        info_color: "text-gray-800",
        bg_color: "bg-gray-200",
    }
  ]
  
  export const Remembering  = [
    {
        title: "Remembering Your Responsibilities",
        info: "We know it’s an exciting time to move out of student halls, but as one of the prime Leeds student letting agents, we feel we should remind you that you do have some responsibilities when it comes to looking after your rental property during your time at university.",
        img: "images/stu_img14.jpg",
        title_color: "text-purple-950",
        info_color: "text-gray-800",
        bg_color: "bg-white",
        lists: [
            {
                title: "Bleeding radiators to ensure they are clear of air and will actually heat your home",
            },
            {
                title: "Keeping sinks clear of silt, hair and anything else that may cause a blockage",
            },
            {
                title: "Replacing light bulb",
            },
            {
                title: "Regularly testing smoke alarms and replacing batteries as needed",
            },
            {
                title: "Keeping external drains free of debris – so surface water can flow",
            },
            {
                title: "Keeping rooms well ventilated (windows open) – especially bathrooms",
            }
        ]
    }
  ]

  export const propertyClean  = [
    {
        title: "Keeping Your Property Clean",
        info: "We know it’s an exciting time to move out of student halls, but as one of the prime Leeds student letting agents, we feel What you do in your own time is up to you, but it’s vital that you keep your student let clean! Here are a few things we suggest you do to keep it in good condition, and ensure you get your full deposit back:",
        img: "images/stu_img15.jpg",
        title_color: "text-purple-950",
        info_color: "text-gray-800",
        bg_color: "bg-white",
        lists: [
            {
                title: "Hoover up on a regular basis and wipe down skirting boards – they get dusty!",
            },
            {
                title: "Clean the cooker after use",
            },
            {
                title: "Don’t leave out-of-date food to rot in your fridge",
            },
            {
                title: "Keep bathrooms clean to prevent mould",
            },
            {
                title: "Act quickly if you spill anything on carpets or upholstery",
            },
        ]
    }
  ]

  export const leedsGuide = [
    {
        title: "Leeds Student Area Guides ",
        info: "From Headingley to Burley, Woodhouse to Hyde Park, Leeds City Centre and beyond, we provide an award-winning, personal service and a range of first class student accommodation. If you’re looking for student houses in Leeds,  if you are new to Leeds, or perhaps you’re just considering moving to a new corner of our fair city, why not check out our Student Area Guides for a little inspiration on which area would suit you best. Whether you want to be able to roll out of bed and make it to lectures in 5 minutes, prefer a leafier suburb, or budget is your number one priority, Leeds has a number of key student areas to investigate in order to find the student house that is right for you. Leeds is huge. If it’s your first time living here, or you want to explore something different from your current stomping ground, it can be hard to know where to start.  We’ve put together these handy area guides so you can get to know a bit more about the top student areas such as Hyde Park, Headingley, Burley and Kirksta ",
        img: "images/stu_img16.png",
        title_color: "text-white",
        info_color: "text-white",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        button:"Leeds Student Area Guide",
        url: "/property-search",
        bg_color: "bg-purple-950",
    }
]

export const testimonial = [
    {
        img: "images/stu_logos0.png",
        title: "Report a Repair",
        url: "/report-a-repair",
    },
    {
        img: "images/stu_logos1.png",
        title: "Tenant Book 2023",
        url: "/tenant-book-2023",
    },
    {
        img: "images/stu_logos2.png",
        title: "Tenant Book 2022",
        url: "/tenant-book-2022",
    },
    {
        img: "images/stu_logos3.png",
        title: "Students FAQs",
        url: "/students-faqs",
    },
    {
        img: "images/stu_logos4.png",
        title: "Knowledge Bank",
        url: "/knowledge-bank",
    },
    {
        img: "images/stu_logos5.png",
        title: "Student Insurance",
        url: "/student-insurance",
    },
]

export const downloadBook = [
    {
        title: "Download the HOP Tenant Handbook",
        info: "In this handbook we’ve covered the basics about the property, paying your rent, what your responsibilities are as a Tenant and how to report things like maintenance issues. Hopefully we’ve covered most of what you need to know, but if you’ve got any further questions just give the Leeds Team a call.",
        img: "images/stu_img17.jpg",
        title_color: "text-purple-950",
        info_color: "text-gray-800",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",
        button:"Studenet Tenant Book 2023",
        url: "/property-search",
        bg_color: "bg-gray-200",
    }
]
export const rep_report = [
    {
        title: "Report a Repair        ",
        info: "Once you’re in the property, you can contact us if you ever have any problems. You can report a maintenance issue at any time, and we promise to get on the case within 24 hours. Sometimes we may need to conduct major repair works which may take some time, but usually we aim to get minor issues resolved within 48 hours.",
        img: "images/stu_logos0.png",
        title_color: "text-purple-950",
        info_color: "text-gray-800",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",
        button:"Leeds Student Area Guide",
        url: "/property-search",
        bg_color: "bg-white",
    }
]

// student-page

// landlord page
export const landlord_nav = [
    {
        title:"landlords",
        img:"images/landLord_nav.jpg",
        button: "Free valuation",
        btn_bg:"bg-pink-400",
        btn_color:"text-white",
        title_color:"text-purple-950",
        btn_text: "text-white"
    }
]

export const letProperty = [
    {
        title: "Guaranteed Rent",
        info: "With our Rent Guarantee service, you’ll not be out of pocket should the unexpected happen. Our Rent Guarantee service comes with nil excess, rent arrears paid for up to 15 months and up to 100,000 legal expenses cover.        ",
        para: "Danhamz is an award-winning Letting Agent in Leeds that provides a complete 360° service for Landlords, helping them to maximise their investment. Our long established  Lettings Team manages over 2,000 happy student and professional tenants.",
        question: "",
        desc: "Enjoy extra peace of mind with our extensive rent protection and legal expenses cover",
    },
    {
        title: "Maximise your investment",
        info: "Our fully managed service aims to maximise your property portfolio.        ",
        para: "Our fresh, flexible and friendly approach to sales means you get the customer service you deserve, while our top-notch marketing will make your property stand out from the crowd Danhamz’s friendly expert Estate Agents provide a seamless sales service from start to finish",
        question: "",
        desc: "Minimise void periods by having new tenants ready to move in at the end of a tenancy.        ",
    },
    {
        title: "Local Expertise        ",
        info: "With over a decade of experience in the Leeds rental market, our team are highly adept in letting and managing all kind of properties.        ",
        para: "Danhamz Investments provides a turnkey solution for investors looking to take advantage of investing in Buy to Let property in Leeds. We’ll source the right property, spec and handle any works to optimise the investment, and then let and manage it for you, wherever in the world you are based.",
        // question: "We can market your property to savvy students and professionals in Leeds        ",
        desc: "Property Sourcing",
    },
    {
        title: "Services to suit you",
        info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.        ",
        para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
        // question: "Read more about Danhamz Block Management",
        desc: "Full Property Management        ",
    },
]

export const findTenant = [
    {
        img: "images/landlord_1.jpg",
        title: "Finding the Right Tenant        ",
        info: "Finding the right tenants who pay their rent on time, and take care of the property they have rented, is of the upmost importance for us and for our Landlords too Happy tenants, mean happy homes and that makes for a happy Landlord and Agent too! Reliable tenants are at the heart of a successful lettings business as well as warm relationship between the landlord and the agent. That’s why we deliver a great, personal service to our tenants, and take careful measures to find the right Tenant for all our Landlord’s propertie Tenant Retention – We look after your Tenants, ensuring your property is occupi Tenant Vetting – Credit checked and referenced tenants that will look after your proper Tenant Deposits – We safeguard the deposit with the D Extensive knowledge – We know the Leeds lettings market inside o Professional or Student Let – We can recommend the best rental strategy for your proper Good communication – Your dedicated Property Manager is on hand for any queri Flexible Services – To suit your lifestyle and experience lev Negotiable Fees – To suit your budget",
        title_color: "text-purple-950",
        info_color: "text-gray-900",
        bg_color : "bg-white"
    }
]
export const makingYourProperty = [
    {
        img: "images/landlord_2.jpg",
        title: "Marketing your property",
        info: "Finding the right tenants who pay their rent on time, and take care of the property they have rented, is of the upmost importance for us and for our Landlords too Happy tenants, mean happy homes and that makes for a happy Landlord and Agent too! Reliable tenants are at the heart of a successful lettings business as well as warm relationship between the landlord and the agent. That’s why we deliver a great, personal service to our tenants, and take careful measures to find the right Tenant for all our Landlord’s propertie Tenant Retention – We look after your Tenants, ensuring your property is occupi Tenant Vetting – Credit checked and referenced tenants that will look after your proper Tenant Deposits – We safeguard the deposit with the D Extensive knowledge – We know the Leeds lettings market inside o Professional or Student Let – We can recommend the best rental strategy for your proper Good communication – Your dedicated Property Manager is on hand for any queri Flexible Services – To suit your lifestyle and experience lev Negotiable Fees – To suit your budget",
        title_color: "text-purple-950",
        info_color: "text-gray-900",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",
        button:"Find out more",
        url: "/",
        bg_color : "bg-gray-200"

    }
]

export const land_testimonial = [
    {
        img: "images/landlord_tes1.png",
        title: "Property Management",
        url: "/report-a-repair",
    },
    {
        img: "images/landlord_tes2.jpg",
        title: "Landlord Supplies",
        url: "/tenant-book-2023",
    },
    {
        img: "images/landlord_tes3.jpg",
        title: "Refubs",
        url: "/tenant-book-2022",
    },
    {
        img: "images/lanldlord_tes4.jpg",
        title: "Investment Sales",
        url: "/students-faqs",
    },
    {
        img: "images/landlord_tes5.jpg",
        title: "Our Fees",
        url: "/knowledge-bank",
    },
    {
        img: "images/landlord_tes6.png",
        title: "Landlord FAQs",
        url: "/student-insurance",
    },
]

export const rentalValue = [
    {
        img: "images/phone_logo.gif",
        title: "What’s your rental value?        ",
        info: "If you have a property available to let, complete the Market Appraisal form below to book your free consultation with one of our property experts. We offer virtual and face-to-face appointments for your convenience and will cover the following topics during your appointment: Hints & tips on how to make the most of your investmen Advice on the latest industry requirements & regulation Recommendations on marketing strategie A market valuation and recommended rental valu Complete the form and our valuation experts will get in touch to arrange an appointment.",
        info_color: "text-white",
        title_color: "text-white",
        btn_bg: "bg-white",
        btn_text: "text-gray-800",
        button:"Free valuation",
        url: "/",
        bg_color : "bg-[#3a1955]"

    }
]

export const landlordServices = [
    {
        img: "images/landlord_3.png",
        title: "Our Landlord Services        ",
        info: "No matter what level service you require from us, or the kind of property that you own, there is always no fee to pay until we find you a tenant. We offer a range of services tailored to your individual requirements and depending on the kind of property or properties that you own. Whether you have a professional/family property to let or an HMO/student property in your portfolio, we can provide the level of service that suits you best.",
        info_color: "text-gray-800",
        title_color: "text-purple-950",
        btn_bg: "bg-purple-950",
        btn_text: "text-white",
        button:"Read about our landlord services",
        url: "/",
        bg_color : "bg-white"

    }
]
// landlord page

// refer a friend
export const refer_nav = [
    {
        title:"Refer a Friend to danhamz for a thank you treat.",
        img:"images/refer.gif",
        title_color:"text-white",
    }
]

export const referalScheme = [
    {
        img: "images/refer_1.jpg",
        title: "Landlord Referral Scheme ",
        info: "We believe it’s important to say “Please” and “Thank You” so we’ve launched a new Refer a Friend Scheme to reward any of our existing Landlords who successfully recommends a new Managed Landlord to us. If you have a friend looking for someone to manage their property, why not refer them to HOP As a thank you, we will send you a £100 John Lewis voucher, once we let their property on one of our Fully Managed Services Simply email us a message with their contact details so we can drop them a line Alternatively, they are welcome to call our Management Team at any time direct on 0113 320 2100.  Just remember to let them know that you have referred them to  ",
        info_color: "text-gray-800",
        title_color: "text-purple-950",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        button:"Email us",
        url: "/",
        bg_color : "bg-white"

    }
]

export const terms = [
    '1. One £100 John Lewis voucher per new Managed Landlord',
    '2. Scheme starts 4th May 2022    ',
    '3. Existing HOP Landlords can opt to change for a cash credit on your account of £100    ',
    '4. The Referrer must be an existing HOP customer    ',
    '5. For Landlords: Voucher paid 2 weeks after your friend’s property is let on HOP’s Standard Managed or Premium Managed Service, prior to 30th December 2023    ',
    '6. Any claim for referral vouchers must be made prior to 31st January 2024    ',
    '7. If your friend has already placed an order through any other sales channel, the Refer a Friend Credit will not be applicable    ',
    '8. HOP reserves the right to remove or clawback vouchers if fraud or abuse is suspected    ',
    '9. If you pass your friend’s details to HOP, you confirm that you have your friend’s permission to do so.    ',
    '10. HOP reserves the right to withdraw this offer at any time.',

]
// refer a friend

// let or sell

export const let_nav = [
    {
        title:"Letting or selling – which is right for you?",
        img:"images/let_1.jpg",
        title_color:"text-purple-950",
        button: "Instant Rental Valuation",
        url: "/",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
    }
]

export const start = [
    {
        title:"Where Do I Start?        ",
        img:"images/let_2.png",
        title_color:"text-purple-950",
        info: "Being a Landlord doesn’t need to be stressful. If you partner with HOP, we take care of everything for you: from marketing your property and finding the best tenants, to ongoing management and maintenance, right through to the end of the Tenanc It can be hard to know where to begin, but our friendly team is full of advice, expertise and guidance. We’ll ensure that your property is up to scratch and in line with current regulations and work with you to devise a strategy that will make the most of your investment. Call us today on 0113 320 2100 for a friendly chat about your property and your options.",
        info_color: "text-gray-800",
        bg_color: 'bg-white',
    }
]
// let or sell

// property search page

export const rentContainer1 = [
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
                    { title: "No Preferences", value: "no Preferences"}, 
                    { title: "Less than $1000", value: "Less than $1000"},
                    { title: "$1000 - $2000", value: "$1000 - $2000"},
                    { title: "$2000 - $3000", value: "$2000 - $3000" }
                ]
            },
            {
                title: "Location (tick all that apply)",
                type: "checkbox",
                options: [
                    { title: "No Preferences", value: "no Preferences"}, 
                    {  title: "Armley", value: "Armley" },
                    {  title: "Beeston", value: "Beeston" },
                    {  title: "Bradford", value: "Bradford" },
                    {  title: "Bramley", value: "Bramley" },
                    {  title: "City Center", value: "City Center" },
                    {  title: "East End Park", value: "East End Park" },
                    {  title: "Farsley", value: "Farsley" },
                    {  title: "Gildersome", value: "Gildersome" },
                    {  title: "Horsforth", value: "Horsforth" },
                    {  title: "Leeds", value: "Leeds" },
                    {  title: "Meanwood", value: "Meanwood" },
                    {  title: "Morley", value: "Morley" },
                    {  title: "Northgate House", value: "Northgate House" },
                    {  title: "Pudsey", value: "Pudsey" },
                    {  title: "Stanningley", value: "Stanningley" },
                    {  title: "Wortley", value: "Wortley" },
                    {  title: "Wyke", value: "Wyke" },
                ]
            },
            {
                title: "How many bathrooms do you need?",
                type: "select",
                options: [
                    {title: "No Minimum", value: "No Minimum"}, 
                    {title: "1", value: "1"},
                    {title: "2", value: "2"},
                    {title: "3", value: "3"},
                    {title: "4", value: "4"},
                    {title: "5", value: "5"},
                    {title: "6", value: "6"},
                ]
            },
            {
                title: "Property Type",
                type: "select",
                options: [
                    {title: "No Preference", value: "No Preference"}, 
                    {title: "Appartment", value: "Appartment"},
                    {title: "Detatched", value: "Detatched"},
                    {title: "Bunglow", value: "Bunglow"},
                    {title: "Flat", value: "Flat"},
                    {title: "Shared Flat", value: "Shared Flat"},
                    {title: "Ground Flat", value: "Ground Flat"},
                    {title: "House Share", value: "House Share"},
                    {title: "Semi Detatched", value: "Semi Detatched"},
                    {title: "Studio", value: "Studio"},
                    {title: "Tarraced", value: "Tarraced"},
                    {title: "Town House", value: "Town House"},
                ]
            },
        ],
        availableOptions:[
                    { title: "No Preferences", value: "no Preferences"}, 
                    { title: "From July 2023", value: "From July 2023"},
                    { title: "From May 2023", value: "From May 2023"},
                    { title: "From Next 2 Months", value: "From Next 2 Months" }
                
        ]
    }
]

export const buyContainer1 = [
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


// property search page