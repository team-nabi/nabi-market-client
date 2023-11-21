const MaxWidthWrapper = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element
}) => {
  return <div className="w-4/5 mx-auto">{children}</div>
}

export default MaxWidthWrapper
