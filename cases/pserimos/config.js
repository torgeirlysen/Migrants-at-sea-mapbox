var config = {
    // style: 'mapbox://styles/lrjacobs/cmke18zhh00g701sc3nm7fyi1',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibHJqYWNvYnMiLCJhIjoiY21rM3BoanV0MHBhYjNlcXk0OTZ1bXR5eiJ9.c9gJtz4_0bhKpi50XaKODg',
    showMarkers: false,
    showPath : false,
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
            title: 'Pserimos. September 22, 2014  ',
            image: '',
            description: '12 refugees on a motorboat from Turkey to Greece are located by the greek coastguard. The motorboat was ordered to stop but did not comply. The motorboat collided with the PLS 1012 on two or three occasions. The coastguard then shot 20 times, 7 as a warning and 13 straight at the machine of the boat. Serian refugee Belal Telo was shot in the head, resulting in 14 months of him not being able to eat or to communicate other than with his eyes, and eventually his death in December 2015. Another refugee, M.A. was shot on his shoulder and has lost the ability to use his arm. ',
            location: {
                center: [27.17173851, 36.95042645],
                zoom: 7,
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
            title: 'Victim testimony',
            image: '',
            description: '“I didn’t expect this treatment when I escaped from the war in Syria to a European domain, who defends human rights. I couldn’t imagine that a person is worth as much as a bullet. That was very shocking for me. I escaped death and war to search for life. So, the realization that was waiting for me in that sea was death was truly astonishing” “It was very clear to the coastguards that on the boat there were only unarmed helpless people who were trying to escape war and find safety somewhere. That was very obvious to them, I was with my wife and my daughter and others, unfortunately, we were devastated truly when we saw a man get shot in the head. His face was full of blood.”  M.A. ',
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
            title: 'June 13, 10:35 : First Distress Signals',
            image: 'assets/images/pylos.jpg',
            description: 'At around 10:35 p.m. on June 13, the Adriana began sending distress signals via satellite phone and radio, reporting engine failure and water ingress. Passengers described panic as the boat started taking on water. The Hellenic Coast Guard received multiple distress calls but classified the situation as “not requiring rescue,” citing the vessel’s location in international waters and its proximity to Greek territory.',
            location: {
                center: [21.00942, 35.95138],
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
            title: 'June 13, 23:45 : The Tow Attempt',
            image: '',
            description: '',
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
            title: 'June 14. 02.06 : Conditions On Board During the Sinking',
            image: '',
            description: '',
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
            id: 'Piraeus-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Piraeus Naval Court Orders Prosecution',
            image: '',
            description: '',
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
