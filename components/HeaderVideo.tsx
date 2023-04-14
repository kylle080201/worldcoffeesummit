import React from 'react'

const HeaderVideo = () => {
    return (
        <>
            <div className="top-auto bottom-auto flex-col w-full h-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-auto h-auto min-w-full min-h-full "
                >
                    <source
                        src="https://worldcoffeealliance.com/wp-content/uploads/2023/04/Save-the-date_13-September-2023_Final.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

        </>
    )
}

export default HeaderVideo