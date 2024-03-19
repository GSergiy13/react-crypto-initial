import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useCrypto } from '../../context/crypto-context';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChart() {
  const { assets } = useCrypto();


  const data = {
    labels: assets.map(e => e.name),
    datasets: [
      {
        label: '# of Votes',
        data: assets.map(e => e.totalAmount),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };

  return <div style={{height: '500px', display: 'flex', marginTop:'3rem', justifyContent: 'center', alignItems: 'center'}}><Pie data={data} /></div>
}