//Use the D3 library to read in samples.json.
//Use a function to import data and create plots.
function CreateCharts (id) {
        //Import the data from the json file.
        d3.json("data/samples.json").then((data)=> {
            console.log(data)

            //Get the washing frequency.
            //var washfreq = data.metadata.map(d => d.washfreq)
            //console.log(`Washing Freq: ${washfreq}`)

            //Create the filter to filter the data.
            var samples = data.samples.filter(s => s.id.toString() === id)[0];
            console.log(samples);

            //Slice to get the top ten and reverse.
            var SampleValues = samples.sample_values.slice(0, 10).reverse();
            var idValues = (samples.otu_ids.slice(0, 10)).reverse();
            var idOtu = idValues.map(d => "OTU " + d)
            console.log(`OTU IDS: ${idOtu}`)
            var labels = samples.otu_labels.slice(0, 10);
            console.log('-----------------------------------------')
            console.log(`Sample Values: ${SampleValues}`)
            console.log('-----------------------------------------')
            console.log(`Id's: ${idValues}`)

            //CReate the Bar Plot.
            //Create trace for the plot.
            var tracebar = {
            x: SampleValues,
            y: idOtu,
            text: labels,
            type:"bar",
            orientation: "h",
            };

            //Create varaiiable for Data.
            var databar = [tracebar];

            //Create layout.
            var layoutbar = {
                title: "Top 10 OTU",
                yaxis:{
                    tickmode:"linear",
                },
                margin: {
                    l: 100,
                    r: 100,
                    t: 30,
                    b: 20
                }
            };

            //Create the bar chart.
            Plotly.newPlot("bar", databar, layoutbar);

        
            //Create the trace for the bubble chart.
            var tracebubble = {
            x: samples.otu_ids,
            y: samples.sample_values,
            mode: "markers",
            marker: {
                size: samples.sample_values,
                color: samples.otu_ids
            },
            text: samples.otu_labels

            };

            //Create the layout for the bubble chart.
            var layoutbubble = {
            xaxis:{title: "OTU ID"},
            height: 600,
            width: 1300
            };

            //Create variable for Data.
            var databubble = [tracebubble];

            //Create teh bubble chart.
            Plotly.newPlot("bubble", databubble, layoutbubble);

        });    
}



//Use a function to import data and generate Info.
function GetDemoInfo(id) {
        //Import the data from the json file.
    d3.json("data/samples.json").then((data)=> {
        
        //Get Demographic Info
        var metadata = data.metadata;

        console.log(metadata)

        //Filter by ID
        var result = metadata.filter(meta => meta.id.toString() === id)[0];

        //Select the demographic info table
        var DemoInfo = d3.select("#sample-metadata");
        
        //Reset the demographic info table
        DemoInfo.html("");

        //Push the data onto the table
        Object.entries(result).forEach((key) => {   
                DemoInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
        });
    });
}

//Create the change event
function SelectionChanged(id) {
    CreateCharts(id);
    GetDemoInfo(id);
}

function init() {
    //Select dropdown
    var dropdown = d3.select("#selDataset");

    //Read the data
    d3.json("data/samples.json").then((data)=> {
        console.log(data)

        //Fill the dropdown menu with IDs
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });


        
        //Call the fuction to make the change and update the info on page
        CreateCharts(data.names[0]);
        GetDemoInfo(data.names[0]);
    });
}

init();