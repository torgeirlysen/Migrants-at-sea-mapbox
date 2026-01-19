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
            id: 'departuse-identifier',
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
            id: 'pylos-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Pylos',
            image: 'assets/images/pylos.jpg',
            description: 'On 14 June 2023, the fishing vessel Adriana — dangerously overcrowded with an estimated 700\–750 migrants and asylum seekers who had departed from Tobruk, Libya — capsized and sank about 80 km off Pylos, within Greece\’s search\‑and\‑rescue zone. Despite hours of prior monitoring by authorities and repeated signs the boat was in severe distress, it was not rescued in time. Only 104 people survived, while more than 600 died or went missing, making it one of the deadliest Mediterranean shipwrecks in recent years and raising serious questions about delayed intervention and failures in rescue obligations.',
            location: {
                center: [21.04, 36.18],
                zoom: 7.5,
                pitch: 40,
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
            id: 'Farmakonisi-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Farmakonisi',
            image: 'assets/images/farmakonisi.jpg',
            description: 'Despite repeated alerts from Alarm Phone and other organisations, authorities waited hours before responding to a boat in clear distress. When help finally came, 14 migrants had already reached the shore on their own, and the body of a man who had died was found beside them. The delay occurred even though authorities had early, documented knowledge of the emergency. In the early hours of 20 January 2014, the small inflatable boat carrying 27 refugees — mainly families from Afghanistan, Syria and Palestine — sank near the Greek island of Farmakonisi. Although Greek authorities eventually carried out rescues, 11 people, including eight children and three women, lost their lives.',
            location: {
                center: [27, 37.2832],
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
            id: 'Samos-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Samos',
            image: '',
            description: 'After repeated alerts from Alarm Phone and other organisations, authorities responded only much later, despite having been informed hours earlier that a boat carrying migrants was in severe distress. By the time help arrived, 14 people had reached the shore on their own, and the body of a man who had died was found alongside them. The incident illustrates a dangerous pattern of delayed intervention even when authorities already possessed clear, timely knowledge that lives were at risk. In the early hours of 20 January 2014, the small inflatable boat carrying 27 refugees, mostly families from Afghanistan, Syria and Palestine, sank near the Greek island of Farmakonisi; 11 people died, including eight children and three women. The survivors later described long waits for rescue despite repeated warnings, reinforcing concerns about systemic failures in responding to distress at sea.',
            location: {
                center: [27.08076693, 37.7743271],
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
            id: 'Pserimos-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Pserimos',
            image: 'assets/images/Pserimos.jpg',
            description: 'Twelve refugees traveling from Turkey were intercepted by the Greek coastguard. The refugees did not stop, and their boat collided with the patrol vessel two or three times. The coastguard opened fire: Belal Telo was shot in the head, surviving 14 months without the ability to eat or communicate except with his eyes before dying in December 2015. M.A. was shot in the shoulder and permanently lost the use of his arm. \n\n Greek internal investigations found no wrongdoing, and no trial took place. Belal Telo\’s family appealed to the European Court of Human Rights. On 16 January 2024, nearly ten years later, the ECHR ruled that Greece violated the right to life (Article 2), citing severe failures in the investigation—including lost evidence and procedural shortcomings. Greece was ordered to pay €80,000 in non\‑pecuniary damages to Belal Telo\’s family.',
            location: {
                center: [27.17173851, 36.95042645],
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
        
    ]
};
