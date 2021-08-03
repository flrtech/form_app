import BarChart from "../BarChart";
import GetStats from "../GetStats";

const Statistics = () => {
  const [stats, isLoading] = GetStats();
  return (
    <div className="ui segment">
      <BarChart stats={stats} isLoading={isLoading} />
    </div>
  );
};

export default Statistics;
