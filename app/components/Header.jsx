import { TypeAnimation } from 'react-type-animation';
export default function Header(){
    return (
        <header className="lg:justify-none">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Gurusubramaniam
          </h1>
          <span
            className="mt-3 text-lg font-medium tracking-tight sm:text-xl text-transparent bg-clip-text bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500 animate-gradient bg-300%">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                'I am a Software Engineer',
                1000,
                'I am an Engineering Leader',
                1000,
              ]}
              speed={75}
              repeat={Infinity}
            />
          </span>
        </header>
    )
}