import React from 'react'
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from './whydragontattoo.module.css'

export default function WhydragonTattoo() {
  return (
    <section className="img_text_banner_box">
        <div className="col_full">
            <div className="img_text_box_wrapper">
                <div className={"text_box_wrap right block_bg_gray_100 bg_drachen_tattoo"}>                    
                    <div className="img_text_box_inner container">
                        <div className="text_box_content justify_content_start align_item_center p_0 min_h_reset ml_0 mr_0">
                            <div className="text_box_content_inner max_w_100pc">
                                <div className="d_flex flex_direction_column mb_30">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">Warum ein Drachen-Tattoo?</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">Bist du auf der Suche nach dem idealen Design für dein Tattoo? Entdecke viele Tattoo-Ideen, um Ihren Tätowierer zu inspirieren und bei der Gestaltung zu helfen.</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_30">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">Die Vielfalt der Drachen Tattoo-Kunst</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">Die Welt der Drachen-Tattoos bietet eine beeindruckende Vielfalt an Stilen und Techniken. Von detaillierten asiatischen Drachen bis zu modernen Darstellungen gibt es viele Möglichkeiten, Drachen-Tattoos zu erkunden.</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_30">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">Einzigartige Drachen Tattoo-Motive</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">Jedes Drachen-Tattoo ist ein Unikat, gestaltet nach den Vorstellungen des Trägers und der Kreativität des Künstlers. Die einzigartigen Motive reichen von majestätisch fliegenden Drachen bis zu mythologischen Darstellungen, jede erzählt ihre eigene Geschichte.</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_0">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">Drachen Tattoos als Lebensweg</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">Ein Drachen-Tattoo kann mehr sein als nur ein Kunstwerk auf der Haut. Viele Menschen wählen Drachen-Tattoos als einen Weg, ihre persönlichen Reisen und Erfolge zu symbolisieren. Die kraftvollen Drachen können als Schutzgeister oder symbolische Begleiter dienen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div> 
            </div>
        </div>
    </section>
  )
}
