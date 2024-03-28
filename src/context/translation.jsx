
import React from 'react'
import useTranslation from "next-translate/useTranslation";



export default function Translation() {
    const { t } = useTranslation();

  return (
    <div>
      {t("common:locations")}

    </div>
  )
}
