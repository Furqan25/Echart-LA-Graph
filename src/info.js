const trains = {
    "nodes": [
        {
            "id": "0",
            "name": "Redondo Beach",
            "symbolSize": 5,
            "x": -387,
            "y": 475,
            "category": 5
        },
        {
            "id": "1",
            "name": "Douglas",
            "symbolSize": 5,
            "x": -394,
            "y": 465,
            "category": 5
        },
        {
            "id": "2",
            "name": "El Segundo",
            "symbolSize": 5,
            "x": -395,
            "y": 460,
            "category": 5
        },
        {
            "id": "3",
            "name": "Mariposa",
            "symbolSize": 5,
            "x": -395,
            "y": 452,
            "category": 5
        },
        {
            "id": "4",
            "name": "Aviation/LAX",
            "symbolSize": 5,
            "x": -390,
            "y": 447,
            "category": 5
        },
        {
            "id": "5",
            "name": "Hawthorne/Lennox",
            "symbolSize": 5,
            "x": -380,
            "y": 445,
            "category": 5
        },
        {
            "id": "6",
            "name": "Crenshaw",
            "symbolSize": 5,
            "x": -365,
            "y": 452,
            "category": 5
        },          {
            "id": "7",
            "name": "Vermont/Athens",
            "symbolSize": 5,
            "x": -355,
            "y": 450,
            "category": 5
        },          
        {
            "id": "8",
            "name": "Harbor Freeway",
            "symbolSize": 5,
            "x": -345,
            "y": 450,
            "category": 5
        },          
        {
            "id": "9",
            "name": "Avalon",
            "symbolSize": 5,
            "x": -335,
            "y": 450,
            "category": 5
        },
        {
            "id": "10",
            "name": "Willowbrook",
            "symbolSize": 10,
            "x": -325,
            "y": 450,
            "value": "Green, Blue Line",
            "category": 5,
            "itemStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: .5, color: '#00FF00'
                    }, {
                        offset: .5, color: 'blue' 
                    }],
                    global: false 
                  }
            }
        },
        {
            "id": "11",
            "name": "Long Beach Boulevard",
            "symbolSize": 5,
            "x": -315,
            "y": 450,
            "category": 5
        },
        {
            "id": "12",
            "name": "Lakewood Boulevard",
            "symbolSize": 5,
            "x": -285,
            "y": 460,
            "category": 5
        },
        {
            "id": "13",
            "name": "Norwalk",
            "symbolSize": 5,
            "x": -275,
            "y": 460,
            "category": 5
        },
        {
            "id": "14",
            "name": "7th Street/Metro Center",
            "symbolSize": 20,
            "x": -335,
            "y": 345,
            'value': "Blue, Expo, Purple, Red Lines",
            "category": 3,
            "itemStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        { offset: .55, color: '#5ea0b5' }, 
                        { offset: .15, color: 'blue' },
                        { offset: .45, color: '#ff0000' },
                        { offset: .85, color: '#800080' }
                    ],
                    global: false 
                }
            }
        },
        {
            "id": "15",
            "name": "Pico",
            "symbolSize": 10,
            "x": -340,
            "y": 360,
            'value': "Blue, Expo Line",
            "category": 3,
            "itemStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: .5, color: '#5ea0b5'
                    }, {
                        offset: .5, color: 'blue' 
                    }],
                    global: false 
                }
            }
        },
        {
            "id": "16",
            "name": "Grand/LATTC",
            "symbolSize": 5,
            "x": -345,
            "y": 370,
            "category": 3
        },
        {
            "id": "17",
            "name": "San Pedro Street",
            "symbolSize": 5,
            "x": -335,
            "y": 380,
            "category": 3
        },
        {
            "id": "18",
            "name": "Washington",
            "symbolSize": 5,
            "x": -325,
            "y": 390,
            "category": 3
        },
        {
            "id": "19",
            "name": "Vernon",
            "symbolSize": 5,
            "x": -325,
            "y": 400,
            "category": 3
        },
        {
            "id": "20",
            "name": "Slauson",
            "symbolSize": 5,
            "x": -325,
            "y": 410,
            "category": 3
        },
        {
            "id": "21",
            "name": "Florence",
            "symbolSize": 5,
            "x": -325,
            "y": 420,
            "category": 3
        },
        {
            "id": "22",
            "name": "Firestone",
            "symbolSize": 5,
            "x": -325,
            "y": 430,
            "category": 3
        },
        {
            "id": "23",
            "name": "103rd Street/Watts Towers",
            "symbolSize": 5,
            "x": -325,
            "y": 440,
            "category": 3
        },
        {
            "id": "24",
            "name": "Compton",
            "symbolSize": 5,
            "x": -310,
            "y": 465,
            "category": 3
        },
        {
            "id": "25",
            "name": "Artesia",
            "symbolSize": 5,
            "x": -305,
            "y": 475,
            "category": 3
        },
        {
            "id": "26",
            "name": "Del Amo",
            "symbolSize": 5,
            "x": -295,
            "y": 485,
            "category": 3
        },
        {
            "id": "27",
            "name": "Wardlow",
            "symbolSize": 5,
            "x": -285,
            "y": 495,
            "category": 3
        },
        {
            "id": "28",
            "name": "Willow Street",
            "symbolSize": 5,
            "x": -275,
            "y": 505,
            "category": 3
        },
        {
            "id": "29",
            "name": "Pacific Coast Highway",
            "symbolSize": 5,
            "x": -275,
            "y": 515,
            "category": 3
        },
        {
            "id": "30",
            "name": "Anaheim Street",
            "symbolSize": 5,
            "x": -275,
            "y": 525,
            "category": 3
        },
        {
            "id": "31",
            "name": "5th Street",
            "symbolSize": 5,
            "x": -275,
            "y": 535,
            "category": 3
        },
        {
            "id": "32",
            "name": "1st Street",
            "symbolSize": 5,
            "x": -275,
            "y": 555,
            "category": 3
        },
        {
            "id": "33",
            "name": "Downtown Long Beach",
            "symbolSize": 5,
            "x": -305,
            "y": 555,
            "category": 3
        },
        {
            "id": "34",
            "name": "Pacific Avenue",
            "symbolSize": 5,
            "x": -305,
            "y": 535,
            "category": 3
        },
        {
            "id": "35",
            "name": "LATTC/Ortho Institute",
            "symbolSize": 5,
            "x": -350,
            "y": 376.5,
            "category": 1
        },
        {
            "id": "36",
            "name": "Jefferson/USC",
            "symbolSize": 5,
            "x": -355,
            "y": 385,
            "category": 1
        },
        {
            "id": "37",
            "name": "Expo Park/USC",
            "symbolSize": 5,
            "x": -365,
            "y": 390,
            "category": 1
        },
        {
            "id": "38",
            "name": "Expo/Vermont",
            "symbolSize": 5,
            "x": -385,
            "y": 390,
            "category": 1
        },
        {
            "id": "39",
            "name": "Expo/Western",
            "symbolSize": 5,
            "x": -400,
            "y": 389,
            "category": 1
        },
        {
            "id": "40",
            "name": "Expo/Crenshaw",
            "symbolSize": 5,
            "x": -410,
            "y": 387,
            "category": 1
        },
        {
            "id": "41",
            "name": "Farmdale",
            "symbolSize": 5,
            "x": -420,
            "y": 385,
            "category": 1
        },
        {
            "id": "42",
            "name": "Expo/La Brea",
            "symbolSize": 5,
            "x": -430,
            "y": 382,
            "category": 1
        },
        {
            "id": "43",
            "name": "La Cienega/Jefferson",
            "symbolSize": 5,
            "x": -440,
            "y": 380,
            "category": 1
        },
        {
            "id": "44",
            "name": "Culver City",
            "symbolSize": 5,
            "x": -450,
            "y": 378,
            "category": 1
        },
        {
            "id": "45",
            "name": "Palms",
            "symbolSize": 5,
            "x": -460,
            "y": 376,
            "category": 1
        },
        {
            "id": "46",
            "name": "Westwood/Rancho Park",
            "symbolSize": 5,
            "x": -470,
            "y": 370,
            "category": 1
        },
        {
            "id": "47",
            "name": "Expo/Sepulveda",
            "symbolSize": 5,
            "x": -480,
            "y": 370,
            "category": 1
        },
        {
            "id": "48",
            "name": "Expo/Bundy",
            "symbolSize": 5,
            "x": -490,
            "y": 371,
            "category": 1
        },
        {
            "id": "49",
            "name": "26th Street/Bergamot",
            "symbolSize": 5,
            "x": -500,
            "y": 373,
            "category": 1
        },
        {
            "id": "50",
            "name": "17th Street/Santa Monica College",
            "symbolSize": 5,
            "x": -510,
            "y": 375,
            "category": 1
        },
        {
            "id": "51",
            "name": "Downtown Santa Monica",
            "symbolSize": 5,
            "x": -520,
            "y": 380,
            "category": 1
        },
        {
            "id": "52",
            "name": "Atlantic",
            "symbolSize": 5,
            "x": -200,
            "y": 370,
            "category": 0
        },
        {
            "id": "53",
            "name": "East LA Civic Center",
            "symbolSize": 5,
            "x": -222,
            "y": 370,
            "category": 0
        },
        {
            "id": "54",
            "name": "Maravilla",
            "symbolSize": 5,
            "x": -245,
            "y": 370,
            "category": 0
        },
        {
            "id": "55",
            "name": "Indiana",
            "symbolSize": 5,
            "x":-260,
            "y": 368,
            "category": 0
        },
        {
            "id": "56",
            "name": "Soto",
            "symbolSize": 5,
            "x": -270,
            "y": 357,
            "category": 0
        },
        {
            "id": "57",
            "name": "Mariachi Plaza",
            "symbolSize": 5,
            "x": -280,
            "y": 350,
            "category": 0
        },
        {
            "id": "58",
            "name": "Pico/Aliso",
            "symbolSize": 5,
            "x": -290,
            "y": 350,
            "category": 0
        },
        {
            "id": "59",
            "name": "Little Tokyo/Arts District",
            "symbolSize": 5,
            "x": -309,
            "y": 350,
            "category": 0
        },
        {
            "id": "60",
            "name": "Union Station",
            "symbolSize": 15,
            "x": -295,
            "y": 330,
            "category": 0,
            "value": "Purple, Red, Gold Lines",
            "itemStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        {offset: .55, color: '#800080'}, 
                        {offset: .15, color: '#ff0000' },
                        {offset: .85, color: '#d4af37' }
                    ],
                    global: false 
                }
            }   
        },
        {
            "id": "61",
            "name": "Chinatown",
            "symbolSize": 5,
            "x": -300,
            "y": 315,
            "category": 0
        },
        {
            "id": "62",
            "name": "Lincoln/Cypress",
            "symbolSize": 5,
            "x": -290,
            "y": 305,
            "category": 0
        },
        {
            "id": "63",
            "name": "Heritage Square",
            "symbolSize": 5,
            "x": -285,
            "y": 295,
            "category": 0
        },
        {
            "id": "64",
            "name": "Southwest Museum",
            "symbolSize": 5,
            "x": -270,
            "y": 275,
            "category": 0
        },
        {
            "id": "65",
            "name": "Highland Park",
            "symbolSize": 5,
            "x": -245,
            "y": 265,
            "category": 0
        },
        {
            "id": "66",
            "name": "South Pasadena",
            "symbolSize": 5,
            "x": -200,
            "y": 260,
            "category": 0
        },
        {
            "id": "67",
            "name": "Fillmore",
            "symbolSize": 5,
            "x": -190,
            "y": 240,
            "category": 0
        },
        {
            "id": "68",
            "name": "Del Mar",
            "symbolSize": 5,
            "x": -190,
            "y": 230,
            "category": 0
        },
        {
            "id": "69",
            "name": "Memorial Park",
            "symbolSize": 5,
            "x": -190,
            "y": 220,
            "category": 0
        },
        {
            "id": "70",
            "name": "Lake",
            "symbolSize": 5,
            "x": -180,
            "y": 210,
            "category": 0
        },
        {
            "id": "71",
            "name": "Allen",
            "symbolSize": 5,
            "x": -165,
            "y": 210,
            "category": 0
        },
        {
            "id": "72",
            "name": "Sierra Madre Villa",
            "symbolSize": 5,
            "x": -140,
            "y": 215,
            "category": 0
        },
        {
            "id": "73",
            "name": "Arcadia",
            "symbolSize": 5,
            "x": -120,
            "y": 220,
            "category": 0
        },
        {
            "id": "74",
            "name": "Monrovia",
            "symbolSize": 5,
            "x": -110,
            "y": 225,
            "category": 0
        },
        {
            "id": "75",
            "name": "Duarte/City of Hope",
            "symbolSize": 5,
            "x": -80,
            "y": 225,
            "category": 0
        },
        {
            "id": "76",
            "name": "Irwindale",
            "symbolSize": 5,
            "x": -60,
            "y": 230,
            "category": 0
        },
        {
            "id": "77",
            "name": "Azusa Downtown",
            "symbolSize": 5,
            "x": -35,
            "y": 225,
            "category": 0
        },
        {
            "id": "78",
            "name": "APU/Citrus College",
            "symbolSize": 5,
            "x": -1,
            "y": 225,
            "category": 0
        },
        {
            "id": "79",
            "name": "North Hollywood",
            "symbolSize": 5,
            "x": -490,
            "y": 170,
            "category": 2
        },
        {
            "id": "80",
            "name": "Universal City/Studio City",
            "symbolSize": 5,
            "x": -470,
            "y": 190,
            "category": 2
        },
        {
            "id": "81",
            "name": "Hollywood/Highland",
            "symbolSize": 5,
            "x": -460,
            "y": 220,
            "category": 2
        },
        {
            "id": "82",
            "name": "Hollywood/Vine",
            "symbolSize": 5,
            "x": -440,
            "y": 220,
            "category": 2
        },
        {
            "id": "83",
            "name": "Hollywood/Western",
            "symbolSize": 5,
            "x": -420,
            "y": 220,
            "category": 2
        },
        {
            "id": "84",
            "name": "Vermont/Sunset",
            "symbolSize": 5,
            "x": -380,
            "y": 230,
            "category": 2
        },
        {
            "id": "85",
            "name": "Vermont/Santa Monica",
            "symbolSize": 5,
            "x": -380,
            "y": 245,
            "category": 2
        },
        {
            "id": "86",
            "name": "Vermont/Beverly",
            "symbolSize": 5,
            "x": -380,
            "y": 260,
            "category": 2
        },
        {
            "id": "87",
            "name": "Wilshire/Vermont",
            "symbolSize": 10,
            "x": -380,
            "y": 275,
            "category": 2,
            "value": "Purple, Red Lines",
            "itemStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        { offset: .5, color: '#ff0000' },
                        { offset: .5, color: '#800080' }
                    ],
                    global: false 
                }
            }
        },
        {
            "id": "88",
            "name": "Westlake/MacArthur Park",
            "symbolSize": 10,
            "x": -380,
            "y": 300,
            "category": 2,
            "value": "Purple, Red Lines",
            "itemStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        { offset: .5, color: '#ff0000' },
                        { offset: .5, color: '#800080' }
                    ],
                    global: false 
                }
            }
        },
        {
            "id": "89",
            "name": "Pershing Square",
            "symbolSize": 10,
            "x": -325,
            "y": 330,
            "category": 2,
            "value": "Purple, Red Lines",
            "itemStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        { offset: .5, color: '#ff0000' },
                        { offset: .5, color: '#800080' }
                    ],
                    global: false 
                }
            }
        },
        {
            "id": "90",
            "name": "Civic Center/Grand Park",
            "symbolSize": 10,
            "x": -315,
            "y": 320,
            "category": 2,
            "value": "Purple, Red Lines",
            "itemStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        { offset: .5, color: '#ff0000' },
                        { offset: .5, color: '#800080' }
                    ],
                    global: false 
                }
            }
        },
        {
            "id": "91",
            "name": "Wilshire/Western",
            "symbolSize": 5,
            "x": -420,
            "y": 275,
            "category": 4
        },
        {
            "id": "92",
            "name": "Wilshire/Normandie",
            "symbolSize": 5,
            "x": -400,
            "y": 275,
            "category": 4
        },

    ],
