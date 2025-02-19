/* eslint-disable @typescript-eslint/no-unused-vars */
import { Company } from "../types/Company.type";

type Props = {
  company: Company;
};

export const CompanyDesc: React.FC<Props> = ({ company }) => {
  const { id, ...companyDescription } = company;

  const fields = Object.entries(companyDescription);

  return (
    <section>
      {fields.map((field) => {
        const [key, value] = field;

        const normalizeKey =
          key.slice(0, 1).toUpperCase() + key.slice(1).split("_").join(" ");

        return (
          <p>
            <strong>{normalizeKey}:</strong> {value}
          </p>
        );
      })}
    </section>
  );
};
