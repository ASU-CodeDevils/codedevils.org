import { NextPage } from "next";

import { useRouter } from "next/router";
const HelpPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      This is the help page!
      {id && <p>You are looking for help with the topic: {id}</p>}
    </div>
  );
};

export default HelpPage;
