// This file contains fallback assets for the site. If the image or other asset is not found or not set in the Sanity Studio, the fallback image will be used instead.

//////////////////////////////////////
////////// FALLBACK IMAGES ///////////
//////////////////////////////////////

// TODO - Add assets to build instead of URLs

export const fallbackImages = {
	heroImageFallback:
		'https://images.unsplash.com/photo-1584792977024-014310b55977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80',

	about: {
		primaryImageFallback:
			'https://cdn.sanity.io/images/4ns0wsqo/production/61ae942ccff0230df54ecef6d8fff834f3ab515f-2400x1753.jpg',
		smallImageFallback:
			'https://images.unsplash.com/photo-1497621122273-f5cfb6065c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
	},
	worship: {
		// TODO - Change fallback image
		primaryImageFallback:
			'https://cdn.sanity.io/images/4ns0wsqo/production/6bb071ff5e49cc3e07916a3b0be4d431aea17026-2400x1600.jpg',
		expectBannerFallback:
			'https://cdn.sanity.io/images/4ns0wsqo/production/c52614bcadbe51f5fa2c79a42236cc0240a28e4d-1278x650.png',
		scheduleBannerFallback:
			'https://cdn.sanity.io/images/4ns0wsqo/production/4f8b4d206c92ca00e3f7248cc3e87cc902ed8607-2400x1800.jpg',
	},
	parishEvents: {
		pageBannerImageFallback:
			'https://cdn.sanity.io/images/4ns0wsqo/production/ba1297a6b58df28fb08871f0344edaf7b01e45cc-2400x1600.jpg',
		oneOffPrimaryImageFallback: 'Image Not Found',
	},
	facility: {
		pageBannerImageFallback:
			'https://images.unsplash.com/photo-1584792977024-014310b55977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80',
	},
};

//////////////////////////////////////
////////// FALLBACK TEXT /////////////
//////////////////////////////////////

export const placeholders = {
	about: {
		title: 'About Us',
		slug: 'about-us',
		description:
			'"I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service. And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God." Romans 12:2 And here we offer and present unto thee, O Lord, ourselves, our souls and bodies, to be a reasonable, holy, and living sacrifice unto thee." BCP, p. 85',
		body: {
			p1: 'Trinity is a classical Anglican parish, in Halifax, Nova Scotia.',
			p2: "Originally a mission of St Paul's, in 1866 Trinity was first situated downtown on the historic Jacob Street below Citadel Hill, and by 1888 it was formally incorporated as a parish. In 1907 Trinity relocated a few blocks away to a site on Cogswell Street, where it gathered for worship and served its North End neighbourhood for the next 100 years. In October 2008 Trinity moved to its current location at 321 Main Avenue, the juncture of the Fairview and Clayton Park neighbourhoods, where it strives to practice the love and grace it has received, and to offer itself as a sacrifice of praise and thanksgiving to God for the life of the parish, the wider community, and the world.",
			p3: "Trinity strives to witness to the Gospel of Christ as revealed to his Church in the Holy Scriptures, as received by the Apostles and passed on down the ages by the consensus of God's faithful people, and as classically embodied in the Book of Common Prayer.",
			p4: "The Prayerbook, often described as 'the Bible arranged for worship,' articulates the pattern of teaching, worship, and way of life which defines our common vision as a parish. In continuity with historic Christianity, we affirm that the summaries of faith called the Apostles', Nicene, and Athanasian Creeds are warranted by God's written Word, and ought thoroughly to be received and believed. These ancient Creeds, together with the Thirty-Nine Articles of Religion (c. 1571), the Solemn Declaration (1893), and the Canadian Book of Common Prayer (1962), express the Church's basic standard of doctrine and practice as our parish has received it, and which by God's help we are determined to hold, maintain, and pass on to future generations.",
			p5: 'Trinity is rooted in the evangelical tradition and had its beginnings in the religious revival of the nineteenth-century. We continue to have confidence and hope that God will indeed restore, renew, and revive his Church and the world he so loves. Today we seek to be true to our evangelical and catholic (universal) inheritance. We seek to hear and be transformed by the Gospel, and to preach the same by our words and actions. We seek to be faithful in serving Christ through our prayer and worship, ministry and mission, hospitality and friendship, and in the ordinary exchanges with one another and the stranger among us.',
			p6: 'Trinity Church is a parish in the Diocese of NS and PEI, and a member of the Anglican Church of Canada.',
		},
	},
	worship: {
		bannerVerseFallback:
			'"But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."',
		bannerVerseAttFallback: 'Galatians 6:14',
		expectVerseFallback:
			'"But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."',
		expectVerseAttFallback: 'Galatians 6:14',
		scheduleVerseFallback:
			"And they continued steadfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers.",
		scheduleVerseAttFallback: 'Acts 2:24',
	},
	schedule: {
		regularServiceTitle: 'Join us for our Regular Services',
		specialServiceTitle: 'Join us on these Special Occasions',
	},
	parishEvents: {
		allEventsBannerTitle: 'All Parish Events',
	},
	parishEventsOneOff: {
		eventTitleFallback: 'Event Yet to Be Named',
		descriptionFallback:
			'There is no description for this event. Check back later for more details.',
	},
	facility: {
		bannerVerseFallback:
			'"But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."',
		bannerVerseAttFallback: 'Galatians 6:14',
	},
};
