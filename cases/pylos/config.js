var config = {
    // style: 'mapbox://styles/lrjacobs/cmke18zhh00g701sc3nm7fyi1',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibHJqYWNvYnMiLCJhIjoiY21rM3BoanV0MHBhYjNlcXk0OTZ1bXR5eiJ9.c9gJtz4_0bhKpi50XaKODg',
    showMarkers: false,
    showPath : true,
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
            title: '14 June 2023: The Adriana Shipwreck Off Pylos, Greece',
            image: '',
            description: 'On the night of 14 June 2023, the fishing vessel Adriana capsized off the coast of Pylos, Greece, leading to one of the deadliest maritime disasters in recent Mediterranean history. Over 700 people, primarily from Pakistan, Syria, and Egypt, were on board when the overcrowded and unseaworthy vessel overturned during a failed tow attempt by the Hellenic Coast Guard. Despite multiple distress signals and hours of surveillance, no rescue was initiated until it was too late. The tragedy has sparked outrage and calls for accountability regarding the actions of the Greek authorities involved.',
            location: {
                center: [23.9769, 32.0786],
                zoom: 4,
                pitch: 9,
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
            title: 'June 13 07:00 : Departure From Tobruk, Libya',
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
            title: 'June 13 : Entering International Waters',
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
            image: 'images/last-hours.jpeg',
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
            description: 'Survivors report that the Hellenic Coast Guard vessel PPLS 920 approached and attached a rope to the Adriana, allegedly attempting to tow it toward Italian waters. Witnesses describe the tow being executed at a high speed and a dangerous sideways angle. This maneuver, acting on a vessel already critically overcrowded and unstable, reportedly caused the Adriana to tilt sharply. The destabilization proved fatal; the ship eventually rolled over completely and sank around 2 a.m. ',
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
            description: 'The Adriana capsized in total darkness. For the hundreds of people locked in the lower decks, escape was impossible. Survivors described a terrifying sequence: the screech of metal against metal, a sudden, violent shift of the deck, and then the screams of those trapped as the vessel went down. Passengers on the upper deck were thrown directly into the sea. Many, unable to swim and severely weakened after being without fresh water for days, struggled to stay afloat in the chaos.',
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
            id: 'Kalamata-identifier',
            alignment: 'left',
            hidden: false,
            title: 'May 21 2024: Kalamata Court Dismisses Charges Against Survivors',
            image: '',
            description:'On 21 May, the criminal court in Kalamata dismissed a case against nine survivors who were accused of smuggling and causing the shipwreck, among other serious charges, and had been detained for 11 months at the time of the trial. Amnesty International and Human Rights Watch had expressed concerns over the fairness of the trial, saying that the case was based on incomplete and questionable evidence given that the investigation into the role of the Coast Guard has not yet been completed.',   
            location: {
                center: [22.1144, 37.0366],
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
        {
            id: 'Piraeus-identifier',
            alignment: 'bottom',
            hidden: false,
            title: 'Piraeus Naval Court Orders Prosecution',
            image: '',
            description: ` 
            
            <p>
            For nearly two years, the case faced significant procedural hurdles. Initially, the Prosecutor of the Piraeus Naval Court had archived the files concerning the leadership of the Coast Guard. However, following a formal appeal by the survivors, a landmark order from the Prosecutor of the Court of Revision  overturned this. In a historic shift for Greek maritime law: 
            </p>

            <p>
            Criminal Prosecution for Felonies: Criminal charges have been ordered against four senior officials of the Hellenic Coast Guard leadership, including the current Chief of the Body. 
            </p>

            <p>
            Specific Charges: 
            </p>

            <p>
            <b> 1. Exposure (Endangerment) as a Felony: </b> Failure to fulfill the legal obligation to rescue persons in distress, resulting in death. 
            </p>

            <p>
            <b> 2. Exposure of survivors: </b> Neglecting the legal duty to aid those left helpless at sea. 
            </p>

            <p>    
            <b> 3. Negligent Homicide: </b> Multiple counts of manslaughter through omission. 
            </p>
            `,
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
