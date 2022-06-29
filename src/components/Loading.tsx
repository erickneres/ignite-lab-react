import { CircleNotch } from "phosphor-react";

interface LoadingProps {
  size: number,
}

export function Loading(props: LoadingProps) {
  return (
    <div className="flex items-center justify-center">
      <CircleNotch size={props.size} weight="bold" className="text-blue-500 animate-spin" />
    </div>
  )
}