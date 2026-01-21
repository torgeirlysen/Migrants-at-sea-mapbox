var config = {
    //style: 'mapbox://styles/lrjacobs/cmke18zhh00g701sc3nm7fyi1',
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
    chapters: [
        {
            id: 'Overview-identifier',
            alignment: 'left',
            hidden: false,
            title: '20 January 2014 - Farmakonisi: A Deadly Boat Capsize',
            image: '',
            description: `
            
            <p>
            <b> Number of deaths: 11 </b>
            </p>

            <p>
            <b> Number of survivors: 14 </b>
            </p>

            <p>
            <b> Events: </b> In the early hours of 20 January 2014, a small inflatable boat carrying 27 refugees, mainly families from Afghanistan, Syria and Palestine, sank in the Aegean Sea near the Greek island of Farmakonisi. A group of 14 migrants and the body of a man who died were found on shore after calls for rescue were only responded to much later. Alarm Phone and other organisations documented authorities being informed hours before action. This is a pattern that keeps reappearing, delayed response even when authorities have knowledge of distress. 
            </p>

            `,
            location: {
                center: [27.28889, 37.35611],
                zoom: 10,
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
            id: 'key-one-identifier',
            alignment: 'bottom',
            hidden: false,
            title: 'Key Findings and Issues ',
            image: '',
            description: `
            
            <p>
            <b> 1. Coast Guard Inaction and Towing During Border Control  </b>
            </p>

            <p>
            Survivors reported that a Greek Coast Guard vessel approached and attached a rope to their boat, and that it capsized while being towed at speed. They said the Coast Guard attempted to pull them back toward Turkish waters (a pushback), but conditions aboard the fragile and overcrowded boat made it impossible to withstand the manoeuvre.  After fisrt denying it, Greek authorities then acknowledged towing the boat but claimed it was intended to bring it toward Farmakonisi to effect a rescue; they denied that this was a forced return (pushback).  
            </p>

            <p>
            <b> 2. Failure to Treat It as a SAR Priority </b> 
            </p>

            <p>
            Independent legal advocates maintained that the incident was treated primarily as a border surveillance operation rather than a search-and-rescue mission, meaning that rescuers were focused on controlling movement rather than protecting life at sea.  
            </p>

            <p>
            <b> Inadequate Investigation in Greece</b> 
            </p>

            <p>
            The Piraeus Naval Court Prosecutor in Greece initially closed the case without a substantive judicial examination of the Coast Guard’s role, effectively ending the domestic investigation into possible culpability for the deaths.  
            </p>
            
            
            `,
            location: {
                center: [27.0883, 37.2830],
                zoom: 6,
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
            id: 'Court-identifier',
            alignment: 'left',
            hidden: false,
            title: '7 July 2022 : European Court of Human Rights RulinLag ',
            image: '',
            description: `
            
            <p>
            After survivors and relatives exhausted domestic remedies, they brought the case before the European Court of Human Rights. On 7 July 2022, the ECHR issued a ruling that “Greece violated the right to life (Article 2)” of the European Convention on Human Rights by failing to take all measures that could reasonably be expected to protect the lives of those onboard.  
            </p>

            <p>
            The Court also found that Greece violated Article 3 (prohibition of inhuman or degrading treatment), noting that survivors had been subject to humiliating searches (including stripping them off their clothes) and treatment upon arrival.  
            </p>

            <p>
            The ECHR awarded compensation to survivors for violation of their rights, a rare and impactful judgment in the context of deaths at Europe’s maritime borders.  
            </p>

            `,
            location: {
                center: [27.0883, 37.2830],
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

        
        
    ]
};
