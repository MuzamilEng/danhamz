import React from 'react'
import { Icon } from '@iconify/react';

export const topbar = [
    {
        path: '/',
        icon: <Icon icon="fa-solid:phone" />,
        phone: '0123456789',
        links: [
            {
                path: '/',
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


export const banner = [
    {
        title: "HOP is an award-winning estate & lettings agent in Leeds.",
        welcome: "Welcome to the Home of Property",
        info: "Previously known as Let Leeds, you can now call us HOP. Whether you’re a buyer, seller, tenant, landlord, investor or developer, our friendly team is here to help. We offer a range of property services that include Lettings, Sales & Block Management all under one roof.",
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
        para: "Whether you are selling your home, or an investment property, our friendly team at HOP will be with you every step of the way, from initial valuation through to final completion.",
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
        para: "Amazing letting agents. Joe was very helpful and professional, Chelsea answered our queries patiently. Thank you HOP",
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
        info: "In our industry, it’s the people that really make the difference. That’s why we firmly believe in supporting our staff to be the best they can be. HOP is a proud holder of the globally recognised Investors In People accreditation",
        img: "images/investor_logo.png",
    }
]

export const studentHomes = [
    {
        icon: <Icon icon="mdi:lightbulb-on-30" />,
        title: "All-inclusive student homes",
        img: "images/student.jpg",
        info: "Life as a student is busy and stressful enough, so choose an all-inclusive property from HOP to take all the hassle out of renting. We’ve got you covered with our DELUXE Bills Package. All HOP managed properties come with: Gas, Electric, Water, the best available 1GB Superfast Broadband, TV Licence and Contents Insurance (with £1,000 laptop cover). Don’t worry about things like rising energy prices or how to split the bills  – you simply pay the same thing every month and it’s all taken care of.  It’s a no brainer!",

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
        para: "Of course, finding the best properties to buy, let or invest in means partnering with estate agents that know the local market inside and out. That’s HOP to a T!",
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