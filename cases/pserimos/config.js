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
    footer: 'Sources: <br> <a href="https://www.ecchr.eu/publikation/joint-third-party-intervention-ecchr-proasyl-and-rsa-july-2022/ " target="_blank">European Center for Constitutional and Human Rights</a>, <a href="https://rsaegean.org/el/pserimos-dyo-anthropines-istories-piso-apo-13-pyrovolismous-tou-limenikou-se-mia-varka-prosfygon/ " target="_blank">Refuge Support Aegan</a> ',

    chapters: [
        {
            id: 'Overview-identifier',
            alignment: 'left',
            hidden: false,
            title: '22 September 2014 : Pserimos - Greek Coast Guard shoots at refugee boat, killing one person',
            image: '',
            description: '12 refugees on a motorboat from Turkey to Greece are located by the greek coastguard. The motorboat was ordered to stop but did not comply. The motorboat collided with the PLS 1012 on two or three occasions. The coastguard then shot 20 times, 7 as a warning and 13 straight at the machine of the boat. Serian refugee Belal Telo was shot in the head, resulting in 14 months of him not being able to eat or to communicate other than with his eyes, and eventually his death in December 2015. Another refugee, M.A. was shot on his shoulder and has lost the ability to use his arm. ',
            location: {
                center: [27.17173851, 36.95042645],
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
            alignment: 'right',
            hidden: false,
            title: 'Victim testimony',
            image: '',
            description: '“I didn’t expect this treatment when I escaped from the war in Syria to a European domain, who defends human rights. I couldn’t imagine that a person is worth as much as a bullet. That was very shocking for me. I escaped death and war to search for life. So, the realization that was waiting for me in that sea was death was truly astonishing” “It was very clear to the coastguards that on the boat there were only unarmed helpless people who were trying to escape war and find safety somewhere. That was very obvious to them, I was with my wife and my daughter and others, unfortunately, we were devastated truly when we saw a man get shot in the head. His face was full of blood.”  M.A. ',
            location: {
                center: [27.17173851, 36.95042645],
                zoom: 6,
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
            id: 'Justice-identifier',
            alignment: 'left',
            hidden: false,
            title: '16 January 2024 : Justice',
            image: '',
            description: 'Internal disciplinary investigations concluded that the coastguards were not at fault and the case did not go through a trial in Greece. Belal Telo’s family filed an appeal at the European Court of Human Rights. Ten years later, 16 of January 2024, ECHR convicted Greece for violation of the right to life (article 2 of ECHR) because of the lethal injury of Belal and for the insufficient investigation of the incident from greek authorities. The court concluded that “the investigation carried out by the national authorities contained numerous shortcomings which resulted, among other weaknesses, in the loss of evidence and which rendered the investigation inappropriate”. It also ordered Greece to pay compensation of 80,000 euros to the family of Belal Tello, for non-pecuniary damage.',
            location: {
                center: [21.8243, 39.0742],
                zoom: 4,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        
    ]
};
