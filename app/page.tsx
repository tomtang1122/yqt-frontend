import { EnterpriseCarousel } from "@components/enterpriseCarousel";
import { EnterpriseListResponse } from "@TS/enterprise";
import { post } from "@lib/fetch";

export default async function Home() {
  const { data: { data } = {} } = await post<EnterpriseListResponse>(
    "/enterprise/query",
    { pagination: { pageNumber: 1, showNumber: 10 } },
    {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJpbUFkbWluIiwiVXNlclR5cGUiOjIsIlBsYXRmb3JtSUQiOjAsImV4cCI6MTc1MDIxNjc3NiwibmJmIjoxNzQyNDQwNzE2LCJpYXQiOjE3NDI0NDA3NzZ9.IVlz5zHv-VYZtbKYpCrNvxe56ObYpaAnW9AIwoevDA0",
      },
    }
  );

  return (
    <div>
      {data?.enterprises && (
        <EnterpriseCarousel enterprises={data.enterprises} />
      )}
    </div>
  );
}
