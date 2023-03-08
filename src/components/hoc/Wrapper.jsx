export default function Wrapper(WrappedComponent, className) {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
}
