export function FormGroup(props: Props & React.ComponentPropsWithoutRef<"div">) {
    return (
      <div {...props} className="flex flex-col gap-1">{props.children}</div>
    );
  }
