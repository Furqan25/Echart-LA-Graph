import './App.css';
import * as echarts from 'echarts/core';
import ReactEcharts from "echarts-for-react"; 
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { GraphChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import trains from "./info.js";

const option = {
    tooltip: {},
    backgroundColor: {
        type: 'radial',
        x: 0.3,
        y: 0.3,
        r: 0.8,
        colorStops: [
            {
              offset: 0,
              color: '#f7f8fa'
            },
            {
              offset: 1,
              color: '#cdd0d5'
            }
          ]
    },
    legend:[
        {
            data: trains.trainLines.map ((a)=>{
                return a.name;
            })
        }
    ],
    color: ["#d4af37", "#5ea0b5", "#ff0000", "#0000FF", "#800080", "#00FF00" ],
    series: [{
        type: 'graph',
        layout: 'none',
        data: trains.nodes,
        links: trains.links,
        categories: trains.trainLines,
        roam: true,
        label: {
            show: true,
            position: 'right',
            fontWeight: 'light',
            align: 'center',
            verticalAlign: 'top',
            padding: 15,
            formatter: '{b}' //{a}: series name, {b}: the name of a data item, {c}: the value of a data item.
        },
        labelLayout: {
            hideOverlap: true
          },
          scaleLimit: {
            min: 0.2,
            max: 6
          },
          lineStyle: {
            color: 'source',
            width: 2
          }
    }]
};

echarts.use(
    [TooltipComponent, LegendComponent, LabelLayout, GraphChart, CanvasRenderer]
);

export default function App() {
    return (
        <div className='graph'>
            <ReactEcharts option={option} style={{height: '600px', width:'100%'}}/>
        </div>
    );
};