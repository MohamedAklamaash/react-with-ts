import { ReactNode } from "react";

type PropType = {
  heading: string,
  count: number,
  children?: ReactNode,
  onchange?:(count:number)=>number
};
const Page = <T,>({
  heading,
  count,
  children,
}:
  | PropType
  | {
      heading: string;
      count: number;
      children?: T;
      onchange?: (count: number) => number;
    }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
      {children && <>{children}</>}
    </div>
  );
};

export default Page;
