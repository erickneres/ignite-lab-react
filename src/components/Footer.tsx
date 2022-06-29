import { RocketLogo } from "./RocketLogo";

export function Footer() {
  return (
    <footer className="px-6 w-full bg-gray-900">
      <div className="border-t max-w-[1392px] mx-auto border-gray-500 py-6 flex items-center justify-between ">
        <div className="flex items-center gap-6">
          <RocketLogo />
          <span className="text-gray-300">Rocketseat - Todos os direitos reservados</span>
        </div>

        <span className="text-gray-300">Políticas de privacidade</span>
      </div>
    </footer>
  )
}