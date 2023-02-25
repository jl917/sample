const root = createRoot(document.getElementById("root") as HTMLElement);

startTransition(() => {
  root.render(<AntButton type="primary">123</AntButton>)
})

export {};
