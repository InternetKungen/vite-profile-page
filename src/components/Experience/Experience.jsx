import './Experience.css';
import { useSelector } from 'react-redux';

function Experience ({ title, city, description, dateFrom, dateTo, info }) {
    const theme = useSelector((state) => state.theme);

    return (
        <div className={`experience-container ${theme}`}>
            <div className="experience-inner-container">
                <div className="experience-container__top">
                    {title}, {city} - {description}
                </div>
                <div className="experience-container__middle">
                    {dateFrom} - {dateTo}
                </div>
                <div className="experience-container__bottom">
                    {info}
                </div>
            </div>
        </div>
    )
}

export default Experience;