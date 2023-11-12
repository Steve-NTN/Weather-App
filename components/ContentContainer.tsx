type Props = {
  children: string | JSX.Element | (string | JSX.Element)[];
  className: string | undefined;
};

const ContentContainer = (props: Props) => {
  let { className, children } = props;
  return (
    <div className={`max-w-screen-lg mx-auto flex-1 w-full ${className}`}>
      {children}
    </div>
  );
};

export default ContentContainer;
