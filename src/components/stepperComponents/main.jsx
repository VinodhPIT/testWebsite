import React from 'react'
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";

import Link from "next/link";

import {useNavigation} from "@/hooks/useRouter"
export default function Main() {

const {router} = useNavigation()

  return (
    <>  
        <div className="full_col_block min_h_100_vh">
            <div className="full_col_banner">
                <div className="banner_fixed_block">
                    <Image
                        priority
                        alt="pexels cottonbro studio"
                        src="/pexels-cottonbro-studio-4123767-1.png"
                        fill
                        objectFit="cover"
                        objectPosition="center"
                        blurDataURL={blurDataURL}
                        className="m_object_position_center"
                    />
                </div>
            </div>  

            <section className="request_landing_block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="request_back_arrow">
                                <Link  href={`${router.locale}/`}>
                                <Image
                                    priority
                                    alt="backArrow"
                                    src="/back_arrow_left_white.svg" 
                                    width="24" 
                                    height="24"
                                    blurDataURL={blurDataURL}
                                    className="m_object_position_center"
                                />
                                </Link>
                            </div>
                            <div class="request_stepper">
                                <div class="request_stepper_item">
                                    <div class="request_stepper_counter"></div>
                                    <div class="request_stepper_name">Tattoo size</div>
                                </div>
                                <div class="request_stepper_item">
                                    <div class="request_stepper_counter"></div>
                                    <div class="request_stepper_name">Body part</div>
                                </div>
                                <div class="request_stepper_item">
                                    <div class="request_stepper_counter"></div>
                                    <div class="request_stepper_name">Description</div>
                                </div>
                                <div class="request_stepper_item">
                                    <div class="request_stepper_counter"></div>
                                    <div class="request_stepper_name">Reference</div>
                                </div>
                                <div class="request_stepper_item">
                                    <div class="request_stepper_counter"></div>
                                    <div class="request_stepper_name">Artists</div>
                                </div>
                                <div class="request_stepper_item">
                                    <div class="request_stepper_counter"></div>
                                    <div class="request_stepper_name">Contact</div>
                                </div>
                            </div>
                            <div className="request_landing_caption">
                                <h1>
                                    <span>Describe your tattoo idea and share it with multiple artists.</span>
                                </h1>
                                <p>Get personalized quotes and choose the artist who perfectly captures your vision.</p>


                                <Link className="btn_default btn_cutom_40 mt_40 m_mt_0" href={`${router.locale}/requestForm`}>Start describing</Link>

                                
                            </div>
                            
                        </div>
                    </div>


                </div>
            </section>
            
        </div>

    </>
  )
}
