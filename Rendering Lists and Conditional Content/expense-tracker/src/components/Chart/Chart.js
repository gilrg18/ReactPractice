import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    //return a new array with only the values of every dataPoint
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //We use the spread operator ... to pull out the values of the array instead of passing the array
    //which doesnt work for Math.max()
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
