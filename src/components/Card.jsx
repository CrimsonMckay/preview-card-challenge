import className from "classnames";

function Card({ children, yellow, blue, teal }) {
  const classes = className(
    "w-1/3 h-full flex flex-col px-5 text-white justify-around p-49px p-35px ",
    {
      "bg-summer-yellow ": yellow,
      "bg-regal-blue": blue,
      "bg-dull-teal": teal,
    }
  );
  return <div className={classes}>{children}</div>;
}

export default Card;
