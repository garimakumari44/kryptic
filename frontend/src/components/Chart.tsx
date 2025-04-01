import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function CryptoChart({ data }: {data: any[]}) {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
}
