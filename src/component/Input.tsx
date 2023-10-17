export function Input(props: Props & React.ComponentPropsWithoutRef<"input">) {
  return (
    <input {...props} className="border border-gray-800 dark:text-grey-800 px-4 py-2" type="text"></input>
  );
}
