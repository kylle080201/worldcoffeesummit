import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="absolute bottom-0 w-full py-4 text-center bg-gray-200" >
                    ©2023
                    <a className="font-bold" rel="noopener noreferrer" href="https://worldcoffeealliance.com/" target={"_blank"}> World Coffee Alliance </a>
                    | All Rights Reserved
                </div>
            </footer>
        </>
    )
}