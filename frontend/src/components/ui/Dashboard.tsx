import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Input } from "./Input";
import { ListButton } from "./listbutton";
import { Search } from "lucide-react";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("Bitcoin");
  const [cryptoData, setCryptoData] = useState([]);
  


  

  useEffect(() => {
    fetchCryptoData(searchTerm);
  }, [searchTerm]);

  const fetchCryptoData = async (crypto:string) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=7
`);
      const data = await response.json();
      setCryptoData(data.prices.map(([timestamp, price]: [string, string]) => ({ time: new Date(timestamp).toLocaleDateString(), price })));
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  };

  return (
    <div className="p-40 w-full flex justify-center flex-col space-y-5 bg-primary">
      <div className="top-0 left-0 w-full h-20 border-red-100">
        {

        }

      </div>
      <h1 className="text-2xl font-bold mb-4">AI-Driven Crypto Market Search</h1>
      <div className="flex gap-2 mb-4">
        <Input placeholder="Search cryptocurrency..." value={searchTerm} onChange={(e: any) => setSearchTerm(e.target.value.toLowerCase())} />
        <ListButton color="black" size="md"  onClick={() => fetchCryptoData(searchTerm)}><Search size={18} /></ListButton>
      </div>
     <div> 
        <div className="p-4">
          <h2 className="text-lg font-semibold  font-lora mb-2 p-2">{searchTerm.toUpperCase()} Market Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={cryptoData}>
              <XAxis dataKey="time" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;
