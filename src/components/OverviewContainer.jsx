import data from '../../data/data.json'
import { OverviewCarts, OverviewTodayCarts } from './overviewCarts';

const convertNumberToK =(number) =>{
    if(number >= 10000){
        number = number / 1000;
        return number + 'K';
    }
    else{
        return number;
    }
}

export const OverviewContainer=() => {

    
    return (
        <section className='absolute max-w-[1600px] place-content-center gap-[30px] flex flex-wrap top-[191px] left-0 right-0 mx-auto '>
            {
                data.overview.map(object => 
                    <OverviewCarts 
                    key={object.id}
                    user={object.user}
                    audienceType={object.audienceType}
                    audience={convertNumberToK(object.audience)}
                    network={object.network}
                    isUp={object.isUp}
                    today={object.today}
                    />
                )
            }

        </section>
    );
}
export const OverviewTodayContainer = () => {
    return (
        <section className='max-w-[1600px] flex flex-col items-center mx-auto'>
            <h2 className='text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8'>Overview Today</h2>
        <div className='flex flex-wrap gap-[30px] mx-auto items-center justify-center'>
            {data['overview-today'].map((object) => (
                <OverviewTodayCarts
                    key={object.id}
                    network={object.network} // Asegúrate de que 'network' esté pasando correctamente
                    statsType={object.statsType} // Asegúrate de que 'statsType' esté pasando correctamente
                    stats={convertNumberToK(object.stats)} // Asegúrate de que 'stats' esté pasando correctamente
                    porcentage={object.porcentage} // Asegúrate de que 'porcentage' esté pasando correctamente
                    isUp={object.isUp} // Asegúrate de que 'isUp' esté pasando correctamente
                />
            ))}
        </div>
        </section>
    );
};
