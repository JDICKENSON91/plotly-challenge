# Plotly Homework - Belly Button Biodiversity

For this assignment i was tasked with building an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonise human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Use the D3 library to read in the sample file.

1. I used the 'd3.json' to import the "samples.json" file.

![Importing JSON file](https://github.com/JDICKENSON91/plotly-challenge/blob/master/Images/1%20-%20Import.PNG?raw=true)

## Step 2: Creating The Bar Chart.
### Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

1. I created a Filter to filter the data based on the SelectionChange function. 
2. Then I used the slicing code to get the top 10 OTU's.
3. I used the reverse function to get them in the right order.
4. I did this for both the Samples Values and OTU ID's.

![Filtering Data](https://github.com/JDICKENSON91/plotly-challenge/blob/master/Images/2%20-%20Filter.PNG?raw=true)

5. I created the trace for the plot and assign the Sample value to the X variable and OTU ID codes to the Y variable.
6. I assigned that trace to a variable "databar".
7. I coded the layout and assigned it to a variable "layoutbar".
8. I used Plotly to assign my variables "databar" and "layoutbar" to create my bar plot.

![Creating Bar Plot](https://github.com/JDICKENSON91/plotly-challenge/blob/master/Images/3%20-%20Create%20Bar%20Chart.PNG?raw=true)

## Step 3: Creating The Bubble Chart.
### Create a bubble chart that displays each sample.

1. I used the same variables to get the correct filters as the above.
2. I created the trace for the bubble plot and assign the Sample value to the X variable and OTU ID codes to the Y variable.
3. I assigned that trace to a variable "databubble".
4. I coded the layout and assigned it to a variable "layoutbubble".
5. I used Plotly to assign my variables "databubble" and "layoutbubble" to create my bubble plot.

![Creating Bar Plot](https://github.com/JDICKENSON91/plotly-challenge/blob/master/Images/4%20-%20Create%20Bubble%20Chart.PNG?raw=true)

## Step 4: Creating The Chart Function.

I wrapped the above code as a function to be called when the selection is changed.

![Charting Function](https://github.com/JDICKENSON91/plotly-challenge/blob/master/Images/5%20-%20Chart%20function.PNG?raw=true)

## Step 5: Creating The Demographic Information Table.

1. I imported the data from the JSON File again.
2. I assigned the Demographic metadata to a variable.
3. I set the filter to filter on the ID Selected byu the SelectionChange function.
4. The DemoInfo Panel will empty / reset itself upon each change.
5. The DemoInfo Panel will then append based on the filter ID and pull in the Key pairs from the MetaData.
6. This was all wrapped up in a GetDemoInfo Function based on the ID in the selection.

![Demo Info](https://github.com/JDICKENSON91/plotly-challenge/blob/master/Images/6%20-%20Demographic%20Info.PNG?raw=true)

## Step 6: Pulling it all together with a Change Event.

Now that all my functions were created I can task them to my change event. When the SelectionChanged function is updated the CreateCharts and GetDemoInfo will update with the selected ID.

![Change Event](https://github.com/JDICKENSON91/plotly-challenge/blob/master/Images/7%20-%20Change%20Event.PNG?raw=true)

## Step 7: Create Initiate Function.

I created my Init Function for mydrop down on the HTML page.

![init Function](https://github.com/JDICKENSON91/plotly-challenge/blob/master/Images/8%20-%20Init%20Function.PNG?raw=true)

## Step 8: Deployment.

This was deployed to Git Pages and displayed at https://jdickenson91.github.io/plotly-challenge/

![init Function](https://github.com/JDICKENSON91/plotly-challenge/blob/master/Images/webpage.PNG?raw=true)