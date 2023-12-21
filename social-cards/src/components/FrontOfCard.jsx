const FrontOfCard = ({ font, frontText, uploadImage, front_background_color }) => {
    return (
        // <div className="frontCardPreview" style={{
        //     backgroundColor: backgroundColor,
        //     fontFamily: font
        // }
        // }>
        //     {`Front text goes here:
        // ${font}
        // ${backgroundColor}`}
        //     <div className='frontTextDisplay'>{`${frontText}`}</div>
        // </div>

        <div className="content front-card" style={{
            backgroundColor: front_background_color,
            fontFamily: font
        }}>
            {`Front text goes here: ${font} ${front_background_color}`}
            <div>{frontText}</div>
        </div>
    )
}


export default FrontOfCard