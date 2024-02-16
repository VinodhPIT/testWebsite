import React from "react";
import useTranslation from "next-translate/useTranslation";


export default function ArtistsByCountryTable({ data }) {
  const { t } = useTranslation();

  const ArtistTable = () => {
    if (!data) {
      return <div>Loading...</div>;
    }

    const countryCounts = data.reduce((acc, currentIndex) => {
      const country = currentIndex.country || "Unknown";
      if (currentIndex.country !== null) {
        acc[country] = (acc[country] || 0) + 1;
      }

      return acc;
    }, {});

    const tableRows = Object.entries(countryCounts).map(([country, count]) => (
      <tr key={country}>
        <td>{country}</td>
        <td>{count}</td>
      </tr>
    ));

    return (
      <div>
        <div className="db_card block_bg_white">
          <div className="db_card_body pl_0 pr_0">
            <div className="d_flex justify_space_between align_item_center mb_18 pl_20 pr_20 position_relative">
              <div>
                <h3>{t("common:AnalyticsArtist.Artists by Country")}</h3>

              </div>
            </div>
            <div className="d_flex justify_content_start align_item_center pb_12">
              <div className="db_table_block db_table_country">
                <div className="table-responsive">
                  <table className="table table-striped table-nowrap table-centered mb-0">
                    <thead>
                      <tr>
                        <th className="main_head_title">{t("common:AnalyticsArtist.Country")}</th>
                        <th className="main_head_title">{t("common:AnalyticsArtist.Number of artists")}</th>
                      </tr>
                    </thead>

                    <tbody>{tableRows}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <ArtistTable />
    </>
  );
}
