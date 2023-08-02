type Props = {
  center?: boolean;
  className?: string;
};

const Loading = (props: Props) => {
  let { center = false, className } = props;
  return (
    <span
      className={`${
        center ? "h-screen fixed" : ""
      } w-full flex justify-center items-center ${className}`}
    >
      <span className="animate-spin relative flex h-10 w-10 rounded-sm bg-purple-400 opacity-75"></span>
    </span>
  );
};

export default Loading;
