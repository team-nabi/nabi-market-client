const MaxWidthWrapper = ({ children }: { children: JSX.Element[] }) => {
  return <div className="max-w-[450px] mx-auto">{children}</div>
}

export default MaxWidthWrapper
