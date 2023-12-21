const FrontOfCard = ({ font, frontText, uploadImage, front_background_color }) => {
    return (

        <div className="content front-card" style={{
            backgroundColor: front_background_color,
            fontFamily: font
        }}>
            {`Front text goes here: ${font} ${front_background_color}`}
            <div className="flex flex-wrap">{frontText}</div>
        </div>
    )
}


export default FrontOfCard