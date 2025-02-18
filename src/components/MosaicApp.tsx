import { Mosaic, MosaicWindow } from "react-mosaic-component";
import companiesfromJSON from "../api/companies-lookup.json";

import { WindowIds } from "../types/WindowIds.type";
import { CompanyDesc } from "./CompanyDesc";
import { useEffect, useState } from "react";
import axios from "axios";
import { Company } from "../types/Company.type";

export const MosaicApp = () => {
  const [companies, setCompanies] = useState<Company[]>(companiesfromJSON);

  const [selectCompanyId, setSelectCompanyId] = useState({
    a: companies[0].id,
    b: companies[0].id,
    c: companies[0].id,
  });

  useEffect(() => {
    axios
      .get(
        "https://67b48a8b392f4aa94fab4ec7.mockapi.io/api/companies/companies"
      )
      .then((res) => {
        console.log(res.data);
        setCompanies(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSelectedCompany = (windowId: WindowIds, companyId: string) => {
    setSelectCompanyId((prev) => ({
      ...prev,
      [windowId]: companyId,
    }));
  };

  return (
    <Mosaic
      renderTile={(id, path) => (
        <MosaicWindow
          path={path}
          additionalControls={
            <select onChange={(e) => handleSelectedCompany(id, e.target.value)}>
              {companies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          }
          title={"Company info"}>
          <CompanyDesc
            company={
              companies.find((com) => com.id === selectCompanyId[id]) ||
              companies[0]
            }
          />
        </MosaicWindow>
      )}
      initialValue={{
        direction: "row",
        first: "a",
        second: {
          direction: "column",
          first: "b",
          second: "c",
        },
      }}
    />
  );
};
