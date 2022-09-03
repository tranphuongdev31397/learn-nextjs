import { FeaturesWorks } from '@/components/home/FeaturesWorks';
import { HeroSection } from '@/components/home/HeroSection';
import { RecentPost } from '@/components/home/RecentPost';
import { MainLayout } from '@/components/layouts';
import { Box } from '@mui/system';
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {
	return (
		<Box component={'section'}>
			<HeroSection />
			<RecentPost />
			<FeaturesWorks />
		</Box>
	);
};
Home.Layout = MainLayout;

export default Home;
