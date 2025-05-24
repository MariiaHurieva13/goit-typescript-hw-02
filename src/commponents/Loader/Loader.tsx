import { BarLoader } from "react-spinners";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "32px auto",
  color: "red",
  borderColor: "lightblue",
};

const Loader = () => {
  return <BarLoader width={320} height={12} cssOverride={override} />;
};

export default Loader;