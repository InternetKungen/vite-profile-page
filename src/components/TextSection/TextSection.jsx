import './TextSection.css';

function TextSection ({introduction, textPart1, textPart2, textPart3, textPart4}) {

    return (
        <div className="text-section-container">
            <section className="text-section-container-inner">
            <p>
                <span className="text-section-container__intoduction">
                    {introduction}
                </span>
                <span className="text-section-container__text">
                    {textPart1}
                </span>
                <span className="text-section-container__text">
                    {textPart2}
                </span>
                <span className="text-section-container__text">
                    {textPart3}
                </span>
                <span className="text-section-container__text">
                    {textPart4}
                </span>
            </p>
            </section>
        </div>
    );
}

export default TextSection;