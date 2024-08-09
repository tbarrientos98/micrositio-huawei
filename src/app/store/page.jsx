import React from 'react'
import BannerStore from '../../components/shared/Banner/BannerStore'

const page = () => {
    return (
        <div>
            <BannerStore
                imageUrl="/banners/banner-store.jpg"
                leftTitle="HUAWEI IdeaHub B2 New Style Smart Office"
                leftSubtitle="HD cloud meeting | Intelligent Whiteboard | Enterpise-class security"
                leftButtonText="View now"
            />
        </div>
    )
}

export default page