import React from 'react'
const Logo = ({ imgpath }) => {
    return (
        <>
            <div className="logo py-2 d-md-flex align-items-center d-xl-block">
                <div className="logo-img d-flex">
                    <img src={imgpath} alt="" className='w-100 mx-xl-4' />
                </div>
                <h6 className='mt-2 ms-2 d-xl-block d-lg-none d-block text-center'>MR.UMANG LAKKAD</h6>
            </div>
        </>
    )
}

export default Logo
