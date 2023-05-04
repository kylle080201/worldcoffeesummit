import Image from 'next/image'
import React from 'react'

const GlobalNetwork = () => {
    return (
        <>
            <div className="flex flex-col py-16 mx-auto bg-gray-100 mlg:flex-col lg:px-6 md:px-4 sm:px-2">
                <div className="py-4 mx-auto md:px-12">
                    <div className="h-full p-12 bg-white border-none rounded-lg shadow-md mmd:text-center">
                        <h2 className="mb-6 font-bold text-center text-gray-900 sm:text-2xl lg:text-5xl">
                            OUR <span className='text-lime-700'>GLOBAL</span> NETWORK
                        </h2>
                        <div className='grid items-center h-full gap-8 justify-items-center lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2'>
                            <div >
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2020/12/LOGO-CE_Vertical_EN_quadri_HR.png' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2020/08/ICO-Logo-Black-Clear-Background-copy-2.png' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/05/ITC-logo.png' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/01/WBG-logo-780x439-1.jpg' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/01/IFC-CMCO_Horizontal_RGB_TransparentBG-high.png' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/04/CHINA-COFFEE-ASSOCIATION_2019-11-30-223815_Transparent.png' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/05/lavazza-logo.jpg' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/05/harambee.png' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2020/08/IWCA-Promoting-Possibilities_Logo_Registered108.png' className=' h-60' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/04/MSCA_Transparent.png' className='h-60' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/01/Logo_IACO.png' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2020/08/FBM_INT_VERT_RGB_POS.png' className='h-44' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2020/08/logo_forest_RGB.png' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2022/09/BCA_PrimaryLogo_Large-scaled.jpg' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/01/Fedecafe.png' className='h-48' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/05/gsma-logo.png' alt=''></Image>
                            </div>
                            <div>
                                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/01/logo_bsca.jpg' alt=''></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GlobalNetwork