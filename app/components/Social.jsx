import { LuLinkedin, LuGithub, LuPhone, LuMail } from 'react-icons/lu';

export default function Social() {
return (
    <footer className="m-8">
          <LuLinkedin
            size={32}
            className="inline-flex mr-4 cursor-pointer"
            onClick={() => {
              window.open('https://www.linkedin.com/in/gurusubramaniams');
            }}
          />
          <LuGithub
            size={32}
            className="inline-flex mr-4 cursor-pointer"
            onClick={() => {
              window.open('https://www.github.com/gurusubramaniams');
            }}
          />
          <LuPhone
            size={32}
            className="inline-flex mr-4 cursor-pointer"
            onClick={() => {
              window.open('tel:+14088135156');
            }}
          />
          <LuMail
            size={32}
            className="inline-flex mr-4 cursor-pointer"
            onClick={() => {
              window.open('mailto:gurusubramaniams@gmail.com');
            }}
          />
        </footer>
)
}
