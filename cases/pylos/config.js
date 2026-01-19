var config = {
    // style: 'mapbox://styles/lrjacobs/cmke18zhh00g701sc3nm7fyi1',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibHJqYWNvYnMiLCJhIjoiY21rM3BoanV0MHBhYjNlcXk0OTZ1bXR5eiJ9.c9gJtz4_0bhKpi50XaKODg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',

    chapters: [
        {
            id: 'Overview-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Migrants at Sea: A Mediterranean Tragedy',
            image: '',
            description: 'Over the past 10 years, more than 73,000 migrants and refugees have died attempting to cross the Mediterranean Sea to reach Europe. Many of these deaths are the result of delayed or denied rescue efforts by European coastguards and governments. This story map highlights three tragic incidents that underscore the urgent need for humanitarian action and policy reform to protect vulnerable lives at sea.',
            location: {
                center: [12.612838, 34.347632],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'departure-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Departure From Tobruk, Libya',
            image: '',
            description: 'The fishing vessel Adriana departed from Tobruk, Libya, in early June 2023. On board were 700–750 people, many from Pakistan, Syria, and Egypt. Most had spent days or weeks in dangerous smuggling warehouses before being forced onto the overcrowded trawler. Passengers described paying thousands of dollars for passage, believing this journey would bring them closer to safety in Europe.',
            location: {
                center: [23.9769, 32.0786],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'international-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Entering International Waters',
            image: 'images/ocean.png',
            description: 'After leaving Libyan waters, the Adriana entered the Central Mediterranean, one of the world\’s deadliest migration routes. The ship was already in extremely poor condition. It had no functioning navigation system, almost no food or water left, and people were packed into the lower hull, engine room, and upper deck.',
            location: {
                center: [21.00, 34.00],
                zoom: 6,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'distress-identifier',
            alignment: 'right',
            hidden: false,
            title: 'First Distress Signals',
            image: 'assets/images/pylos.jpg',
            description: 'By 13 June, NGOs, merchant vessels, and Frontex had begun detecting the Adriana. Multiple alerts noted the vessel was not moving, severely overcrowded, and unable to steer. Despite this, no rescue was ordered. Passengers later testified that people had already collapsed from dehydration.',
            location: {
                center: [21.3, 35.2],
                zoom: 7,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    // layer: 'layer-name',
                    // opacity: 1,
                    // duration: 5000   
                }
            ],
            onChapterExit: []
        },
        {
            id: 'surveillance-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Under Surveillance for 15 Hours',
            image: 'assets/images/farmakonisi.jpg',
            description: 'For more than 15 hours, the Adriana remained under continuous monitoring by the Hellenic Coast Guard and by aerial surveillance. Despite visible signs of distress, authorities classified the situation as “not requiring rescue.” Survivors described this period as “waiting for death,” with the boat slowly drifting and tilting.',
            location: {
                center: [21.35, 36.00],
                zoom: 7.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tow-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Tow Attempt',
            image: '',
            description: 'Survivors reported that the Hellenic Coast Guard vessel PLS 920 approached and attempted to tow the Adriana with a rope. The tow was allegedly done at a sideways angle. This maneuver, combined with the extreme overcrowding and instability of the vessel, caused it to tilt sharply, then roll over completely into the sea around 2 a.m.',
            location: {
                center: [21.2340, 36.4125],
                zoom: 9,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conditions-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Conditions On Board During the Sinking',
            image: '',
            description: 'The Adriana capsized in total darkness. With hundreds locked in the lower decks, escape was impossible. Survivors described hearing metal scrape, the deck shift suddenly, and the sound of people screaming underwater. Those on the upper deck were thrown into the sea. Many could not swim. Passengers said they had been without water for hours and were severely weakened before the sinking.',
            location: {
                center: [21.2340, 36.4125],
                zoom: 10,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Pserimos-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Pserimos',
            image: 'assets/images/Pserimos.jpg',
            description: 'For nearly two years, the case was slowed by procedural barriers. The Piraeus Naval Court initially archived the files, protecting high-ranking Coast Guard officials from scrutiny. Following a legal appeal by survivors, the Court of Revision issued a landmark order:Criminal prosecution for felony charges against four senior Hellenic Coast Guard officials, including the current Chief. Charges include: Felony endangerment (failure to rescue), Exposure of survivors (failure to assist after the capsizing), Multiple counts of negligent homicide through omission. The ruling marks a historic moment in Greek maritime accountability and signals the possibility of justice for the victims of the Adriana.',
            location: {
                center: [23.6410, 37.9475],
                zoom: 11,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
    ]
};
