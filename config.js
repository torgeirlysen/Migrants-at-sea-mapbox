var config = {
    style: 'mapbox://styles/lrjacobs/cmke18zhh00g701sc3nm7fyi1',
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
            id: 'lampedusa-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Lampedusa',
            image: '',
            description: 'NGO Sea-Watch filed a criminal complaint alleging Italy’s coastguard waited two days before deploying rescue ships after spotting a migrant boat in distress near Lampedusa — contributing to 21 deaths.  ',
            location: {
                center: [12.44648, 35.458895],
                zoom: 7.5,
                pitch: 40,
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
            id: 'turkey-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Turkey',
            image: '',
            description: 'A boat with 47 people sent distress signals within a SAR zone but was ignored by Italian and Maltese authorities relying on the Libyan coast guard to intervene. Only 17 survived when a commercial vessel eventually rescued them; 30 people died that could have been saved with timely state action. What this shows: deliberate delay/inaction in SAR leads directly to loss of life. ',
            location: {
                center: [27.1714101, 37.31969373],
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
            id: 'pylos-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Pylos',
            image: ' ',
            description: 'On June 14, 2023, the fishing vessel Adriana — massively overloaded with around 700–750 migrants and asylum seekers who had embarked from Tobruk, Libya — capsized and sank about 80 km off Pylos, Greece, in the Greek search-and-rescue (SAR) zone. Only 104 people survived; more than 600 died or remain missing, making it one of the deadliest migrant shipwrecks in the Mediterranean in recent memory.  ',
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
            image: '',
            description: 'A group of 14 migrants and the body of a man who died were found on shore after calls for rescue were only responded to much later. Alarm Phone and other organisations documented authorities being informed hours before action.What this shows: delayed response even when authorities had knowledge of distress. What happened: In the early hours of 20 January 2014, a small inflatable boat carrying 27 refugees — mainly families from Afghanistan, Syria and Palestine — sank in the Aegean Sea near the Greek island of Farmakonisi. The boat was found by Greek authorities in distress; rescues were carried out, but 11 people died, including eight children and three women.   ',
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
            description: 'A group of 14 migrants and the body of a man who died were found on shore after calls for rescue were only responded to much later. Alarm Phone and other organisations documented authorities being informed hours before action.What this shows: delayed response even when authorities had knowledge of distress. What happened: In the early hours of 20 January 2014, a small inflatable boat carrying 27 refugees — mainly families from Afghanistan, Syria and Palestine — sank in the Aegean Sea near the Greek island of Farmakonisi. The boat was found by Greek authorities in distress; rescues were carried out, but 11 people died, including eight children and three women.   ',
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
            id: 'Samos-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Samos',
            image: '',
            description: 'A group of 14 migrants and the body of a man who died were found on shore after calls for rescue were only responded to much later. Alarm Phone and other organisations documented authorities being informed hours before action.What this shows: delayed response even when authorities had knowledge of distress. What happened: In the early hours of 20 January 2014, a small inflatable boat carrying 27 refugees — mainly families from Afghanistan, Syria and Palestine — sank in the Aegean Sea near the Greek island of Farmakonisi. The boat was found by Greek authorities in distress; rescues were carried out, but 11 people died, including eight children and three women.   ',
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
