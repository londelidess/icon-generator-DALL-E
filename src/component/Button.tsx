import clsx from "clsx";
import { Spinner } from "./Spinner";

export function Button(
  props: React.ComponentPropsWithoutRef<"button"> & {
    variant?: "primary" | "secondary";
    isLoading?: boolean;
  }
) {
  const color =
    (props.variant ?? "primary") === "primary"
      ? "bg-green-400 hover:bg-green-500"
      : "bg-gray-400 hover:bg-gray-500";
      const { isLoading, ...rest } = props;
  return (
    <button
    {...rest}
      className={clsx(
        "flex items-center justify-center gap-2 rounded px-4 py-2 disabled:bg-gray-600",
        color
      )}
    >
      {props.isLoading && <Spinner />}
      {props.children}
    </button>
  );
}
