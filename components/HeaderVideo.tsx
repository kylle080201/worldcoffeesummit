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
                        src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/Save-the-date-Revised-2.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

        </>
    )
}

export default HeaderVideo