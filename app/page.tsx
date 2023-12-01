import axios from 'axios';
import AppCard from './components/AppCard';

const fetchCampagins = async () => {
  const res = await axios.get('https://www.plugco.in/public/take_home_sample_feed');

  return res.data.campaigns;
};

export default async function Home() {
  const categories = await fetchCampagins();

  return (
    <main className="flex flex-col">
      {categories.map((category: any) => (
        <AppCard key={category.id} category={category} />
      ))}
    </main>
  );
}
