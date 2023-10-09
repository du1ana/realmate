import CommonLayout from "../Layouts/CommonLayout"
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import featuredData from '../../data/featured_profiles.json';

const FeaturedProfiles = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        setProfiles(featuredData);
    }, []);

    return (
        <CommonLayout>
            <div className="">
                <div className="text-center">
                    <p className="text-lg text-secondary font-semibold mt-2">Featured Profiles</p>
                    <p className="text-sm text-secondary mt-2">
                        Aenean at ligula massa. Donec ipsum elit, placenta sed duierrut
                        <br />
                        dapibus semper turpin Fusce nec premium nuns.
                    </p>
                </div>
                <Swiper
                    navigation={true}
                    slidesPerView={5}
                    spaceBetween={10}
                    modules={[Navigation]}
                    className="mySwiper w-3/4"
                >
                    {profiles.map((profile, index) => (
                        <SwiperSlide key={index} style={{width:'180px', borderRadius:'20px', alignContent:'center' }}>
                        <div className="rounded-lg shadow-lg w-min h-80">
                            <div className="avatarContainer" style={{height: '200px', width:'150px', alignContent:'center', margin:'8px' }}>
                                <img
                                    src={profile.avatarUrl}
                                    alt={profile.profileId}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-primary">Profile ID: {profile.profileId}</h2>
                            <p className="text-gray-600" style={{textOverflow:'ellipsis'}}>{profile.address}</p>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </CommonLayout>
    )
}

export default FeaturedProfiles