import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";

import Terminal from "@/windows/Terminal";

const Page = () => {
  return (
    <>
      <Welcome />
      <Dock />

      <Terminal />
    </>
  );
};

export default Page;