/*

        {
            "id": "",
            "name": "",
            "symbolSize": 5,
            "x": ,
            "y": ,
            "category": 0
        },


    */ 
    "links": [
        {
            "source": "0",
            "target": "1"
        },
        {
            "source": "1",
            "target": "2"
        },
        {
            "source": "2",
            "target": "3"
        },
        {
            "source": "3",
            "target": "4"
        },
        {
            "source": "4",
            "target": "5"
        },
        {
            "source": "5",
            "target": "6",
            "lineStyle": {"curveness": -.2}
        },
        {
            "source": "6",
            "target": "7",
            "lineStyle": {"curveness": -.2}
        },
        {
            "source": "7",
            "target": "8"
        },
        {
            "source": "8",
            "target": "9"
        },
        {
            "source": "9",
            "target": "10"
        },
        {
            "source": "10",
            "target": "11"
        },
        {
            "source": "11",
            "target": "12",
            "lineStyle": {"curveness": -.2}
        },
        {
            "source": "12",
            "target": "13"
        },
        {
            "source": "14",
            "target": "15",
            "lineStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: .4, color: '#5ea0b5' 
                    }, {
                        offset: .5, color: 'blue' 
                    }],
                    global: false 
                }
            }
        },
        {
            "source": "15",
            "target": "16"
        },
        {
            "source": "16",
            "target": "17"
        },
        {
            "source": "17",
            "target": "18"
        },
        {
            "source": "18",
            "target": "19"
        },
        {
            "source": "19",
            "target": "20"
        },
        {
            "source": "20",
            "target": "21"
        },
        {
            "source": "21",
            "target": "22"
        },
        {
            "source": "22",
            "target": "23"
        },
        {
            "source": "23",
            "target": "10"
        },
        {
            "source": "24",
            "target": "10"
        },
        {
            "source": "24",
            "target": "25"
        },
        {
            "source": "25",
            "target": "26"
        },
        {
            "source": "26",
            "target": "27"
        },
        {
            "source": "27",
            "target": "28"
        },
        {
            "source": "28",
            "target": "29"
        },
        {
            "source": "29",
            "target": "30"
        },
        {
            "source": "30",
            "target": "31"
        },
        {
            "source": "31",
            "target": "32"
        },
        {
            "source": "32",
            "target": "33"
        },
        {
            "source": "33",
            "target": "34"
        },        
        {
            "source": "34",
            "target": "31"
        },
        {
            "source": "35",
            "target": "15"
        },
        {
            "source": "35",
            "target": "36"
        },
        {
            "source": "36",
            "target": "37",
            "lineStyle": {"curveness": .5}
        },
        {
            "source": "37",
            "target": "38"
        },
        {
            "source": "38",
            "target": "39"
        },
        {
            "source": "39",
            "target": "40"
        },
        {
            "source": "40",
            "target": "41"
        },
        {
            "source": "41",
            "target": "42"
        },
        {
            "source": "42",
            "target": "43"
        },
        {
            "source": "43",
            "target": "44"
        },
        {
            "source": "44",
            "target": "45"
        },
        {
            "source": "45",
            "target": "46",
            "lineStyle": {"curveness": -.5}
        },
        {
            "source": "46",
            "target": "47"
        },
        {
            "source": "47",
            "target": "48"
        },
        {
            "source": "48",
            "target": "49",
        },
        {
            "source": "49",
            "target": "50",
        },
        {
            "source": "50",
            "target": "51",
        },
        {
            "source": "52",
            "target": "53",
        },
        {
            "source": "53",
            "target": "54",
        },
        {
            "source": "54",
            "target": "55",
        },
        {
            "source": "55",
            "target": "56",
        },
        {
            "source": "56",
            "target": "57",
        },
        {
            "source": "57",
            "target": "58",
        },
        {
            "source": "58",
            "target": "59",
        },
        {
            "source": "59",
            "target": "60",
            "lineStyle": {"curveness": .3}
        },
        {
            "source": "60",
            "target": "61",
            "lineStyle": {"curveness": -.4}
        },
        {
            "source": "61",
            "target": "62",
            "lineStyle": {"curveness": .4}
        },
        {
            "source": "62",
            "target": "63",
        },
        {
            "source": "63",
            "target": "64",
            "lineStyle": {"curveness": .2}
        },
        {
            "source": "64",
            "target": "65",
            "lineStyle": {"curveness": .2}
        },
        {
            "source": "65",
            "target": "66",
            "lineStyle": {"curveness": -.3}
        },
        {
            "source": "66",
            "target": "67",
            "lineStyle": {"curveness": -.2}
        },
        {
            "source": "67",
            "target": "68",
        },
        {
            "source": "68",
            "target": "69",
        },
        {
            "source": "69",
            "target": "70",
            "lineStyle": {"curveness": .5}
        },
        {
            "source": "70",
            "target": "71",
        },
        {
            "source": "71",
            "target": "72",
            "lineStyle": {"curveness": .2}
        },
        {
            "source": "72",
            "target": "73",
            "lineStyle": {"curveness": .2}
        },
        {
            "source": "73",
            "target": "74",
            "lineStyle": {"curveness": -.2}
        },
        {
            "source": "74",
            "target": "75",
        },
        {
            "source": "75",
            "target": "76",
            "lineStyle": {"curveness": .2}
        },
        {
            "source": "76",
            "target": "77",
            "lineStyle": {"curveness": -.2}
        },
        {
            "source": "77",
            "target": "78",
        },
        {
            "source": "79",
            "target": "80",
        },
        {
            "source": "80",
            "target": "81",
        },
        {
            "source": "81",
            "target": "82",
        },
        {
            "source": "82",
            "target": "83",
        },
        {
            "source": "83",
            "target": "84",
            "lineStyle": {"curveness": .3}  
        },
        {
            "source": "84",
            "target": "85",
        },
        {
            "source": "85",
            "target": "86",
        },
        {
            "source": "86",
            "target": "87",
        },
        {
            "source": "87",
            "target": "88",
            "lineStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: .4, color: '#ff0000'
                    }, {
                        offset: .5, color: '#570357' 
                    }],
                    global: false 
                }
            }
        },
        {
            "source": "88",
            "target": "14",
            "lineStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: .4, color: '#ff0000'
                    }, {
                        offset: .5, color: '#570357' 
                    }],
                    global: false 
                }
            }
        },
        {
            "source": "14",
            "target": "89",
            "lineStyle": {
                "curveness": .5,
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: .3, color: '#ff0000'
                    }, {
                        offset: .3, color: '#570357' 
                    }],
                    global: false 
                }
            }
        },
        {
            "source": "89",
            "target": "90",
            "lineStyle": {
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: .4, color: '#ff0000'
                    }, {
                        offset: .5, color: '#570357' 
                    }],
                    global: false 
                }
            }
        },
        {
            "source": "90",
            "target": "60",
            "lineStyle": {
                "curveness": .5,
                "color": {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: .4, color: '#ff0000'
                    }, {
                        offset: .5, color: '#570357' 
                    }],
                    global: false 
                }
            }
        },
        {
            "source": "91",
            "target": "92",
        },
        {
            "source": "92",
            "target": "87",
            "lineStyle": {"curveness": .3}        
        }
    ],
    "trainLines": [
        {name: "Gold Line"},
        {name: "Expo Line"},
        {name: "Red Line"},
        {name: "Blue Line"},
        {name: "Purple Line"},
        {name: "Green Line"}
    ]
}  

export default trains ;