function TestLayout({ children }) {
  return (
    <div>
      <div>
        <h1 className="text-3xl">Test layout</h1>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default TestLayout;
