

import Banner from '../components/Banner';
import ExtraSection from '../components/ExtraSection';
import Meet from '../components/Meet';
import PlantCare from '../components/PlantCare';
import PlantOfTheWeek from '../components/PlantOfTheWeek ';
import TopPlants from '../components/TopPlants';

const HomeLayouts = () => {
    return (
        <div>
           <Banner></Banner>
           <ExtraSection></ExtraSection>
           <TopPlants></TopPlants>
           <PlantOfTheWeek></PlantOfTheWeek>
           <PlantCare></PlantCare> 
           <Meet></Meet>
        </div>
    );
};

export default HomeLayouts;