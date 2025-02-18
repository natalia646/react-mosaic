import { Company } from "../types/Company.type";

type Props = {
  company: Company;
};

export const CompanyDesc: React.FC<Props> = ({ company }) => {

  return (
    <article>
      <p><strong>ticker:</strong> {company.ticker}</p>
      <p><strong>Name:</strong> {company.name}</p>
      <p><strong>Legal name:</strong> {company.legal_name}</p>
      <p><strong>Stock exchange:</strong> {company.stock_exchange}</p>
      <p><strong>Short description:</strong> {company.short_description}</p>
      <p><strong>Long description:</strong> {company.long_description}</p>

      <p><strong>Business address:</strong> {company.business_address}</p>
      <p><strong>Business phone:</strong> {company.business_phone_no}</p>
    </article>
  );
};
