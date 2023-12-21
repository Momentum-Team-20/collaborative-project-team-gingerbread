const BackOfCard = ({ font, backText, uploadImage, back_background_color }) => {

    return (


        <div className="content back-card" style={{
            backgroundColor: back_background_color,
            fontFamily: font,
        }}>
            {`Back text goes here: ${font} ${back_background_color}`}
            <div>{backText}</div>
        </div>
    )
}

export default BackOfCard