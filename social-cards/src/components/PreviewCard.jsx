const PreviewCard = ({ font, frontText, backText, uploadImage, backgroundColor, }) => {


    const styles = {
        backgroundColor: `${backgroundColor}`,
        fontFamily: `${font}, "sans-seriff"`
    }
    return (
        <div className={`${backgroundColor} previewDisplay mb-4`} style={styles}>
            {`Here's your preview:
                    ${font}
                    ${backgroundColor}`}
            <div className='frontTextDisplay' >front text: {`${frontText}`}</div>
            <div className='backTextDisplay'>back text: {`${backText}`}</div>
        </div >
    )
}

export default PreviewCard;